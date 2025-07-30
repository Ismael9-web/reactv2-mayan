# DocumentVersionPage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_type** | [**ContentType**](ContentType.md) |  | [optional] [default to undefined]
**content_type_id** | **number** | Content type ID of the source object for the page. | [default to undefined]
**document_version_id** | **string** |  | [optional] [readonly] [default to undefined]
**document_version_url** | **string** |  | [optional] [readonly] [default to undefined]
**id** | **number** |  | [optional] [readonly] [default to undefined]
**image_url** | **string** |  | [optional] [readonly] [default to undefined]
**object_id** | **number** | ID for the source object of the page. | [default to undefined]
**page_number** | **number** | Unique integer number for the page. Pages are ordered by this number. | [optional] [default to undefined]
**url** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { DocumentVersionPage } from './api';

const instance: DocumentVersionPage = {
    content_type,
    content_type_id,
    document_version_id,
    document_version_url,
    id,
    image_url,
    object_id,
    page_number,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
