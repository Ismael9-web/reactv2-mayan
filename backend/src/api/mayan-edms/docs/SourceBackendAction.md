# SourceBackendAction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accept_files** | **boolean** |  | [optional] [readonly] [default to undefined]
**arguments** | **object** | Optional arguments for the action. Must be JSON formatted. | [optional] [default to undefined]
**confirmation** | **boolean** |  | [optional] [readonly] [default to undefined]
**execute_url** | **string** |  | [optional] [readonly] [default to undefined]
**interfaces** | [**Array&lt;SourceBackendActionInterface&gt;**](SourceBackendActionInterface.md) |  | [optional] [readonly] [default to undefined]
**name** | **string** |  | [optional] [readonly] [default to undefined]
**permission** | [**Permission**](Permission.md) |  | [optional] [default to undefined]
**source_id** | **string** |  | [optional] [readonly] [default to undefined]
**source_url** | **string** |  | [optional] [readonly] [default to undefined]
**url** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { SourceBackendAction } from './api';

const instance: SourceBackendAction = {
    accept_files,
    arguments,
    confirmation,
    execute_url,
    interfaces,
    name,
    permission,
    source_id,
    source_url,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
