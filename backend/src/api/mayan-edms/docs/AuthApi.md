# AuthApi

All URIs are relative to *http://localhost/api/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**authTokenObtainCreate**](#authtokenobtaincreate) | **POST** /auth/token/obtain/ | |

# **authTokenObtainCreate**
> AuthToken authTokenObtainCreate(data)

Obtain an API authentication token.

### Example

```typescript
import {
    AuthApi,
    Configuration,
    AuthToken
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let data: AuthToken; //

const { status, data } = await apiInstance.authTokenObtainCreate(
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **AuthToken**|  | |


### Return type

**AuthToken**

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

