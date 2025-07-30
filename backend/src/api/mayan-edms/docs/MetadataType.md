# MetadataType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_default** | **string** | Enter a template to render. | [optional] [default to undefined]
**id** | **number** |  | [optional] [readonly] [default to undefined]
**label** | **string** | Short description of this metadata type. | [default to undefined]
**lookup** | **string** | Enter a template to render. Must result in a comma delimited string. | [optional] [default to undefined]
**name** | **string** | Name used by other apps to reference this metadata type. Do not use python reserved words, or spaces. | [default to undefined]
**parser** | **string** | The parser will reformat the value entered to conform to the expected format. | [optional] [default to undefined]
**parser_arguments** | **string** | Enter the arguments for the parser in YAML format. | [optional] [default to undefined]
**url** | **string** |  | [optional] [readonly] [default to undefined]
**validation** | **string** | The validator will reject data entry if the value entered does not conform to the expected format. | [optional] [default to undefined]
**validation_arguments** | **string** | Enter the arguments for the validator in YAML format. | [optional] [default to undefined]

## Example

```typescript
import { MetadataType } from './api';

const instance: MetadataType = {
    _default,
    id,
    label,
    lookup,
    name,
    parser,
    parser_arguments,
    url,
    validation,
    validation_arguments,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
