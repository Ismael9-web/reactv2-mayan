# DownloadsApi

All URIs are relative to *http://localhost/api/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**downloadsDelete**](#downloadsdelete) | **DELETE** /downloads/{download_file_id}/ | |
|[**downloadsDownloadRead**](#downloadsdownloadread) | **GET** /downloads/{download_file_id}/download/ | |
|[**downloadsList**](#downloadslist) | **GET** /downloads/ | |
|[**downloadsRead**](#downloadsread) | **GET** /downloads/{download_file_id}/ | |

# **downloadsDelete**
> downloadsDelete()

Delete the selected download file.

### Example

```typescript
import {
    DownloadsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DownloadsApi(configuration);

let downloadFileId: string; // (default to undefined)

const { status, data } = await apiInstance.downloadsDelete(
    downloadFileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **downloadFileId** | [**string**] |  | defaults to undefined|


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

# **downloadsDownloadRead**
> downloadsDownloadRead()

Download a download file.

### Example

```typescript
import {
    DownloadsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DownloadsApi(configuration);

let downloadFileId: string; // (default to undefined)

const { status, data } = await apiInstance.downloadsDownloadRead(
    downloadFileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **downloadFileId** | [**string**] |  | defaults to undefined|


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

# **downloadsList**
> DownloadsList200Response downloadsList()

Returns a list of all the download files.

### Example

```typescript
import {
    DownloadsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DownloadsApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.downloadsList(
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

**DownloadsList200Response**

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

# **downloadsRead**
> DownloadFile downloadsRead()

Return the details of the selected download file.

### Example

```typescript
import {
    DownloadsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DownloadsApi(configuration);

let downloadFileId: string; // (default to undefined)

const { status, data } = await apiInstance.downloadsRead(
    downloadFileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **downloadFileId** | [**string**] |  | defaults to undefined|


### Return type

**DownloadFile**

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

