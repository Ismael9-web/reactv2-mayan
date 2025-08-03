import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import axios from 'axios';
import cookieParser from 'cookie-parser';
import { DocumentsApi } from './src/api/mayan-edms/apis/DocumentsApi';
import * as runtime from './src/api/mayan-edms/runtime';
import multer from 'multer';
import { S3Service } from './src/services/s3Service';
import { Pool } from 'pg';
import dotenv from 'dotenv';

const app = express();
const port = 5000;
dotenv.config();

// Route to provide sidebar menu structure for the frontend
app.get('/api/sidebar_menu', async (req, res) => {
    // Example: You can fetch this dynamically from Mayan or your own logic
    // For now, return a static menu structure
    res.json([
        {
            label: 'Dashboard',
            path: '/dash07',
            icon: null // You can add icon names or SVGs if you want
        },
        {
            label: 'Documents',
            path: '/documents',
            icon: null,
            children: [
                { label: 'Approved', path: '/documents/approved', icon: null },
                { label: 'Pending', path: '/documents/pending', icon: null }
            ]
        },
        {
            label: 'Settings',
            path: '/settings',
            icon: null
        }
    ]);
});

// Middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use((req, res, next) => {
    const csrfToken = req.cookies.csrftoken;
    const sessionId = req.cookies.sessionid;
    const authToken = req.cookies.authToken;

    if (csrfToken && sessionId && authToken) {
        req.headers['X-CSRFTOKEN'] = csrfToken;
        req.headers['Cookie'] = `sessionid=${sessionId}`;
        req.headers['Authorization'] = `Bearer ${authToken}`;
    }

    next();
});

// Helper function to fetch token
async function getAuthToken() {
    try {
        const response = await axios.post('http://localhost/api/v4/auth/token/obtain/', {
            username: process.env.MAYAN_USERNAME,
            password: process.env.MAYAN_PASSWORD,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Referer': 'http://localhost:5173',
            },
            withCredentials: true
        });
        console.log('Auth token fetched successfully:', response.data.token); // Debugging log
        return response.data.token;
    } catch (error: any) {
        console.error('Error fetching auth token:', error.response ? error.response.data : error.message);
        if (error.response) {
            console.error('Response status:', error.response.status);
            console.error('Response data:', error.response.data);
        }
        throw new Error('Failed to fetch auth token');
    }
}
//check the environment variables
console.log(process.env);
// S3 Configuration
const s3Config = {
  endpoint: process.env.MINIO_ENDPOINT || 'http://localhost:9000',
  accessKeyId: process.env.MINIO_ACCESS_KEY || 'minioadmin',
  secretAccessKey: process.env.MINIO_SECRET_KEY || 'minioadmin123',
  region: process.env.MINIO_REGION || 'Opposition-tresor',
  bucket: process.env.MINIO_BUCKET || 'paiement', // Use 'paiement' bucket for R/W access
};

const s3Service = new S3Service(s3Config);

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
});



