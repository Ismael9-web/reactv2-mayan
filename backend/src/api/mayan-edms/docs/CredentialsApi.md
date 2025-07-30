# CredentialsApi

All URIs are relative to *http://localhost/api/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**credentialsCreate**](#credentialscreate) | **POST** /credentials/ | |
|[**credentialsDelete**](#credentialsdelete) | **DELETE** /credentials/{credential_id}/ | |
|[**credentialsList**](#credentialslist) | **GET** /credentials/ | |
|[**credentialsPartialUpdate**](#credentialspartialupdate) | **PATCH** /credentials/{credential_id}/ | |
|[**credentialsRead**](#credentialsread) | **GET** /credentials/{credential_id}/ | |
|[**credentialsUpdate**](#credentialsupdate) | **PUT** /credentials/{credential_id}/ | |

# **credentialsCreate**
> StoredCredential credentialsCreate(data)

Create a new credential.

### Example

```typescript
import {
    CredentialsApi,
    Configuration,
    StoredCredential
} from './api';

const configuration = new Configuration();
const apiInstance = new CredentialsApi(configuration);

let data: StoredCredential; //

const { status, data } = await apiInstance.credentialsCreate(
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **StoredCredential**|  | |


### Return type

**StoredCredential**

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

# **credentialsDelete**
> credentialsDelete()

Delete the selected credential.

### Example

```typescript
import {
    CredentialsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CredentialsApi(configuration);

let credentialId: string; // (default to undefined)

const { status, data } = await apiInstance.credentialsDelete(
    credentialId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **credentialId** | [**string**] |  | defaults to undefined|


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

# **credentialsList**
> CredentialsList200Response credentialsList()

Returns a list of all the credentials.

### Example

```typescript
import {
    CredentialsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CredentialsApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.credentialsList(
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

**CredentialsList200Response**

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

# **credentialsPartialUpdate**
> StoredCredential credentialsPartialUpdate(data)

Edit the selected credential.

### Example

```typescript
import {
    CredentialsApi,
    Configuration,
    StoredCredential
} from './api';

const configuration = new Configuration();
const apiInstance = new CredentialsApi(configuration);

let credentialId: string; // (default to undefined)
let data: StoredCredential; //

const { status, data } = await apiInstance.credentialsPartialUpdate(
    credentialId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **StoredCredential**|  | |
| **credentialId** | [**string**] |  | defaults to undefined|


### Return type

**StoredCredential**

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

# **credentialsRead**
> StoredCredential credentialsRead()

Return the details of the selected credential.

### Example

```typescript
import {
    CredentialsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CredentialsApi(configuration);

let credentialId: string; // (default to undefined)

const { status, data } = await apiInstance.credentialsRead(
    credentialId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **credentialId** | [**string**] |  | defaults to undefined|


### Return type

**StoredCredential**

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

# **credentialsUpdate**
> StoredCredential credentialsUpdate(data)

Edit the selected credential.

### Example

```typescript
import {
    CredentialsApi,
    Configuration,
    StoredCredential
} from './api';

const configuration = new Configuration();
const apiInstance = new CredentialsApi(configuration);

let credentialId: string; // (default to undefined)
let data: StoredCredential; //

const { status, data } = await apiInstance.credentialsUpdate(
    credentialId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **StoredCredential**|  | |
| **credentialId** | [**string**] |  | defaults to undefined|


### Return type

**StoredCredential**

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

