# RolesApi

All URIs are relative to *http://localhost/api/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**rolesCreate**](#rolescreate) | **POST** /roles/ | |
|[**rolesDelete**](#rolesdelete) | **DELETE** /roles/{role_id}/ | |
|[**rolesGroupsAddCreate**](#rolesgroupsaddcreate) | **POST** /roles/{role_id}/groups/add/ | |
|[**rolesGroupsList**](#rolesgroupslist) | **GET** /roles/{role_id}/groups/ | |
|[**rolesGroupsRemoveCreate**](#rolesgroupsremovecreate) | **POST** /roles/{role_id}/groups/remove/ | |
|[**rolesList**](#roleslist) | **GET** /roles/ | |
|[**rolesPartialUpdate**](#rolespartialupdate) | **PATCH** /roles/{role_id}/ | |
|[**rolesPermissionsAddCreate**](#rolespermissionsaddcreate) | **POST** /roles/{role_id}/permissions/add/ | |
|[**rolesPermissionsList**](#rolespermissionslist) | **GET** /roles/{role_id}/permissions/ | |
|[**rolesPermissionsRemoveCreate**](#rolespermissionsremovecreate) | **POST** /roles/{role_id}/permissions/remove/ | |
|[**rolesRead**](#rolesread) | **GET** /roles/{role_id}/ | |
|[**rolesUpdate**](#rolesupdate) | **PUT** /roles/{role_id}/ | |

# **rolesCreate**
> Role rolesCreate(data)

Create a new role.

### Example

```typescript
import {
    RolesApi,
    Configuration,
    Role
} from './api';

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

let data: Role; //

const { status, data } = await apiInstance.rolesCreate(
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Role**|  | |


### Return type

**Role**

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

# **rolesDelete**
> rolesDelete()

Delete the selected role.

### Example

```typescript
import {
    RolesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

let roleId: string; // (default to undefined)

const { status, data } = await apiInstance.rolesDelete(
    roleId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **roleId** | [**string**] |  | defaults to undefined|


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

# **rolesGroupsAddCreate**
> RoleGroupAdd rolesGroupsAddCreate(data)

Add a group to a role.

### Example

```typescript
import {
    RolesApi,
    Configuration,
    RoleGroupAdd
} from './api';

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

let roleId: string; // (default to undefined)
let data: RoleGroupAdd; //

const { status, data } = await apiInstance.rolesGroupsAddCreate(
    roleId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **RoleGroupAdd**|  | |
| **roleId** | [**string**] |  | defaults to undefined|


### Return type

**RoleGroupAdd**

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

# **rolesGroupsList**
> GroupsList200Response rolesGroupsList()

Returns a list of all the groups granted to a particular role.

### Example

```typescript
import {
    RolesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

let roleId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.rolesGroupsList(
    roleId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **roleId** | [**string**] |  | defaults to undefined|
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

# **rolesGroupsRemoveCreate**
> RoleGroupRemove rolesGroupsRemoveCreate(data)

Remove a group from a role.

### Example

```typescript
import {
    RolesApi,
    Configuration,
    RoleGroupRemove
} from './api';

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

let roleId: string; // (default to undefined)
let data: RoleGroupRemove; //

const { status, data } = await apiInstance.rolesGroupsRemoveCreate(
    roleId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **RoleGroupRemove**|  | |
| **roleId** | [**string**] |  | defaults to undefined|


### Return type

**RoleGroupRemove**

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

# **rolesList**
> RolesList200Response rolesList()

Returns a list of all the roles.

### Example

```typescript
import {
    RolesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.rolesList(
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

**RolesList200Response**

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

# **rolesPartialUpdate**
> Role rolesPartialUpdate(data)

Edit the selected role.

### Example

```typescript
import {
    RolesApi,
    Configuration,
    Role
} from './api';

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

let roleId: string; // (default to undefined)
let data: Role; //

const { status, data } = await apiInstance.rolesPartialUpdate(
    roleId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Role**|  | |
| **roleId** | [**string**] |  | defaults to undefined|


### Return type

**Role**

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

# **rolesPermissionsAddCreate**
> RolePermissionAdd rolesPermissionsAddCreate(data)

Add a permission to a role.

### Example

```typescript
import {
    RolesApi,
    Configuration,
    RolePermissionAdd
} from './api';

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

let roleId: string; // (default to undefined)
let data: RolePermissionAdd; //

const { status, data } = await apiInstance.rolesPermissionsAddCreate(
    roleId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **RolePermissionAdd**|  | |
| **roleId** | [**string**] |  | defaults to undefined|


### Return type

**RolePermissionAdd**

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

# **rolesPermissionsList**
> ObjectsPermissionsList200Response rolesPermissionsList()

Returns a list of all the permissions granted to a particular role.

### Example

```typescript
import {
    RolesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

let roleId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.rolesPermissionsList(
    roleId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **roleId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**ObjectsPermissionsList200Response**

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

# **rolesPermissionsRemoveCreate**
> RolePermissionRemove rolesPermissionsRemoveCreate(data)

Remove a permission from a role.

### Example

```typescript
import {
    RolesApi,
    Configuration,
    RolePermissionRemove
} from './api';

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

let roleId: string; // (default to undefined)
let data: RolePermissionRemove; //

const { status, data } = await apiInstance.rolesPermissionsRemoveCreate(
    roleId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **RolePermissionRemove**|  | |
| **roleId** | [**string**] |  | defaults to undefined|


### Return type

**RolePermissionRemove**

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

# **rolesRead**
> Role rolesRead()

Return the details of the selected role.

### Example

```typescript
import {
    RolesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

let roleId: string; // (default to undefined)

const { status, data } = await apiInstance.rolesRead(
    roleId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **roleId** | [**string**] |  | defaults to undefined|


### Return type

**Role**

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

# **rolesUpdate**
> Role rolesUpdate(data)

Edit the selected role.

### Example

```typescript
import {
    RolesApi,
    Configuration,
    Role
} from './api';

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

let roleId: string; // (default to undefined)
let data: Role; //

const { status, data } = await apiInstance.rolesUpdate(
    roleId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Role**|  | |
| **roleId** | [**string**] |  | defaults to undefined|


### Return type

**Role**

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

