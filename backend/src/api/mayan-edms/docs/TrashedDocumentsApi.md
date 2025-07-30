# TrashedDocumentsApi

All URIs are relative to *http://localhost/api/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**trashedDocumentsDelete**](#trasheddocumentsdelete) | **DELETE** /trashed_documents/{document_id}/ | |
|[**trashedDocumentsImageRead**](#trasheddocumentsimageread) | **GET** /trashed_documents/{document_id}/image/ | |
|[**trashedDocumentsList**](#trasheddocumentslist) | **GET** /trashed_documents/ | |
|[**trashedDocumentsRead**](#trasheddocumentsread) | **GET** /trashed_documents/{document_id}/ | |
|[**trashedDocumentsRestoreCreate**](#trasheddocumentsrestorecreate) | **POST** /trashed_documents/{document_id}/restore/ | |

# **trashedDocumentsDelete**
> trashedDocumentsDelete()

Delete the trashed document.

### Example

```typescript
import {
    TrashedDocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TrashedDocumentsApi(configuration);

let documentId: string; // (default to undefined)

const { status, data } = await apiInstance.trashedDocumentsDelete(
    documentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|


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

# **trashedDocumentsImageRead**
> trashedDocumentsImageRead()

Returns an image representation of the selected trashed document.

### Example

```typescript
import {
    TrashedDocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TrashedDocumentsApi(configuration);

let documentId: string; // (default to undefined)

const { status, data } = await apiInstance.trashedDocumentsImageRead(
    documentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|


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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **trashedDocumentsList**
> TrashedDocumentsList200Response trashedDocumentsList()

Returns a list of all the trashed documents.

### Example

```typescript
import {
    TrashedDocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TrashedDocumentsApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.trashedDocumentsList(
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

**TrashedDocumentsList200Response**

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

# **trashedDocumentsRead**
> TrashedDocument trashedDocumentsRead()

Retrieve the details of the trashed document.

### Example

```typescript
import {
    TrashedDocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TrashedDocumentsApi(configuration);

let documentId: string; // (default to undefined)

const { status, data } = await apiInstance.trashedDocumentsRead(
    documentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|


### Return type

**TrashedDocument**

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

# **trashedDocumentsRestoreCreate**
> object trashedDocumentsRestoreCreate(data)

Restore a trashed document.

### Example

```typescript
import {
    TrashedDocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TrashedDocumentsApi(configuration);

let documentId: string; // (default to undefined)
let data: object; //

const { status, data } = await apiInstance.trashedDocumentsRestoreCreate(
    documentId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **object**|  | |
| **documentId** | [**string**] |  | defaults to undefined|


### Return type

**object**

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

