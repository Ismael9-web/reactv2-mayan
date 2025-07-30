# ContentTypesApi

All URIs are relative to *http://localhost/api/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**contentTypesList**](#contenttypeslist) | **GET** /content_types/ | |
|[**contentTypesRead**](#contenttypesread) | **GET** /content_types/{content_type_id}/ | |

# **contentTypesList**
> ContentTypesList200Response contentTypesList()

Returns a list of all the available content types.

### Example

```typescript
import {
    ContentTypesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ContentTypesApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.contentTypesList(
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

**ContentTypesList200Response**

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

# **contentTypesRead**
> ContentType contentTypesRead()

Returns the details of the selected content type.

### Example

```typescript
import {
    ContentTypesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ContentTypesApi(configuration);

let contentTypeId: string; // (default to undefined)

const { status, data } = await apiInstance.contentTypesRead(
    contentTypeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentTypeId** | [**string**] |  | defaults to undefined|


### Return type

**ContentType**

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

