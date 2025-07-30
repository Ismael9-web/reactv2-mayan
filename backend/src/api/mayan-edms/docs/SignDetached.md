# SignDetached


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | Primary key of the secret key used to sign the document file. | [default to undefined]
**passphrase** | **string** | The passphrase to unlock the key and allow it to be used to sign the document file. | [optional] [default to undefined]

## Example

```typescript
import { SignDetached } from './api';

const instance: SignDetached = {
    key,
    passphrase,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
