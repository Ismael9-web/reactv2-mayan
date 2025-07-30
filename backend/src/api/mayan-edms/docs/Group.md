# Group


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [readonly] [default to undefined]
**name** | **string** |  | [default to undefined]
**url** | **string** |  | [optional] [readonly] [default to undefined]
**users_url** | **string** | URL of the API endpoint showing the list users of this group. | [optional] [readonly] [default to undefined]
**users_add_url** | **string** |  | [optional] [readonly] [default to undefined]
**users_remove_url** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { Group } from './api';

const instance: Group = {
    id,
    name,
    url,
    users_url,
    users_add_url,
    users_remove_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
