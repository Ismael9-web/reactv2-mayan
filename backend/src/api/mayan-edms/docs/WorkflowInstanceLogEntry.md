# WorkflowInstanceLogEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **string** |  | [optional] [default to undefined]
**datetime** | **string** |  | [optional] [readonly] [default to undefined]
**document_url** | **string** |  | [optional] [readonly] [default to undefined]
**extra_data** | **string** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [readonly] [default to undefined]
**transition** | [**WorkflowTemplateTransition**](WorkflowTemplateTransition.md) |  | [optional] [default to undefined]
**transition_id** | **number** | Primary key of the transition to be added. | [default to undefined]
**url** | **string** |  | [optional] [readonly] [default to undefined]
**user** | [**User**](User.md) |  | [optional] [default to undefined]
**workflow_instance_url** | **string** |  | [optional] [readonly] [default to undefined]
**workflow_template_url** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { WorkflowInstanceLogEntry } from './api';

const instance: WorkflowInstanceLogEntry = {
    comment,
    datetime,
    document_url,
    extra_data,
    id,
    transition,
    transition_id,
    url,
    user,
    workflow_instance_url,
    workflow_template_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
