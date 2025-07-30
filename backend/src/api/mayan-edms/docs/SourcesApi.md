# SourcesApi

All URIs are relative to *http://localhost/api/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**sourcesActionsExecuteCreate**](#sourcesactionsexecutecreate) | **POST** /sources/{source_id}/actions/{action_name}/execute/ | |
|[**sourcesActionsExecuteList**](#sourcesactionsexecutelist) | **GET** /sources/{source_id}/actions/{action_name}/execute/ | |
|[**sourcesActionsList**](#sourcesactionslist) | **GET** /sources/{source_id}/actions/ | |
|[**sourcesActionsRead**](#sourcesactionsread) | **GET** /sources/{source_id}/actions/{action_name}/ | |
|[**sourcesCreate**](#sourcescreate) | **POST** /sources/ | |
|[**sourcesDelete**](#sourcesdelete) | **DELETE** /sources/{source_id}/ | |
|[**sourcesList**](#sourceslist) | **GET** /sources/ | |
|[**sourcesPartialUpdate**](#sourcespartialupdate) | **PATCH** /sources/{source_id}/ | |
|[**sourcesRead**](#sourcesread) | **GET** /sources/{source_id}/ | |
|[**sourcesUpdate**](#sourcesupdate) | **PUT** /sources/{source_id}/ | |

# **sourcesActionsExecuteCreate**
> SourceBackendAction sourcesActionsExecuteCreate(data)

Execute a source action with confirmation.

### Example

```typescript
import {
    SourcesApi,
    Configuration,
    SourceBackendAction
} from './api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);

let sourceId: string; // (default to undefined)
let actionName: string; // (default to undefined)
let data: SourceBackendAction; //

const { status, data } = await apiInstance.sourcesActionsExecuteCreate(
    sourceId,
    actionName,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **SourceBackendAction**|  | |
| **sourceId** | [**string**] |  | defaults to undefined|
| **actionName** | [**string**] |  | defaults to undefined|


### Return type

**SourceBackendAction**

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

# **sourcesActionsExecuteList**
> SourcesActionsList200Response sourcesActionsExecuteList()

Execute a source action without confirmation.

### Example

```typescript
import {
    SourcesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);

let sourceId: string; // (default to undefined)
let actionName: string; // (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.sourcesActionsExecuteList(
    sourceId,
    actionName,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sourceId** | [**string**] |  | defaults to undefined|
| **actionName** | [**string**] |  | defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**SourcesActionsList200Response**

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

# **sourcesActionsList**
> SourcesActionsList200Response sourcesActionsList()

Source action list view.

### Example

```typescript
import {
    SourcesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);

let sourceId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.sourcesActionsList(
    sourceId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sourceId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**SourcesActionsList200Response**

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

# **sourcesActionsRead**
> SourceBackendAction sourcesActionsRead()

Source action detail view.

### Example

```typescript
import {
    SourcesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);

let sourceId: string; // (default to undefined)
let actionName: string; // (default to undefined)

const { status, data } = await apiInstance.sourcesActionsRead(
    sourceId,
    actionName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sourceId** | [**string**] |  | defaults to undefined|
| **actionName** | [**string**] |  | defaults to undefined|


### Return type

**SourceBackendAction**

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

# **sourcesCreate**
> Source sourcesCreate(data)

Create a new source.

### Example

```typescript
import {
    SourcesApi,
    Configuration,
    Source
} from './api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);

let data: Source; //

const { status, data } = await apiInstance.sourcesCreate(
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Source**|  | |


### Return type

**Source**

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

# **sourcesDelete**
> sourcesDelete()

Delete the selected source.

### Example

```typescript
import {
    SourcesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);

let sourceId: string; // (default to undefined)

const { status, data } = await apiInstance.sourcesDelete(
    sourceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sourceId** | [**string**] |  | defaults to undefined|


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

# **sourcesList**
> SourcesList200Response sourcesList()

Returns a list of all the source.

### Example

```typescript
import {
    SourcesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.sourcesList(
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

**SourcesList200Response**

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

# **sourcesPartialUpdate**
> Source sourcesPartialUpdate(data)

Edit the selected source.

### Example

```typescript
import {
    SourcesApi,
    Configuration,
    Source
} from './api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);

let sourceId: string; // (default to undefined)
let data: Source; //

const { status, data } = await apiInstance.sourcesPartialUpdate(
    sourceId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Source**|  | |
| **sourceId** | [**string**] |  | defaults to undefined|


### Return type

**Source**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sourcesRead**
> Source sourcesRead()

Details of the selected source.

### Example

```typescript
import {
    SourcesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);

let sourceId: string; // (default to undefined)

const { status, data } = await apiInstance.sourcesRead(
    sourceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sourceId** | [**string**] |  | defaults to undefined|


### Return type

**Source**

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

# **sourcesUpdate**
> Source sourcesUpdate(data)

Edit the selected source.

### Example

```typescript
import {
    SourcesApi,
    Configuration,
    Source
} from './api';

const configuration = new Configuration();
const apiInstance = new SourcesApi(configuration);

let sourceId: string; // (default to undefined)
let data: Source; //

const { status, data } = await apiInstance.sourcesUpdate(
    sourceId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Source**|  | |
| **sourceId** | [**string**] |  | defaults to undefined|


### Return type

**Source**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

