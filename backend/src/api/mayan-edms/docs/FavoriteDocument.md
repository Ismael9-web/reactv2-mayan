# FavoriteDocument


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | [**Document**](Document.md) |  | [optional] [default to undefined]
**document_id** | **number** | Document ID for the new favorite document. | [default to undefined]
**datetime_added** | **string** |  | [optional] [readonly] [default to undefined]
**id** | **number** |  | [optional] [readonly] [default to undefined]
**user** | [**User**](User.md) |  | [optional] [default to undefined]
**url** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { FavoriteDocument } from './api';

const instance: FavoriteDocument = {
    document,
    document_id,
    datetime_added,
    id,
    user,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
