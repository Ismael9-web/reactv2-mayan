# WorkflowTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_launch** | **boolean** | Launch workflow when document is created. | [optional] [default to undefined]
**document_types_add_url** | **string** |  | [optional] [readonly] [default to undefined]
**document_types_remove_url** | **string** |  | [optional] [readonly] [default to undefined]
**document_types_url** | **string** |  | [optional] [readonly] [default to undefined]
**documents_url** | **string** |  | [optional] [readonly] [default to undefined]
**id** | **number** |  | [optional] [readonly] [default to undefined]
**ignore_completed** | **boolean** | Ignore workflow instances if they are in their final state. | [optional] [default to undefined]
**image_url** | **string** |  | [optional] [readonly] [default to undefined]
**internal_name** | **string** | This value will be used by other apps to reference this workflow. Can only contain letters, numbers, and underscores. | [default to undefined]
**label** | **string** | A short text to describe the workflow. | [default to undefined]
**states_url** | **string** |  | [optional] [readonly] [default to undefined]
**transitions_url** | **string** |  | [optional] [readonly] [default to undefined]
**url** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { WorkflowTemplate } from './api';

const instance: WorkflowTemplate = {
    auto_launch,
    document_types_add_url,
    document_types_remove_url,
    document_types_url,
    documents_url,
    id,
    ignore_completed,
    image_url,
    internal_name,
    label,
    states_url,
    transitions_url,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
