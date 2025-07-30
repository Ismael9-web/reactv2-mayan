# EventTypeNamespacesApi

All URIs are relative to *http://localhost/api/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**eventTypeNamespacesEventTypesList**](#eventtypenamespaceseventtypeslist) | **GET** /event_type_namespaces/{name}/event_types/ | |
|[**eventTypeNamespacesList**](#eventtypenamespaceslist) | **GET** /event_type_namespaces/ | |
|[**eventTypeNamespacesRead**](#eventtypenamespacesread) | **GET** /event_type_namespaces/{name}/ | |

# **eventTypeNamespacesEventTypesList**
> EventTypeNamespacesEventTypesList200Response eventTypeNamespacesEventTypesList()

Returns a list of all the available event types from a namespaces.

### Example

```typescript
import {
    EventTypeNamespacesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EventTypeNamespacesApi(configuration);

let name: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.eventTypeNamespacesEventTypesList(
    name,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**EventTypeNamespacesEventTypesList200Response**

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

# **eventTypeNamespacesList**
> EventTypeNamespacesList200Response eventTypeNamespacesList()

Returns a list of all the available event type namespaces.

### Example

```typescript
import {
    EventTypeNamespacesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EventTypeNamespacesApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.eventTypeNamespacesList(
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

**EventTypeNamespacesList200Response**

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

# **eventTypeNamespacesRead**
> EventTypeNamespace eventTypeNamespacesRead()

Returns the details of an event type namespace.

### Example

```typescript
import {
    EventTypeNamespacesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EventTypeNamespacesApi(configuration);

let name: string; // (default to undefined)

const { status, data } = await apiInstance.eventTypeNamespacesRead(
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] |  | defaults to undefined|


### Return type

**EventTypeNamespace**

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

