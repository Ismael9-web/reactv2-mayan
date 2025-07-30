# MetadataTypesApi

All URIs are relative to *http://localhost/api/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**metadataTypesCreate**](#metadatatypescreate) | **POST** /metadata_types/ | |
|[**metadataTypesDelete**](#metadatatypesdelete) | **DELETE** /metadata_types/{metadata_type_id}/ | |
|[**metadataTypesList**](#metadatatypeslist) | **GET** /metadata_types/ | |
|[**metadataTypesPartialUpdate**](#metadatatypespartialupdate) | **PATCH** /metadata_types/{metadata_type_id}/ | |
|[**metadataTypesRead**](#metadatatypesread) | **GET** /metadata_types/{metadata_type_id}/ | |
|[**metadataTypesUpdate**](#metadatatypesupdate) | **PUT** /metadata_types/{metadata_type_id}/ | |

# **metadataTypesCreate**
> MetadataType metadataTypesCreate(data)

Create a new metadata type.

### Example

```typescript
import {
    MetadataTypesApi,
    Configuration,
    MetadataType
} from './api';

const configuration = new Configuration();
const apiInstance = new MetadataTypesApi(configuration);

let data: MetadataType; //

const { status, data } = await apiInstance.metadataTypesCreate(
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **MetadataType**|  | |


### Return type

**MetadataType**

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

# **metadataTypesDelete**
> metadataTypesDelete()

Delete the selected metadata type.

### Example

```typescript
import {
    MetadataTypesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MetadataTypesApi(configuration);

let metadataTypeId: string; // (default to undefined)

const { status, data } = await apiInstance.metadataTypesDelete(
    metadataTypeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **metadataTypeId** | [**string**] |  | defaults to undefined|


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

# **metadataTypesList**
> MetadataTypesList200Response metadataTypesList()

Returns a list of all the metadata types.

### Example

```typescript
import {
    MetadataTypesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MetadataTypesApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.metadataTypesList(
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

**MetadataTypesList200Response**

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

# **metadataTypesPartialUpdate**
> MetadataType metadataTypesPartialUpdate(data)

Edit the selected metadata type.

### Example

```typescript
import {
    MetadataTypesApi,
    Configuration,
    MetadataType
} from './api';

const configuration = new Configuration();
const apiInstance = new MetadataTypesApi(configuration);

let metadataTypeId: string; // (default to undefined)
let data: MetadataType; //

const { status, data } = await apiInstance.metadataTypesPartialUpdate(
    metadataTypeId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **MetadataType**|  | |
| **metadataTypeId** | [**string**] |  | defaults to undefined|


### Return type

**MetadataType**

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

# **metadataTypesRead**
> MetadataType metadataTypesRead()

Return the details of the selected metadata type.

### Example

```typescript
import {
    MetadataTypesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MetadataTypesApi(configuration);

let metadataTypeId: string; // (default to undefined)

const { status, data } = await apiInstance.metadataTypesRead(
    metadataTypeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **metadataTypeId** | [**string**] |  | defaults to undefined|


### Return type

**MetadataType**

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

# **metadataTypesUpdate**
> MetadataType metadataTypesUpdate(data)

Edit the selected metadata type.

### Example

```typescript
import {
    MetadataTypesApi,
    Configuration,
    MetadataType
} from './api';

const configuration = new Configuration();
const apiInstance = new MetadataTypesApi(configuration);

let metadataTypeId: string; // (default to undefined)
let data: MetadataType; //

const { status, data } = await apiInstance.metadataTypesUpdate(
    metadataTypeId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **MetadataType**|  | |
| **metadataTypeId** | [**string**] |  | defaults to undefined|


### Return type

**MetadataType**

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

