import dotenv from 'dotenv';
dotenv.config();
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


const app = express();
const port = 5000;



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

app.get('/api/files', async (req, res) => {
  try {
    const prefix = req.query.prefix as string;
    const files = await s3Service.listFiles(prefix);
    res.json({ success: true, data: files });
  } catch (error) {
    console.error('List files error:', error);
    res.status(500).json({ error: 'Failed to list files' });
  }
});

app.get('/api/download/:key(*)', async (req, res) => {
  try {
    const key = req.params.key;
    const fileBuffer = await s3Service.downloadFile(key);
    
    res.set({
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': `attachment; filename="${key.split('/').pop()}"`,
    });
    
    res.send(fileBuffer);
  } catch (error) {
    console.error('Download error:', error);
    res.status(500).json({ error: 'Download failed' });
  }
});

app.delete('/api/files/:key(*)', async (req, res) => {
  try {
    const key = req.params.key;
    await s3Service.deleteFile(key);
    res.json({ success: true, message: 'File deleted successfully' });
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ error: 'Delete failed' });
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
        // For each document, fetch and format its metadata
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
                    (metaResponse.data.results || []).forEach((meta: any) => {
                        if (meta.metadata_type?.label) {
                            metaObj[meta.metadata_type.label] = meta.value;
                        }
                    });
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

// (Removed unreachable and duplicate code block causing errors)
//give me the script to start this node server

app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const tokenResponse = await axios.post('http://localhost/api/v4/auth/token/obtain/', {
            username,
            password,
        }, { headers: { 'Content-Type': 'application/json' } });
        const token = tokenResponse.data.token;
        res
            .cookie('authToken', token, { httpOnly: false, secure: false, sameSite: 'lax', maxAge: 24 * 60 * 60 * 1000 })
            .json({ token });
    } catch (error: any) {
        console.error('Login error:', error.message);
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

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
export default app;
// To run this server, use the command: npx ts-node server.ts
// Ensure you have ts-node installed globally or in your project dependencies.
// You can also add a script in package.json to start the server easily:
// "scripts": {
//   "start": "ts-node server.ts"
// }
// This will allow you to run the server with `npm start` or `yarn start`.