// S3 Routes
// --- MAYAN EDMS DOCUMENT UPLOAD & METADATA ENDPOINTS (AXIOS-BASED) ---
// Upload a document to Mayan EDMS (document_type: paiement)
app.post('/api/mayan/documents', upload.single('file'), async (req, res) => {
  try {
    console.log('--- /api/mayan/documents called ---');
    console.log('Request headers:', req.headers);
    console.log('Request cookies:', req.cookies);
    console.log('Raw Content-Type:', req.headers['content-type']);
    // Check if request is multipart/form-data
    if (req.headers['content-type'] && req.headers['content-type'].includes('multipart/form-data')) {
      console.log('Content-Type is multipart/form-data');
    } else {
      console.log('Content-Type is NOT multipart/form-data');
    }
    // Log req.body and req.file before multer processes
    console.log('Request body (pre-multer):', req.body);
    console.log('Received file (pre-multer):', req.file);
    if (!req.file) {
      console.log('No file provided in request.');
      return res.status(400).json({ error: 'No file provided' });
    }

    // Log form fields if any (for debugging formData)
    if (req.body) {
      Object.keys(req.body).forEach(key => {
        console.log(`Form field: ${key} =`, req.body[key]);
      });
    }

    // Get cookies and CSRF token from request
    const sessionid = req.cookies.sessionid;
    const csrftoken = req.cookies.csrftoken;
    console.log('sessionid:', sessionid);
    console.log('csrftoken:', csrftoken);

    // Prepare form-data for Mayan
    const form = new (require('form-data'))();
    form.append('document_type_id', 3); // Always use 3 for paiement
    form.append('file', req.file.buffer, req.file.originalname);
    if (req.body.description) {
      form.append('description', req.body.description);
    }

    // Log form-data fields before sending to Mayan
    console.log('FormData to send to Mayan:');
    for (const key of Object.keys(form)) {
      console.log(`  ${key}:`, form[key]);
    }

    // Send to Mayan with correct headers
    const uploadRes = await axios.post('http://localhost/api/v4/documents/upload/', form, {
      headers: {
        ...form.getHeaders(),
        'accept': 'application/json',
        'X-CSRFTOKEN': csrftoken,
        'Cookie': `sessionid=${sessionid}; csrftoken=${csrftoken}`,
        'Referer': 'http://localhost:5173',
      },
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
      withCredentials: true,
    });
    console.log('Mayan upload response:', uploadRes.data);
    res.json({ success: true, data: uploadRes.data });
  } catch (error) {
    console.error('Mayan document upload error:', error);
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error('Mayan upload error response status:', error.response.status);
        console.error('Mayan upload error response data:', error.response.data);
        res.status(500).json({
          error: 'Failed to upload document to Mayan',
          mayanStatus: error.response.status,
          mayanData: error.response.data,
        });
        return;
      } else if (error.request) {
        console.error('Mayan upload error: No response received');
        res.status(500).json({ error: 'No response from Mayan', details: error.message });
        return;
      }
    }
    res.status(500).json({ error: 'Failed to upload document to Mayan', details: error instanceof Error ? error.message : String(error) });
  }
});

// Add metadata to a document (using axios)
// Add document to cabinet (cabinet_id=4)
app.post('/api/mayan/documents/:id/add-to-cabinet', async (req, res) => {
  try {
    const token = await getAuthToken();
    const { id } = req.params;
    const sessionid = req.cookies.sessionid;
    const csrftoken = req.cookies.csrftoken;
    const cabinetId = 4; // Hardcoded as per user request
    const result = await axios.post(
      `http://localhost/api/v4/cabinets/${cabinetId}/documents/`,
      { document: id },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'X-CSRFTOKEN': csrftoken,
          'Cookie': `sessionid=${sessionid}; csrftoken=${csrftoken}`,
          'Referer': 'http://localhost:5173',
          'Accept': 'application/json',
        },
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        withCredentials: true,
      }
    );
    res.json({ success: true, data: result.data });
  } catch (error) {
    console.error('Mayan add document to cabinet error:', error);
    res.status(500).json({ error: 'Failed to add document to cabinet' });
  }
});
app.post('/api/mayan/documents/:id/metadata', async (req, res) => {
  try {
    const token = await getAuthToken();
    const { id } = req.params;
    const { metadata_type_id, metadata_type, value, statut, description, documentId } = req.body;
    const sessionid = req.cookies.sessionid;
    const csrftoken = req.cookies.csrftoken;
    // Build metadata payloads
    const payloads: any[] = [];
    if (metadata_type_id && metadata_type && value !== undefined) {
      payloads.push({ metadata_type_id, metadata_type, value });
    }
    if (statut) {
      payloads.push({ metadata_type_id: 17, metadata_type: { name: 'Statut', label: 'Statut' }, value: statut });
    }
    if (description) {
      payloads.push({ metadata_type_id: 16, metadata_type: { name: 'Description', label: 'Description' }, value: description });
    }
    if (documentId) {
      payloads.push({ metadata_type_id: 18, metadata_type: { name: 'Document_ID', label: 'Document_ID' }, value: documentId });
    }
    const results: any[] = [];
    for (const payload of payloads) {
      const result = await axios.post(
        `http://localhost/api/v4/documents/${id}/metadata/`,
        payload,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'X-CSRFTOKEN': csrftoken,
            'Cookie': `sessionid=${sessionid}; csrftoken=${csrftoken}`,
            'Referer': 'http://localhost:5173',
            'Accept': 'application/json',
          },
          maxContentLength: Infinity,
          maxBodyLength: Infinity,
          withCredentials: true,
        }
      );
      results.push(result.data);
    }
    res.json({ success: true, data: results });
  } catch (error) {
    console.error('Mayan add metadata error:', error);
    res.status(500).json({ error: 'Failed to add metadata' });
  }
});

