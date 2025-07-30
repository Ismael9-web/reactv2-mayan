# Cabinet


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**children** | [**Array&lt;Cabinet&gt;**](Cabinet.md) |  | [optional] [default to undefined]
**documents_url** | **string** | URL of the API endpoint showing the list documents inside this cabinet. | [optional] [readonly] [default to undefined]
**full_path** | **string** | The name of this cabinet level appended to the names of its ancestors. | [optional] [readonly] [default to undefined]
**id** | **number** |  | [optional] [readonly] [default to undefined]
**label** | **string** | A short text used to identify the cabinet. | [default to undefined]
**parent_id** | **string** |  | [optional] [readonly] [default to undefined]
**parent** | **number** |  | [optional] [default to undefined]
**parent_url** | **string** |  | [optional] [readonly] [default to undefined]
**url** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { Cabinet } from './api';

const instance: Cabinet = {
    children,
    documents_url,
    full_path,
    id,
    label,
    parent_id,
    parent,
    parent_url,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
