# DocumentFileMetadataEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [readonly] [default to undefined]
**internal_name** | **string** | Normalized name of the file metadata entry. | [optional] [readonly] [default to undefined]
**key** | **string** | Name of the file metadata entry as provided by the driver. | [optional] [readonly] [default to undefined]
**url** | **string** |  | [optional] [readonly] [default to undefined]
**value** | **string** | Value of the file metadata entry. | [optional] [readonly] [default to undefined]

## Example

```typescript
import { DocumentFileMetadataEntry } from './api';

const instance: DocumentFileMetadataEntry = {
    id,
    internal_name,
    key,
    url,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