// Get all metadata for a document (using axios)
app.get('/api/mayan/documents/:id/metadata', async (req, res) => {
  try {
    const token = await getAuthToken();
    const sessionid = req.cookies.sessionid;
    const csrftoken = req.cookies.csrftoken;
    const { id } = req.params;
    const result = await axios.get(
      `http://localhost/api/v4/documents/${id}/metadata/`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Cookie': `sessionid=${sessionid}; csrftoken=${csrftoken}`,
          'X-CSRFTOKEN': csrftoken,
          'Referer': 'http://localhost:5173',
        },
        withCredentials: true,
      }
    );
    res.json({ success: true, data: result.data });
  } catch (error) {
    console.error('Mayan get metadata error:', error);
    res.status(500).json({ error: 'Failed to get metadata' });
  }
});25200

// Delete a metadata entry from a document (using axios)
app.delete('/api/mayan/documents/:id/metadata/:metadata_id', async (req, res) => {
  try {
    const token = await getAuthToken();
    const { id, metadata_id } = req.params;
    await axios.delete(
      `http://localhost/api/v4/documents/${id}/metadata/${metadata_id}/`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Referer': 'http://localhost:5173',
        },
      }
    );
    res.json({ success: true });
  } catch (error) {
    console.error('Mayan delete metadata error:', error);
    res.status(500).json({ error: 'Failed to delete metadata' });
  }
});
app.post('/api/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file provided' });
    }

    const key = `uploads/${Date.now()}-${req.file.originalname}`;
    const result = await s3Service.uploadFile(
      key,
      req.file.buffer,
      req.file.mimetype
    );

    res.json({ success: true, data: result });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Upload failed' });
  }
});



