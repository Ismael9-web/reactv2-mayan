import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import axios from 'axios';
import multer from 'multer';
import session from 'express-session';
import type { Session, SessionData } from 'express-session';


const app = express();
const port = 5000;
dotenv.config();

// Middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  name: 'react_sessionid',
  secret: process.env.SESSION_SECRET || 'react-app-secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 8 * 60 * 60 * 1000, // 8 hours
  },
}));

// Extend express-session types for req.session.user
// @ts-ignore: If types are missing, this will be fixed after installing @types/express-session
// TODO: Run `pnpm add -D @types/express-session` or `npm install --save-dev @types/express-session`
declare module 'express-session' {
  interface SessionData {
    user?: { username: string; token: string };
  }
}

app.use((req, res, next) => {
    const csrfToken = req.cookies.csrftoken;
    const sessionId = req.cookies.sessionid;
    const authToken = req.cookies.authToken;

    if (csrfToken && sessionId && authToken) {
        req.headers['X-CSRFTOKEN'] = csrfToken;
app.use(session({
  name: 'react_sessionid',
  secret: process.env.SESSION_SECRET || 'react-app-secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 8 * 60 * 60 * 1000, // 8 hours
  },
}));
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

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
});


// --- CHECK AUTH ENDPOINT FOR PROTECTED ROUTES ---
// Checks if tresor_csrftoken and tresor_auth cookies exist and are valid
app.get('/api/check-auth', async (req, res) => {
  const tresorCsrftoken = req.cookies.tresor_csrftoken;
  const tresorAuth = req.cookies.tresor_auth;
  if (!tresorCsrftoken || !tresorAuth) {
    return res.status(401).json({ loggedIn: false });
  }
  // Optionally, try a Mayan endpoint to verify credentials (lightweight, e.g. /api/v4/users/current/)
  try {
    const mayanRes = await axios.get('http://localhost/api/v4/users/current/', {
      headers: {
        'Authorization': `Basic ${tresorAuth}`,
        'Cookie': `csrftoken=${tresorCsrftoken}`,
        'Referer': 'http://localhost:5173',
      },
      withCredentials: true
    });
    if (mayanRes.status === 200) {
      return res.json({ loggedIn: true });
    }
    return res.status(401).json({ loggedIn: false });
  } catch (err) {
    return res.status(401).json({ loggedIn: false });
  }
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
// --- SESSION CHECK ENDPOINT FOR PROTECTED ROUTES ---
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
    const tresor_csrftoken = req.cookies.tresor_csrftoken;
    const tresor_auth = req.cookies.tresor_auth;
    console.log('tresor_csrftoken:', tresor_csrftoken);
    console.log('tresor_auth:', tresor_auth);

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
      console.log(`  ${key}:`, (form as any)[key]);
    }

    // Send to Mayan with correct headers
    const uploadRes = await axios.post('http://localhost/api/v4/documents/upload/', form, {
      headers: {
        ...form.getHeaders(),
        'accept': 'application/json',
        'Authorization': `Basic ${tresor_auth}`,
        'X-CSRFTOKEN': tresor_csrftoken,
        'Cookie': `csrftoken=${tresor_csrftoken}; authToken=${tresor_auth}`,
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


app.post('/api/mayan/documents/:id/metadata', async (req, res) => {
  try {
    const token = await getAuthToken();
    const { id } = req.params;
    const { metadata_type_id, metadata_type, value, statut, description, documentId } = req.body;
    const tresor_csrftoken = req.cookies.tresor_csrftoken;
    const tresor_auth = req.cookies.tresor_auth;
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
            'Authorization': `Basic ${token}`,
            'Content-Type': 'application/json',
            'X-CSRFTOKEN': tresor_csrftoken,
            'Cookie': `csrftoken=${tresor_csrftoken}; authToken=${tresor_auth}`,
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
    const tresor_auth = req.cookies.tresor_auth;
    const tresor_csrftoken = req.cookies.tresor_csrftoken;
    const { id } = req.params;
    const result = await axios.get(
      `http://localhost/api/v4/documents/${id}/metadata/`,
      {
        headers: {
          'Authorization': `Basic ${tresor_auth}`,
          'Cookie': `csrftoken=${tresor_csrftoken}; authToken=${tresor_auth}`,
          'X-CSRFTOKEN': tresor_csrftoken,
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
});


// Update a metadata entry for a document (using axios)
app.put('/api/mayan/documents/:id/metadata/:metadata_id', async (req, res) => {
  try {
    const token = await getAuthToken();
    const { id, metadata_id } = req.params;
    const { value } = req.body;
    const tresor_csrftoken = req.cookies.tresor_csrftoken;
    const tresor_auth = req.cookies.tresor_auth;
    // Optionally allow updating other fields if needed
    await axios.put(
      `http://localhost/api/v4/documents/${id}/metadata/${metadata_id}/`,
      { value },
      {
        headers: {
          'Authorization': `Basic ${tresor_auth}`,
          'Content-Type': 'application/json',
          'X-CSRFTOKEN': tresor_csrftoken,
          'Cookie': `csrftoken=${tresor_csrftoken}; authToken=${tresor_auth}`,
          'Referer': 'http://localhost:5173',
        },
      }
    );
    res.json({ success: true });
  } catch (error) {
    console.error('Mayan update metadata error:', error);
    res.status(500).json({ error: 'Failed to update metadata' });
  }
});

// Route to fetch approved documents and their formatted metadata 
app.get('/api/approved_documents_metadata', async (req, res) => {
    try {
        const sessionid = req.cookies.sessionid;
        const csrftoken = req.cookies.csrftoken;
        const authToken = req.cookies.authToken;
        const tresor_csrftoken = req.cookies.tresor_csrftoken;
        const tresor_auth = req.cookies.tresor_auth;

        console.log('--- /api/approved_documents_metadata called ---');
        console.log('Request headers:', req.headers);
        console.log('Request cookies:', req.cookies);

        if (!tresor_csrftoken || !tresor_auth ) {
            return res.status(401).json({ error: 'Missing authentication cookies' });
        }
        const token = await getAuthToken();
        if (!token) {
            return res.status(500).json({ error: 'Failed to fetch auth token' });
        }
        // Helper function to create headers for API requests
        const createHeaders = () => ({
          'Authorization': `Basic ${tresor_auth}`,
          'Cookie': `csrftoken=${tresor_csrftoken}`,
          'X-CSRFTOKEN': tresor_csrftoken,
          'Referer': 'http://localhost:5173',
        });

        // Fetch all person documents (type 2)
        const personDocsResponse = await axios.get('http://localhost/api/v4/document_types/2/documents/', {
            headers: createHeaders(),
            withCredentials: true
        });
        const personDocs = personDocsResponse.data.results || [];

        // Fetch all payment documents (type 3)
        const paymentDocsResponse = await axios.get('http://localhost/api/v4/document_types/3/documents/', {
            headers: createHeaders(),
            withCredentials: true
        });
        const paymentDocs = paymentDocsResponse.data.results || [];

        // Create a map to store payment information keyed by Document_ID
        const confirmedPaymentsMap = new Map();

        // Fetch metadata for all payment documents and build the payments map
        await Promise.all(paymentDocs.map(async (paymentDoc: any) => {
            try {
                const paymentMetaResponse = await axios.get(
                    `http://localhost/api/v4/documents/${paymentDoc.id}/metadata/`,
                    {
                        headers: createHeaders(),
                        withCredentials: true
                    }
                );

                let docIdFromPaymentMetadata: string | null = null;
                let dateFromPaymentMetadata: string | null = null;

                (paymentMetaResponse.data.results || []).forEach((meta: any) => {
                    if (meta.metadata_type?.label === 'Document_ID') {
                        docIdFromPaymentMetadata = String(meta.value);
                    }
                    if (meta.metadata_type?.label === 'Date') {
                        dateFromPaymentMetadata = meta.value;
                    }
                });

                if (docIdFromPaymentMetadata && dateFromPaymentMetadata) {
                    confirmedPaymentsMap.set(docIdFromPaymentMetadata, {
                        date: dateFromPaymentMetadata,
                        paymentDocId: paymentDoc.id
                    });
                }
            } catch (error) {
                console.error(`Error fetching metadata for payment document ${paymentDoc.id}:`, error);
            }
        }));

        // Process each person document to extract its metadata and determine payment status
        const processedDocs = await Promise.all(
            personDocs.map(async (doc: any) => {
                try {
                    const metaResponse = await axios.get(
                        `http://localhost/api/v4/documents/${doc.id}/metadata/`,
                        {
                            headers: createHeaders(),
                            withCredentials: true
                        }
                    );

                    const metaObj: Record<string, string> = {};
                    let dateValue: string | undefined;

                    (metaResponse.data.results || []).forEach((meta: any) => {
                        if (meta.metadata_type?.label) {
                            const originalLabel = meta.metadata_type.label;
                            metaObj[originalLabel] = meta.value;

                            // Check for Date metadata
                            const normalizedLabel = originalLabel
                                .normalize('NFD')
                                .replace(/[\u0300-\u036f]/g, '')
                                .replace(/[-_ ]/g, '')
                                .toUpperCase();

                            if (normalizedLabel === 'DATEINITIAL' || 
                                normalizedLabel === 'DATE-INITIAL' ||
                                normalizedLabel.includes('DATEINITIAL') ||
                                meta.metadata_type.name === 'Date-initial') {
                                dateValue = meta.value;
                            }
                        }
                    });

                    // Check payment status
                    const currentDate = new Date();
                    const currentMonth = currentDate.getMonth();
                    const currentYear = currentDate.getFullYear();
                    const paymentInfo = confirmedPaymentsMap.get(String(doc.id));
                    
                    let paymentStatus = 'pending';
                    let canEdit = true;

                    if (paymentInfo) {
                        const paymentDate = new Date(paymentInfo.date);
                        if (paymentDate.getMonth() === currentMonth && 
                            paymentDate.getFullYear() === currentYear) {
                            paymentStatus = 'payé';
                            canEdit = false;
                        }
                    }

                    return {
                        id: doc.id,
                        metadata: metaObj,
                        dateValue,
                        paymentStatus,
                        canEdit,
                        paymentDocId: paymentInfo?.paymentDocId
                    };
                } catch (error) {
                    console.error(`Error fetching metadata for document ${doc.id}:`, error);
                    return {
                        id: doc.id,
                        metadata: {},
                        dateValue: undefined,
                        paymentStatus: 'pending',
                        canEdit: true
                    };
                }
            })
        );

        // Collect all unique metadata labels for columns
        const allLabels = Array.from(new Set(processedDocs.flatMap(doc => Object.keys(doc.metadata))));

        // Build rows for the frontend
        const rows = processedDocs.map(doc => {
            const row: Record<string, any> = {
                id: String(doc.id),
                Statut: doc.paymentStatus,
                canEdit: doc.canEdit,
                paymentDocId: doc.paymentDocId || null
            };
            allLabels.forEach(label => {
                row[label] = (doc.metadata && typeof doc.metadata === 'object' && label in doc.metadata)
                  ? (doc.metadata as Record<string, string>)[label] || ''
                  : '';
            });
            return row;
        });

        res.json({ 
            columns: ['id', 'Statut', ...allLabels], 
            rows,
            metadata: {
                canEdit: rows.map(row => row.canEdit),
                paymentDocIds: rows.map(row => row.paymentDocId)
            }
        });
    } catch (error) {
        console.error('Error processing documents:', error);
        res.status(500).json({ error: 'Failed to process documents' });
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



// --- NEW LOGOUT FLOW: Only clear tresor_csrftoken and tresor_auth ---
app.post('/api/logout', (req, res) => {
  res.clearCookie('tresor_csrftoken', { path: '/', httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production' });
  res.clearCookie('tresor_auth', { path: '/', httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production' });
  res.json({ message: 'Logged out' });
});


// --- NEW LOGIN FLOW: Integrate with Mayan EDMS ---
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Forward credentials to Mayan
    const tokenResponse = await axios.post('http://localhost/api/v4/auth/token/obtain/', {
      username,
      password,
    }, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true
    });
    // Extract csrftoken from set-cookie
    let csrftoken: string | null = null;
    const setCookie = tokenResponse.headers['set-cookie'];
    if (setCookie && Array.isArray(setCookie)) {
      setCookie.forEach(cookieStr => {
        if (cookieStr.startsWith('csrftoken=')) {
          csrftoken = cookieStr.split(';')[0].split('=')[1];
        }
      });
    }
    if (!csrftoken && tokenResponse.data.csrftoken) csrftoken = tokenResponse.data.csrftoken;
    // If Mayan did not provide a CSRF token, generate a secure random one
    if (!csrftoken) {
      // Generate a random 32-character hex string
      csrftoken = [...Array(32)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
    }
    // Generate Basic auth string
    const basicAuth = Buffer.from(`${username}:${password}`).toString('base64');
    // Set secure, httpOnly cookies (custom names)
    const cookieOptions = {
      httpOnly: true,
      sameSite: 'lax' as const,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000,
      path: '/',
    };
    res.cookie('tresor_csrftoken', csrftoken, cookieOptions);
    res.cookie('tresor_auth', basicAuth, cookieOptions);
    return res.json({ message: 'Login successful' });
  } catch (error) {
    let msg = 'Unknown error';
    if (typeof error === 'object' && error !== null && 'message' in error && typeof (error as any).message === 'string') {
      msg = (error as any).message;
    } else if (typeof error === 'string') {
      msg = error;
    }
    console.error('Login error:', msg);
    return res.status(401).json({ message: 'Invalid credentials' });
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