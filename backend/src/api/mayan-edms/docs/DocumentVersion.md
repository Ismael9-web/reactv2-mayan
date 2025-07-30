# DocumentVersion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **boolean** | Determines the active version of the document. | [optional] [default to undefined]
**comment** | **string** | An optional short text describing the document version. | [optional] [default to undefined]
**document_id** | **string** |  | [optional] [readonly] [default to undefined]
**document_url** | **string** |  | [optional] [readonly] [default to undefined]
**export_url** | **string** |  | [optional] [readonly] [default to undefined]
**id** | **number** |  | [optional] [readonly] [default to undefined]
**page_list_url** | **string** |  | [optional] [readonly] [default to undefined]
**pages_first** | [**DocumentVersionPage**](DocumentVersionPage.md) |  | [optional] [default to undefined]
**timestamp** | **string** | The server date and time when the document version was created. | [optional] [readonly] [default to undefined]
**url** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { DocumentVersion } from './api';

const instance: DocumentVersion = {
    active,
    comment,
    document_id,
    document_url,
    export_url,
    id,
    page_list_url,
    pages_first,
    timestamp,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
