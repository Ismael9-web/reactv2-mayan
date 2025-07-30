# Comment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [readonly] [default to undefined]
**submit_date** | **string** |  | [optional] [readonly] [default to undefined]
**text** | **string** | Actual text content of the comment. | [default to undefined]
**url** | **string** |  | [optional] [readonly] [default to undefined]
**user** | [**User**](User.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Comment } from './api';

const instance: Comment = {
    id,
    submit_date,
    text,
    url,
    user,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
