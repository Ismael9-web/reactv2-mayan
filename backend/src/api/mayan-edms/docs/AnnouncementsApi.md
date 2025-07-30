# AnnouncementsApi

All URIs are relative to *http://localhost/api/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**announcementsCreate**](#announcementscreate) | **POST** /announcements/ | |
|[**announcementsDelete**](#announcementsdelete) | **DELETE** /announcements/{announcement_id}/ | |
|[**announcementsList**](#announcementslist) | **GET** /announcements/ | |
|[**announcementsPartialUpdate**](#announcementspartialupdate) | **PATCH** /announcements/{announcement_id}/ | |
|[**announcementsRead**](#announcementsread) | **GET** /announcements/{announcement_id}/ | |
|[**announcementsUpdate**](#announcementsupdate) | **PUT** /announcements/{announcement_id}/ | |

# **announcementsCreate**
> Announcement announcementsCreate(data)

Create a new announcement.

### Example

```typescript
import {
    AnnouncementsApi,
    Configuration,
    Announcement
} from './api';

const configuration = new Configuration();
const apiInstance = new AnnouncementsApi(configuration);

let data: Announcement; //

const { status, data } = await apiInstance.announcementsCreate(
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Announcement**|  | |


### Return type

**Announcement**

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

# **announcementsDelete**
> announcementsDelete()

Delete the selected announcement.

### Example

```typescript
import {
    AnnouncementsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AnnouncementsApi(configuration);

let announcementId: string; // (default to undefined)

const { status, data } = await apiInstance.announcementsDelete(
    announcementId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **announcementId** | [**string**] |  | defaults to undefined|


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

# **announcementsList**
> AnnouncementsList200Response announcementsList()

Returns a list of all the announcements.

### Example

```typescript
import {
    AnnouncementsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AnnouncementsApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.announcementsList(
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

**AnnouncementsList200Response**

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

# **announcementsPartialUpdate**
> Announcement announcementsPartialUpdate(data)

Edit the selected announcement.

### Example

```typescript
import {
    AnnouncementsApi,
    Configuration,
    Announcement
} from './api';

const configuration = new Configuration();
const apiInstance = new AnnouncementsApi(configuration);

let announcementId: string; // (default to undefined)
let data: Announcement; //

const { status, data } = await apiInstance.announcementsPartialUpdate(
    announcementId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Announcement**|  | |
| **announcementId** | [**string**] |  | defaults to undefined|


### Return type

**Announcement**

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

# **announcementsRead**
> Announcement announcementsRead()

Return the details of the selected announcement.

### Example

```typescript
import {
    AnnouncementsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AnnouncementsApi(configuration);

let announcementId: string; // (default to undefined)

const { status, data } = await apiInstance.announcementsRead(
    announcementId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **announcementId** | [**string**] |  | defaults to undefined|


### Return type

**Announcement**

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

# **announcementsUpdate**
> Announcement announcementsUpdate(data)

Edit the selected announcement.

### Example

```typescript
import {
    AnnouncementsApi,
    Configuration,
    Announcement
} from './api';

const configuration = new Configuration();
const apiInstance = new AnnouncementsApi(configuration);

let announcementId: string; // (default to undefined)
let data: Announcement; //

const { status, data } = await apiInstance.announcementsUpdate(
    announcementId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Announcement**|  | |
| **announcementId** | [**string**] |  | defaults to undefined|


### Return type

**Announcement**

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

