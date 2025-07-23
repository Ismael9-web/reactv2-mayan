//give me the script to start this node server
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import axios from 'axios';
import cookieParser from 'cookie-parser';

import { DocumentsApi } from './src/api/mayan-edms/apis/DocumentsApi';
import * as runtime from './src/api/mayan-edms/runtime'; // Will fix path if needed after build

const app = express();
const port = 5000;

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
            },
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
        const documents = docsResponse.results || [];
        res.json(documents);
    } catch (error: any) {
        console.error('Error fetching documents:', error.message || error);
        res.status(500).json({ error: error.message || 'Failed to fetch documents' });
    }
});

app.get('/api/documents_with_metadata', async (req, res) => {
    try {
        console.log('Fetching documents and metadata from Mayan API using generated client...');
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
        const documents = docsResponse.results || [];
        const documentsWithMetadata = await Promise.all(
            documents.map(async (doc: any) => {
                try {
                    const metaResponse = await documentsApi.documentsMetadataList({ documentId: String(doc.id) });
                    return {
                        ...doc,
                        metadata: metaResponse.results || [],
                    };
                } catch (error: any) {
                    console.error(`Error fetching metadata for document ID ${doc.id}:`, error.message || error);
                    return {
                        ...doc,
                        metadata: [],
                    };
                }
            })
        );
        res.json(documentsWithMetadata);
    } catch (error: any) {
        console.error('Error fetching documents and metadata:', error.message || error);
        res.status(500).json({ error: error.message || 'Failed to fetch documents and metadata' });
    }
});

app.post('/api/logout', (req, res) => {
    res.clearCookie('csrftoken');
    res.clearCookie('sessionid');
    res.clearCookie('authToken');
    res.status(200).json({ message: 'Logged out successfully' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
