# Event


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [readonly] [default to undefined]
**actor** | **string** |  | [optional] [readonly] [default to undefined]
**actor_content_type** | [**ContentType**](ContentType.md) |  | [optional] [default to undefined]
**target** | **string** |  | [optional] [readonly] [default to undefined]
**target_content_type** | [**ContentType**](ContentType.md) |  | [optional] [default to undefined]
**verb** | [**EventType**](EventType.md) |  | [optional] [default to undefined]
**actor_object_id** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**target_object_id** | **string** |  | [optional] [default to undefined]
**timestamp** | **string** |  | [optional] [default to undefined]
**_public** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { Event } from './api';

const instance: Event = {
    id,
    actor,
    actor_content_type,
    target,
    target_content_type,
    verb,
    actor_object_id,
    description,
    target_object_id,
    timestamp,
    _public,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
