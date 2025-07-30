# WorkflowTemplateStateEscalation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Amount of the selected escalation units of time. | [optional] [default to undefined]
**comment** | **string** | Comment to save to the workflow instance when the escalation is executed. | [optional] [default to undefined]
**condition** | **string** | The condition that will determine if this object is executed or not. Conditions that do not return any value, that return the Python logical None, or an empty string (\&#39;\&#39;) are considered to be logical false, any other value is considered to be the logical true. | [optional] [default to undefined]
**enabled** | **boolean** | Enable automatic transition the workflow after a specified amount of time has elapsed in the state without change. | [optional] [default to undefined]
**id** | **number** |  | [optional] [readonly] [default to undefined]
**priority** | **number** | Determine the order in which the escalations will be evaluated. Escalations with a lower priority number are executed before escalations with a higher priority number. | [optional] [default to undefined]
**url** | **string** |  | [optional] [readonly] [default to undefined]
**unit** | **string** |  | [optional] [default to undefined]
**workflow_template_state_id** | **number** |  | [optional] [readonly] [default to undefined]
**workflow_template_state_url** | **string** |  | [optional] [readonly] [default to undefined]
**workflow_template_transition_id** | **number** | Primary key of the workflow template transition to be added. | [default to undefined]
**workflow_template_transition_url** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { WorkflowTemplateStateEscalation } from './api';

const instance: WorkflowTemplateStateEscalation = {
    amount,
    comment,
    condition,
    enabled,
    id,
    priority,
    url,
    unit,
    workflow_template_state_id,
    workflow_template_state_url,
    workflow_template_transition_id,
    workflow_template_transition_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
