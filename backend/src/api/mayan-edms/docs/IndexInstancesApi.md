# IndexInstancesApi

All URIs are relative to *http://localhost/api/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**indexInstancesList**](#indexinstanceslist) | **GET** /index_instances/ | |
|[**indexInstancesNodesDocumentsList**](#indexinstancesnodesdocumentslist) | **GET** /index_instances/{index_instance_id}/nodes/{index_instance_node_id}/documents/ | |
|[**indexInstancesNodesList**](#indexinstancesnodeslist) | **GET** /index_instances/{index_instance_id}/nodes/ | |
|[**indexInstancesNodesNodesList**](#indexinstancesnodesnodeslist) | **GET** /index_instances/{index_instance_id}/nodes/{index_instance_node_id}/nodes/ | |
|[**indexInstancesNodesRead**](#indexinstancesnodesread) | **GET** /index_instances/{index_instance_id}/nodes/{index_instance_node_id}/ | |
|[**indexInstancesRead**](#indexinstancesread) | **GET** /index_instances/{index_instance_id}/ | |

# **indexInstancesList**
> IndexInstancesList200Response indexInstancesList()

Returns a list of all the indexes instances.

### Example

```typescript
import {
    IndexInstancesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IndexInstancesApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.indexInstancesList(
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

**IndexInstancesList200Response**

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

# **indexInstancesNodesDocumentsList**
> CabinetsDocumentsList200Response indexInstancesNodesDocumentsList()

Returns a list of all the documents contained by a particular index instance node.

### Example

```typescript
import {
    IndexInstancesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IndexInstancesApi(configuration);

let indexInstanceId: string; // (default to undefined)
let indexInstanceNodeId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.indexInstancesNodesDocumentsList(
    indexInstanceId,
    indexInstanceNodeId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **indexInstanceId** | [**string**] |  | defaults to undefined|
| **indexInstanceNodeId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**CabinetsDocumentsList200Response**

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

# **indexInstancesNodesList**
> DocumentsIndexesList200Response indexInstancesNodesList()

Returns a list of all the nodes for the selected index instance.

### Example

```typescript
import {
    IndexInstancesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IndexInstancesApi(configuration);

let indexInstanceId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.indexInstancesNodesList(
    indexInstanceId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **indexInstanceId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**DocumentsIndexesList200Response**

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

# **indexInstancesNodesNodesList**
> DocumentsIndexesList200Response indexInstancesNodesNodesList()

Returns list of all the children nodes for the selected index instance node.

### Example

```typescript
import {
    IndexInstancesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IndexInstancesApi(configuration);

let indexInstanceId: string; // (default to undefined)
let indexInstanceNodeId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.indexInstancesNodesNodesList(
    indexInstanceId,
    indexInstanceNodeId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **indexInstanceId** | [**string**] |  | defaults to undefined|
| **indexInstanceNodeId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**DocumentsIndexesList200Response**

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

# **indexInstancesNodesRead**
> IndexInstanceNode indexInstancesNodesRead()

Returns the details of the selected index instance node.

### Example

```typescript
import {
    IndexInstancesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IndexInstancesApi(configuration);

let indexInstanceId: string; // (default to undefined)
let indexInstanceNodeId: string; // (default to undefined)

const { status, data } = await apiInstance.indexInstancesNodesRead(
    indexInstanceId,
    indexInstanceNodeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **indexInstanceId** | [**string**] |  | defaults to undefined|
| **indexInstanceNodeId** | [**string**] |  | defaults to undefined|


### Return type

**IndexInstanceNode**

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

# **indexInstancesRead**
> IndexInstance indexInstancesRead()

Returns the details of the selected index instance.

### Example

```typescript
import {
    IndexInstancesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IndexInstancesApi(configuration);

let indexInstanceId: string; // (default to undefined)

const { status, data } = await apiInstance.indexInstancesRead(
    indexInstanceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **indexInstanceId** | [**string**] |  | defaults to undefined|


### Return type

**IndexInstance**

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

