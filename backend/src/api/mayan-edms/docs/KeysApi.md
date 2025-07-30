# KeysApi

All URIs are relative to *http://localhost/api/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**keysCreate**](#keyscreate) | **POST** /keys/ | |
|[**keysDelete**](#keysdelete) | **DELETE** /keys/{key_id}/ | |
|[**keysList**](#keyslist) | **GET** /keys/ | |
|[**keysRead**](#keysread) | **GET** /keys/{key_id}/ | |

# **keysCreate**
> Key keysCreate(data)

Upload a new key.

### Example

```typescript
import {
    KeysApi,
    Configuration,
    Key
} from './api';

const configuration = new Configuration();
const apiInstance = new KeysApi(configuration);

let data: Key; //

const { status, data } = await apiInstance.keysCreate(
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Key**|  | |


### Return type

**Key**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **keysDelete**
> keysDelete()

Delete the selected key.

### Example

```typescript
import {
    KeysApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new KeysApi(configuration);

let keyId: string; // (default to undefined)

const { status, data } = await apiInstance.keysDelete(
    keyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **keyId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **keysList**
> KeysList200Response keysList()

Returns a list of all the keys.

### Example

```typescript
import {
    KeysApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new KeysApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.keysList(
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**KeysList200Response**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **keysRead**
> Key keysRead()

Return the details of the selected key.

### Example

```typescript
import {
    KeysApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new KeysApi(configuration);

let keyId: string; // (default to undefined)

const { status, data } = await apiInstance.keysRead(
    keyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **keyId** | [**string**] |  | defaults to undefined|


### Return type

**Key**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

