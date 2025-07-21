"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const axios_1 = __importDefault(require("axios"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const DocumentsApi_1 = require("./src/api/mayan-edms/apis/DocumentsApi");
const runtime = __importStar(require("./src/api/mayan-edms/apis/runtime")); // Will fix path if needed after build
const app = (0, express_1.default)();
const port = 5000;
// Middleware
app.use((0, cors_1.default)({ origin: 'http://localhost:3000', credentials: true }));
app.use(body_parser_1.default.json());
app.use((0, cookie_parser_1.default)());
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
function getAuthToken() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.post('http://localhost/api/v4/auth/token/obtain/', {
                username: process.env.MAYAN_USERNAME,
                password: process.env.MAYAN_PASSWORD,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('Auth token fetched successfully:', response.data.token); // Debugging log
            return response.data.token;
        }
        catch (error) {
            console.error('Error fetching auth token:', error.response ? error.response.data : error.message);
            if (error.response) {
                console.error('Response status:', error.response.status);
                console.error('Response data:', error.response.data);
            }
            throw new Error('Failed to fetch auth token');
        }
    });
}
app.post('/api/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const tokenResponse = yield axios_1.default.post('http://localhost/api/v4/auth/token/obtain/', {
            username,
            password,
        }, { headers: { 'Content-Type': 'application/json' } });
        const token = tokenResponse.data.token;
        res
            .cookie('authToken', token, { httpOnly: false, secure: false, sameSite: 'lax', maxAge: 24 * 60 * 60 * 1000 })
            .json({ token });
    }
    catch (error) {
        console.error('Login error:', error.message);
        res.status(401).json({ error: 'Invalid credentials' });
    }
}));
app.get('/api/documents', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Fetching documents from Mayan API using generated client..');
        const token = yield getAuthToken();
        if (!token) {
            return res.status(500).json({ error: 'Failed to fetch auth token' });
        }
        const documentsApi = new DocumentsApi_1.DocumentsApi(new runtime.Configuration({
            basePath: 'http://localhost/api/v4',
            accessToken: token,
        }));
        const docsResponse = yield documentsApi.documentsList({ pageSize: 100 });
        const documents = docsResponse.results || [];
        res.json(documents);
    }
    catch (error) {
        console.error('Error fetching documents:', error.message || error);
        res.status(500).json({ error: error.message || 'Failed to fetch documents' });
    }
}));
app.get('/api/documents_with_metadata', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Fetching documents and metadata from Mayan API using generated client...');
        const token = yield getAuthToken();
        if (!token) {
            return res.status(500).json({ error: 'Failed to fetch auth token' });
        }
        const documentsApi = new DocumentsApi_1.DocumentsApi(new runtime.Configuration({
            basePath: 'http://localhost/api/v4',
            accessToken: token,
        }));
        const docsResponse = yield documentsApi.documentsList({ pageSize: 100 });
        const documents = docsResponse.results || [];
        const documentsWithMetadata = yield Promise.all(documents.map((doc) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const metaResponse = yield documentsApi.documentsMetadataList({ documentId: String(doc.id) });
                return Object.assign(Object.assign({}, doc), { metadata: metaResponse.results || [] });
            }
            catch (error) {
                console.error(`Error fetching metadata for document ID ${doc.id}:`, error.message || error);
                return Object.assign(Object.assign({}, doc), { metadata: [] });
            }
        })));
        res.json(documentsWithMetadata);
    }
    catch (error) {
        console.error('Error fetching documents and metadata:', error.message || error);
        res.status(500).json({ error: error.message || 'Failed to fetch documents and metadata' });
    }
}));
app.post('/api/logout', (req, res) => {
    res.clearCookie('csrftoken');
    res.clearCookie('sessionid');
    res.clearCookie('authToken');
    res.status(200).json({ message: 'Logged out successfully' });
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
