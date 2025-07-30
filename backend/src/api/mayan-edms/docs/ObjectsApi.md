# ObjectsApi

All URIs are relative to *http://localhost/api/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**objectsAclsCreate**](#objectsaclscreate) | **POST** /objects/{app_label}/{model_name}/{object_id}/acls/ | |
|[**objectsAclsDelete**](#objectsaclsdelete) | **DELETE** /objects/{app_label}/{model_name}/{object_id}/acls/{acl_id}/ | |
|[**objectsAclsList**](#objectsaclslist) | **GET** /objects/{app_label}/{model_name}/{object_id}/acls/ | |
|[**objectsAclsPermissionsAddCreate**](#objectsaclspermissionsaddcreate) | **POST** /objects/{app_label}/{model_name}/{object_id}/acls/{acl_id}/permissions/add/ | |
|[**objectsAclsPermissionsCreate**](#objectsaclspermissionscreate) | **POST** /objects/{app_label}/{model_name}/{object_id}/acls/{acl_id}/permissions/ | |
|[**objectsAclsPermissionsList**](#objectsaclspermissionslist) | **GET** /objects/{app_label}/{model_name}/{object_id}/acls/{acl_id}/permissions/ | |
|[**objectsAclsPermissionsRemoveCreate**](#objectsaclspermissionsremovecreate) | **POST** /objects/{app_label}/{model_name}/{object_id}/acls/{acl_id}/permissions/remove/ | |
|[**objectsAclsRead**](#objectsaclsread) | **GET** /objects/{app_label}/{model_name}/{object_id}/acls/{acl_id}/ | |
|[**objectsErrorsDelete**](#objectserrorsdelete) | **DELETE** /objects/{app_label}/{model_name}/{object_id}/errors/{error_log_partition_entry_id}/ | |
|[**objectsErrorsList**](#objectserrorslist) | **GET** /objects/{app_label}/{model_name}/{object_id}/errors/ | |
|[**objectsErrorsRead**](#objectserrorsread) | **GET** /objects/{app_label}/{model_name}/{object_id}/errors/{error_log_partition_entry_id}/ | |
|[**objectsEventsList**](#objectseventslist) | **GET** /objects/{app_label}/{model_name}/{object_id}/events/ | |
|[**objectsImageRead**](#objectsimageread) | **GET** /objects/{app_label}/{model_name}/{object_id}/image/ | |
|[**objectsMailingAttachmentCreate**](#objectsmailingattachmentcreate) | **POST** /objects/{app_label}/{model_name}/{object_id}/mailing/attachment/ | |
|[**objectsMailingLinkCreate**](#objectsmailinglinkcreate) | **POST** /objects/{app_label}/{model_name}/{object_id}/mailing/link/ | |
|[**objectsPermissionsList**](#objectspermissionslist) | **GET** /objects/{app_label}/{model_name}/permissions/ | |
|[**objectsSandboxCreate**](#objectssandboxcreate) | **POST** /objects/{app_label}/{model_name}/{object_id}/sandbox/ | |

# **objectsAclsCreate**
> ACL objectsAclsCreate(data)

Create a new access control list for the selected object.

### Example

```typescript
import {
    ObjectsApi,
    Configuration,
    ACL
} from './api';

const configuration = new Configuration();
const apiInstance = new ObjectsApi(configuration);

let appLabel: string; // (default to undefined)
let modelName: string; // (default to undefined)
let objectId: string; // (default to undefined)
let data: ACL; //

const { status, data } = await apiInstance.objectsAclsCreate(
    appLabel,
    modelName,
    objectId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **ACL**|  | |
| **appLabel** | [**string**] |  | defaults to undefined|
| **modelName** | [**string**] |  | defaults to undefined|
| **objectId** | [**string**] |  | defaults to undefined|


### Return type

**ACL**

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

# **objectsAclsDelete**
> objectsAclsDelete()

Delete the selected access control list.

### Example

```typescript
import {
    ObjectsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ObjectsApi(configuration);

let appLabel: string; // (default to undefined)
let modelName: string; // (default to undefined)
let objectId: string; // (default to undefined)
let aclId: string; // (default to undefined)

const { status, data } = await apiInstance.objectsAclsDelete(
    appLabel,
    modelName,
    objectId,
    aclId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appLabel** | [**string**] |  | defaults to undefined|
| **modelName** | [**string**] |  | defaults to undefined|
| **objectId** | [**string**] |  | defaults to undefined|
| **aclId** | [**string**] |  | defaults to undefined|


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

# **objectsAclsList**
> ObjectsAclsList200Response objectsAclsList()

Returns a list of all the object\'s access control lists

### Example

```typescript
import {
    ObjectsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ObjectsApi(configuration);

let appLabel: string; // (default to undefined)
let modelName: string; // (default to undefined)
let objectId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.objectsAclsList(
    appLabel,
    modelName,
    objectId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appLabel** | [**string**] |  | defaults to undefined|
| **modelName** | [**string**] |  | defaults to undefined|
| **objectId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**ObjectsAclsList200Response**

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

# **objectsAclsPermissionsAddCreate**
> ACLPermissionAdd objectsAclsPermissionsAddCreate(data)

Add a permission to an ACL.

### Example

```typescript
import {
    ObjectsApi,
    Configuration,
    ACLPermissionAdd
} from './api';

const configuration = new Configuration();
const apiInstance = new ObjectsApi(configuration);

let appLabel: string; // (default to undefined)
let modelName: string; // (default to undefined)
let objectId: string; // (default to undefined)
let aclId: string; // (default to undefined)
let data: ACLPermissionAdd; //

const { status, data } = await apiInstance.objectsAclsPermissionsAddCreate(
    appLabel,
    modelName,
    objectId,
    aclId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **ACLPermissionAdd**|  | |
| **appLabel** | [**string**] |  | defaults to undefined|
| **modelName** | [**string**] |  | defaults to undefined|
| **objectId** | [**string**] |  | defaults to undefined|
| **aclId** | [**string**] |  | defaults to undefined|


### Return type

**ACLPermissionAdd**

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

# **objectsAclsPermissionsCreate**
> Permission objectsAclsPermissionsCreate(data)

Add a new permission to the selected access control list.

### Example

```typescript
import {
    ObjectsApi,
    Configuration,
    Permission
} from './api';

const configuration = new Configuration();
const apiInstance = new ObjectsApi(configuration);

let appLabel: string; // (default to undefined)
let modelName: string; // (default to undefined)
let objectId: string; // (default to undefined)
let aclId: string; // (default to undefined)
let data: Permission; //

const { status, data } = await apiInstance.objectsAclsPermissionsCreate(
    appLabel,
    modelName,
    objectId,
    aclId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Permission**|  | |
| **appLabel** | [**string**] |  | defaults to undefined|
| **modelName** | [**string**] |  | defaults to undefined|
| **objectId** | [**string**] |  | defaults to undefined|
| **aclId** | [**string**] |  | defaults to undefined|


### Return type

**Permission**

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

# **objectsAclsPermissionsList**
> ObjectsPermissionsList200Response objectsAclsPermissionsList()

Returns the access control list permission list.

### Example

```typescript
import {
    ObjectsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ObjectsApi(configuration);

let appLabel: string; // (default to undefined)
let modelName: string; // (default to undefined)
let objectId: string; // (default to undefined)
let aclId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.objectsAclsPermissionsList(
    appLabel,
    modelName,
    objectId,
    aclId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appLabel** | [**string**] |  | defaults to undefined|
| **modelName** | [**string**] |  | defaults to undefined|
| **objectId** | [**string**] |  | defaults to undefined|
| **aclId** | [**string**] |  | defaults to undefined|
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

# **objectsAclsPermissionsRemoveCreate**
> ACLPermissionRemove objectsAclsPermissionsRemoveCreate(data)

Remove a permission from an ACL.

### Example

```typescript
import {
    ObjectsApi,
    Configuration,
    ACLPermissionRemove
} from './api';

const configuration = new Configuration();
const apiInstance = new ObjectsApi(configuration);

let appLabel: string; // (default to undefined)
let modelName: string; // (default to undefined)
let objectId: string; // (default to undefined)
let aclId: string; // (default to undefined)
let data: ACLPermissionRemove; //

const { status, data } = await apiInstance.objectsAclsPermissionsRemoveCreate(
    appLabel,
    modelName,
    objectId,
    aclId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **ACLPermissionRemove**|  | |
| **appLabel** | [**string**] |  | defaults to undefined|
| **modelName** | [**string**] |  | defaults to undefined|
| **objectId** | [**string**] |  | defaults to undefined|
| **aclId** | [**string**] |  | defaults to undefined|


### Return type

**ACLPermissionRemove**

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

# **objectsAclsRead**
> ACL objectsAclsRead()

Returns the details of the selected access control list.

### Example

```typescript
import {
    ObjectsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ObjectsApi(configuration);

let appLabel: string; // (default to undefined)
let modelName: string; // (default to undefined)
let objectId: string; // (default to undefined)
let aclId: string; // (default to undefined)

const { status, data } = await apiInstance.objectsAclsRead(
    appLabel,
    modelName,
    objectId,
    aclId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appLabel** | [**string**] |  | defaults to undefined|
| **modelName** | [**string**] |  | defaults to undefined|
| **objectId** | [**string**] |  | defaults to undefined|
| **aclId** | [**string**] |  | defaults to undefined|


### Return type

**ACL**

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

# **objectsErrorsDelete**
> objectsErrorsDelete()

Delete the selected error log entry.

### Example

```typescript
import {
    ObjectsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ObjectsApi(configuration);

let appLabel: string; // (default to undefined)
let modelName: string; // (default to undefined)
let objectId: string; // (default to undefined)
let errorLogPartitionEntryId: string; // (default to undefined)

const { status, data } = await apiInstance.objectsErrorsDelete(
    appLabel,
    modelName,
    objectId,
    errorLogPartitionEntryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appLabel** | [**string**] |  | defaults to undefined|
| **modelName** | [**string**] |  | defaults to undefined|
| **objectId** | [**string**] |  | defaults to undefined|
| **errorLogPartitionEntryId** | [**string**] |  | defaults to undefined|


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

# **objectsErrorsList**
> ObjectsErrorsList200Response objectsErrorsList()

Returns a list of all the object\'s error log entries

### Example

```typescript
import {
    ObjectsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ObjectsApi(configuration);

let appLabel: string; // (default to undefined)
let modelName: string; // (default to undefined)
let objectId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.objectsErrorsList(
    appLabel,
    modelName,
    objectId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appLabel** | [**string**] |  | defaults to undefined|
| **modelName** | [**string**] |  | defaults to undefined|
| **objectId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**ObjectsErrorsList200Response**

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

# **objectsErrorsRead**
> ErrorLogPartitionEntry objectsErrorsRead()

Returns the details of the selected error log entry.

### Example

```typescript
import {
    ObjectsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ObjectsApi(configuration);

let appLabel: string; // (default to undefined)
let modelName: string; // (default to undefined)
let objectId: string; // (default to undefined)
let errorLogPartitionEntryId: string; // (default to undefined)

const { status, data } = await apiInstance.objectsErrorsRead(
    appLabel,
    modelName,
    objectId,
    errorLogPartitionEntryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appLabel** | [**string**] |  | defaults to undefined|
| **modelName** | [**string**] |  | defaults to undefined|
| **objectId** | [**string**] |  | defaults to undefined|
| **errorLogPartitionEntryId** | [**string**] |  | defaults to undefined|


### Return type

**ErrorLogPartitionEntry**

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

# **objectsEventsList**
> EventsList200Response objectsEventsList()

Return a list of events for the specified object.

### Example

```typescript
import {
    ObjectsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ObjectsApi(configuration);

let appLabel: string; // (default to undefined)
let modelName: string; // (default to undefined)
let objectId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.objectsEventsList(
    appLabel,
    modelName,
    objectId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appLabel** | [**string**] |  | defaults to undefined|
| **modelName** | [**string**] |  | defaults to undefined|
| **objectId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**EventsList200Response**

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

# **objectsImageRead**
> objectsImageRead()

Returns an image representation of the selected content object.

### Example

```typescript
import {
    ObjectsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ObjectsApi(configuration);

let appLabel: string; // (default to undefined)
let modelName: string; // (default to undefined)
let objectId: string; // (default to undefined)

const { status, data } = await apiInstance.objectsImageRead(
    appLabel,
    modelName,
    objectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appLabel** | [**string**] |  | defaults to undefined|
| **modelName** | [**string**] |  | defaults to undefined|
| **objectId** | [**string**] |  | defaults to undefined|


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

# **objectsMailingAttachmentCreate**
> MailingProfileAction objectsMailingAttachmentCreate(data)

Send an object as attachment via email.

### Example

```typescript
import {
    ObjectsApi,
    Configuration,
    MailingProfileAction
} from './api';

const configuration = new Configuration();
const apiInstance = new ObjectsApi(configuration);

let appLabel: string; // (default to undefined)
let modelName: string; // (default to undefined)
let objectId: string; // (default to undefined)
let data: MailingProfileAction; //

const { status, data } = await apiInstance.objectsMailingAttachmentCreate(
    appLabel,
    modelName,
    objectId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **MailingProfileAction**|  | |
| **appLabel** | [**string**] |  | defaults to undefined|
| **modelName** | [**string**] |  | defaults to undefined|
| **objectId** | [**string**] |  | defaults to undefined|


### Return type

**MailingProfileAction**

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

# **objectsMailingLinkCreate**
> MailingProfileAction objectsMailingLinkCreate(data)

Send an object link via email.

### Example

```typescript
import {
    ObjectsApi,
    Configuration,
    MailingProfileAction
} from './api';

const configuration = new Configuration();
const apiInstance = new ObjectsApi(configuration);

let appLabel: string; // (default to undefined)
let modelName: string; // (default to undefined)
let objectId: string; // (default to undefined)
let data: MailingProfileAction; //

const { status, data } = await apiInstance.objectsMailingLinkCreate(
    appLabel,
    modelName,
    objectId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **MailingProfileAction**|  | |
| **appLabel** | [**string**] |  | defaults to undefined|
| **modelName** | [**string**] |  | defaults to undefined|
| **objectId** | [**string**] |  | defaults to undefined|


### Return type

**MailingProfileAction**

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

# **objectsPermissionsList**
> ObjectsPermissionsList200Response objectsPermissionsList()

Returns a list of all the available permissions for a class.

### Example

```typescript
import {
    ObjectsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ObjectsApi(configuration);

let appLabel: string; // (default to undefined)
let modelName: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.objectsPermissionsList(
    appLabel,
    modelName,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appLabel** | [**string**] |  | defaults to undefined|
| **modelName** | [**string**] |  | defaults to undefined|
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

# **objectsSandboxCreate**
> ObjectTemplateSandbox objectsSandboxCreate(data)

Interactive inspection of object properties.

### Example

```typescript
import {
    ObjectsApi,
    Configuration,
    ObjectTemplateSandbox
} from './api';

const configuration = new Configuration();
const apiInstance = new ObjectsApi(configuration);

let appLabel: string; // (default to undefined)
let modelName: string; // (default to undefined)
let objectId: string; // (default to undefined)
let data: ObjectTemplateSandbox; //

const { status, data } = await apiInstance.objectsSandboxCreate(
    appLabel,
    modelName,
    objectId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **ObjectTemplateSandbox**|  | |
| **appLabel** | [**string**] |  | defaults to undefined|
| **modelName** | [**string**] |  | defaults to undefined|
| **objectId** | [**string**] |  | defaults to undefined|


### Return type

**ObjectTemplateSandbox**

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

