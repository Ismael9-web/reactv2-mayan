# DocumentsApi

All URIs are relative to *http://localhost/api/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**documentsAccessedList**](#documentsaccessedlist) | **GET** /documents/accessed/ | |
|[**documentsCabinetsList**](#documentscabinetslist) | **GET** /documents/{document_id}/cabinets/ | |
|[**documentsCheckoutDelete**](#documentscheckoutdelete) | **DELETE** /documents/{document_id}/checkout/ | |
|[**documentsCheckoutRead**](#documentscheckoutread) | **GET** /documents/{document_id}/checkout/ | |
|[**documentsCommentsCreate**](#documentscommentscreate) | **POST** /documents/{document_id}/comments/ | |
|[**documentsCommentsDelete**](#documentscommentsdelete) | **DELETE** /documents/{document_id}/comments/{comment_id}/ | |
|[**documentsCommentsList**](#documentscommentslist) | **GET** /documents/{document_id}/comments/ | |
|[**documentsCommentsPartialUpdate**](#documentscommentspartialupdate) | **PATCH** /documents/{document_id}/comments/{comment_id}/ | |
|[**documentsCommentsRead**](#documentscommentsread) | **GET** /documents/{document_id}/comments/{comment_id}/ | |
|[**documentsCommentsUpdate**](#documentscommentsupdate) | **PUT** /documents/{document_id}/comments/{comment_id}/ | |
|[**documentsCreate**](#documentscreate) | **POST** /documents/ | |
|[**documentsCreatedList**](#documentscreatedlist) | **GET** /documents/created/ | |
|[**documentsDelete**](#documentsdelete) | **DELETE** /documents/{document_id}/ | |
|[**documentsDuplicatedList**](#documentsduplicatedlist) | **GET** /documents/duplicated/ | |
|[**documentsDuplicatesList**](#documentsduplicateslist) | **GET** /documents/{document_id}/duplicates/ | |
|[**documentsFavoritesCreate**](#documentsfavoritescreate) | **POST** /documents/favorites/ | |
|[**documentsFavoritesDelete**](#documentsfavoritesdelete) | **DELETE** /documents/favorites/{favorite_document_id}/ | |
|[**documentsFavoritesList**](#documentsfavoriteslist) | **GET** /documents/favorites/ | |
|[**documentsFavoritesRead**](#documentsfavoritesread) | **GET** /documents/favorites/{favorite_document_id}/ | |
|[**documentsFilesCreate**](#documentsfilescreate) | **POST** /documents/{document_id}/files/ | |
|[**documentsFilesDelete**](#documentsfilesdelete) | **DELETE** /documents/{document_id}/files/{document_file_id}/ | |
|[**documentsFilesDownloadRead**](#documentsfilesdownloadread) | **GET** /documents/{document_id}/files/{document_file_id}/download/ | |
|[**documentsFilesFileMetadataDriversEntriesList**](#documentsfilesfilemetadatadriversentrieslist) | **GET** /documents/{document_id}/files/{document_file_id}/file_metadata/drivers/{driver_id}/entries/ | |
|[**documentsFilesFileMetadataDriversEntriesRead**](#documentsfilesfilemetadatadriversentriesread) | **GET** /documents/{document_id}/files/{document_file_id}/file_metadata/drivers/{driver_id}/entries/{entry_id}/ | |
|[**documentsFilesFileMetadataDriversList**](#documentsfilesfilemetadatadriverslist) | **GET** /documents/{document_id}/files/{document_file_id}/file_metadata/drivers/ | |
|[**documentsFilesFileMetadataDriversRead**](#documentsfilesfilemetadatadriversread) | **GET** /documents/{document_id}/files/{document_file_id}/file_metadata/drivers/{driver_id}/ | |
|[**documentsFilesFileMetadataSubmitCreate**](#documentsfilesfilemetadatasubmitcreate) | **POST** /documents/{document_id}/files/{document_file_id}/file_metadata/submit/ | |
|[**documentsFilesList**](#documentsfileslist) | **GET** /documents/{document_id}/files/ | |
|[**documentsFilesPagesContentRead**](#documentsfilespagescontentread) | **GET** /documents/{document_id}/files/{document_file_id}/pages/{document_file_page_id}/content/ | |
|[**documentsFilesPagesImageRead**](#documentsfilespagesimageread) | **GET** /documents/{document_id}/files/{document_file_id}/pages/{document_file_page_id}/image/ | |
|[**documentsFilesPagesList**](#documentsfilespageslist) | **GET** /documents/{document_id}/files/{document_file_id}/pages/ | |
|[**documentsFilesPagesRead**](#documentsfilespagesread) | **GET** /documents/{document_id}/files/{document_file_id}/pages/{document_file_page_id}/ | |
|[**documentsFilesPartialUpdate**](#documentsfilespartialupdate) | **PATCH** /documents/{document_id}/files/{document_file_id}/ | |
|[**documentsFilesRead**](#documentsfilesread) | **GET** /documents/{document_id}/files/{document_file_id}/ | |
|[**documentsFilesSignaturesDetachedDelete**](#documentsfilessignaturesdetacheddelete) | **DELETE** /documents/{document_id}/files/{document_file_id}/signatures/detached/{detached_signature_id}/ | |
|[**documentsFilesSignaturesDetachedList**](#documentsfilessignaturesdetachedlist) | **GET** /documents/{document_id}/files/{document_file_id}/signatures/detached/ | |
|[**documentsFilesSignaturesDetachedRead**](#documentsfilessignaturesdetachedread) | **GET** /documents/{document_id}/files/{document_file_id}/signatures/detached/{detached_signature_id}/ | |
|[**documentsFilesSignaturesDetachedSignCreate**](#documentsfilessignaturesdetachedsigncreate) | **POST** /documents/{document_id}/files/{document_file_id}/signatures/detached/sign/ | |
|[**documentsFilesSignaturesDetachedUploadCreate**](#documentsfilessignaturesdetacheduploadcreate) | **POST** /documents/{document_id}/files/{document_file_id}/signatures/detached/upload/ | |
|[**documentsFilesSignaturesEmbeddedList**](#documentsfilessignaturesembeddedlist) | **GET** /documents/{document_id}/files/{document_file_id}/signatures/embedded/ | |
|[**documentsFilesSignaturesEmbeddedRead**](#documentsfilessignaturesembeddedread) | **GET** /documents/{document_id}/files/{document_file_id}/signatures/embedded/{embedded_signature_id}/ | |
|[**documentsFilesSignaturesEmbeddedSignCreate**](#documentsfilessignaturesembeddedsigncreate) | **POST** /documents/{document_id}/files/{document_file_id}/signatures/embedded/sign/ | |
|[**documentsFilesSourceMetadataList**](#documentsfilessourcemetadatalist) | **GET** /documents/{document_id}/files/{document_file_id}/source_metadata/ | |
|[**documentsFilesSourceMetadataRead**](#documentsfilessourcemetadataread) | **GET** /documents/{document_id}/files/{document_file_id}/source_metadata/{document_file_source_metadata_id}/ | |
|[**documentsFilesUpdate**](#documentsfilesupdate) | **PUT** /documents/{document_id}/files/{document_file_id}/ | |
|[**documentsIndexesList**](#documentsindexeslist) | **GET** /documents/{document_id}/indexes/ | |
|[**documentsList**](#documentslist) | **GET** /documents/ | |
|[**documentsMetadataCreate**](#documentsmetadatacreate) | **POST** /documents/{document_id}/metadata/ | |
|[**documentsMetadataDelete**](#documentsmetadatadelete) | **DELETE** /documents/{document_id}/metadata/{metadata_id}/ | |
|[**documentsMetadataList**](#documentsmetadatalist) | **GET** /documents/{document_id}/metadata/ | |
|[**documentsMetadataPartialUpdate**](#documentsmetadatapartialupdate) | **PATCH** /documents/{document_id}/metadata/{metadata_id}/ | |
|[**documentsMetadataRead**](#documentsmetadataread) | **GET** /documents/{document_id}/metadata/{metadata_id}/ | |
|[**documentsMetadataUpdate**](#documentsmetadataupdate) | **PUT** /documents/{document_id}/metadata/{metadata_id}/ | |
|[**documentsOcrSubmitCreate**](#documentsocrsubmitcreate) | **POST** /documents/{document_id}/ocr/submit/ | |
|[**documentsPartialUpdate**](#documentspartialupdate) | **PATCH** /documents/{document_id}/ | |
|[**documentsRead**](#documentsread) | **GET** /documents/{document_id}/ | |
|[**documentsResolvedSmartLinksDocumentsList**](#documentsresolvedsmartlinksdocumentslist) | **GET** /documents/{document_id}/resolved_smart_links/{resolved_smart_link_id}/documents/ | |
|[**documentsResolvedSmartLinksList**](#documentsresolvedsmartlinkslist) | **GET** /documents/{document_id}/resolved_smart_links/ | |
|[**documentsResolvedSmartLinksRead**](#documentsresolvedsmartlinksread) | **GET** /documents/{document_id}/resolved_smart_links/{resolved_smart_link_id}/ | |
|[**documentsResolvedWebLinksList**](#documentsresolvedweblinkslist) | **GET** /documents/{document_id}/resolved_web_links/ | |
|[**documentsResolvedWebLinksNavigateRead**](#documentsresolvedweblinksnavigateread) | **GET** /documents/{document_id}/resolved_web_links/{resolved_web_link_id}/navigate/ | |
|[**documentsResolvedWebLinksRead**](#documentsresolvedweblinksread) | **GET** /documents/{document_id}/resolved_web_links/{resolved_web_link_id}/ | |
|[**documentsSignatureCapturesCreate**](#documentssignaturecapturescreate) | **POST** /documents/{document_id}/signature_captures/ | |
|[**documentsSignatureCapturesDelete**](#documentssignaturecapturesdelete) | **DELETE** /documents/{document_id}/signature_captures/{signature_capture_id}/ | |
|[**documentsSignatureCapturesImageRead**](#documentssignaturecapturesimageread) | **GET** /documents/{document_id}/signature_captures/{signature_capture_id}/image/ | |
|[**documentsSignatureCapturesList**](#documentssignaturecaptureslist) | **GET** /documents/{document_id}/signature_captures/ | |
|[**documentsSignatureCapturesPartialUpdate**](#documentssignaturecapturespartialupdate) | **PATCH** /documents/{document_id}/signature_captures/{signature_capture_id}/ | |
|[**documentsSignatureCapturesRead**](#documentssignaturecapturesread) | **GET** /documents/{document_id}/signature_captures/{signature_capture_id}/ | |
|[**documentsSignatureCapturesUpdate**](#documentssignaturecapturesupdate) | **PUT** /documents/{document_id}/signature_captures/{signature_capture_id}/ | |
|[**documentsTagsAttachCreate**](#documentstagsattachcreate) | **POST** /documents/{document_id}/tags/attach/ | |
|[**documentsTagsList**](#documentstagslist) | **GET** /documents/{document_id}/tags/ | |
|[**documentsTagsRemoveCreate**](#documentstagsremovecreate) | **POST** /documents/{document_id}/tags/remove/ | |
|[**documentsTypeChangeCreate**](#documentstypechangecreate) | **POST** /documents/{document_id}/type/change/ | |
|[**documentsUpdate**](#documentsupdate) | **PUT** /documents/{document_id}/ | |
|[**documentsUploadCreate**](#documentsuploadcreate) | **POST** /documents/upload/ | |
|[**documentsVersionsCreate**](#documentsversionscreate) | **POST** /documents/{document_id}/versions/ | |
|[**documentsVersionsDelete**](#documentsversionsdelete) | **DELETE** /documents/{document_id}/versions/{document_version_id}/ | |
|[**documentsVersionsExportCreate**](#documentsversionsexportcreate) | **POST** /documents/{document_id}/versions/{document_version_id}/export/ | |
|[**documentsVersionsList**](#documentsversionslist) | **GET** /documents/{document_id}/versions/ | |
|[**documentsVersionsModifyCreate**](#documentsversionsmodifycreate) | **POST** /documents/{document_id}/versions/{document_version_id}/modify/ | |
|[**documentsVersionsOcrSubmitCreate**](#documentsversionsocrsubmitcreate) | **POST** /documents/{document_id}/versions/{document_version_id}/ocr/submit/ | |
|[**documentsVersionsPagesCreate**](#documentsversionspagescreate) | **POST** /documents/{document_id}/versions/{document_version_id}/pages/ | |
|[**documentsVersionsPagesDelete**](#documentsversionspagesdelete) | **DELETE** /documents/{document_id}/versions/{document_version_id}/pages/{document_version_page_id}/ | |
|[**documentsVersionsPagesImageRead**](#documentsversionspagesimageread) | **GET** /documents/{document_id}/versions/{document_version_id}/pages/{document_version_page_id}/image/ | |
|[**documentsVersionsPagesList**](#documentsversionspageslist) | **GET** /documents/{document_id}/versions/{document_version_id}/pages/ | |
|[**documentsVersionsPagesOcrPartialUpdate**](#documentsversionspagesocrpartialupdate) | **PATCH** /documents/{document_id}/versions/{document_version_id}/pages/{document_version_page_id}/ocr/ | |
|[**documentsVersionsPagesOcrRead**](#documentsversionspagesocrread) | **GET** /documents/{document_id}/versions/{document_version_id}/pages/{document_version_page_id}/ocr/ | |
|[**documentsVersionsPagesOcrUpdate**](#documentsversionspagesocrupdate) | **PUT** /documents/{document_id}/versions/{document_version_id}/pages/{document_version_page_id}/ocr/ | |
|[**documentsVersionsPagesPartialUpdate**](#documentsversionspagespartialupdate) | **PATCH** /documents/{document_id}/versions/{document_version_id}/pages/{document_version_page_id}/ | |
|[**documentsVersionsPagesRead**](#documentsversionspagesread) | **GET** /documents/{document_id}/versions/{document_version_id}/pages/{document_version_page_id}/ | |
|[**documentsVersionsPagesUpdate**](#documentsversionspagesupdate) | **PUT** /documents/{document_id}/versions/{document_version_id}/pages/{document_version_page_id}/ | |
|[**documentsVersionsPartialUpdate**](#documentsversionspartialupdate) | **PATCH** /documents/{document_id}/versions/{document_version_id}/ | |
|[**documentsVersionsRead**](#documentsversionsread) | **GET** /documents/{document_id}/versions/{document_version_id}/ | |
|[**documentsVersionsUpdate**](#documentsversionsupdate) | **PUT** /documents/{document_id}/versions/{document_version_id}/ | |
|[**documentsWorkflowInstancesLaunchCreate**](#documentsworkflowinstanceslaunchcreate) | **POST** /documents/{document_id}/workflow_instances/launch/ | |
|[**documentsWorkflowInstancesList**](#documentsworkflowinstanceslist) | **GET** /documents/{document_id}/workflow_instances/ | |
|[**documentsWorkflowInstancesLogEntriesCreate**](#documentsworkflowinstanceslogentriescreate) | **POST** /documents/{document_id}/workflow_instances/{workflow_instance_id}/log_entries/ | |
|[**documentsWorkflowInstancesLogEntriesList**](#documentsworkflowinstanceslogentrieslist) | **GET** /documents/{document_id}/workflow_instances/{workflow_instance_id}/log_entries/ | |
|[**documentsWorkflowInstancesLogEntriesRead**](#documentsworkflowinstanceslogentriesread) | **GET** /documents/{document_id}/workflow_instances/{workflow_instance_id}/log_entries/{workflow_instance_log_entry_id}/ | |
|[**documentsWorkflowInstancesLogEntriesTransitionsList**](#documentsworkflowinstanceslogentriestransitionslist) | **GET** /documents/{document_id}/workflow_instances/{workflow_instance_id}/log_entries/transitions/ | |
|[**documentsWorkflowInstancesRead**](#documentsworkflowinstancesread) | **GET** /documents/{document_id}/workflow_instances/{workflow_instance_id}/ | |

# **documentsAccessedList**
> DocumentsAccessedList200Response documentsAccessedList()

Return a list of the recently accessed documents for the current user.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.documentsAccessedList(
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

**DocumentsAccessedList200Response**

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

# **documentsCabinetsList**
> CabinetsList200Response documentsCabinetsList()

Returns a list of all the cabinets to which a document belongs.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.documentsCabinetsList(
    documentId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
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

# **documentsCheckoutDelete**
> documentsCheckoutDelete()

Check in the selected document.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsCheckoutDelete(
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

# **documentsCheckoutRead**
> DocumentCheckout documentsCheckoutRead()

Retrieve the checkout details of the selected document entry.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsCheckoutRead(
    documentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentCheckout**

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

# **documentsCommentsCreate**
> Comment documentsCommentsCreate(data)

Create a new document comment.

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    Comment
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let data: Comment; //

const { status, data } = await apiInstance.documentsCommentsCreate(
    documentId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Comment**|  | |
| **documentId** | [**string**] |  | defaults to undefined|


### Return type

**Comment**

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

# **documentsCommentsDelete**
> documentsCommentsDelete()

Delete the selected document comment.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let commentId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsCommentsDelete(
    documentId,
    commentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **commentId** | [**string**] |  | defaults to undefined|


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

# **documentsCommentsList**
> DocumentsCommentsList200Response documentsCommentsList()

Returns a list of all the document comments.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.documentsCommentsList(
    documentId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**DocumentsCommentsList200Response**

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

# **documentsCommentsPartialUpdate**
> Comment documentsCommentsPartialUpdate(data)


### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    Comment
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let commentId: string; // (default to undefined)
let data: Comment; //

const { status, data } = await apiInstance.documentsCommentsPartialUpdate(
    documentId,
    commentId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Comment**|  | |
| **documentId** | [**string**] |  | defaults to undefined|
| **commentId** | [**string**] |  | defaults to undefined|


### Return type

**Comment**

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

# **documentsCommentsRead**
> Comment documentsCommentsRead()

Returns the details of the selected document comment.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let commentId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsCommentsRead(
    documentId,
    commentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **commentId** | [**string**] |  | defaults to undefined|


### Return type

**Comment**

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

# **documentsCommentsUpdate**
> Comment documentsCommentsUpdate(data)


### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    Comment
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let commentId: string; // (default to undefined)
let data: Comment; //

const { status, data } = await apiInstance.documentsCommentsUpdate(
    documentId,
    commentId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Comment**|  | |
| **documentId** | [**string**] |  | defaults to undefined|
| **commentId** | [**string**] |  | defaults to undefined|


### Return type

**Comment**

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

# **documentsCreate**
> Document documentsCreate(data)

Create a new document.

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    Document
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let data: Document; //

const { status, data } = await apiInstance.documentsCreate(
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Document**|  | |


### Return type

**Document**

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

# **documentsCreatedList**
> CabinetsDocumentsList200Response documentsCreatedList()

Return a list of the recently created documents.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.documentsCreatedList(
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

# **documentsDelete**
> documentsDelete()

Move the selected document to the thrash.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsDelete(
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

# **documentsDuplicatedList**
> CabinetsDocumentsList200Response documentsDuplicatedList()

Return a list of duplicated documents.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.documentsDuplicatedList(
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

# **documentsDuplicatesList**
> DocumentsDuplicatesList200Response documentsDuplicatesList()

Return a list of the selected document\'s duplicates.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.documentsDuplicatesList(
    documentId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**DocumentsDuplicatesList200Response**

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

# **documentsFavoritesCreate**
> FavoriteDocument documentsFavoritesCreate(data)

Add a new document to the list of favorite documents for the current user.

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    FavoriteDocument
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let data: FavoriteDocument; //

const { status, data } = await apiInstance.documentsFavoritesCreate(
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **FavoriteDocument**|  | |


### Return type

**FavoriteDocument**

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

# **documentsFavoritesDelete**
> documentsFavoritesDelete()

Delete the selected favorite document.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let favoriteDocumentId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsFavoritesDelete(
    favoriteDocumentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **favoriteDocumentId** | [**string**] |  | defaults to undefined|


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

# **documentsFavoritesList**
> DocumentsFavoritesList200Response documentsFavoritesList()

Return a list of the favorite documents for the current user.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.documentsFavoritesList(
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

**DocumentsFavoritesList200Response**

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

# **documentsFavoritesRead**
> FavoriteDocument documentsFavoritesRead()

Return the details of the selected favorite document.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let favoriteDocumentId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsFavoritesRead(
    favoriteDocumentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **favoriteDocumentId** | [**string**] |  | defaults to undefined|


### Return type

**FavoriteDocument**

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

# **documentsFilesCreate**
> DocumentFile documentsFilesCreate(data)

Create a new document file.

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    DocumentFile
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let data: DocumentFile; //

const { status, data } = await apiInstance.documentsFilesCreate(
    documentId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentFile**|  | |
| **documentId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentFile**

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

# **documentsFilesDelete**
> documentsFilesDelete()

Delete the selected document file.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentFileId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsFilesDelete(
    documentId,
    documentFileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **documentFileId** | [**string**] |  | defaults to undefined|


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

# **documentsFilesDownloadRead**
> documentsFilesDownloadRead()

Download a document file.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentFileId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsFilesDownloadRead(
    documentId,
    documentFileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **documentFileId** | [**string**] |  | defaults to undefined|


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

# **documentsFilesFileMetadataDriversEntriesList**
> DocumentsFilesFileMetadataDriversEntriesList200Response documentsFilesFileMetadataDriversEntriesList()

Return the list of file metadata entries for the selected driver.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentFileId: string; // (default to undefined)
let driverId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.documentsFilesFileMetadataDriversEntriesList(
    documentId,
    documentFileId,
    driverId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **documentFileId** | [**string**] |  | defaults to undefined|
| **driverId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**DocumentsFilesFileMetadataDriversEntriesList200Response**

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

# **documentsFilesFileMetadataDriversEntriesRead**
> DocumentFileMetadataEntry documentsFilesFileMetadataDriversEntriesRead()

Return the detail of selected document file metadata entry.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentFileId: string; // (default to undefined)
let driverId: string; // (default to undefined)
let entryId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsFilesFileMetadataDriversEntriesRead(
    documentId,
    documentFileId,
    driverId,
    entryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **documentFileId** | [**string**] |  | defaults to undefined|
| **driverId** | [**string**] |  | defaults to undefined|
| **entryId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentFileMetadataEntry**

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

# **documentsFilesFileMetadataDriversList**
> DocumentsFilesFileMetadataDriversList200Response documentsFilesFileMetadataDriversList()

Returns a list of selected document\'s file metadata drivers.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentFileId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.documentsFilesFileMetadataDriversList(
    documentId,
    documentFileId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **documentFileId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**DocumentsFilesFileMetadataDriversList200Response**

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

# **documentsFilesFileMetadataDriversRead**
> DocumentFileMetadataDriverEntry documentsFilesFileMetadataDriversRead()

Returns the details of the document file metadata driver.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentFileId: string; // (default to undefined)
let driverId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsFilesFileMetadataDriversRead(
    documentId,
    documentFileId,
    driverId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **documentFileId** | [**string**] |  | defaults to undefined|
| **driverId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentFileMetadataDriverEntry**

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

# **documentsFilesFileMetadataSubmitCreate**
> object documentsFilesFileMetadataSubmitCreate(data)

Submit a document file for file metadata processing.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentFileId: string; // (default to undefined)
let data: object; //

const { status, data } = await apiInstance.documentsFilesFileMetadataSubmitCreate(
    documentId,
    documentFileId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **object**|  | |
| **documentId** | [**string**] |  | defaults to undefined|
| **documentFileId** | [**string**] |  | defaults to undefined|


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

# **documentsFilesList**
> DocumentsFilesList200Response documentsFilesList()

Return a list of the selected document\'s files.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.documentsFilesList(
    documentId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**DocumentsFilesList200Response**

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

# **documentsFilesPagesContentRead**
> DocumentFilePageContent documentsFilesPagesContentRead()

Returns the content of the selected document page.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentFileId: string; // (default to undefined)
let documentFilePageId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsFilesPagesContentRead(
    documentId,
    documentFileId,
    documentFilePageId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **documentFileId** | [**string**] |  | defaults to undefined|
| **documentFilePageId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentFilePageContent**

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

# **documentsFilesPagesImageRead**
> documentsFilesPagesImageRead()

Returns an image representation of the selected document.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentFileId: string; // (default to undefined)
let documentFilePageId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsFilesPagesImageRead(
    documentId,
    documentFileId,
    documentFilePageId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **documentFileId** | [**string**] |  | defaults to undefined|
| **documentFilePageId** | [**string**] |  | defaults to undefined|


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

# **documentsFilesPagesList**
> DocumentsFilesPagesList200Response documentsFilesPagesList()


### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentFileId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.documentsFilesPagesList(
    documentId,
    documentFileId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **documentFileId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**DocumentsFilesPagesList200Response**

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

# **documentsFilesPagesRead**
> DocumentFilePage documentsFilesPagesRead()

Returns the selected document page details.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentFileId: string; // (default to undefined)
let documentFilePageId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsFilesPagesRead(
    documentId,
    documentFileId,
    documentFilePageId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **documentFileId** | [**string**] |  | defaults to undefined|
| **documentFilePageId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentFilePage**

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

# **documentsFilesPartialUpdate**
> DocumentFile documentsFilesPartialUpdate(data)


### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    DocumentFile
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentFileId: string; // (default to undefined)
let data: DocumentFile; //

const { status, data } = await apiInstance.documentsFilesPartialUpdate(
    documentId,
    documentFileId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentFile**|  | |
| **documentId** | [**string**] |  | defaults to undefined|
| **documentFileId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentFile**

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

# **documentsFilesRead**
> DocumentFile documentsFilesRead()

Returns the selected document file details.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentFileId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsFilesRead(
    documentId,
    documentFileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **documentFileId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentFile**

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

# **documentsFilesSignaturesDetachedDelete**
> documentsFilesSignaturesDetachedDelete()

Delete an detached signature of the selected document.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentFileId: string; // (default to undefined)
let detachedSignatureId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsFilesSignaturesDetachedDelete(
    documentId,
    documentFileId,
    detachedSignatureId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **documentFileId** | [**string**] |  | defaults to undefined|
| **detachedSignatureId** | [**string**] |  | defaults to undefined|


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

# **documentsFilesSignaturesDetachedList**
> DocumentsFilesSignaturesDetachedList200Response documentsFilesSignaturesDetachedList()

Returns a list of all the detached signatures of a document file.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentFileId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.documentsFilesSignaturesDetachedList(
    documentId,
    documentFileId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **documentFileId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**DocumentsFilesSignaturesDetachedList200Response**

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

# **documentsFilesSignaturesDetachedRead**
> DetachedSignature documentsFilesSignaturesDetachedRead()

Returns the details of the selected detached signature.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentFileId: string; // (default to undefined)
let detachedSignatureId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsFilesSignaturesDetachedRead(
    documentId,
    documentFileId,
    detachedSignatureId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **documentFileId** | [**string**] |  | defaults to undefined|
| **detachedSignatureId** | [**string**] |  | defaults to undefined|


### Return type

**DetachedSignature**

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

# **documentsFilesSignaturesDetachedSignCreate**
> SignDetached documentsFilesSignaturesDetachedSignCreate(data)

Sign a document file with a detached signature.

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    SignDetached
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentFileId: string; // (default to undefined)
let data: SignDetached; //

const { status, data } = await apiInstance.documentsFilesSignaturesDetachedSignCreate(
    documentId,
    documentFileId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **SignDetached**|  | |
| **documentId** | [**string**] |  | defaults to undefined|
| **documentFileId** | [**string**] |  | defaults to undefined|


### Return type

**SignDetached**

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

# **documentsFilesSignaturesDetachedUploadCreate**
> DetachedSignatureUpload documentsFilesSignaturesDetachedUploadCreate(data)

Upload a detached signature file for a document file.

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    DetachedSignatureUpload
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentFileId: string; // (default to undefined)
let data: DetachedSignatureUpload; //

const { status, data } = await apiInstance.documentsFilesSignaturesDetachedUploadCreate(
    documentId,
    documentFileId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DetachedSignatureUpload**|  | |
| **documentId** | [**string**] |  | defaults to undefined|
| **documentFileId** | [**string**] |  | defaults to undefined|


### Return type

**DetachedSignatureUpload**

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

# **documentsFilesSignaturesEmbeddedList**
> DocumentsFilesSignaturesEmbeddedList200Response documentsFilesSignaturesEmbeddedList()

Returns a list of all the embedded signatures of a document file.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentFileId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.documentsFilesSignaturesEmbeddedList(
    documentId,
    documentFileId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **documentFileId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**DocumentsFilesSignaturesEmbeddedList200Response**

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

# **documentsFilesSignaturesEmbeddedRead**
> EmbeddedSignature documentsFilesSignaturesEmbeddedRead()

Returns the details of the selected embedded signature.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentFileId: string; // (default to undefined)
let embeddedSignatureId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsFilesSignaturesEmbeddedRead(
    documentId,
    documentFileId,
    embeddedSignatureId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **documentFileId** | [**string**] |  | defaults to undefined|
| **embeddedSignatureId** | [**string**] |  | defaults to undefined|


### Return type

**EmbeddedSignature**

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

# **documentsFilesSignaturesEmbeddedSignCreate**
> SignEmbedded documentsFilesSignaturesEmbeddedSignCreate(data)

Sign a document file with an embedded signature.

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    SignEmbedded
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentFileId: string; // (default to undefined)
let data: SignEmbedded; //

const { status, data } = await apiInstance.documentsFilesSignaturesEmbeddedSignCreate(
    documentId,
    documentFileId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **SignEmbedded**|  | |
| **documentId** | [**string**] |  | defaults to undefined|
| **documentFileId** | [**string**] |  | defaults to undefined|


### Return type

**SignEmbedded**

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

# **documentsFilesSourceMetadataList**
> DocumentsFilesSourceMetadataList200Response documentsFilesSourceMetadataList()

Returns a list of selected document\'s source metadata values.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentFileId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.documentsFilesSourceMetadataList(
    documentId,
    documentFileId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **documentFileId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**DocumentsFilesSourceMetadataList200Response**

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

# **documentsFilesSourceMetadataRead**
> DocumentFileSourceMetadata documentsFilesSourceMetadataRead()

Return the details of the selected document source metadata.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentFileId: string; // (default to undefined)
let documentFileSourceMetadataId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsFilesSourceMetadataRead(
    documentId,
    documentFileId,
    documentFileSourceMetadataId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **documentFileId** | [**string**] |  | defaults to undefined|
| **documentFileSourceMetadataId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentFileSourceMetadata**

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

# **documentsFilesUpdate**
> DocumentFile documentsFilesUpdate(data)


### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    DocumentFile
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentFileId: string; // (default to undefined)
let data: DocumentFile; //

const { status, data } = await apiInstance.documentsFilesUpdate(
    documentId,
    documentFileId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentFile**|  | |
| **documentId** | [**string**] |  | defaults to undefined|
| **documentFileId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentFile**

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

# **documentsIndexesList**
> DocumentsIndexesList200Response documentsIndexesList()

Returns a list of all the indexes instance nodes where this document is found.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.documentsIndexesList(
    documentId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
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

# **documentsList**
> CabinetsDocumentsList200Response documentsList()

Returns a list of all the documents.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.documentsList(
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

# **documentsMetadataCreate**
> DocumentMetadata documentsMetadataCreate(data)

Add an existing metadata type and value to the selected document.

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    DocumentMetadata
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let data: DocumentMetadata; //

const { status, data } = await apiInstance.documentsMetadataCreate(
    documentId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentMetadata**|  | |
| **documentId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentMetadata**

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

# **documentsMetadataDelete**
> documentsMetadataDelete()

Remove this metadata entry from the selected document.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let metadataId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsMetadataDelete(
    documentId,
    metadataId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **metadataId** | [**string**] |  | defaults to undefined|


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

# **documentsMetadataList**
> DocumentsMetadataList200Response documentsMetadataList()

Returns a list of selected document\'s metadata types and values.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.documentsMetadataList(
    documentId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**DocumentsMetadataList200Response**

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

# **documentsMetadataPartialUpdate**
> DocumentMetadata documentsMetadataPartialUpdate(data)

Edit the selected document metadata type and value.

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    DocumentMetadata
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let metadataId: string; // (default to undefined)
let data: DocumentMetadata; //

const { status, data } = await apiInstance.documentsMetadataPartialUpdate(
    documentId,
    metadataId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentMetadata**|  | |
| **documentId** | [**string**] |  | defaults to undefined|
| **metadataId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentMetadata**

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

# **documentsMetadataRead**
> DocumentMetadata documentsMetadataRead()

Return the details of the selected document metadata type and value.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let metadataId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsMetadataRead(
    documentId,
    metadataId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **metadataId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentMetadata**

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

# **documentsMetadataUpdate**
> DocumentMetadata documentsMetadataUpdate(data)

Edit the selected document metadata type and value.

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    DocumentMetadata
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let metadataId: string; // (default to undefined)
let data: DocumentMetadata; //

const { status, data } = await apiInstance.documentsMetadataUpdate(
    documentId,
    metadataId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentMetadata**|  | |
| **documentId** | [**string**] |  | defaults to undefined|
| **metadataId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentMetadata**

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

# **documentsOcrSubmitCreate**
> documentsOcrSubmitCreate()

Submit a document for OCR.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsOcrSubmitCreate(
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
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **documentsPartialUpdate**
> Document documentsPartialUpdate(data)

Edit the properties of the selected document.

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    Document
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let data: Document; //

const { status, data } = await apiInstance.documentsPartialUpdate(
    documentId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Document**|  | |
| **documentId** | [**string**] |  | defaults to undefined|


### Return type

**Document**

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

# **documentsRead**
> Document documentsRead()

Return the details of the selected document.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsRead(
    documentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|


### Return type

**Document**

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

# **documentsResolvedSmartLinksDocumentsList**
> DocumentsResolvedSmartLinksDocumentsList200Response documentsResolvedSmartLinksDocumentsList()

Returns a list of the smart link documents that apply to the document.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let resolvedSmartLinkId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.documentsResolvedSmartLinksDocumentsList(
    documentId,
    resolvedSmartLinkId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **resolvedSmartLinkId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**DocumentsResolvedSmartLinksDocumentsList200Response**

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

# **documentsResolvedSmartLinksList**
> DocumentsResolvedSmartLinksList200Response documentsResolvedSmartLinksList()

Returns a list of the smart links that apply to the document.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.documentsResolvedSmartLinksList(
    documentId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**DocumentsResolvedSmartLinksList200Response**

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

# **documentsResolvedSmartLinksRead**
> ResolvedSmartLink documentsResolvedSmartLinksRead()

Return the details of the selected resolved smart link.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let resolvedSmartLinkId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsResolvedSmartLinksRead(
    documentId,
    resolvedSmartLinkId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **resolvedSmartLinkId** | [**string**] |  | defaults to undefined|


### Return type

**ResolvedSmartLink**

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

# **documentsResolvedWebLinksList**
> DocumentsResolvedWebLinksList200Response documentsResolvedWebLinksList()

Returns a list of resolved web links for the specified document.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.documentsResolvedWebLinksList(
    documentId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**DocumentsResolvedWebLinksList200Response**

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

# **documentsResolvedWebLinksNavigateRead**
> object documentsResolvedWebLinksNavigateRead()

Perform a redirection to the target URL of the selected resolved smart link.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let resolvedWebLinkId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsResolvedWebLinksNavigateRead(
    documentId,
    resolvedWebLinkId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **resolvedWebLinkId** | [**string**] |  | defaults to undefined|


### Return type

**object**

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

# **documentsResolvedWebLinksRead**
> ResolvedWebLink documentsResolvedWebLinksRead()

Return the details of the selected resolved smart link.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let resolvedWebLinkId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsResolvedWebLinksRead(
    documentId,
    resolvedWebLinkId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **resolvedWebLinkId** | [**string**] |  | defaults to undefined|


### Return type

**ResolvedWebLink**

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

# **documentsSignatureCapturesCreate**
> SignatureCapture documentsSignatureCapturesCreate(data)

Create a new signature_capture.

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    SignatureCapture
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let data: SignatureCapture; //

const { status, data } = await apiInstance.documentsSignatureCapturesCreate(
    documentId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **SignatureCapture**|  | |
| **documentId** | [**string**] |  | defaults to undefined|


### Return type

**SignatureCapture**

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

# **documentsSignatureCapturesDelete**
> documentsSignatureCapturesDelete()

Delete the selected signature_capture.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let signatureCaptureId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsSignatureCapturesDelete(
    documentId,
    signatureCaptureId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **signatureCaptureId** | [**string**] |  | defaults to undefined|


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

# **documentsSignatureCapturesImageRead**
> documentsSignatureCapturesImageRead()

Returns an image representation of the selected signature capture.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let signatureCaptureId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsSignatureCapturesImageRead(
    documentId,
    signatureCaptureId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **signatureCaptureId** | [**string**] |  | defaults to undefined|


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

# **documentsSignatureCapturesList**
> DocumentsSignatureCapturesList200Response documentsSignatureCapturesList()

Returns a list of all the signature_captures.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.documentsSignatureCapturesList(
    documentId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**DocumentsSignatureCapturesList200Response**

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

# **documentsSignatureCapturesPartialUpdate**
> SignatureCapture documentsSignatureCapturesPartialUpdate(data)

Edit the selected signature_capture.

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    SignatureCapture
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let signatureCaptureId: string; // (default to undefined)
let data: SignatureCapture; //

const { status, data } = await apiInstance.documentsSignatureCapturesPartialUpdate(
    documentId,
    signatureCaptureId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **SignatureCapture**|  | |
| **documentId** | [**string**] |  | defaults to undefined|
| **signatureCaptureId** | [**string**] |  | defaults to undefined|


### Return type

**SignatureCapture**

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

# **documentsSignatureCapturesRead**
> SignatureCapture documentsSignatureCapturesRead()

Return the details of the selected signature_capture.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let signatureCaptureId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsSignatureCapturesRead(
    documentId,
    signatureCaptureId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **signatureCaptureId** | [**string**] |  | defaults to undefined|


### Return type

**SignatureCapture**

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

# **documentsSignatureCapturesUpdate**
> SignatureCapture documentsSignatureCapturesUpdate(data)

Edit the selected signature_capture.

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    SignatureCapture
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let signatureCaptureId: string; // (default to undefined)
let data: SignatureCapture; //

const { status, data } = await apiInstance.documentsSignatureCapturesUpdate(
    documentId,
    signatureCaptureId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **SignatureCapture**|  | |
| **documentId** | [**string**] |  | defaults to undefined|
| **signatureCaptureId** | [**string**] |  | defaults to undefined|


### Return type

**SignatureCapture**

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

# **documentsTagsAttachCreate**
> DocumentTagAttach documentsTagsAttachCreate(data)

Attach a tag to a document.

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    DocumentTagAttach
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let data: DocumentTagAttach; //

const { status, data } = await apiInstance.documentsTagsAttachCreate(
    documentId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentTagAttach**|  | |
| **documentId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentTagAttach**

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

# **documentsTagsList**
> DocumentsTagsList200Response documentsTagsList()

Returns a list of all the tags attached to a document.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.documentsTagsList(
    documentId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**DocumentsTagsList200Response**

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

# **documentsTagsRemoveCreate**
> DocumentTagRemove documentsTagsRemoveCreate(data)

Remove a tag from a document.

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    DocumentTagRemove
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let data: DocumentTagRemove; //

const { status, data } = await apiInstance.documentsTagsRemoveCreate(
    documentId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentTagRemove**|  | |
| **documentId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentTagRemove**

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

# **documentsTypeChangeCreate**
> DocumentChangeType documentsTypeChangeCreate(data)

Change the type of the selected document.

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    DocumentChangeType
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let data: DocumentChangeType; //

const { status, data } = await apiInstance.documentsTypeChangeCreate(
    documentId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentChangeType**|  | |
| **documentId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentChangeType**

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

# **documentsUpdate**
> Document documentsUpdate(data)

Edit the properties of the selected document.

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    Document
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let data: Document; //

const { status, data } = await apiInstance.documentsUpdate(
    documentId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Document**|  | |
| **documentId** | [**string**] |  | defaults to undefined|


### Return type

**Document**

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

# **documentsUploadCreate**
> DocumentUpload documentsUploadCreate(data)

Create a new document and a new document file.

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    DocumentUpload
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let data: DocumentUpload; //

const { status, data } = await apiInstance.documentsUploadCreate(
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentUpload**|  | |


### Return type

**DocumentUpload**

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

# **documentsVersionsCreate**
> DocumentVersion documentsVersionsCreate(data)

Create a new document version.

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    DocumentVersion
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let data: DocumentVersion; //

const { status, data } = await apiInstance.documentsVersionsCreate(
    documentId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentVersion**|  | |
| **documentId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentVersion**

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

# **documentsVersionsDelete**
> documentsVersionsDelete()

Delete the selected document version.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentVersionId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsVersionsDelete(
    documentId,
    documentVersionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **documentVersionId** | [**string**] |  | defaults to undefined|


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

# **documentsVersionsExportCreate**
> object documentsVersionsExportCreate(data)

Exports the specified document version.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentVersionId: string; // (default to undefined)
let data: object; //

const { status, data } = await apiInstance.documentsVersionsExportCreate(
    documentId,
    documentVersionId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **object**|  | |
| **documentId** | [**string**] |  | defaults to undefined|
| **documentVersionId** | [**string**] |  | defaults to undefined|


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

# **documentsVersionsList**
> DocumentsVersionsList200Response documentsVersionsList()

Return a list of the selected document\'s versions.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.documentsVersionsList(
    documentId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**DocumentsVersionsList200Response**

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

# **documentsVersionsModifyCreate**
> DocumentVersionModificationExecute documentsVersionsModifyCreate(data)

Execute a modification backend on the selected document version.

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    DocumentVersionModificationExecute
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentVersionId: string; // (default to undefined)
let data: DocumentVersionModificationExecute; //

const { status, data } = await apiInstance.documentsVersionsModifyCreate(
    documentId,
    documentVersionId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentVersionModificationExecute**|  | |
| **documentId** | [**string**] |  | defaults to undefined|
| **documentVersionId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentVersionModificationExecute**

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

# **documentsVersionsOcrSubmitCreate**
> documentsVersionsOcrSubmitCreate()

Submit a document version for OCR.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentVersionId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsVersionsOcrSubmitCreate(
    documentId,
    documentVersionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **documentVersionId** | [**string**] |  | defaults to undefined|


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
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **documentsVersionsPagesCreate**
> DocumentVersionPage documentsVersionsPagesCreate(data)

Create a new document version page.

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    DocumentVersionPage
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentVersionId: string; // (default to undefined)
let data: DocumentVersionPage; //

const { status, data } = await apiInstance.documentsVersionsPagesCreate(
    documentId,
    documentVersionId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentVersionPage**|  | |
| **documentId** | [**string**] |  | defaults to undefined|
| **documentVersionId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentVersionPage**

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

# **documentsVersionsPagesDelete**
> documentsVersionsPagesDelete()

Delete the selected document version page.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentVersionId: string; // (default to undefined)
let documentVersionPageId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsVersionsPagesDelete(
    documentId,
    documentVersionId,
    documentVersionPageId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **documentVersionId** | [**string**] |  | defaults to undefined|
| **documentVersionPageId** | [**string**] |  | defaults to undefined|


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

# **documentsVersionsPagesImageRead**
> documentsVersionsPagesImageRead()

Returns an image representation of the selected document version page.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentVersionId: string; // (default to undefined)
let documentVersionPageId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsVersionsPagesImageRead(
    documentId,
    documentVersionId,
    documentVersionPageId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **documentVersionId** | [**string**] |  | defaults to undefined|
| **documentVersionPageId** | [**string**] |  | defaults to undefined|


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

# **documentsVersionsPagesList**
> DocumentsVersionsPagesList200Response documentsVersionsPagesList()

Returns an list of the pages for the selected document version.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentVersionId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.documentsVersionsPagesList(
    documentId,
    documentVersionId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **documentVersionId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**DocumentsVersionsPagesList200Response**

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

# **documentsVersionsPagesOcrPartialUpdate**
> DocumentVersionPageOCRContent documentsVersionsPagesOcrPartialUpdate(data)

Edit the OCR content of the selected document page.

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    DocumentVersionPageOCRContent
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentVersionId: string; // (default to undefined)
let documentVersionPageId: string; // (default to undefined)
let data: DocumentVersionPageOCRContent; //

const { status, data } = await apiInstance.documentsVersionsPagesOcrPartialUpdate(
    documentId,
    documentVersionId,
    documentVersionPageId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentVersionPageOCRContent**|  | |
| **documentId** | [**string**] |  | defaults to undefined|
| **documentVersionId** | [**string**] |  | defaults to undefined|
| **documentVersionPageId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentVersionPageOCRContent**

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

# **documentsVersionsPagesOcrRead**
> DocumentVersionPageOCRContent documentsVersionsPagesOcrRead()

Returns the OCR content of the selected document page.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentVersionId: string; // (default to undefined)
let documentVersionPageId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsVersionsPagesOcrRead(
    documentId,
    documentVersionId,
    documentVersionPageId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **documentVersionId** | [**string**] |  | defaults to undefined|
| **documentVersionPageId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentVersionPageOCRContent**

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

# **documentsVersionsPagesOcrUpdate**
> DocumentVersionPageOCRContent documentsVersionsPagesOcrUpdate(data)

Edit the OCR content of the selected document page.

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    DocumentVersionPageOCRContent
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentVersionId: string; // (default to undefined)
let documentVersionPageId: string; // (default to undefined)
let data: DocumentVersionPageOCRContent; //

const { status, data } = await apiInstance.documentsVersionsPagesOcrUpdate(
    documentId,
    documentVersionId,
    documentVersionPageId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentVersionPageOCRContent**|  | |
| **documentId** | [**string**] |  | defaults to undefined|
| **documentVersionId** | [**string**] |  | defaults to undefined|
| **documentVersionPageId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentVersionPageOCRContent**

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

# **documentsVersionsPagesPartialUpdate**
> DocumentVersionPage documentsVersionsPagesPartialUpdate(data)

Edit the properties of the selected document version page.

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    DocumentVersionPage
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentVersionId: string; // (default to undefined)
let documentVersionPageId: string; // (default to undefined)
let data: DocumentVersionPage; //

const { status, data } = await apiInstance.documentsVersionsPagesPartialUpdate(
    documentId,
    documentVersionId,
    documentVersionPageId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentVersionPage**|  | |
| **documentId** | [**string**] |  | defaults to undefined|
| **documentVersionId** | [**string**] |  | defaults to undefined|
| **documentVersionPageId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentVersionPage**

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

# **documentsVersionsPagesRead**
> DocumentVersionPage documentsVersionsPagesRead()

Returns the selected document version page details.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentVersionId: string; // (default to undefined)
let documentVersionPageId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsVersionsPagesRead(
    documentId,
    documentVersionId,
    documentVersionPageId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **documentVersionId** | [**string**] |  | defaults to undefined|
| **documentVersionPageId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentVersionPage**

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

# **documentsVersionsPagesUpdate**
> DocumentVersionPage documentsVersionsPagesUpdate(data)

Edit the properties of the selected document version page.

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    DocumentVersionPage
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentVersionId: string; // (default to undefined)
let documentVersionPageId: string; // (default to undefined)
let data: DocumentVersionPage; //

const { status, data } = await apiInstance.documentsVersionsPagesUpdate(
    documentId,
    documentVersionId,
    documentVersionPageId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentVersionPage**|  | |
| **documentId** | [**string**] |  | defaults to undefined|
| **documentVersionId** | [**string**] |  | defaults to undefined|
| **documentVersionPageId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentVersionPage**

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

# **documentsVersionsPartialUpdate**
> DocumentVersion documentsVersionsPartialUpdate(data)

Edit the properties of the selected document version.

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    DocumentVersion
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentVersionId: string; // (default to undefined)
let data: DocumentVersion; //

const { status, data } = await apiInstance.documentsVersionsPartialUpdate(
    documentId,
    documentVersionId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentVersion**|  | |
| **documentId** | [**string**] |  | defaults to undefined|
| **documentVersionId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentVersion**

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

# **documentsVersionsRead**
> DocumentVersion documentsVersionsRead()

Returns the selected document version details.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentVersionId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsVersionsRead(
    documentId,
    documentVersionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **documentVersionId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentVersion**

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

# **documentsVersionsUpdate**
> DocumentVersion documentsVersionsUpdate(data)

Edit the properties of the selected document version.

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    DocumentVersion
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let documentVersionId: string; // (default to undefined)
let data: DocumentVersion; //

const { status, data } = await apiInstance.documentsVersionsUpdate(
    documentId,
    documentVersionId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **DocumentVersion**|  | |
| **documentId** | [**string**] |  | defaults to undefined|
| **documentVersionId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentVersion**

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

# **documentsWorkflowInstancesLaunchCreate**
> WorkflowInstanceLaunch documentsWorkflowInstancesLaunchCreate(data)

Launch a new workflow instance for the specified document.

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    WorkflowInstanceLaunch
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let data: WorkflowInstanceLaunch; //

const { status, data } = await apiInstance.documentsWorkflowInstancesLaunchCreate(
    documentId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **WorkflowInstanceLaunch**|  | |
| **documentId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowInstanceLaunch**

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

# **documentsWorkflowInstancesList**
> DocumentsWorkflowInstancesList200Response documentsWorkflowInstancesList()

Returns a list of all the document workflow instances.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.documentsWorkflowInstancesList(
    documentId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**DocumentsWorkflowInstancesList200Response**

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

# **documentsWorkflowInstancesLogEntriesCreate**
> WorkflowInstanceLogEntry documentsWorkflowInstancesLogEntriesCreate(data)

Transition a document workflow by creating a new document workflow instance log entry.

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    WorkflowInstanceLogEntry
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let workflowInstanceId: string; // (default to undefined)
let data: WorkflowInstanceLogEntry; //

const { status, data } = await apiInstance.documentsWorkflowInstancesLogEntriesCreate(
    documentId,
    workflowInstanceId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **WorkflowInstanceLogEntry**|  | |
| **documentId** | [**string**] |  | defaults to undefined|
| **workflowInstanceId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowInstanceLogEntry**

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

# **documentsWorkflowInstancesLogEntriesList**
> DocumentsWorkflowInstancesLogEntriesList200Response documentsWorkflowInstancesLogEntriesList()

Returns a list of all the document workflow instances log entries.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let workflowInstanceId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.documentsWorkflowInstancesLogEntriesList(
    documentId,
    workflowInstanceId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **workflowInstanceId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**DocumentsWorkflowInstancesLogEntriesList200Response**

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

# **documentsWorkflowInstancesLogEntriesRead**
> WorkflowInstanceLogEntry documentsWorkflowInstancesLogEntriesRead()

Return the details of the selected document instances log entry.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let workflowInstanceId: string; // (default to undefined)
let workflowInstanceLogEntryId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsWorkflowInstancesLogEntriesRead(
    documentId,
    workflowInstanceId,
    workflowInstanceLogEntryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **workflowInstanceId** | [**string**] |  | defaults to undefined|
| **workflowInstanceLogEntryId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowInstanceLogEntry**

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

# **documentsWorkflowInstancesLogEntriesTransitionsList**
> DocumentsWorkflowInstancesLogEntriesTransitionsList200Response documentsWorkflowInstancesLogEntriesTransitionsList()

Returns a list of all the possible transition choices for the workflow instance.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let workflowInstanceId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.documentsWorkflowInstancesLogEntriesTransitionsList(
    documentId,
    workflowInstanceId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **workflowInstanceId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**DocumentsWorkflowInstancesLogEntriesTransitionsList200Response**

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

# **documentsWorkflowInstancesRead**
> WorkflowInstance documentsWorkflowInstancesRead()

Return the details of the selected document workflow instances.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; // (default to undefined)
let workflowInstanceId: string; // (default to undefined)

const { status, data } = await apiInstance.documentsWorkflowInstancesRead(
    documentId,
    workflowInstanceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] |  | defaults to undefined|
| **workflowInstanceId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowInstance**

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

