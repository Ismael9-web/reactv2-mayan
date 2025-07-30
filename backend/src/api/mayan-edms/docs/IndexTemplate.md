# IndexTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_types_add_url** | **string** | URL of the API endpoint to add document types to this index template. | [optional] [readonly] [default to undefined]
**document_types_url** | **string** | URL of the API endpoint showing the list document types associated with this index template. | [optional] [readonly] [default to undefined]
**document_types_remove_url** | **string** | URL of the API endpoint to remove document types from this index template. | [optional] [readonly] [default to undefined]
**enabled** | **boolean** | Causes this index to be visible and updated when document data changes. | [optional] [default to undefined]
**id** | **number** |  | [optional] [readonly] [default to undefined]
**index_template_root_node_id** | **string** |  | [optional] [readonly] [default to undefined]
**label** | **string** | Short description of this index. | [default to undefined]
**nodes_url** | **string** |  | [optional] [readonly] [default to undefined]
**rebuild_url** | **string** |  | [optional] [readonly] [default to undefined]
**reset_url** | **string** |  | [optional] [readonly] [default to undefined]
**slug** | **string** | This value will be used by other apps to reference this index. | [default to undefined]
**url** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { IndexTemplate } from './api';

const instance: IndexTemplate = {
    document_types_add_url,
    document_types_url,
    document_types_remove_url,
    enabled,
    id,
    index_template_root_node_id,
    label,
    nodes_url,
    rebuild_url,
    reset_url,
    slug,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
