# SavedResultsetsApi

All URIs are relative to *http://localhost/api/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**savedResultsetsCreate**](#savedresultsetscreate) | **POST** /saved_resultsets/{search_model_pk}/ | |
|[**savedResultsetsDelete**](#savedresultsetsdelete) | **DELETE** /saved_resultsets/{saved_resultset_id}/ | |
|[**savedResultsetsList**](#savedresultsetslist) | **GET** /saved_resultsets/ | |
|[**savedResultsetsRead**](#savedresultsetsread) | **GET** /saved_resultsets/{saved_resultset_id}/ | |
|[**savedResultsetsResultsList**](#savedresultsetsresultslist) | **GET** /saved_resultsets/{saved_resultset_id}/results/ | |

# **savedResultsetsCreate**
> SavedResultset savedResultsetsCreate(data)

Create a saved resultset.

### Example

```typescript
import {
    SavedResultsetsApi,
    Configuration,
    SavedResultset
} from './api';

const configuration = new Configuration();
const apiInstance = new SavedResultsetsApi(configuration);

let searchModelPk: string; // (default to undefined)
let data: SavedResultset; //

const { status, data } = await apiInstance.savedResultsetsCreate(
    searchModelPk,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **SavedResultset**|  | |
| **searchModelPk** | [**string**] |  | defaults to undefined|


### Return type

**SavedResultset**

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

# **savedResultsetsDelete**
> savedResultsetsDelete()

Delete the selected saved resultset.

### Example

```typescript
import {
    SavedResultsetsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SavedResultsetsApi(configuration);

let savedResultsetId: string; // (default to undefined)

const { status, data } = await apiInstance.savedResultsetsDelete(
    savedResultsetId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **savedResultsetId** | [**string**] |  | defaults to undefined|


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

# **savedResultsetsList**
> SavedResultsetsList200Response savedResultsetsList()

Returns a list of all the saved resultsets.

### Example

```typescript
import {
    SavedResultsetsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SavedResultsetsApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.savedResultsetsList(
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

**SavedResultsetsList200Response**

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

# **savedResultsetsRead**
> SavedResultset savedResultsetsRead()

Return the details of the selected saved resultset.

### Example

```typescript
import {
    SavedResultsetsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SavedResultsetsApi(configuration);

let savedResultsetId: string; // (default to undefined)

const { status, data } = await apiInstance.savedResultsetsRead(
    savedResultsetId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **savedResultsetId** | [**string**] |  | defaults to undefined|


### Return type

**SavedResultset**

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

# **savedResultsetsResultsList**
> SavedResultsetsResultsList200Response savedResultsetsResultsList()

Return the results of the selected saved resultset.

### Example

```typescript
import {
    SavedResultsetsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SavedResultsetsApi(configuration);

let savedResultsetId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.savedResultsetsResultsList(
    savedResultsetId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **savedResultsetId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**SavedResultsetsResultsList200Response**

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

