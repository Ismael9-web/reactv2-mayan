# CheckoutsApi

All URIs are relative to *http://localhost/api/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**checkoutsCheckoutInfoDelete**](#checkoutscheckoutinfodelete) | **DELETE** /checkouts/{checkout_id}/checkout_info/ | |
|[**checkoutsCheckoutInfoRead**](#checkoutscheckoutinforead) | **GET** /checkouts/{checkout_id}/checkout_info/ | |
|[**checkoutsCreate**](#checkoutscreate) | **POST** /checkouts/ | |
|[**checkoutsList**](#checkoutslist) | **GET** /checkouts/ | |

# **checkoutsCheckoutInfoDelete**
> checkoutsCheckoutInfoDelete()

Check in a document.

### Example

```typescript
import {
    CheckoutsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CheckoutsApi(configuration);

let checkoutId: string; // (default to undefined)

const { status, data } = await apiInstance.checkoutsCheckoutInfoDelete(
    checkoutId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkoutId** | [**string**] |  | defaults to undefined|


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

# **checkoutsCheckoutInfoRead**
> DocumentCheckout checkoutsCheckoutInfoRead()

Retrieve the details of the selected checked out document entry.

### Example

```typescript
import {
    CheckoutsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CheckoutsApi(configuration);

let checkoutId: string; // (default to undefined)

const { status, data } = await apiInstance.checkoutsCheckoutInfoRead(
    checkoutId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkoutId** | [**string**] |  | defaults to undefined|


### Return type

**DocumentCheckout**

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

# **checkoutsCreate**
> NewDocumentCheckout checkoutsCreate(data)

Checkout a document.

### Example

```typescript
import {
    CheckoutsApi,
    Configuration,
    NewDocumentCheckout
} from './api';

const configuration = new Configuration();
const apiInstance = new CheckoutsApi(configuration);

let data: NewDocumentCheckout; //

const { status, data } = await apiInstance.checkoutsCreate(
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **NewDocumentCheckout**|  | |


### Return type

**NewDocumentCheckout**

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

# **checkoutsList**
> CheckoutsList200Response checkoutsList()

Returns a list of all the documents that are currently checked out.

### Example

```typescript
import {
    CheckoutsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CheckoutsApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.checkoutsList(
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

**CheckoutsList200Response**

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

