# MessagesApi

All URIs are relative to *http://localhost/api/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**messagesCreate**](#messagescreate) | **POST** /messages/ | |
|[**messagesDelete**](#messagesdelete) | **DELETE** /messages/{message_id}/ | |
|[**messagesList**](#messageslist) | **GET** /messages/ | |
|[**messagesPartialUpdate**](#messagespartialupdate) | **PATCH** /messages/{message_id}/ | |
|[**messagesRead**](#messagesread) | **GET** /messages/{message_id}/ | |
|[**messagesUpdate**](#messagesupdate) | **PUT** /messages/{message_id}/ | |

# **messagesCreate**
> Message messagesCreate(data)

Create a new message.

### Example

```typescript
import {
    MessagesApi,
    Configuration,
    Message
} from './api';

const configuration = new Configuration();
const apiInstance = new MessagesApi(configuration);

let data: Message; //

const { status, data } = await apiInstance.messagesCreate(
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Message**|  | |


### Return type

**Message**

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

# **messagesDelete**
> messagesDelete()

Delete the selected message.

### Example

```typescript
import {
    MessagesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MessagesApi(configuration);

let messageId: string; // (default to undefined)

const { status, data } = await apiInstance.messagesDelete(
    messageId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **messageId** | [**string**] |  | defaults to undefined|


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

# **messagesList**
> MessagesList200Response messagesList()

Returns a list of all the messages.

### Example

```typescript
import {
    MessagesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MessagesApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.messagesList(
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

**MessagesList200Response**

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

# **messagesPartialUpdate**
> Message messagesPartialUpdate(data)

Partially edit the selected message.

### Example

```typescript
import {
    MessagesApi,
    Configuration,
    Message
} from './api';

const configuration = new Configuration();
const apiInstance = new MessagesApi(configuration);

let messageId: string; // (default to undefined)
let data: Message; //

const { status, data } = await apiInstance.messagesPartialUpdate(
    messageId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Message**|  | |
| **messageId** | [**string**] |  | defaults to undefined|


### Return type

**Message**

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

# **messagesRead**
> Message messagesRead()

Return the details of the selected message.

### Example

```typescript
import {
    MessagesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MessagesApi(configuration);

let messageId: string; // (default to undefined)

const { status, data } = await apiInstance.messagesRead(
    messageId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **messageId** | [**string**] |  | defaults to undefined|


### Return type

**Message**

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

# **messagesUpdate**
> Message messagesUpdate(data)

Edit the selected message.

### Example

```typescript
import {
    MessagesApi,
    Configuration,
    Message
} from './api';

const configuration = new Configuration();
const apiInstance = new MessagesApi(configuration);

let messageId: string; // (default to undefined)
let data: Message; //

const { status, data } = await apiInstance.messagesUpdate(
    messageId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Message**|  | |
| **messageId** | [**string**] |  | defaults to undefined|


### Return type

**Message**

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

