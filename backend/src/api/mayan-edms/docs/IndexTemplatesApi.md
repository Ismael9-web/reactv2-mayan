# IndexTemplatesApi

All URIs are relative to *http://localhost/api/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**indexTemplatesCreate**](#indextemplatescreate) | **POST** /index_templates/ | |
|[**indexTemplatesDelete**](#indextemplatesdelete) | **DELETE** /index_templates/{index_template_id}/ | |
|[**indexTemplatesDocumentTypesAddCreate**](#indextemplatesdocumenttypesaddcreate) | **POST** /index_templates/{index_template_id}/document_types/add/ | |
|[**indexTemplatesDocumentTypesList**](#indextemplatesdocumenttypeslist) | **GET** /index_templates/{index_template_id}/document_types/ | |
|[**indexTemplatesDocumentTypesRemoveCreate**](#indextemplatesdocumenttypesremovecreate) | **POST** /index_templates/{index_template_id}/document_types/remove/ | |
|[**indexTemplatesList**](#indextemplateslist) | **GET** /index_templates/ | |
|[**indexTemplatesNodesCreate**](#indextemplatesnodescreate) | **POST** /index_templates/{index_template_id}/nodes/ | |
|[**indexTemplatesNodesDelete**](#indextemplatesnodesdelete) | **DELETE** /index_templates/{index_template_id}/nodes/{index_template_node_id}/ | |
|[**indexTemplatesNodesList**](#indextemplatesnodeslist) | **GET** /index_templates/{index_template_id}/nodes/ | |
|[**indexTemplatesNodesPartialUpdate**](#indextemplatesnodespartialupdate) | **PATCH** /index_templates/{index_template_id}/nodes/{index_template_node_id}/ | |
|[**indexTemplatesNodesRead**](#indextemplatesnodesread) | **GET** /index_templates/{index_template_id}/nodes/{index_template_node_id}/ | |
|[**indexTemplatesNodesUpdate**](#indextemplatesnodesupdate) | **PUT** /index_templates/{index_template_id}/nodes/{index_template_node_id}/ | |
|[**indexTemplatesPartialUpdate**](#indextemplatespartialupdate) | **PATCH** /index_templates/{index_template_id}/ | |
|[**indexTemplatesRead**](#indextemplatesread) | **GET** /index_templates/{index_template_id}/ | |
|[**indexTemplatesRebuildCreate**](#indextemplatesrebuildcreate) | **POST** /index_templates/{index_template_id}/rebuild/ | |
|[**indexTemplatesResetCreate**](#indextemplatesresetcreate) | **POST** /index_templates/{index_template_id}/reset/ | |
|[**indexTemplatesUpdate**](#indextemplatesupdate) | **PUT** /index_templates/{index_template_id}/ | |

# **indexTemplatesCreate**
> IndexTemplate indexTemplatesCreate(data)

Create a new index template.

### Example

```typescript
import {
    IndexTemplatesApi,
    Configuration,
    IndexTemplate
} from './api';

const configuration = new Configuration();
const apiInstance = new IndexTemplatesApi(configuration);

let data: IndexTemplate; //

const { status, data } = await apiInstance.indexTemplatesCreate(
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **IndexTemplate**|  | |


### Return type

**IndexTemplate**

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

# **indexTemplatesDelete**
> indexTemplatesDelete()

Delete the selected index template.

### Example

```typescript
import {
    IndexTemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IndexTemplatesApi(configuration);

let indexTemplateId: string; // (default to undefined)

const { status, data } = await apiInstance.indexTemplatesDelete(
    indexTemplateId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **indexTemplateId** | [**string**] |  | defaults to undefined|


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

# **indexTemplatesDocumentTypesAddCreate**
> DocumentTypeAdd indexTemplatesDocumentTypesAddCreate(data)

Add a document type to an index template.

### Example

```typescript
import {
    IndexTemplatesApi,
    Configuration,
    DocumentTypeAdd
} from './api';

const configuration = new Configuration();
const apiInstance = new IndexTemplatesApi(configuration);

let indexTemplateId: string; // (default to undefined)
let data: DocumentTypeAdd; //

const { status, data } = await apiInstance.indexTemplatesDocumentTypesAddCreate(
    indexTemplateId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentTypeAdd**|  | |
| **indexTemplateId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentTypeAdd**

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

# **indexTemplatesDocumentTypesList**
> DocumentTypesList200Response indexTemplatesDocumentTypesList()

Returns a list of the document types associated with this index template.

### Example

```typescript
import {
    IndexTemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IndexTemplatesApi(configuration);

let indexTemplateId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.indexTemplatesDocumentTypesList(
    indexTemplateId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **indexTemplateId** | [**string**] |  | defaults to undefined|
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

# **indexTemplatesDocumentTypesRemoveCreate**
> DocumentTypeRemove indexTemplatesDocumentTypesRemoveCreate(data)

Remove a document type from an index template.

### Example

```typescript
import {
    IndexTemplatesApi,
    Configuration,
    DocumentTypeRemove
} from './api';

const configuration = new Configuration();
const apiInstance = new IndexTemplatesApi(configuration);

let indexTemplateId: string; // (default to undefined)
let data: DocumentTypeRemove; //

const { status, data } = await apiInstance.indexTemplatesDocumentTypesRemoveCreate(
    indexTemplateId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentTypeRemove**|  | |
| **indexTemplateId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentTypeRemove**

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

# **indexTemplatesList**
> IndexTemplatesList200Response indexTemplatesList()

Returns a list of all the defined indexes template.

### Example

```typescript
import {
    IndexTemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IndexTemplatesApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.indexTemplatesList(
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

**IndexTemplatesList200Response**

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

# **indexTemplatesNodesCreate**
> IndexTemplateNodeWrite indexTemplatesNodesCreate(data)

Create a new index template node.

### Example

```typescript
import {
    IndexTemplatesApi,
    Configuration,
    IndexTemplateNodeWrite
} from './api';

const configuration = new Configuration();
const apiInstance = new IndexTemplatesApi(configuration);

let indexTemplateId: string; // (default to undefined)
let data: IndexTemplateNodeWrite; //

const { status, data } = await apiInstance.indexTemplatesNodesCreate(
    indexTemplateId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **IndexTemplateNodeWrite**|  | |
| **indexTemplateId** | [**string**] |  | defaults to undefined|


### Return type

**IndexTemplateNodeWrite**

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

# **indexTemplatesNodesDelete**
> indexTemplatesNodesDelete()

Delete the selected index template node.

### Example

```typescript
import {
    IndexTemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IndexTemplatesApi(configuration);

let indexTemplateId: string; // (default to undefined)
let indexTemplateNodeId: string; // (default to undefined)

const { status, data } = await apiInstance.indexTemplatesNodesDelete(
    indexTemplateId,
    indexTemplateNodeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **indexTemplateId** | [**string**] |  | defaults to undefined|
| **indexTemplateNodeId** | [**string**] |  | defaults to undefined|


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

# **indexTemplatesNodesList**
> IndexTemplatesNodesList200Response indexTemplatesNodesList()

Returns a list of all the template nodes for the selected index.

### Example

```typescript
import {
    IndexTemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IndexTemplatesApi(configuration);

let indexTemplateId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.indexTemplatesNodesList(
    indexTemplateId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **indexTemplateId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**IndexTemplatesNodesList200Response**

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

# **indexTemplatesNodesPartialUpdate**
> IndexTemplateNodeWrite indexTemplatesNodesPartialUpdate(data)

Partially edit an index template node.

### Example

```typescript
import {
    IndexTemplatesApi,
    Configuration,
    IndexTemplateNodeWrite
} from './api';

const configuration = new Configuration();
const apiInstance = new IndexTemplatesApi(configuration);

let indexTemplateId: string; // (default to undefined)
let indexTemplateNodeId: string; // (default to undefined)
let data: IndexTemplateNodeWrite; //

const { status, data } = await apiInstance.indexTemplatesNodesPartialUpdate(
    indexTemplateId,
    indexTemplateNodeId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **IndexTemplateNodeWrite**|  | |
| **indexTemplateId** | [**string**] |  | defaults to undefined|
| **indexTemplateNodeId** | [**string**] |  | defaults to undefined|


### Return type

**IndexTemplateNodeWrite**

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

# **indexTemplatesNodesRead**
> IndexTemplateNode indexTemplatesNodesRead()

Returns the details of the selected index template node.

### Example

```typescript
import {
    IndexTemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IndexTemplatesApi(configuration);

let indexTemplateId: string; // (default to undefined)
let indexTemplateNodeId: string; // (default to undefined)

const { status, data } = await apiInstance.indexTemplatesNodesRead(
    indexTemplateId,
    indexTemplateNodeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **indexTemplateId** | [**string**] |  | defaults to undefined|
| **indexTemplateNodeId** | [**string**] |  | defaults to undefined|


### Return type

**IndexTemplateNode**

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

# **indexTemplatesNodesUpdate**
> IndexTemplateNodeWrite indexTemplatesNodesUpdate(data)

Edit an index template node.

### Example

```typescript
import {
    IndexTemplatesApi,
    Configuration,
    IndexTemplateNodeWrite
} from './api';

const configuration = new Configuration();
const apiInstance = new IndexTemplatesApi(configuration);

let indexTemplateId: string; // (default to undefined)
let indexTemplateNodeId: string; // (default to undefined)
let data: IndexTemplateNodeWrite; //

const { status, data } = await apiInstance.indexTemplatesNodesUpdate(
    indexTemplateId,
    indexTemplateNodeId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **IndexTemplateNodeWrite**|  | |
| **indexTemplateId** | [**string**] |  | defaults to undefined|
| **indexTemplateNodeId** | [**string**] |  | defaults to undefined|


### Return type

**IndexTemplateNodeWrite**

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

# **indexTemplatesPartialUpdate**
> IndexTemplate indexTemplatesPartialUpdate(data)

Partially edit an index template.

### Example

```typescript
import {
    IndexTemplatesApi,
    Configuration,
    IndexTemplate
} from './api';

const configuration = new Configuration();
const apiInstance = new IndexTemplatesApi(configuration);

let indexTemplateId: string; // (default to undefined)
let data: IndexTemplate; //

const { status, data } = await apiInstance.indexTemplatesPartialUpdate(
    indexTemplateId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **IndexTemplate**|  | |
| **indexTemplateId** | [**string**] |  | defaults to undefined|


### Return type

**IndexTemplate**

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

# **indexTemplatesRead**
> IndexTemplate indexTemplatesRead()

Returns the details of the selected index template.

### Example

```typescript
import {
    IndexTemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IndexTemplatesApi(configuration);

let indexTemplateId: string; // (default to undefined)

const { status, data } = await apiInstance.indexTemplatesRead(
    indexTemplateId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **indexTemplateId** | [**string**] |  | defaults to undefined|


### Return type

**IndexTemplate**

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

# **indexTemplatesRebuildCreate**
> object indexTemplatesRebuildCreate(data)

Rebuild the selected index template.

### Example

```typescript
import {
    IndexTemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IndexTemplatesApi(configuration);

let indexTemplateId: string; // (default to undefined)
let data: object; //

const { status, data } = await apiInstance.indexTemplatesRebuildCreate(
    indexTemplateId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **object**|  | |
| **indexTemplateId** | [**string**] |  | defaults to undefined|


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

# **indexTemplatesResetCreate**
> object indexTemplatesResetCreate(data)

Reset the selected index template.

### Example

```typescript
import {
    IndexTemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IndexTemplatesApi(configuration);

let indexTemplateId: string; // (default to undefined)
let data: object; //

const { status, data } = await apiInstance.indexTemplatesResetCreate(
    indexTemplateId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **object**|  | |
| **indexTemplateId** | [**string**] |  | defaults to undefined|


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

# **indexTemplatesUpdate**
> IndexTemplate indexTemplatesUpdate(data)

Edit an index template.

### Example

```typescript
import {
    IndexTemplatesApi,
    Configuration,
    IndexTemplate
} from './api';

const configuration = new Configuration();
const apiInstance = new IndexTemplatesApi(configuration);

let indexTemplateId: string; // (default to undefined)
let data: IndexTemplate; //

const { status, data } = await apiInstance.indexTemplatesUpdate(
    indexTemplateId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **IndexTemplate**|  | |
| **indexTemplateId** | [**string**] |  | defaults to undefined|


### Return type

**IndexTemplate**

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

