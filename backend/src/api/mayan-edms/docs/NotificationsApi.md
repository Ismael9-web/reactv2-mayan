# NotificationsApi

All URIs are relative to *http://localhost/api/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**notificationsDelete**](#notificationsdelete) | **DELETE** /notifications/{notification_id}/ | |
|[**notificationsList**](#notificationslist) | **GET** /notifications/ | |
|[**notificationsPartialUpdate**](#notificationspartialupdate) | **PATCH** /notifications/{notification_id}/ | |
|[**notificationsRead**](#notificationsread) | **GET** /notifications/{notification_id}/ | |
|[**notificationsUpdate**](#notificationsupdate) | **PUT** /notifications/{notification_id}/ | |

# **notificationsDelete**
> notificationsDelete()

Delete the selected notification.

### Example

```typescript
import {
    NotificationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);

let notificationId: string; // (default to undefined)

const { status, data } = await apiInstance.notificationsDelete(
    notificationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **notificationId** | [**string**] |  | defaults to undefined|


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

# **notificationsList**
> NotificationsList200Response notificationsList()

Return a list of notifications for the current user.

### Example

```typescript
import {
    NotificationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.notificationsList(
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

**NotificationsList200Response**

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

# **notificationsPartialUpdate**
> Notification notificationsPartialUpdate(data)

Edit the selected notification.

### Example

```typescript
import {
    NotificationsApi,
    Configuration,
    Notification
} from './api';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);

let notificationId: string; // (default to undefined)
let data: Notification; //

const { status, data } = await apiInstance.notificationsPartialUpdate(
    notificationId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Notification**|  | |
| **notificationId** | [**string**] |  | defaults to undefined|


### Return type

**Notification**

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

# **notificationsRead**
> Notification notificationsRead()

Return the details of the selected notification.

### Example

```typescript
import {
    NotificationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);

let notificationId: string; // (default to undefined)

const { status, data } = await apiInstance.notificationsRead(
    notificationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **notificationId** | [**string**] |  | defaults to undefined|


### Return type

**Notification**

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

# **notificationsUpdate**
> Notification notificationsUpdate(data)

Edit the selected notification.

### Example

```typescript
import {
    NotificationsApi,
    Configuration,
    Notification
} from './api';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);

let notificationId: string; // (default to undefined)
let data: Notification; //

const { status, data } = await apiInstance.notificationsUpdate(
    notificationId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Notification**|  | |
| **notificationId** | [**string**] |  | defaults to undefined|


### Return type

**Notification**

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

