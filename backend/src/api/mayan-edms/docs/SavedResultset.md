# SavedResultset


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_label** | **string** |  | [optional] [readonly] [default to undefined]
**id** | **number** |  | [optional] [readonly] [default to undefined]
**model_name** | **string** |  | [optional] [readonly] [default to undefined]
**result_count** | **number** | Number of results stored in the resultset. | [optional] [readonly] [default to undefined]
**results_url** | **string** |  | [optional] [readonly] [default to undefined]
**search_explainer_text** | **string** |  | [optional] [readonly] [default to undefined]
**time_to_live** | **number** | Time to keep the resultset in seconds. This value is increased every time the resultset is accessed. | [optional] [readonly] [default to undefined]
**timestamp** | **string** | The server date and time when the resultset was created. | [optional] [readonly] [default to undefined]
**url** | **string** |  | [optional] [readonly] [default to undefined]
**user** | [**User**](User.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SavedResultset } from './api';

const instance: SavedResultset = {
    app_label,
    id,
    model_name,
    result_count,
    results_url,
    search_explainer_text,
    time_to_live,
    timestamp,
    url,
    user,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
