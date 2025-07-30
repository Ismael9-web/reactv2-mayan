# GroupsApi

All URIs are relative to *http://localhost/api/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**groupsCreate**](#groupscreate) | **POST** /groups/ | |
|[**groupsDelete**](#groupsdelete) | **DELETE** /groups/{group_id}/ | |
|[**groupsList**](#groupslist) | **GET** /groups/ | |
|[**groupsPartialUpdate**](#groupspartialupdate) | **PATCH** /groups/{group_id}/ | |
|[**groupsRead**](#groupsread) | **GET** /groups/{group_id}/ | |
|[**groupsUpdate**](#groupsupdate) | **PUT** /groups/{group_id}/ | |
|[**groupsUsersAddCreate**](#groupsusersaddcreate) | **POST** /groups/{group_id}/users/add/ | |
|[**groupsUsersList**](#groupsuserslist) | **GET** /groups/{group_id}/users/ | |
|[**groupsUsersRemoveCreate**](#groupsusersremovecreate) | **POST** /groups/{group_id}/users/remove/ | |

# **groupsCreate**
> Group groupsCreate(data)

Create a new group.

### Example

```typescript
import {
    GroupsApi,
    Configuration,
    Group
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let data: Group; //

const { status, data } = await apiInstance.groupsCreate(
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Group**|  | |


### Return type

**Group**

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

# **groupsDelete**
> groupsDelete()

Delete the selected group.

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; // (default to undefined)

const { status, data } = await apiInstance.groupsDelete(
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] |  | defaults to undefined|


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

# **groupsList**
> GroupsList200Response groupsList()

Returns a list of all the groups.

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.groupsList(
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

**GroupsList200Response**

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

# **groupsPartialUpdate**
> Group groupsPartialUpdate(data)

Partially edit the selected group.

### Example

```typescript
import {
    GroupsApi,
    Configuration,
    Group
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; // (default to undefined)
let data: Group; //

const { status, data } = await apiInstance.groupsPartialUpdate(
    groupId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Group**|  | |
| **groupId** | [**string**] |  | defaults to undefined|


### Return type

**Group**

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

# **groupsRead**
> Group groupsRead()

Return the details of the selected group.

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; // (default to undefined)

const { status, data } = await apiInstance.groupsRead(
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] |  | defaults to undefined|


### Return type

**Group**

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

# **groupsUpdate**
> Group groupsUpdate(data)

Edit the selected group.

### Example

```typescript
import {
    GroupsApi,
    Configuration,
    Group
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; // (default to undefined)
let data: Group; //

const { status, data } = await apiInstance.groupsUpdate(
    groupId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Group**|  | |
| **groupId** | [**string**] |  | defaults to undefined|


### Return type

**Group**

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

# **groupsUsersAddCreate**
> GroupUserAdd groupsUsersAddCreate(data)

Add a user to a group.

### Example

```typescript
import {
    GroupsApi,
    Configuration,
    GroupUserAdd
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; // (default to undefined)
let data: GroupUserAdd; //

const { status, data } = await apiInstance.groupsUsersAddCreate(
    groupId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **GroupUserAdd**|  | |
| **groupId** | [**string**] |  | defaults to undefined|


### Return type

**GroupUserAdd**

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

# **groupsUsersList**
> GroupsUsersList200Response groupsUsersList()

Returns a list of all the users belonging to the group.

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.groupsUsersList(
    groupId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**GroupsUsersList200Response**

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

# **groupsUsersRemoveCreate**
> GroupUserRemove groupsUsersRemoveCreate(data)

Remove a user from a group.

### Example

```typescript
import {
    GroupsApi,
    Configuration,
    GroupUserRemove
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: string; // (default to undefined)
let data: GroupUserRemove; //

const { status, data } = await apiInstance.groupsUsersRemoveCreate(
    groupId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **GroupUserRemove**|  | |
| **groupId** | [**string**] |  | defaults to undefined|


### Return type

**GroupUserRemove**

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

