# Announcement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_datetime** | **string** | Date and time until when this announcement is to be displayed. | [optional] [default to undefined]
**enabled** | **boolean** |  | [optional] [default to undefined]
**label** | **string** | Short description of this announcement. | [default to undefined]
**id** | **number** |  | [optional] [readonly] [default to undefined]
**start_datetime** | **string** | Date and time after which this announcement will be displayed. | [optional] [default to undefined]
**text** | **string** | The actual text to be displayed. | [default to undefined]
**url** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { Announcement } from './api';

const instance: Announcement = {
    end_datetime,
    enabled,
    label,
    id,
    start_datetime,
    text,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
