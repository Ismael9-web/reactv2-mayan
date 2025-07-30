# DocumentCheckout


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checkout_datetime** | **string** |  | [optional] [readonly] [default to undefined]
**document** | [**Document**](Document.md) |  | [default to undefined]
**expiration_datetime** | **string** | Amount of time to hold the document checked out in minutes. | [default to undefined]
**id** | **number** |  | [optional] [readonly] [default to undefined]
**url** | **string** |  | [optional] [readonly] [default to undefined]
**user** | [**User**](User.md) |  | [default to undefined]

## Example

```typescript
import { DocumentCheckout } from './api';

const instance: DocumentCheckout = {
    checkout_datetime,
    document,
    expiration_datetime,
    id,
    url,
    user,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