// Add this near the top of server.ts
const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Payment voucher submission route
app.post('/api/payment-vouchers', upload.single('file'), async (req, res) => {
  try {
    const { payee, amount, description, date } = req.body;
    let filePath: string | null = null;

    if (req.file) {
      // Save file to S3/MinIO
      const key = `vouchers/${Date.now()}-${req.file.originalname}`;
      await s3Service.uploadFile(key, req.file.buffer, req.file.mimetype);
      filePath = key;
    }

    const result = await pool.query(
      `INSERT INTO payment_vouchers (payee, amount, description, date, file_path)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [payee, amount, description, date, filePath]
    );

    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('Payment voucher submission error:', error);
    res.status(500).json({ error: 'Failed to submit payment voucher' });
  }
});


// Route to fetch approved documents and their formatted metadata 
app.get('/api/approved_documents_metadata', async (req, res) => {
    try {
        // 1 = workflow_template_id, 3 = workflow_template_state_id (approved)
        const sessionid = req.cookies.sessionid;
        const csrftoken = req.cookies.csrftoken;
        const authToken = req.cookies.authToken;
        if (!sessionid || !csrftoken || !authToken) {
            return res.status(401).json({ error: 'Missing authentication cookies' });
        }
        const token = await getAuthToken();
        if (!token) {
            return res.status(500).json({ error: 'Failed to fetch auth token' });
        }
        // Fetch all approved documents for the workflow
        const docsResponse = await axios.get('http://localhost/api/v4/workflow_templates/1/states/3/documents/', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Cookie': `sessionid=${sessionid}; csrftoken=${csrftoken}`,
                'X-CSRFTOKEN': csrftoken,
                'Referer': 'http://localhost:5173',
            },
            withCredentials: true
        });
        const docIds = (docsResponse.data.results || []).map((doc: any) => doc.id);

        // Fetch documents from document_type 3 with retry logic and get their Document_ID metadata
        async function fetchDataWithRetry(url: string, headers: any, retries = 3, delay = 1000): Promise<any> {
            try {
                const response = await axios.get(url, { headers });
                return response.data;
            } catch (error) {
                if (retries > 0) {
                    console.warn(`Retrying ${url} in ${delay / 1000}s... (${retries} retries left)`);
                    await new Promise(resolve => setTimeout(resolve, delay));
                    return fetchDataWithRetry(url, headers, retries - 1, delay * 2);
                }
                throw error;
            }
        }

        // First, get all type 2 documents (these are the person documents we'll reference)
        const type2Res = await fetchDataWithRetry(
            'http://localhost/api/v4/document_types/2/documents/',
            {
                'Authorization': `Bearer ${token}`,
                'Cookie': `sessionid=${sessionid}; csrftoken=${csrftoken}`,
                'X-CSRFTOKEN': csrftoken,
                'Referer': 'http://localhost:5173',
            }
        );
        
        // Store the IDs from type 2 documents (person documents) for reference
        const type2Docs = type2Res.results || [];
        const personDocIds = new Set<string>();
        
        // Add each person document ID to our reference set
        type2Docs.forEach((doc: any) => {
            const docId = String(doc.id).trim();
            personDocIds.add(docId);
            console.log(`Adding person document ID to reference set: ${docId}`);
        });
        
        console.log('Person documents (type 2):', Array.from(personDocIds));
        
        // Then get type 3 documents (these are the payment documents we'll check)
        const type3Res = await fetchDataWithRetry(
            'http://localhost/api/v4/document_types/3/documents/',
            {
                'Authorization': `Bearer ${token}`,
                'Cookie': `sessionid=${sessionid}; csrftoken=${csrftoken}`,
                'X-CSRFTOKEN': csrftoken,
                'Referer': 'http://localhost:5173',
            }
        );        // For each document, fetch and format its metadata
        const results = await Promise.all(
            docIds.map(async (id: number) => {
                try {
                    const metaResponse = await axios.get(
                        `http://localhost/api/v4/documents/${id}/metadata/`,
                        {
                            headers: {
                                'Authorization': `Bearer ${token}`,
                                'Cookie': `sessionid=${sessionid}; csrftoken=${csrftoken}`,
                                'X-CSRFTOKEN': csrftoken,
                                'Referer': 'http://localhost:5173',
                            },
                            withCredentials: true
                        }
                    );
                    // Build a metadata object: { label1: value1, label2: value2, ... }
                    const metaObj: Record<string, string> = {};
                    let documentIdMetaValue: string | undefined;
                    let dateValue: string | undefined;
                    
                    console.log(`Processing metadata for document ${id}:`, metaResponse.data.results);
                    
                    (metaResponse.data.results || []).forEach((meta: any) => {
                        if (meta.metadata_type?.label) {
                            // Store original label for object keys
                            const originalLabel = meta.metadata_type.label;
                            
                            // Normalize the label to handle case and special characters
                            const normalizedLabel = originalLabel
                                .normalize('NFD')
                                .replace(/[\u0300-\u036f]/g, '')
                                .replace(/[-_ ]/g, '')
                                .toUpperCase();

                            // Store metadata value with original label
                            metaObj[originalLabel] = meta.value;
                            
                            console.log(`Processing metadata field: ${originalLabel} (normalized: ${normalizedLabel}), value: ${meta.value}`);
                            
                            // Check for Document_ID variations and metadata type ID
                            if (meta.metadata_type.id === 18) { // Check by metadata type ID first
                                documentIdMetaValue = meta.value;
                                console.log(`Found Document_ID metadata by type_id: ${meta.value} for document ${id}`);
                            } else if (normalizedLabel === 'DOCUMENTID' || 
                                     normalizedLabel === 'DOCUMENT_ID' || 
                                     normalizedLabel === 'ID') {
                                documentIdMetaValue = meta.value;
                                console.log(`Found Document_ID metadata by label: ${meta.value} for document ${id}`);
                            }
                            
                            // Log all metadata types for debugging
                            console.log(`Metadata field info:`, {
                                id: meta.metadata_type.id,
                                label: meta.metadata_type.label,
                                value: meta.value,
                                normalized: normalizedLabel
                            });
                            
                            // Check for Date variations and metadata type ID
                            if (normalizedLabel === 'DATEINITIAL' || 
                                normalizedLabel === 'DATE-INITIAL' ||
                                normalizedLabel.includes('DATEINITIAL') ||
                                meta.metadata_type.name === 'Date-initial') {
                                dateValue = meta.value;
                                console.log(`Found Date metadata: ${meta.value} for document ${id}`);
                            }
                        }
                    });
                    // Cross-reference: if this document's Document_ID exists in type3DocIds and date is current month, set status/canEdit
                    let statut = 'pending';
                    let canEdit = false;
                    
                    // First check if the document exists in type3DocIds (paid documents)
                    const docIdToCheck = documentIdMetaValue ? String(documentIdMetaValue).trim() : undefined;
                    console.log(`Checking document ${id} - Document_ID: ${docIdToCheck}`);
                    console.log(`Available person document IDs:`, Array.from(personDocIds));
                    
                    // Convert docIdToCheck to string and ensure it's properly formatted
                    const formattedDocId = docIdToCheck ? String(docIdToCheck).trim() : undefined;
                    console.log(`\nProcessing payment document ${id}:`);
                    console.log(`- Document_ID from metadata: ${formattedDocId}`);
                    console.log(`- Date value: ${dateValue}`);
                    console.log(`- Person documents list:`, Array.from(personDocIds));

                    // Get current month and year for comparison
                    const currentDate = new Date();
                    let isCurrentMonthAndYear = false;
                    if (dateValue) {
                        const docDate = new Date(dateValue);
                        isCurrentMonthAndYear = (
                            docDate.getMonth() === currentDate.getMonth() && 
                            docDate.getFullYear() === currentDate.getFullYear()
                        );
                    }

                    if (formattedDocId && personDocIds.has(formattedDocId) && isCurrentMonthAndYear) {
                        // If Document_ID matches a person document and it's current month, mark as paid
                        statut = 'payé';
                        canEdit = true; // Allow editing for paid documents
                        console.log(`✓ Payment document ${id} references person document ${formattedDocId} and is in current month - marked as paid`);
                    } else {
                        if (formattedDocId && personDocIds.has(formattedDocId)) {
                            console.log(`✗ Payment document ${id} references person document ${formattedDocId} but is not in current month`);
                            statut = 'expired'; // Not in current month
                            canEdit = false;
                        } else {
                            console.log(`✗ Payment document ${id} does not reference a valid person document`);
                            if (isCurrentMonthAndYear) {
                                statut = 'pending'; // In current month but no valid reference
                                canEdit = false;
                                console.log(`→ Document is in current month, marked as pending`);
                            } else {
                                statut = 'expired'; // Not in current month
                                canEdit = false;
                                console.log(`→ Document is not in current month, marked as expired`);
                            }
                        }
                    }
                    metaObj['Statut'] = statut;
                    metaObj['canEdit'] = canEdit ? 'true' : 'false';
                    console.log(`Final status for document ${id}:`, { Statut: metaObj['Statut'], canEdit: metaObj['canEdit'] });
                    return {
                        id,
                        metadata: metaObj,
                    };
                } catch (err: any) {
                    console.error(`Error fetching metadata for document ID ${id}:`, err.message || err);
                    return {
                        id,
                        metadata: {},
                    };
                }
            })
        );
        // Collect all unique metadata labels for columns
        const allLabels = Array.from(new Set(results.flatMap(doc => Object.keys(doc.metadata))));
        // Build rows for the frontend: each row is { id, ...metadata fields }
        const rows = results.map(doc => {
            const row: Record<string, string> = { id: String(doc.id) };
            allLabels.forEach(label => {
                row[label] = doc.metadata[label] || '';
            });
            return row;
        });
        res.json({ columns: ['id', ...allLabels], rows });
    } catch (error: any) {
        console.error('Error fetching approved documents metadata:', error.message || error);
        res.status(500).json({ error: error.message || 'Failed to fetch approved documents metadata' });
    }
});

