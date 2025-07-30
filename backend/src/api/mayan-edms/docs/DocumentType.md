# DocumentType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delete_time_period** | **number** | Amount of time after which documents of this type in the trash will be deleted. | [optional] [default to undefined]
**delete_time_unit** | **string** |  | [optional] [default to undefined]
**document_stub_expiration_interval** | **number** | Time (in seconds) after which a document stub will be considered invalid and deleted, if pruning is enabled. This an optimization setting and should only be changed for specific circumstances. | [optional] [default to undefined]
**document_stub_pruning_enabled** | **boolean** | Delete documents that do not contain any files after a configured expiration interval. | [optional] [default to undefined]
**documents_url** | **string** |  | [optional] [readonly] [default to undefined]
**filename_generator_backend** | **string** | The class responsible for producing the actual filename used to store the uploaded documents. | [optional] [default to undefined]
**filename_generator_backend_arguments** | **string** | The arguments for the filename generator backend as a YAML dictionary. | [optional] [default to undefined]
**id** | **number** |  | [optional] [readonly] [default to undefined]
**label** | **string** | A short text identifying the document type. | [default to undefined]
**quick_label_list_url** | **string** |  | [optional] [readonly] [default to undefined]
**trash_time_period** | **number** | Amount of time after which documents of this type will be moved to the trash. | [optional] [default to undefined]
**trash_time_unit** | **string** |  | [optional] [default to undefined]
**url** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { DocumentType } from './api';

const instance: DocumentType = {
    delete_time_period,
    delete_time_unit,
    document_stub_expiration_interval,
    document_stub_pruning_enabled,
    documents_url,
    filename_generator_backend,
    filename_generator_backend_arguments,
    id,
    label,
    quick_label_list_url,
    trash_time_period,
    trash_time_unit,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
