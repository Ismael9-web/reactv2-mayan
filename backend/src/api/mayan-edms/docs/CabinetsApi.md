# CabinetsApi

All URIs are relative to *http://localhost/api/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cabinetsCreate**](#cabinetscreate) | **POST** /cabinets/ | |
|[**cabinetsDelete**](#cabinetsdelete) | **DELETE** /cabinets/{cabinet_id}/ | |
|[**cabinetsDocumentsAddCreate**](#cabinetsdocumentsaddcreate) | **POST** /cabinets/{cabinet_id}/documents/add/ | |
|[**cabinetsDocumentsList**](#cabinetsdocumentslist) | **GET** /cabinets/{cabinet_id}/documents/ | |
|[**cabinetsDocumentsRemoveCreate**](#cabinetsdocumentsremovecreate) | **POST** /cabinets/{cabinet_id}/documents/remove/ | |
|[**cabinetsList**](#cabinetslist) | **GET** /cabinets/ | |
|[**cabinetsPartialUpdate**](#cabinetspartialupdate) | **PATCH** /cabinets/{cabinet_id}/ | |
|[**cabinetsRead**](#cabinetsread) | **GET** /cabinets/{cabinet_id}/ | |
|[**cabinetsUpdate**](#cabinetsupdate) | **PUT** /cabinets/{cabinet_id}/ | |

# **cabinetsCreate**
> Cabinet cabinetsCreate(data)

Create a new cabinet.

### Example

```typescript
import {
    CabinetsApi,
    Configuration,
    Cabinet
} from './api';

const configuration = new Configuration();
const apiInstance = new CabinetsApi(configuration);

let data: Cabinet; //

const { status, data } = await apiInstance.cabinetsCreate(
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Cabinet**|  | |


### Return type

**Cabinet**

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

# **cabinetsDelete**
> cabinetsDelete()

Delete the selected cabinet.

### Example

```typescript
import {
    CabinetsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CabinetsApi(configuration);

let cabinetId: string; // (default to undefined)

const { status, data } = await apiInstance.cabinetsDelete(
    cabinetId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cabinetId** | [**string**] |  | defaults to undefined|


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

# **cabinetsDocumentsAddCreate**
> CabinetDocumentAdd cabinetsDocumentsAddCreate(data)

Add a document to a cabinet.

### Example

```typescript
import {
    CabinetsApi,
    Configuration,
    CabinetDocumentAdd
} from './api';

const configuration = new Configuration();
const apiInstance = new CabinetsApi(configuration);

let cabinetId: string; // (default to undefined)
let data: CabinetDocumentAdd; //

const { status, data } = await apiInstance.cabinetsDocumentsAddCreate(
    cabinetId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **CabinetDocumentAdd**|  | |
| **cabinetId** | [**string**] |  | defaults to undefined|


### Return type

**CabinetDocumentAdd**

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

# **cabinetsDocumentsList**
> CabinetsDocumentsList200Response cabinetsDocumentsList()

Returns a list of all the documents contained in a particular cabinet.

### Example

```typescript
import {
    CabinetsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CabinetsApi(configuration);

let cabinetId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.cabinetsDocumentsList(
    cabinetId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cabinetId** | [**string**] |  | defaults to undefined|
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

# **cabinetsDocumentsRemoveCreate**
> CabinetDocumentRemove cabinetsDocumentsRemoveCreate(data)

Remove a document from a cabinet.

### Example

```typescript
import {
    CabinetsApi,
    Configuration,
    CabinetDocumentRemove
} from './api';

const configuration = new Configuration();
const apiInstance = new CabinetsApi(configuration);

let cabinetId: string; // (default to undefined)
let data: CabinetDocumentRemove; //

const { status, data } = await apiInstance.cabinetsDocumentsRemoveCreate(
    cabinetId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **CabinetDocumentRemove**|  | |
| **cabinetId** | [**string**] |  | defaults to undefined|


### Return type

**CabinetDocumentRemove**

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

# **cabinetsList**
> CabinetsList200Response cabinetsList()

Returns a list of all the cabinets.

### Example

```typescript
import {
    CabinetsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CabinetsApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.cabinetsList(
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

**CabinetsList200Response**

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

# **cabinetsPartialUpdate**
> Cabinet cabinetsPartialUpdate(data)

Edit the selected cabinet.

### Example

```typescript
import {
    CabinetsApi,
    Configuration,
    Cabinet
} from './api';

const configuration = new Configuration();
const apiInstance = new CabinetsApi(configuration);

let cabinetId: string; // (default to undefined)
let data: Cabinet; //

const { status, data } = await apiInstance.cabinetsPartialUpdate(
    cabinetId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Cabinet**|  | |
| **cabinetId** | [**string**] |  | defaults to undefined|


### Return type

**Cabinet**

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

# **cabinetsRead**
> Cabinet cabinetsRead()

Returns the details of the selected cabinet.

### Example

```typescript
import {
    CabinetsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CabinetsApi(configuration);

let cabinetId: string; // (default to undefined)

const { status, data } = await apiInstance.cabinetsRead(
    cabinetId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cabinetId** | [**string**] |  | defaults to undefined|


### Return type

**Cabinet**

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

# **cabinetsUpdate**
> Cabinet cabinetsUpdate(data)

Edit the selected cabinet.

### Example

```typescript
import {
    CabinetsApi,
    Configuration,
    Cabinet
} from './api';

const configuration = new Configuration();
const apiInstance = new CabinetsApi(configuration);

let cabinetId: string; // (default to undefined)
let data: Cabinet; //

const { status, data } = await apiInstance.cabinetsUpdate(
    cabinetId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Cabinet**|  | |
| **cabinetId** | [**string**] |  | defaults to undefined|


### Return type

**Cabinet**

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

