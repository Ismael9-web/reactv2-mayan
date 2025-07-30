# MailingProfile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend_data** | **string** | JSON encoded data for the backend class. | [optional] [default to undefined]
**backend_path** | **string** | The dotted Python path to the backend class. | [default to undefined]
**_default** | **boolean** | If default, this mailing profile will be pre-selected on the document mailing form. | [optional] [default to undefined]
**enabled** | **boolean** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [readonly] [default to undefined]
**label** | **string** | A short text describing the mailing profile. | [default to undefined]
**url** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { MailingProfile } from './api';

const instance: MailingProfile = {
    backend_data,
    backend_path,
    _default,
    enabled,
    id,
    label,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
