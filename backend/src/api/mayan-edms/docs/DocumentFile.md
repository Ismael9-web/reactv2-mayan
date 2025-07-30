# DocumentFile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checksum** | **string** | A hash/checkdigit/fingerprint generated from the document\&#39;s binary data. Only identical documents will have the same checksum. | [optional] [readonly] [default to undefined]
**comment** | **string** | An optional short text describing the document file. | [optional] [default to undefined]
**document_id** | **string** |  | [optional] [readonly] [default to undefined]
**document_url** | **string** |  | [optional] [readonly] [default to undefined]
**encoding** | **string** | The document file file encoding. binary 7-bit, binary 8-bit, text, base64, etc. | [optional] [readonly] [default to undefined]
**file** | **string** |  | [optional] [readonly] [default to undefined]
**filename** | **string** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [readonly] [default to undefined]
**mimetype** | **string** | The document file\&#39;s file mimetype. MIME types are a standard way to describe the format of a file, in this case the file format of the document. Some examples: \&quot;text/plain\&quot; or \&quot;image/jpeg\&quot;.  | [optional] [readonly] [default to undefined]
**page_list_url** | **string** |  | [optional] [readonly] [default to undefined]
**pages_first** | [**DocumentFilePage**](DocumentFilePage.md) |  | [optional] [default to undefined]
**size** | **number** | The size of the file in bytes. | [optional] [readonly] [default to undefined]
**timestamp** | **string** | The server date and time when the document file was processed. | [optional] [readonly] [default to undefined]
**url** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { DocumentFile } from './api';

const instance: DocumentFile = {
    checksum,
    comment,
    document_id,
    document_url,
    encoding,
    file,
    filename,
    id,
    mimetype,
    page_list_url,
    pages_first,
    size,
    timestamp,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
