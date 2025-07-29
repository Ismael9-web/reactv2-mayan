import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from './button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Progress } from './progress';
import { toast } from 'sonner';
import { Upload, X, File, Download } from 'lucide-react';
import { s3Service, type UploadResult } from '../../../services/s3Service';

interface S3FileUploadProps {
  onUploadComplete?: (result: UploadResult) => void;
  acceptedFileTypes?: Record<string, string[]>;
  maxFileSize?: number;
  multiple?: boolean;
}

export const S3FileUpload: React.FC<S3FileUploadProps> = ({
  onUploadComplete,
  acceptedFileTypes = {
    'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
    'application/pdf': ['.pdf'],
    'text/*': ['.txt', '.csv'],
  },
  maxFileSize = 10 * 1024 * 1024, // 10MB
  multiple = false,
}) => {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState<UploadResult[]>([]);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;

    const filesToUpload = multiple ? acceptedFiles : [acceptedFiles[0]];

    for (const file of filesToUpload) {
      setUploading(true);
      setUploadProgress(0);

      try {
        const result = await s3Service.uploadFile(file, (progress) => {
          setUploadProgress(progress);
        });

        setUploadedFiles(prev => [...prev, result]);
        onUploadComplete?.(result);
        
        toast.success(`File "${file.name}" uploaded successfully!`);
      } catch (error) {
        console.error('Upload error:', error);
        toast.error(`Failed to upload "${file.name}"`);
      } finally {
        setUploading(false);
        setUploadProgress(0);
      }
    }
  }, [multiple, onUploadComplete]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptedFileTypes,
    maxSize: maxFileSize,
    multiple,
  });

  const handleRemoveFile = async (key: string) => {
    try {
      await s3Service.deleteFile(key);
      setUploadedFiles(prev => prev.filter(file => file.key !== key));
      toast.success('File deleted successfully!');
    } catch (error) {
      console.error('Delete error:', error);
      toast.error('Failed to delete file');
    }
  };

  const handleDownloadFile = async (key: string) => {
    try {
      const blob = await s3Service.downloadFile(key);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = key.split('/').pop() || 'download';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download error:', error);
      toast.error('Failed to download file');
    }
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>File Upload</CardTitle>
          <CardDescription>
            Upload files to MinIO S3 storage. Drag and drop files or click to browse.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
              isDragActive
                ? 'border-primary bg-primary/5'
                : 'border-muted-foreground/25 hover:border-primary/50'
            }`}
          >
            <input {...getInputProps()} />
            <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            {isDragActive ? (
              <p className="text-sm text-muted-foreground">Drop the files here...</p>
            ) : (
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Drag & drop files here, or click to select files
                </p>
                <p className="text-xs text-muted-foreground">
                  Max file size: {Math.round(maxFileSize / 1024 / 1024)}MB
                </p>
              </div>
            )}
          </div>

          {uploading && (
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Uploading...</span>
                <span>{Math.round(uploadProgress)}%</span>
              </div>
              <Progress value={uploadProgress} className="w-full" />
            </div>
          )}
        </CardContent>
      </Card>

      {uploadedFiles.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Uploaded Files</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {uploadedFiles.map((file) => (
                <div
                  key={file.key}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <File className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">
                        {file.key.split('/').pop()}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {file.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDownloadFile(file.key)}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleRemoveFile(file.key)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
