# StoredCredential


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **string** | Short description of this credential. | [default to undefined]
**backend_path** | **string** | The dotted Python path to the backend class. | [default to undefined]
**backend_data** | **string** | JSON encoded data for the backend class. | [optional] [default to undefined]
**id** | **number** |  | [optional] [readonly] [default to undefined]
**url** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { StoredCredential } from './api';

const instance: StoredCredential = {
    label,
    backend_path,
    backend_data,
    id,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
