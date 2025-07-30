# Message


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **string** | The actual content of the message. | [default to undefined]
**date_time** | **string** | Date and time of the message creation. | [optional] [readonly] [default to undefined]
**id** | **number** |  | [optional] [readonly] [default to undefined]
**read** | **boolean** | This field determines if the message has been read or not. | [optional] [default to undefined]
**sender_app_label** | **string** |  | [optional] [readonly] [default to undefined]
**sender_model_name** | **string** |  | [optional] [readonly] [default to undefined]
**sender_object_id** | **number** |  | [optional] [readonly] [default to undefined]
**sender_url** | **string** |  | [optional] [readonly] [default to undefined]
**subject** | **string** | Short description of this message. | [default to undefined]
**url** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { Message } from './api';

const instance: Message = {
    body,
    date_time,
    id,
    read,
    sender_app_label,
    sender_model_name,
    sender_object_id,
    sender_url,
    subject,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
