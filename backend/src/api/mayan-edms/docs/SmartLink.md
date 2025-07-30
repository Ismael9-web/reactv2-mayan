# SmartLink


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions_url** | **string** |  | [optional] [readonly] [default to undefined]
**document_types_url** | **string** |  | [optional] [readonly] [default to undefined]
**document_types_add_url** | **string** |  | [optional] [readonly] [default to undefined]
**document_types_remove_url** | **string** |  | [optional] [readonly] [default to undefined]
**dynamic_label** | **string** | Use this field to show a unique label depending on the document from which the smart link is being accessed. | [optional] [default to undefined]
**enabled** | **boolean** |  | [optional] [default to undefined]
**label** | **string** | A short text describing the smart link. | [default to undefined]
**id** | **number** |  | [optional] [readonly] [default to undefined]
**url** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { SmartLink } from './api';

const instance: SmartLink = {
    conditions_url,
    document_types_url,
    document_types_add_url,
    document_types_remove_url,
    dynamic_label,
    enabled,
    label,
    id,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