app.get('/api/document_types/3/documents', async (req, res) => {
  try {
    const token = await getAuthToken();
    const sessionid = req.cookies.sessionid;
    const csrftoken = req.cookies.csrftoken;
    const result = await axios.get(
      'http://localhost/api/v4/document_types/3/documents/',
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Cookie': `sessionid=${sessionid}; csrftoken=${csrftoken}`,
          'X-CSRFTOKEN': csrftoken,
          'Referer': 'http://localhost:5173',
        },
        withCredentials: true,
      }
    );
    // Return array of document IDs
    const docIds = (result.data.results || []).map((doc: any) => doc.id);
    res.json({ success: true, docIds });
  } catch (error) {
    console.error('Error fetching document_type=3 documents:', error);
    res.status(500).json({ error: 'Failed to fetch document_type=3 documents' });
  }
});

// (Removed unreachable and duplicate code block causing errors)
//give me the script to start this node server

app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        // Make login request to Mayan EDMS
        const tokenResponse = await axios.post('http://localhost/api/v4/auth/token/obtain/', {
            username,
            password,
        }, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        });
        const token = tokenResponse.data.token;

        // Extract sessionid and csrftoken from set-cookie headers if present
        let sessionid: string | null = null;
        let csrftoken: string | null = null;
        const setCookie = tokenResponse.headers['set-cookie'];
        if (setCookie && Array.isArray(setCookie)) {
            setCookie.forEach(cookieStr => {
                if (cookieStr.startsWith('sessionid=')) {
                    sessionid = cookieStr.split(';')[0].split('=')[1];
                }
                if (cookieStr.startsWith('csrftoken=')) {
                    csrftoken = cookieStr.split(';')[0].split('=')[1];
                }
            });
        }

        // Fallback: try to get from response data if available
        if (!sessionid && tokenResponse.data.sessionid) sessionid = tokenResponse.data.sessionid;
        if (!csrftoken && tokenResponse.data.csrftoken) csrftoken = tokenResponse.data.csrftoken;

        // Set cookies
        res.cookie('authToken', token, { httpOnly: false, secure: false, sameSite: 'lax', maxAge: 24 * 60 * 60 * 1000, path: '/' });
        if (sessionid) {
            res.cookie('sessionid', sessionid, { httpOnly: true, secure: false, sameSite: 'lax', maxAge: 24 * 60 * 60 * 1000, path: '/' });
        }
        if (csrftoken) {
            res.cookie('csrftoken', csrftoken, { httpOnly: true, secure: false, sameSite: 'lax', maxAge: 24 * 60 * 60 * 1000, path: '/' });
        }

        res.json({ token, sessionid, csrftoken });
    } catch (error) {
        let msg = 'Unknown error';
        if (typeof error === 'object' && error !== null && 'message' in error) {
            msg = (error as any).message;
        } else if (typeof error === 'string') {
            msg = error;
        }
        console.error('Login error:', msg);
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

app.get('/api/documents', async (req, res) => {
    try {
        console.log('Fetching documents from Mayan API using generated client..');
        const token = await getAuthToken();
        if (!token) {
            return res.status(500).json({ error: 'Failed to fetch auth token' });
        }
        const documentsApi = new DocumentsApi(
            new runtime.Configuration({
                basePath: 'http://localhost/api/v4',
                accessToken: token,
            })
        );
        const docsResponse = await documentsApi.documentsList({ pageSize: 100 });
        res.json(docsResponse.results || []);
    } catch (error: any) {
        console.error('Error fetching documents:', error.message || error);
        res.status(500).json({ error: error.message || 'Failed to fetch documents' });
    }
});

// Configure the server
const server = {
    app,
    start: () => {
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    }
};

// Start the server
server.start();

// Export the app for testing/importing
export default server.app;

// To run this server, use the command:
// npx ts-node server.ts

