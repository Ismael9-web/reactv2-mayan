# BatchRequestsApi

All URIs are relative to *http://localhost/api/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**batchRequestsCreate**](#batchrequestscreate) | **POST** /batch_requests/ | |

# **batchRequestsCreate**
> BatchAPIRequestResponse batchRequestsCreate(data)

Submit a batch API request.

### Example

```typescript
import {
    BatchRequestsApi,
    Configuration,
    BatchAPIRequestResponse
} from './api';

const configuration = new Configuration();
const apiInstance = new BatchRequestsApi(configuration);

let data: BatchAPIRequestResponse; //

const { status, data } = await apiInstance.batchRequestsCreate(
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **BatchAPIRequestResponse**|  | |


### Return type

**BatchAPIRequestResponse**

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

