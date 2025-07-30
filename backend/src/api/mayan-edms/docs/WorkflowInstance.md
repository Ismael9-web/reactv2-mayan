# WorkflowInstance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | **string** |  | [optional] [readonly] [default to undefined]
**current_state** | [**WorkflowTemplateState**](WorkflowTemplateState.md) |  | [optional] [default to undefined]
**document_url** | **string** |  | [optional] [readonly] [default to undefined]
**id** | **number** |  | [optional] [readonly] [default to undefined]
**last_log_entry** | [**WorkflowInstanceLogEntry**](WorkflowInstanceLogEntry.md) |  | [optional] [default to undefined]
**log_entries_url** | **string** | A link to the entire history of this workflow. | [optional] [readonly] [default to undefined]
**log_entry_transitions_url** | **string** |  | [optional] [readonly] [default to undefined]
**url** | **string** | API URL pointing to a workflow in relation to the document to which it is attached. This URL is different than the canonical workflow URL. | [optional] [readonly] [default to undefined]
**workflow_template** | [**WorkflowTemplate**](WorkflowTemplate.md) |  | [optional] [default to undefined]
**workflow_template_url** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { WorkflowInstance } from './api';

const instance: WorkflowInstance = {
    context,
    current_state,
    document_url,
    id,
    last_log_entry,
    log_entries_url,
    log_entry_transitions_url,
    url,
    workflow_template,
    workflow_template_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
