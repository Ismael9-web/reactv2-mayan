# AppImageErrorsApi

All URIs are relative to *http://localhost/api/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**appImageErrorsImageRead**](#appimageerrorsimageread) | **GET** /app_image_errors/{app_image_error_name}/image/ | |
|[**appImageErrorsList**](#appimageerrorslist) | **GET** /app_image_errors/ | |
|[**appImageErrorsRead**](#appimageerrorsread) | **GET** /app_image_errors/{app_image_error_name}/ | |

# **appImageErrorsImageRead**
> appImageErrorsImageRead()

Returns an image representation of the selected app image error.

### Example

```typescript
import {
    AppImageErrorsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AppImageErrorsApi(configuration);

let appImageErrorName: string; // (default to undefined)

const { status, data } = await apiInstance.appImageErrorsImageRead(
    appImageErrorName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appImageErrorName** | [**string**] |  | defaults to undefined|


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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **appImageErrorsList**
> AppImageErrorsList200Response appImageErrorsList()

Returns an list of the available app image errors.

### Example

```typescript
import {
    AppImageErrorsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AppImageErrorsApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.appImageErrorsList(
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

**AppImageErrorsList200Response**

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

# **appImageErrorsRead**
> AppImageError appImageErrorsRead()

Returns the details of the selected app image error.

### Example

```typescript
import {
    AppImageErrorsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AppImageErrorsApi(configuration);

let appImageErrorName: string; // (default to undefined)

const { status, data } = await apiInstance.appImageErrorsRead(
    appImageErrorName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appImageErrorName** | [**string**] |  | defaults to undefined|


### Return type

**AppImageError**

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

