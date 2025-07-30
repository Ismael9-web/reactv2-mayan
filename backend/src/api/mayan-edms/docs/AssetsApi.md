# AssetsApi

All URIs are relative to *http://localhost/api/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**assetsCreate**](#assetscreate) | **POST** /assets/ | |
|[**assetsDelete**](#assetsdelete) | **DELETE** /assets/{asset_id}/ | |
|[**assetsImageRead**](#assetsimageread) | **GET** /assets/{asset_id}/image/ | |
|[**assetsList**](#assetslist) | **GET** /assets/ | |
|[**assetsPartialUpdate**](#assetspartialupdate) | **PATCH** /assets/{asset_id}/ | |
|[**assetsRead**](#assetsread) | **GET** /assets/{asset_id}/ | |
|[**assetsUpdate**](#assetsupdate) | **PUT** /assets/{asset_id}/ | |

# **assetsCreate**
> Asset assetsCreate(data)

Create a new asset.

### Example

```typescript
import {
    AssetsApi,
    Configuration,
    Asset
} from './api';

const configuration = new Configuration();
const apiInstance = new AssetsApi(configuration);

let data: Asset; //

const { status, data } = await apiInstance.assetsCreate(
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Asset**|  | |


### Return type

**Asset**

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

# **assetsDelete**
> assetsDelete()

Delete the selected asset.

### Example

```typescript
import {
    AssetsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AssetsApi(configuration);

let assetId: string; // (default to undefined)

const { status, data } = await apiInstance.assetsDelete(
    assetId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assetId** | [**string**] |  | defaults to undefined|


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

# **assetsImageRead**
> assetsImageRead()

Returns an image representation of the selected asset.

### Example

```typescript
import {
    AssetsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AssetsApi(configuration);

let assetId: string; // (default to undefined)

const { status, data } = await apiInstance.assetsImageRead(
    assetId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assetId** | [**string**] |  | defaults to undefined|


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

# **assetsList**
> AssetsList200Response assetsList()

Returns a list of all the assets.

### Example

```typescript
import {
    AssetsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AssetsApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.assetsList(
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

**AssetsList200Response**

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

# **assetsPartialUpdate**
> Asset assetsPartialUpdate(data)

Edit the properties of the selected asset.

### Example

```typescript
import {
    AssetsApi,
    Configuration,
    Asset
} from './api';

const configuration = new Configuration();
const apiInstance = new AssetsApi(configuration);

let assetId: string; // (default to undefined)
let data: Asset; //

const { status, data } = await apiInstance.assetsPartialUpdate(
    assetId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Asset**|  | |
| **assetId** | [**string**] |  | defaults to undefined|


### Return type

**Asset**

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

# **assetsRead**
> Asset assetsRead()

Return the details of the selected asset.

### Example

```typescript
import {
    AssetsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AssetsApi(configuration);

let assetId: string; // (default to undefined)

const { status, data } = await apiInstance.assetsRead(
    assetId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assetId** | [**string**] |  | defaults to undefined|


### Return type

**Asset**

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

# **assetsUpdate**
> Asset assetsUpdate(data)

Edit the properties of the selected asset.

### Example

```typescript
import {
    AssetsApi,
    Configuration,
    Asset
} from './api';

const configuration = new Configuration();
const apiInstance = new AssetsApi(configuration);

let assetId: string; // (default to undefined)
let data: Asset; //

const { status, data } = await apiInstance.assetsUpdate(
    assetId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Asset**|  | |
| **assetId** | [**string**] |  | defaults to undefined|


### Return type

**Asset**

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

