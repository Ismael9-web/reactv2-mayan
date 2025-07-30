# TrashedDocument


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datetime_created** | **string** | The date and time of the document creation. | [optional] [readonly] [default to undefined]
**description** | **string** | An optional short text describing a document. | [optional] [default to undefined]
**document_change_type_url** | **string** |  | [optional] [readonly] [default to undefined]
**document_type** | [**DocumentType**](DocumentType.md) |  | [optional] [default to undefined]
**document_type_id** | **number** | Document type ID for the new document. | [default to undefined]
**file_latest** | [**DocumentFile**](DocumentFile.md) |  | [optional] [default to undefined]
**file_list_url** | **string** |  | [optional] [readonly] [default to undefined]
**id** | **number** |  | [optional] [readonly] [default to undefined]
**image_url** | **string** |  | [optional] [readonly] [default to undefined]
**label** | **string** | A short text identifying the document. By default, will be set to the filename of the first file uploaded to the document. | [optional] [default to undefined]
**language** | **string** | The primary language in the document. | [optional] [default to undefined]
**restore_url** | **string** |  | [optional] [readonly] [default to undefined]
**trashed_date_time** | **string** | The server date and time when the document was moved to the trash. | [optional] [readonly] [default to undefined]
**url** | **string** |  | [optional] [readonly] [default to undefined]
**uuid** | **string** | UUID of a document, universally Unique ID. An unique identifier generated for each document. | [optional] [readonly] [default to undefined]
**version_active** | [**DocumentVersion**](DocumentVersion.md) |  | [optional] [default to undefined]
**version_list_url** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { TrashedDocument } from './api';

const instance: TrashedDocument = {
    datetime_created,
    description,
    document_change_type_url,
    document_type,
    document_type_id,
    file_latest,
    file_list_url,
    id,
    image_url,
    label,
    language,
    restore_url,
    trashed_date_time,
    url,
    uuid,
    version_active,
    version_list_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
