# DocumentMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | [**Document**](Document.md) |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [readonly] [default to undefined]
**metadata_type** | [**MetadataType**](MetadataType.md) |  | [optional] [default to undefined]
**url** | **string** |  | [optional] [readonly] [default to undefined]
**value** | **string** | The actual value stored in the metadata type field for the document. | [optional] [default to undefined]

## Example

```typescript
import { DocumentMetadata } from './api';

const instance: DocumentMetadata = {
    document,
    id,
    metadata_type,
    url,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
