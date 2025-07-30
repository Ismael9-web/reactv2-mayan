# MailingProfilesApi

All URIs are relative to *http://localhost/api/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**mailingProfilesCreate**](#mailingprofilescreate) | **POST** /mailing_profiles/ | |
|[**mailingProfilesDelete**](#mailingprofilesdelete) | **DELETE** /mailing_profiles/{mailing_profile_id}/ | |
|[**mailingProfilesList**](#mailingprofileslist) | **GET** /mailing_profiles/ | |
|[**mailingProfilesPartialUpdate**](#mailingprofilespartialupdate) | **PATCH** /mailing_profiles/{mailing_profile_id}/ | |
|[**mailingProfilesRead**](#mailingprofilesread) | **GET** /mailing_profiles/{mailing_profile_id}/ | |
|[**mailingProfilesUpdate**](#mailingprofilesupdate) | **PUT** /mailing_profiles/{mailing_profile_id}/ | |

# **mailingProfilesCreate**
> MailingProfile mailingProfilesCreate(data)

Create a new mailing profile.

### Example

```typescript
import {
    MailingProfilesApi,
    Configuration,
    MailingProfile
} from './api';

const configuration = new Configuration();
const apiInstance = new MailingProfilesApi(configuration);

let data: MailingProfile; //

const { status, data } = await apiInstance.mailingProfilesCreate(
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **MailingProfile**|  | |


### Return type

**MailingProfile**

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

# **mailingProfilesDelete**
> mailingProfilesDelete()

Delete the selected mailing profile.

### Example

```typescript
import {
    MailingProfilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MailingProfilesApi(configuration);

let mailingProfileId: string; // (default to undefined)

const { status, data } = await apiInstance.mailingProfilesDelete(
    mailingProfileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailingProfileId** | [**string**] |  | defaults to undefined|


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

# **mailingProfilesList**
> MailingProfilesList200Response mailingProfilesList()

Returns a list of all the mailing profiles.

### Example

```typescript
import {
    MailingProfilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MailingProfilesApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.mailingProfilesList(
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

**MailingProfilesList200Response**

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

# **mailingProfilesPartialUpdate**
> MailingProfile mailingProfilesPartialUpdate(data)

Edit the selected mailing profile.

### Example

```typescript
import {
    MailingProfilesApi,
    Configuration,
    MailingProfile
} from './api';

const configuration = new Configuration();
const apiInstance = new MailingProfilesApi(configuration);

let mailingProfileId: string; // (default to undefined)
let data: MailingProfile; //

const { status, data } = await apiInstance.mailingProfilesPartialUpdate(
    mailingProfileId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **MailingProfile**|  | |
| **mailingProfileId** | [**string**] |  | defaults to undefined|


### Return type

**MailingProfile**

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

# **mailingProfilesRead**
> MailingProfile mailingProfilesRead()

Return the details of the selected mailing profile.

### Example

```typescript
import {
    MailingProfilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MailingProfilesApi(configuration);

let mailingProfileId: string; // (default to undefined)

const { status, data } = await apiInstance.mailingProfilesRead(
    mailingProfileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mailingProfileId** | [**string**] |  | defaults to undefined|


### Return type

**MailingProfile**

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

# **mailingProfilesUpdate**
> MailingProfile mailingProfilesUpdate(data)

Edit the selected mailing profile.

### Example

```typescript
import {
    MailingProfilesApi,
    Configuration,
    MailingProfile
} from './api';

const configuration = new Configuration();
const apiInstance = new MailingProfilesApi(configuration);

let mailingProfileId: string; // (default to undefined)
let data: MailingProfile; //

const { status, data } = await apiInstance.mailingProfilesUpdate(
    mailingProfileId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **MailingProfile**|  | |
| **mailingProfileId** | [**string**] |  | defaults to undefined|


### Return type

**MailingProfile**

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

