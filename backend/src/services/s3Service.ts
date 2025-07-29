import { S3Client, PutObjectCommand, GetObjectCommand, ListObjectsV2Command, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
import { Readable } from 'stream';

export interface S3Config {
  endpoint: string;
  accessKeyId: string;
  secretAccessKey: string;
  region: string;
  bucket: string;
}

export interface UploadResult {
  key: string;
  location: string;
  bucket: string;
  etag?: string;
}

export class S3Service {
  private s3Client: S3Client;
  private config: S3Config;

  constructor(config: S3Config) {
    this.config = config;
    this.s3Client = new S3Client({
      endpoint: config.endpoint,
      region: config.region,
      credentials: {
        accessKeyId: config.accessKeyId,
        secretAccessKey: config.secretAccessKey,
      },
      forcePathStyle: true, // Required for MinIO
    });
  }

  async uploadFile(key: string, body: Buffer | Uint8Array | string | Readable, contentType?: string): Promise<UploadResult> {
    const upload = new Upload({
      client: this.s3Client,
      params: {
        Bucket: this.config.bucket,
        Key: key,
        Body: body,
        ContentType: contentType,
      },
    });

    const result = await upload.done();

    return {
      key,
      location: result.Location || `${this.config.endpoint}/${this.config.bucket}/${key}`,
      bucket: this.config.bucket,
      etag: result.ETag,
    };
  }

  async downloadFile(key: string): Promise<Buffer> {
    const command = new GetObjectCommand({
      Bucket: this.config.bucket,
      Key: key,
    });

    const response = await this.s3Client.send(command);
    const chunks: Uint8Array[] = [];
    
    if (response.Body) {
      const stream = response.Body as any;
      for await (const chunk of stream) {
        chunks.push(chunk);
      }
    }

    return Buffer.concat(chunks);
  }

  async listFiles(prefix?: string): Promise<string[]> {
    const command = new ListObjectsV2Command({
      Bucket: this.config.bucket,
      Prefix: prefix,
    });

    const response = await this.s3Client.send(command);
    return response.Contents?.map(obj => obj.Key!) || [];
  }

  async deleteFile(key: string): Promise<void> {
    const command = new DeleteObjectCommand({
      Bucket: this.config.bucket,
      Key: key,
    });

    await this.s3Client.send(command);
  }

  getFileUrl(key: string): string {
    return `${this.config.endpoint}/${this.config.bucket}/${key}`;
  }
}