# DocumentFileSourceMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_file** | [**DocumentFile**](DocumentFile.md) |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [readonly] [default to undefined]
**key** | **string** | Name of the source metadata entry. | [optional] [readonly] [default to undefined]
**url** | **string** |  | [optional] [readonly] [default to undefined]
**value** | **string** | The actual value stored in the source metadata for the document file. | [optional] [readonly] [default to undefined]

## Example

```typescript
import { DocumentFileSourceMetadata } from './api';

const instance: DocumentFileSourceMetadata = {
    document_file,
    id,
    key,
    url,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
