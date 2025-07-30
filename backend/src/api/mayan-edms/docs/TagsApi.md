# TagsApi

All URIs are relative to *http://localhost/api/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**tagsCreate**](#tagscreate) | **POST** /tags/ | |
|[**tagsDelete**](#tagsdelete) | **DELETE** /tags/{tag_id}/ | |
|[**tagsDocumentsList**](#tagsdocumentslist) | **GET** /tags/{tag_id}/documents/ | |
|[**tagsList**](#tagslist) | **GET** /tags/ | |
|[**tagsPartialUpdate**](#tagspartialupdate) | **PATCH** /tags/{tag_id}/ | |
|[**tagsRead**](#tagsread) | **GET** /tags/{tag_id}/ | |
|[**tagsUpdate**](#tagsupdate) | **PUT** /tags/{tag_id}/ | |

# **tagsCreate**
> Tag tagsCreate(data)

Create a new tag.

### Example

```typescript
import {
    TagsApi,
    Configuration,
    Tag
} from './api';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

let data: Tag; //

const { status, data } = await apiInstance.tagsCreate(
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Tag**|  | |


### Return type

**Tag**

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

# **tagsDelete**
> tagsDelete()

Delete the selected tag.

### Example

```typescript
import {
    TagsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

let tagId: string; // (default to undefined)

const { status, data } = await apiInstance.tagsDelete(
    tagId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tagId** | [**string**] |  | defaults to undefined|


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

# **tagsDocumentsList**
> CabinetsDocumentsList200Response tagsDocumentsList()

Returns a list of all the documents tagged by a particular tag.

### Example

```typescript
import {
    TagsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

let tagId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.tagsDocumentsList(
    tagId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tagId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**CabinetsDocumentsList200Response**

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

# **tagsList**
> DocumentsTagsList200Response tagsList()

Returns a list of all the tags.

### Example

```typescript
import {
    TagsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.tagsList(
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

**DocumentsTagsList200Response**

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

# **tagsPartialUpdate**
> Tag tagsPartialUpdate(data)

Edit the selected tag.

### Example

```typescript
import {
    TagsApi,
    Configuration,
    Tag
} from './api';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

let tagId: string; // (default to undefined)
let data: Tag; //

const { status, data } = await apiInstance.tagsPartialUpdate(
    tagId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Tag**|  | |
| **tagId** | [**string**] |  | defaults to undefined|


### Return type

**Tag**

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

# **tagsRead**
> Tag tagsRead()

Return the details of the selected tag.

### Example

```typescript
import {
    TagsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

let tagId: string; // (default to undefined)

const { status, data } = await apiInstance.tagsRead(
    tagId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tagId** | [**string**] |  | defaults to undefined|


### Return type

**Tag**

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

# **tagsUpdate**
> Tag tagsUpdate(data)

Edit the selected tag.

### Example

```typescript
import {
    TagsApi,
    Configuration,
    Tag
} from './api';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

let tagId: string; // (default to undefined)
let data: Tag; //

const { status, data } = await apiInstance.tagsUpdate(
    tagId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Tag**|  | |
| **tagId** | [**string**] |  | defaults to undefined|


### Return type

**Tag**

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

