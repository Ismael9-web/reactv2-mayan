# SignatureCapture


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **string** | Data representing the handwritten signature. | [optional] [default to undefined]
**document_id** | **string** |  | [optional] [readonly] [default to undefined]
**document_url** | **string** |  | [optional] [readonly] [default to undefined]
**id** | **number** |  | [optional] [readonly] [default to undefined]
**image_url** | **string** |  | [optional] [readonly] [default to undefined]
**internal_name** | **string** | This value will be used when referencing this signature capture in relationship to the document. Can only contain letters, numbers, and underscores. | [default to undefined]
**text** | **string** | Print version of the captured signature. | [default to undefined]
**url** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { SignatureCapture } from './api';

const instance: SignatureCapture = {
    data,
    document_id,
    document_url,
    id,
    image_url,
    internal_name,
    text,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
