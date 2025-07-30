# SmartLinkCondition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** |  | [optional] [default to undefined]
**expression** | **string** | The expression using document properties to be evaluated against the foreign document field. | [default to undefined]
**foreign_document_data** | **string** | This represents the metadata of all other documents. | [default to undefined]
**inclusion** | **string** | The inclusion is ignored for the first item. | [optional] [default to undefined]
**id** | **number** |  | [optional] [readonly] [default to undefined]
**negated** | **boolean** | Inverts the logic of the operator. | [optional] [default to undefined]
**operator** | **string** |  | [default to undefined]
**smart_link_id** | **string** |  | [optional] [readonly] [default to undefined]
**smart_link_url** | **string** |  | [optional] [readonly] [default to undefined]
**url** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { SmartLinkCondition } from './api';

const instance: SmartLinkCondition = {
    enabled,
    expression,
    foreign_document_data,
    inclusion,
    id,
    negated,
    operator,
    smart_link_id,
    smart_link_url,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
