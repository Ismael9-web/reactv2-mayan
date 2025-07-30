# WorkflowTransitionField


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_type** | **number** |  | [default to undefined]
**name** | **string** | The name that will be used to identify this field in other parts of the workflow system. | [default to undefined]
**help_text** | **string** | An optional message that will help users better understand the purpose of the field and data to provide. | [optional] [default to undefined]
**id** | **number** |  | [optional] [readonly] [default to undefined]
**label** | **string** | The field name that will be shown on the user interface. | [default to undefined]
**lookup** | **string** | Enter a template to render. Must result in a comma delimited string. | [optional] [default to undefined]
**required** | **boolean** | Whether this field needs to be filled out or not to proceed. | [optional] [default to undefined]
**url** | **string** |  | [optional] [readonly] [default to undefined]
**widget** | **number** | An optional class to change the default presentation of the field. | [optional] [default to undefined]
**widget_kwargs** | **string** | A group of keyword arguments to customize the widget. Use YAML format. | [optional] [default to undefined]
**workflow_template_url** | **string** |  | [optional] [readonly] [default to undefined]
**workflow_transition_id** | **number** |  | [optional] [readonly] [default to undefined]
**workflow_transition_url** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { WorkflowTransitionField } from './api';

const instance: WorkflowTransitionField = {
    field_type,
    name,
    help_text,
    id,
    label,
    lookup,
    required,
    url,
    widget,
    widget_kwargs,
    workflow_template_url,
    workflow_transition_id,
    workflow_transition_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
