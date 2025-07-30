# FileMetadataDriversApi

All URIs are relative to *http://localhost/api/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fileMetadataDriversList**](#filemetadatadriverslist) | **GET** /file_metadata_drivers/ | |
|[**fileMetadataDriversRead**](#filemetadatadriversread) | **GET** /file_metadata_drivers/{stored_driver_id}/ | |

# **fileMetadataDriversList**
> FileMetadataDriversList200Response fileMetadataDriversList()

Returns a list of file metadata drivers.

### Example

```typescript
import {
    FileMetadataDriversApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FileMetadataDriversApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.fileMetadataDriversList(
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

**FileMetadataDriversList200Response**

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

# **fileMetadataDriversRead**
> StoredDriver fileMetadataDriversRead()

Returns the details of the selected file metadata driver.

### Example

```typescript
import {
    FileMetadataDriversApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FileMetadataDriversApi(configuration);

let storedDriverId: string; // (default to undefined)

const { status, data } = await apiInstance.fileMetadataDriversRead(
    storedDriverId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **storedDriverId** | [**string**] |  | defaults to undefined|


### Return type

**StoredDriver**

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

