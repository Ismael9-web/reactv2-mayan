# WorkflowTemplateStateAction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend_data** | **string** | JSON encoded data for the backend class. | [optional] [default to undefined]
**backend_path** | **string** | The dotted Python path to the backend class. | [default to undefined]
**condition** | **string** | The condition that will determine if this state action is executed or not. The condition is evaluated against the workflow instance. Conditions that do not return any value, that return the Python logical None, or an empty string (\&#39;\&#39;) are considered to be logical false, any other value is considered to be the logical true. | [optional] [default to undefined]
**enabled** | **boolean** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [readonly] [default to undefined]
**label** | **string** | A short text describing the action. Actions are execute by alphabetical order. | [default to undefined]
**url** | **string** |  | [optional] [readonly] [default to undefined]
**when** | **number** | At which moment of the state this action will execute. | [optional] [default to undefined]
**workflow_template_state_id** | **number** |  | [optional] [readonly] [default to undefined]
**workflow_template_state_url** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { WorkflowTemplateStateAction } from './api';

const instance: WorkflowTemplateStateAction = {
    backend_data,
    backend_path,
    condition,
    enabled,
    id,
    label,
    url,
    when,
    workflow_template_state_id,
    workflow_template_state_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
