# User


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **string** | The given name of the user. | [optional] [default to undefined]
**date_joined** | **string** |  | [optional] [readonly] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**groups_url** | **string** | URL of the API endpoint showing the list groups this user belongs to. | [optional] [readonly] [default to undefined]
**id** | **number** |  | [optional] [readonly] [default to undefined]
**is_active** | **boolean** | Designates whether this user should be treated as active. Unselect this instead of deleting accounts. | [optional] [readonly] [default to undefined]
**last_login** | **string** |  | [optional] [readonly] [default to undefined]
**last_name** | **string** | The family name of the user. | [optional] [default to undefined]
**password** | **string** |  | [optional] [default to undefined]
**url** | **string** |  | [optional] [readonly] [default to undefined]
**username** | **string** | Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. | [default to undefined]

## Example

```typescript
import { User } from './api';

const instance: User = {
    first_name,
    date_joined,
    email,
    groups_url,
    id,
    is_active,
    last_login,
    last_name,
    password,
    url,
    username,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
