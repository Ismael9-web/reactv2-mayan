import api from './api.tsx';

export interface UploadResult {
  key: string;
  location: string;
  bucket: string;
  etag?: string;
}

export interface S3File {
  key: string;
  name: string;
  url: string;
  size?: number;
  lastModified?: Date;
}

export class FrontendS3Service {
  // Use the shared Axios instance (api) which is already configured for http://localhost:5000/api

  async uploadFile(file: File, onProgress?: (progress: number) => void): Promise<UploadResult> {
    const formData = new FormData();
    formData.append('file', file);
    const response = await api.post('/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: onProgress
        ? (event) => {
            if (event.total) {
              onProgress(Math.round((event.loaded * 100) / event.total));
            }
          }
        : undefined,
    });
    return response.data.data;
  }

  async listFiles(prefix?: string): Promise<string[]> {
    const params = prefix ? { prefix } : undefined;
    const response = await api.get('/files', { params });
    return response.data.data;
  }

  async downloadFile(key: string): Promise<Blob> {
    const response = await api.get(`/download/${encodeURIComponent(key)}`, {
      responseType: 'blob',
    });
    return response.data;
  }

  async deleteFile(key: string): Promise<void> {
    await api.delete(`/files/${encodeURIComponent(key)}`);
  }

  getFileUrl(key: string): string {
    // This is a helper for direct S3/MinIO access, not backend API
    return `http://localhost:9000/user-uploads/${key}`;
  }
}

export const s3Service = new FrontendS3Service();