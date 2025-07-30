# SearchModelsApi

All URIs are relative to *http://localhost/api/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**searchModelsList**](#searchmodelslist) | **GET** /search_models/ | |
|[**searchModelsRead**](#searchmodelsread) | **GET** /search_models/{search_model_pk}/ | |

# **searchModelsList**
> SearchModelsList200Response searchModelsList()

Returns a list of all the available search models.

### Example

```typescript
import {
    SearchModelsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SearchModelsApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.searchModelsList(
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

**SearchModelsList200Response**

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

# **searchModelsRead**
> SearchModel searchModelsRead()

Returns the details of the selected search models.

### Example

```typescript
import {
    SearchModelsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SearchModelsApi(configuration);

let searchModelPk: string; // (default to undefined)

const { status, data } = await apiInstance.searchModelsRead(
    searchModelPk
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **searchModelPk** | [**string**] |  | defaults to undefined|


### Return type

**SearchModel**

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

