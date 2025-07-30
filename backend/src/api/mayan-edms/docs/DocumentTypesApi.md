# DocumentTypesApi

All URIs are relative to *http://localhost/api/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**documentTypesCreate**](#documenttypescreate) | **POST** /document_types/ | |
|[**documentTypesDelete**](#documenttypesdelete) | **DELETE** /document_types/{document_type_id}/ | |
|[**documentTypesDocumentsList**](#documenttypesdocumentslist) | **GET** /document_types/{document_type_id}/documents/ | |
|[**documentTypesFileMetadataDriversList**](#documenttypesfilemetadatadriverslist) | **GET** /document_types/{document_type_id}/file_metadata/drivers/ | |
|[**documentTypesFileMetadataDriversPartialUpdate**](#documenttypesfilemetadatadriverspartialupdate) | **PATCH** /document_types/{document_type_id}/file_metadata/drivers/{driver_id}/ | |
|[**documentTypesFileMetadataDriversRead**](#documenttypesfilemetadatadriversread) | **GET** /document_types/{document_type_id}/file_metadata/drivers/{driver_id}/ | |
|[**documentTypesFileMetadataDriversUpdate**](#documenttypesfilemetadatadriversupdate) | **PUT** /document_types/{document_type_id}/file_metadata/drivers/{driver_id}/ | |
|[**documentTypesList**](#documenttypeslist) | **GET** /document_types/ | |
|[**documentTypesMetadataTypesCreate**](#documenttypesmetadatatypescreate) | **POST** /document_types/{document_type_id}/metadata_types/ | |
|[**documentTypesMetadataTypesDelete**](#documenttypesmetadatatypesdelete) | **DELETE** /document_types/{document_type_id}/metadata_types/{metadata_type_id}/ | |
|[**documentTypesMetadataTypesList**](#documenttypesmetadatatypeslist) | **GET** /document_types/{document_type_id}/metadata_types/ | |
|[**documentTypesMetadataTypesPartialUpdate**](#documenttypesmetadatatypespartialupdate) | **PATCH** /document_types/{document_type_id}/metadata_types/{metadata_type_id}/ | |
|[**documentTypesMetadataTypesRead**](#documenttypesmetadatatypesread) | **GET** /document_types/{document_type_id}/metadata_types/{metadata_type_id}/ | |
|[**documentTypesMetadataTypesUpdate**](#documenttypesmetadatatypesupdate) | **PUT** /document_types/{document_type_id}/metadata_types/{metadata_type_id}/ | |
|[**documentTypesOcrSettingsPartialUpdate**](#documenttypesocrsettingspartialupdate) | **PATCH** /document_types/{document_type_id}/ocr/settings/ | |
|[**documentTypesOcrSettingsRead**](#documenttypesocrsettingsread) | **GET** /document_types/{document_type_id}/ocr/settings/ | |
|[**documentTypesOcrSettingsUpdate**](#documenttypesocrsettingsupdate) | **PUT** /document_types/{document_type_id}/ocr/settings/ | |
|[**documentTypesParsingSettingsPartialUpdate**](#documenttypesparsingsettingspartialupdate) | **PATCH** /document_types/{document_type_id}/parsing/settings/ | |
|[**documentTypesParsingSettingsRead**](#documenttypesparsingsettingsread) | **GET** /document_types/{document_type_id}/parsing/settings/ | |
|[**documentTypesParsingSettingsUpdate**](#documenttypesparsingsettingsupdate) | **PUT** /document_types/{document_type_id}/parsing/settings/ | |
|[**documentTypesPartialUpdate**](#documenttypespartialupdate) | **PATCH** /document_types/{document_type_id}/ | |
|[**documentTypesQuickLabelsCreate**](#documenttypesquicklabelscreate) | **POST** /document_types/{document_type_id}/quick_labels/ | |
|[**documentTypesQuickLabelsDelete**](#documenttypesquicklabelsdelete) | **DELETE** /document_types/{document_type_id}/quick_labels/{document_type_quick_label_id}/ | |
|[**documentTypesQuickLabelsList**](#documenttypesquicklabelslist) | **GET** /document_types/{document_type_id}/quick_labels/ | |
|[**documentTypesQuickLabelsPartialUpdate**](#documenttypesquicklabelspartialupdate) | **PATCH** /document_types/{document_type_id}/quick_labels/{document_type_quick_label_id}/ | |
|[**documentTypesQuickLabelsRead**](#documenttypesquicklabelsread) | **GET** /document_types/{document_type_id}/quick_labels/{document_type_quick_label_id}/ | |
|[**documentTypesQuickLabelsUpdate**](#documenttypesquicklabelsupdate) | **PUT** /document_types/{document_type_id}/quick_labels/{document_type_quick_label_id}/ | |
|[**documentTypesRead**](#documenttypesread) | **GET** /document_types/{document_type_id}/ | |
|[**documentTypesUpdate**](#documenttypesupdate) | **PUT** /document_types/{document_type_id}/ | |

# **documentTypesCreate**
> DocumentType documentTypesCreate(data)

Create a new document type.

### Example

```typescript
import {
    DocumentTypesApi,
    Configuration,
    DocumentType
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentTypesApi(configuration);

let data: DocumentType; //

const { status, data } = await apiInstance.documentTypesCreate(
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentType**|  | |


### Return type

**DocumentType**

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

# **documentTypesDelete**
> documentTypesDelete()

Delete the selected document type.

### Example

```typescript
import {
    DocumentTypesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentTypesApi(configuration);

let documentTypeId: string; // (default to undefined)

const { status, data } = await apiInstance.documentTypesDelete(
    documentTypeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentTypeId** | [**string**] |  | defaults to undefined|


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

# **documentTypesDocumentsList**
> CabinetsDocumentsList200Response documentTypesDocumentsList()

Returns a list of all the documents of the selected document types.

### Example

```typescript
import {
    DocumentTypesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentTypesApi(configuration);

let documentTypeId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.documentTypesDocumentsList(
    documentTypeId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentTypeId** | [**string**] |  | defaults to undefined|
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

# **documentTypesFileMetadataDriversList**
> DocumentTypesFileMetadataDriversList200Response documentTypesFileMetadataDriversList()

Return the list of document type file metadata settings.

### Example

```typescript
import {
    DocumentTypesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentTypesApi(configuration);

let documentTypeId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.documentTypesFileMetadataDriversList(
    documentTypeId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentTypeId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**DocumentTypesFileMetadataDriversList200Response**

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

# **documentTypesFileMetadataDriversPartialUpdate**
> DocumentTypeDriverConfiguration documentTypesFileMetadataDriversPartialUpdate(data)

Set the selected document type file metadata settings.

### Example

```typescript
import {
    DocumentTypesApi,
    Configuration,
    DocumentTypeDriverConfiguration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentTypesApi(configuration);

let documentTypeId: string; // (default to undefined)
let driverId: string; // (default to undefined)
let data: DocumentTypeDriverConfiguration; //

const { status, data } = await apiInstance.documentTypesFileMetadataDriversPartialUpdate(
    documentTypeId,
    driverId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentTypeDriverConfiguration**|  | |
| **documentTypeId** | [**string**] |  | defaults to undefined|
| **driverId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentTypeDriverConfiguration**

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

# **documentTypesFileMetadataDriversRead**
> DocumentTypeDriverConfiguration documentTypesFileMetadataDriversRead()

Return the selected document type file metadata settings.

### Example

```typescript
import {
    DocumentTypesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentTypesApi(configuration);

let documentTypeId: string; // (default to undefined)
let driverId: string; // (default to undefined)

const { status, data } = await apiInstance.documentTypesFileMetadataDriversRead(
    documentTypeId,
    driverId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentTypeId** | [**string**] |  | defaults to undefined|
| **driverId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentTypeDriverConfiguration**

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

# **documentTypesFileMetadataDriversUpdate**
> DocumentTypeDriverConfiguration documentTypesFileMetadataDriversUpdate(data)

Set the selected document type file metadata settings.

### Example

```typescript
import {
    DocumentTypesApi,
    Configuration,
    DocumentTypeDriverConfiguration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentTypesApi(configuration);

let documentTypeId: string; // (default to undefined)
let driverId: string; // (default to undefined)
let data: DocumentTypeDriverConfiguration; //

const { status, data } = await apiInstance.documentTypesFileMetadataDriversUpdate(
    documentTypeId,
    driverId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentTypeDriverConfiguration**|  | |
| **documentTypeId** | [**string**] |  | defaults to undefined|
| **driverId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentTypeDriverConfiguration**

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

# **documentTypesList**
> DocumentTypesList200Response documentTypesList()

Returns a list of all the document types.

### Example

```typescript
import {
    DocumentTypesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentTypesApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.documentTypesList(
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

# **documentTypesMetadataTypesCreate**
> DocumentTypeMetadataType documentTypesMetadataTypesCreate(data)

Add a metadata type to the selected document type.

### Example

```typescript
import {
    DocumentTypesApi,
    Configuration,
    DocumentTypeMetadataType
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentTypesApi(configuration);

let documentTypeId: string; // (default to undefined)
let data: DocumentTypeMetadataType; //

const { status, data } = await apiInstance.documentTypesMetadataTypesCreate(
    documentTypeId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentTypeMetadataType**|  | |
| **documentTypeId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentTypeMetadataType**

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

# **documentTypesMetadataTypesDelete**
> documentTypesMetadataTypesDelete()

Remove a metadata type from a document type.

### Example

```typescript
import {
    DocumentTypesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentTypesApi(configuration);

let documentTypeId: string; // (default to undefined)
let metadataTypeId: string; // (default to undefined)

const { status, data } = await apiInstance.documentTypesMetadataTypesDelete(
    documentTypeId,
    metadataTypeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentTypeId** | [**string**] |  | defaults to undefined|
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

# **documentTypesMetadataTypesList**
> DocumentTypesMetadataTypesList200Response documentTypesMetadataTypesList()

Returns a list of selected document type\'s metadata types.

### Example

```typescript
import {
    DocumentTypesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentTypesApi(configuration);

let documentTypeId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.documentTypesMetadataTypesList(
    documentTypeId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentTypeId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**DocumentTypesMetadataTypesList200Response**

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

# **documentTypesMetadataTypesPartialUpdate**
> DocumentTypeMetadataType documentTypesMetadataTypesPartialUpdate(data)

Edit the selected document type metadata type.

### Example

```typescript
import {
    DocumentTypesApi,
    Configuration,
    DocumentTypeMetadataType
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentTypesApi(configuration);

let documentTypeId: string; // (default to undefined)
let metadataTypeId: string; // (default to undefined)
let data: DocumentTypeMetadataType; //

const { status, data } = await apiInstance.documentTypesMetadataTypesPartialUpdate(
    documentTypeId,
    metadataTypeId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentTypeMetadataType**|  | |
| **documentTypeId** | [**string**] |  | defaults to undefined|
| **metadataTypeId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentTypeMetadataType**

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

# **documentTypesMetadataTypesRead**
> DocumentTypeMetadataType documentTypesMetadataTypesRead()

Retrieve the details of a document type metadata type.

### Example

```typescript
import {
    DocumentTypesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentTypesApi(configuration);

let documentTypeId: string; // (default to undefined)
let metadataTypeId: string; // (default to undefined)

const { status, data } = await apiInstance.documentTypesMetadataTypesRead(
    documentTypeId,
    metadataTypeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentTypeId** | [**string**] |  | defaults to undefined|
| **metadataTypeId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentTypeMetadataType**

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

# **documentTypesMetadataTypesUpdate**
> DocumentTypeMetadataType documentTypesMetadataTypesUpdate(data)

Edit the selected document type metadata type.

### Example

```typescript
import {
    DocumentTypesApi,
    Configuration,
    DocumentTypeMetadataType
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentTypesApi(configuration);

let documentTypeId: string; // (default to undefined)
let metadataTypeId: string; // (default to undefined)
let data: DocumentTypeMetadataType; //

const { status, data } = await apiInstance.documentTypesMetadataTypesUpdate(
    documentTypeId,
    metadataTypeId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentTypeMetadataType**|  | |
| **documentTypeId** | [**string**] |  | defaults to undefined|
| **metadataTypeId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentTypeMetadataType**

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

# **documentTypesOcrSettingsPartialUpdate**
> DocumentTypeOCRSettings documentTypesOcrSettingsPartialUpdate(data)

Set the document type OCR settings.

### Example

```typescript
import {
    DocumentTypesApi,
    Configuration,
    DocumentTypeOCRSettings
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentTypesApi(configuration);

let documentTypeId: string; // (default to undefined)
let data: DocumentTypeOCRSettings; //

const { status, data } = await apiInstance.documentTypesOcrSettingsPartialUpdate(
    documentTypeId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentTypeOCRSettings**|  | |
| **documentTypeId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentTypeOCRSettings**

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

# **documentTypesOcrSettingsRead**
> DocumentTypeOCRSettings documentTypesOcrSettingsRead()

Return the document type OCR settings.

### Example

```typescript
import {
    DocumentTypesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentTypesApi(configuration);

let documentTypeId: string; // (default to undefined)

const { status, data } = await apiInstance.documentTypesOcrSettingsRead(
    documentTypeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentTypeId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentTypeOCRSettings**

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

# **documentTypesOcrSettingsUpdate**
> DocumentTypeOCRSettings documentTypesOcrSettingsUpdate(data)

Set the document type OCR settings.

### Example

```typescript
import {
    DocumentTypesApi,
    Configuration,
    DocumentTypeOCRSettings
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentTypesApi(configuration);

let documentTypeId: string; // (default to undefined)
let data: DocumentTypeOCRSettings; //

const { status, data } = await apiInstance.documentTypesOcrSettingsUpdate(
    documentTypeId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentTypeOCRSettings**|  | |
| **documentTypeId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentTypeOCRSettings**

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

# **documentTypesParsingSettingsPartialUpdate**
> DocumentTypeParsingSettings documentTypesParsingSettingsPartialUpdate(data)

Set the document type parsing settings.

### Example

```typescript
import {
    DocumentTypesApi,
    Configuration,
    DocumentTypeParsingSettings
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentTypesApi(configuration);

let documentTypeId: string; // (default to undefined)
let data: DocumentTypeParsingSettings; //

const { status, data } = await apiInstance.documentTypesParsingSettingsPartialUpdate(
    documentTypeId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentTypeParsingSettings**|  | |
| **documentTypeId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentTypeParsingSettings**

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

# **documentTypesParsingSettingsRead**
> DocumentTypeParsingSettings documentTypesParsingSettingsRead()

Return the document type parsing settings.

### Example

```typescript
import {
    DocumentTypesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentTypesApi(configuration);

let documentTypeId: string; // (default to undefined)

const { status, data } = await apiInstance.documentTypesParsingSettingsRead(
    documentTypeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentTypeId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentTypeParsingSettings**

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

# **documentTypesParsingSettingsUpdate**
> DocumentTypeParsingSettings documentTypesParsingSettingsUpdate(data)

Set the document type parsing settings.

### Example

```typescript
import {
    DocumentTypesApi,
    Configuration,
    DocumentTypeParsingSettings
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentTypesApi(configuration);

let documentTypeId: string; // (default to undefined)
let data: DocumentTypeParsingSettings; //

const { status, data } = await apiInstance.documentTypesParsingSettingsUpdate(
    documentTypeId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentTypeParsingSettings**|  | |
| **documentTypeId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentTypeParsingSettings**

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

# **documentTypesPartialUpdate**
> DocumentType documentTypesPartialUpdate(data)

Edit the properties of the selected document type.

### Example

```typescript
import {
    DocumentTypesApi,
    Configuration,
    DocumentType
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentTypesApi(configuration);

let documentTypeId: string; // (default to undefined)
let data: DocumentType; //

const { status, data } = await apiInstance.documentTypesPartialUpdate(
    documentTypeId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentType**|  | |
| **documentTypeId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentType**

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

# **documentTypesQuickLabelsCreate**
> DocumentTypeQuickLabel documentTypesQuickLabelsCreate(data)

Create a new document type quick label.

### Example

```typescript
import {
    DocumentTypesApi,
    Configuration,
    DocumentTypeQuickLabel
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentTypesApi(configuration);

let documentTypeId: string; // (default to undefined)
let data: DocumentTypeQuickLabel; //

const { status, data } = await apiInstance.documentTypesQuickLabelsCreate(
    documentTypeId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentTypeQuickLabel**|  | |
| **documentTypeId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentTypeQuickLabel**

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

# **documentTypesQuickLabelsDelete**
> documentTypesQuickLabelsDelete()

Delete the selected quick label.

### Example

```typescript
import {
    DocumentTypesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentTypesApi(configuration);

let documentTypeId: string; // (default to undefined)
let documentTypeQuickLabelId: string; // (default to undefined)

const { status, data } = await apiInstance.documentTypesQuickLabelsDelete(
    documentTypeId,
    documentTypeQuickLabelId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentTypeId** | [**string**] |  | defaults to undefined|
| **documentTypeQuickLabelId** | [**string**] |  | defaults to undefined|


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

# **documentTypesQuickLabelsList**
> DocumentTypesQuickLabelsList200Response documentTypesQuickLabelsList()

Returns a list of all the document type quick labels.

### Example

```typescript
import {
    DocumentTypesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentTypesApi(configuration);

let documentTypeId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.documentTypesQuickLabelsList(
    documentTypeId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentTypeId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**DocumentTypesQuickLabelsList200Response**

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

# **documentTypesQuickLabelsPartialUpdate**
> DocumentTypeQuickLabel documentTypesQuickLabelsPartialUpdate(data)

Edit the properties of the selected quick label.

### Example

```typescript
import {
    DocumentTypesApi,
    Configuration,
    DocumentTypeQuickLabel
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentTypesApi(configuration);

let documentTypeId: string; // (default to undefined)
let documentTypeQuickLabelId: string; // (default to undefined)
let data: DocumentTypeQuickLabel; //

const { status, data } = await apiInstance.documentTypesQuickLabelsPartialUpdate(
    documentTypeId,
    documentTypeQuickLabelId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentTypeQuickLabel**|  | |
| **documentTypeId** | [**string**] |  | defaults to undefined|
| **documentTypeQuickLabelId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentTypeQuickLabel**

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

# **documentTypesQuickLabelsRead**
> DocumentTypeQuickLabel documentTypesQuickLabelsRead()

Return the details of the selected quick label.

### Example

```typescript
import {
    DocumentTypesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentTypesApi(configuration);

let documentTypeId: string; // (default to undefined)
let documentTypeQuickLabelId: string; // (default to undefined)

const { status, data } = await apiInstance.documentTypesQuickLabelsRead(
    documentTypeId,
    documentTypeQuickLabelId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentTypeId** | [**string**] |  | defaults to undefined|
| **documentTypeQuickLabelId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentTypeQuickLabel**

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

# **documentTypesQuickLabelsUpdate**
> DocumentTypeQuickLabel documentTypesQuickLabelsUpdate(data)

Edit the properties of the selected quick label.

### Example

```typescript
import {
    DocumentTypesApi,
    Configuration,
    DocumentTypeQuickLabel
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentTypesApi(configuration);

let documentTypeId: string; // (default to undefined)
let documentTypeQuickLabelId: string; // (default to undefined)
let data: DocumentTypeQuickLabel; //

const { status, data } = await apiInstance.documentTypesQuickLabelsUpdate(
    documentTypeId,
    documentTypeQuickLabelId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentTypeQuickLabel**|  | |
| **documentTypeId** | [**string**] |  | defaults to undefined|
| **documentTypeQuickLabelId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentTypeQuickLabel**

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

# **documentTypesRead**
> DocumentType documentTypesRead()

Return the details of the selected document type.

### Example

```typescript
import {
    DocumentTypesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentTypesApi(configuration);

let documentTypeId: string; // (default to undefined)

const { status, data } = await apiInstance.documentTypesRead(
    documentTypeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentTypeId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentType**

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

# **documentTypesUpdate**
> DocumentType documentTypesUpdate(data)

Edit the properties of the selected document type.

### Example

```typescript
import {
    DocumentTypesApi,
    Configuration,
    DocumentType
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentTypesApi(configuration);

let documentTypeId: string; // (default to undefined)
let data: DocumentType; //

const { status, data } = await apiInstance.documentTypesUpdate(
    documentTypeId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentType**|  | |
| **documentTypeId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentType**

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

