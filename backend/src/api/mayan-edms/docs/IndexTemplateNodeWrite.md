# IndexTemplateNodeWrite


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**children** | [**Array&lt;IndexTemplateNodeWrite&gt;**](IndexTemplateNodeWrite.md) |  | [optional] [default to undefined]
**enabled** | **boolean** | Causes this node to be visible and updated when document data changes. | [optional] [default to undefined]
**expression** | **string** | Enter a template to render. Use Django\&#39;s default templating language. | [default to undefined]
**id** | **number** |  | [optional] [readonly] [default to undefined]
**index** | **number** |  | [optional] [readonly] [default to undefined]
**index_url** | **string** |  | [optional] [readonly] [default to undefined]
**level** | **number** |  | [optional] [readonly] [default to undefined]
**link_documents** | **boolean** | Check this option to have this node act as a container for documents and not as a parent for further nodes. | [optional] [default to undefined]
**parent** | **number** | Parent index template node of this node. | [default to undefined]
**parent_url** | **string** |  | [optional] [readonly] [default to undefined]
**url** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { IndexTemplateNodeWrite } from './api';

const instance: IndexTemplateNodeWrite = {
    children,
    enabled,
    expression,
    id,
    index,
    index_url,
    level,
    link_documents,
    parent,
    parent_url,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
