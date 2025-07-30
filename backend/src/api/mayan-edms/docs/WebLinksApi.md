# WebLinksApi

All URIs are relative to *http://localhost/api/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**webLinksCreate**](#weblinkscreate) | **POST** /web_links/ | |
|[**webLinksDelete**](#weblinksdelete) | **DELETE** /web_links/{web_link_id}/ | |
|[**webLinksDocumentTypesAddCreate**](#weblinksdocumenttypesaddcreate) | **POST** /web_links/{web_link_id}/document_types/add/ | |
|[**webLinksDocumentTypesList**](#weblinksdocumenttypeslist) | **GET** /web_links/{web_link_id}/document_types/ | |
|[**webLinksDocumentTypesRemoveCreate**](#weblinksdocumenttypesremovecreate) | **POST** /web_links/{web_link_id}/document_types/remove/ | |
|[**webLinksList**](#weblinkslist) | **GET** /web_links/ | |
|[**webLinksPartialUpdate**](#weblinkspartialupdate) | **PATCH** /web_links/{web_link_id}/ | |
|[**webLinksRead**](#weblinksread) | **GET** /web_links/{web_link_id}/ | |
|[**webLinksUpdate**](#weblinksupdate) | **PUT** /web_links/{web_link_id}/ | |

# **webLinksCreate**
> WebLink webLinksCreate(data)

Create a new web link.

### Example

```typescript
import {
    WebLinksApi,
    Configuration,
    WebLink
} from './api';

const configuration = new Configuration();
const apiInstance = new WebLinksApi(configuration);

let data: WebLink; //

const { status, data } = await apiInstance.webLinksCreate(
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **WebLink**|  | |


### Return type

**WebLink**

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

# **webLinksDelete**
> webLinksDelete()

Delete the selected web link.

### Example

```typescript
import {
    WebLinksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WebLinksApi(configuration);

let webLinkId: string; // (default to undefined)

const { status, data } = await apiInstance.webLinksDelete(
    webLinkId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webLinkId** | [**string**] |  | defaults to undefined|


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

# **webLinksDocumentTypesAddCreate**
> WebLinkDocumentTypeAdd webLinksDocumentTypesAddCreate(data)

Add a document type to a web link.

### Example

```typescript
import {
    WebLinksApi,
    Configuration,
    WebLinkDocumentTypeAdd
} from './api';

const configuration = new Configuration();
const apiInstance = new WebLinksApi(configuration);

let webLinkId: string; // (default to undefined)
let data: WebLinkDocumentTypeAdd; //

const { status, data } = await apiInstance.webLinksDocumentTypesAddCreate(
    webLinkId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **WebLinkDocumentTypeAdd**|  | |
| **webLinkId** | [**string**] |  | defaults to undefined|


### Return type

**WebLinkDocumentTypeAdd**

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

# **webLinksDocumentTypesList**
> DocumentTypesList200Response webLinksDocumentTypesList()

Return a list of the selected web link document types.

### Example

```typescript
import {
    WebLinksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WebLinksApi(configuration);

let webLinkId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.webLinksDocumentTypesList(
    webLinkId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webLinkId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**DocumentTypesList200Response**

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

# **webLinksDocumentTypesRemoveCreate**
> WebLinkDocumentTypeRemove webLinksDocumentTypesRemoveCreate(data)

Remove a document type from a web link.

### Example

```typescript
import {
    WebLinksApi,
    Configuration,
    WebLinkDocumentTypeRemove
} from './api';

const configuration = new Configuration();
const apiInstance = new WebLinksApi(configuration);

let webLinkId: string; // (default to undefined)
let data: WebLinkDocumentTypeRemove; //

const { status, data } = await apiInstance.webLinksDocumentTypesRemoveCreate(
    webLinkId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **WebLinkDocumentTypeRemove**|  | |
| **webLinkId** | [**string**] |  | defaults to undefined|


### Return type

**WebLinkDocumentTypeRemove**

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

# **webLinksList**
> WebLinksList200Response webLinksList()

Returns a list of all the web links.

### Example

```typescript
import {
    WebLinksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WebLinksApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.webLinksList(
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

**WebLinksList200Response**

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

# **webLinksPartialUpdate**
> WebLink webLinksPartialUpdate(data)

Edit the selected web link.

### Example

```typescript
import {
    WebLinksApi,
    Configuration,
    WebLink
} from './api';

const configuration = new Configuration();
const apiInstance = new WebLinksApi(configuration);

let webLinkId: string; // (default to undefined)
let data: WebLink; //

const { status, data } = await apiInstance.webLinksPartialUpdate(
    webLinkId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **WebLink**|  | |
| **webLinkId** | [**string**] |  | defaults to undefined|


### Return type

**WebLink**

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

# **webLinksRead**
> WebLink webLinksRead()

Return the details of the selected web link.

### Example

```typescript
import {
    WebLinksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WebLinksApi(configuration);

let webLinkId: string; // (default to undefined)

const { status, data } = await apiInstance.webLinksRead(
    webLinkId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webLinkId** | [**string**] |  | defaults to undefined|


### Return type

**WebLink**

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

# **webLinksUpdate**
> WebLink webLinksUpdate(data)

Edit the selected web link.

### Example

```typescript
import {
    WebLinksApi,
    Configuration,
    WebLink
} from './api';

const configuration = new Configuration();
const apiInstance = new WebLinksApi(configuration);

let webLinkId: string; // (default to undefined)
let data: WebLink; //

const { status, data } = await apiInstance.webLinksUpdate(
    webLinkId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **WebLink**|  | |
| **webLinkId** | [**string**] |  | defaults to undefined|


### Return type

**WebLink**

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

