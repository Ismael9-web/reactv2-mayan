# WorkflowTemplateTransition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition** | **string** | The condition that will determine if this transition is enabled or not. The condition is evaluated against the workflow instance. Conditions that do not return any value, that return the Python logical None, or an empty string (\&#39;\&#39;) are considered to be logical false, any other value is considered to be the logical true. | [optional] [default to undefined]
**destination_state** | [**WorkflowTemplateState**](WorkflowTemplateState.md) |  | [optional] [default to undefined]
**destination_state_id** | **number** | Primary key of the destination state to be added. | [default to undefined]
**field_list_url** | **string** |  | [optional] [readonly] [default to undefined]
**id** | **number** |  | [optional] [readonly] [default to undefined]
**label** | **string** | A short text to describe the transition. | [default to undefined]
**origin_state** | [**WorkflowTemplateState**](WorkflowTemplateState.md) |  | [optional] [default to undefined]
**origin_state_id** | **number** | Primary key of the origin state to be added. | [default to undefined]
**trigger_list_url** | **string** |  | [optional] [readonly] [default to undefined]
**url** | **string** |  | [optional] [readonly] [default to undefined]
**workflow_template_id** | **number** |  | [optional] [readonly] [default to undefined]
**workflow_template_url** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { WorkflowTemplateTransition } from './api';

const instance: WorkflowTemplateTransition = {
    condition,
    destination_state,
    destination_state_id,
    field_list_url,
    id,
    label,
    origin_state,
    origin_state_id,
    trigger_list_url,
    url,
    workflow_template_id,
    workflow_template_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
