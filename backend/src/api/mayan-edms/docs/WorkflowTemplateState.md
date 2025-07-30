# WorkflowTemplateState


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions_url** | **string** |  | [optional] [readonly] [default to undefined]
**completion** | **number** | The percent of completion that this state represents in relation to the workflow. Use numbers without the percent sign. | [optional] [default to undefined]
**documents_url** | **string** |  | [optional] [readonly] [default to undefined]
**escalations_url** | **string** |  | [optional] [readonly] [default to undefined]
**_final** | **boolean** | The state at which the workflow will stop. Only one state can be the final state. | [optional] [default to undefined]
**id** | **number** |  | [optional] [readonly] [default to undefined]
**initial** | **boolean** | The state at which the workflow will start in. Only one state can be the initial state. | [optional] [default to undefined]
**label** | **string** | A short text to describe the workflow state. | [default to undefined]
**url** | **string** |  | [optional] [readonly] [default to undefined]
**workflow_template_id** | **number** |  | [optional] [readonly] [default to undefined]
**workflow_template_url** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { WorkflowTemplateState } from './api';

const instance: WorkflowTemplateState = {
    actions_url,
    completion,
    documents_url,
    escalations_url,
    _final,
    id,
    initial,
    label,
    url,
    workflow_template_id,
    workflow_template_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
