# DocumentTypeDriverConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arguments** | **string** | Enter the arguments for the drive for the specific document type as a YAML dictionary. ie: {\&quot;degrees\&quot;: 180} | [optional] [default to undefined]
**document_type** | [**DocumentType**](DocumentType.md) |  | [optional] [default to undefined]
**enabled** | **boolean** | Enable this driver to process document files of the selected document type. | [optional] [default to undefined]
**stored_driver** | [**StoredDriver**](StoredDriver.md) |  | [optional] [default to undefined]
**url** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { DocumentTypeDriverConfiguration } from './api';

const instance: DocumentTypeDriverConfiguration = {
    arguments,
    document_type,
    enabled,
    stored_driver,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
