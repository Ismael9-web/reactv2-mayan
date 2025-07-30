# SmartLinksApi

All URIs are relative to *http://localhost/api/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**smartLinksConditionsCreate**](#smartlinksconditionscreate) | **POST** /smart_links/{smart_link_id}/conditions/ | |
|[**smartLinksConditionsDelete**](#smartlinksconditionsdelete) | **DELETE** /smart_links/{smart_link_id}/conditions/{smart_link_condition_id}/ | |
|[**smartLinksConditionsList**](#smartlinksconditionslist) | **GET** /smart_links/{smart_link_id}/conditions/ | |
|[**smartLinksConditionsPartialUpdate**](#smartlinksconditionspartialupdate) | **PATCH** /smart_links/{smart_link_id}/conditions/{smart_link_condition_id}/ | |
|[**smartLinksConditionsRead**](#smartlinksconditionsread) | **GET** /smart_links/{smart_link_id}/conditions/{smart_link_condition_id}/ | |
|[**smartLinksConditionsUpdate**](#smartlinksconditionsupdate) | **PUT** /smart_links/{smart_link_id}/conditions/{smart_link_condition_id}/ | |
|[**smartLinksCreate**](#smartlinkscreate) | **POST** /smart_links/ | |
|[**smartLinksDelete**](#smartlinksdelete) | **DELETE** /smart_links/{smart_link_id}/ | |
|[**smartLinksDocumentTypesAddCreate**](#smartlinksdocumenttypesaddcreate) | **POST** /smart_links/{smart_link_id}/document_types/add/ | |
|[**smartLinksDocumentTypesList**](#smartlinksdocumenttypeslist) | **GET** /smart_links/{smart_link_id}/document_types/ | |
|[**smartLinksDocumentTypesRemoveCreate**](#smartlinksdocumenttypesremovecreate) | **POST** /smart_links/{smart_link_id}/document_types/remove/ | |
|[**smartLinksList**](#smartlinkslist) | **GET** /smart_links/ | |
|[**smartLinksPartialUpdate**](#smartlinkspartialupdate) | **PATCH** /smart_links/{smart_link_id}/ | |
|[**smartLinksRead**](#smartlinksread) | **GET** /smart_links/{smart_link_id}/ | |
|[**smartLinksUpdate**](#smartlinksupdate) | **PUT** /smart_links/{smart_link_id}/ | |

# **smartLinksConditionsCreate**
> SmartLinkCondition smartLinksConditionsCreate(data)

Create a new smart link condition.

### Example

```typescript
import {
    SmartLinksApi,
    Configuration,
    SmartLinkCondition
} from './api';

const configuration = new Configuration();
const apiInstance = new SmartLinksApi(configuration);

let smartLinkId: string; // (default to undefined)
let data: SmartLinkCondition; //

const { status, data } = await apiInstance.smartLinksConditionsCreate(
    smartLinkId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **SmartLinkCondition**|  | |
| **smartLinkId** | [**string**] |  | defaults to undefined|


### Return type

**SmartLinkCondition**

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

# **smartLinksConditionsDelete**
> smartLinksConditionsDelete()

Delete the selected smart link condition.

### Example

```typescript
import {
    SmartLinksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SmartLinksApi(configuration);

let smartLinkId: string; // (default to undefined)
let smartLinkConditionId: string; // (default to undefined)

const { status, data } = await apiInstance.smartLinksConditionsDelete(
    smartLinkId,
    smartLinkConditionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **smartLinkId** | [**string**] |  | defaults to undefined|
| **smartLinkConditionId** | [**string**] |  | defaults to undefined|


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

# **smartLinksConditionsList**
> SmartLinksConditionsList200Response smartLinksConditionsList()

Returns a list of all the smart link conditions.

### Example

```typescript
import {
    SmartLinksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SmartLinksApi(configuration);

let smartLinkId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.smartLinksConditionsList(
    smartLinkId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **smartLinkId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**SmartLinksConditionsList200Response**

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

# **smartLinksConditionsPartialUpdate**
> SmartLinkCondition smartLinksConditionsPartialUpdate(data)

Edit the selected smart link condition.

### Example

```typescript
import {
    SmartLinksApi,
    Configuration,
    SmartLinkCondition
} from './api';

const configuration = new Configuration();
const apiInstance = new SmartLinksApi(configuration);

let smartLinkId: string; // (default to undefined)
let smartLinkConditionId: string; // (default to undefined)
let data: SmartLinkCondition; //

const { status, data } = await apiInstance.smartLinksConditionsPartialUpdate(
    smartLinkId,
    smartLinkConditionId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **SmartLinkCondition**|  | |
| **smartLinkId** | [**string**] |  | defaults to undefined|
| **smartLinkConditionId** | [**string**] |  | defaults to undefined|


### Return type

**SmartLinkCondition**

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

# **smartLinksConditionsRead**
> SmartLinkCondition smartLinksConditionsRead()

Return the details of the selected smart link condition.

### Example

```typescript
import {
    SmartLinksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SmartLinksApi(configuration);

let smartLinkId: string; // (default to undefined)
let smartLinkConditionId: string; // (default to undefined)

const { status, data } = await apiInstance.smartLinksConditionsRead(
    smartLinkId,
    smartLinkConditionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **smartLinkId** | [**string**] |  | defaults to undefined|
| **smartLinkConditionId** | [**string**] |  | defaults to undefined|


### Return type

**SmartLinkCondition**

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

# **smartLinksConditionsUpdate**
> SmartLinkCondition smartLinksConditionsUpdate(data)

Edit the selected smart link condition.

### Example

```typescript
import {
    SmartLinksApi,
    Configuration,
    SmartLinkCondition
} from './api';

const configuration = new Configuration();
const apiInstance = new SmartLinksApi(configuration);

let smartLinkId: string; // (default to undefined)
let smartLinkConditionId: string; // (default to undefined)
let data: SmartLinkCondition; //

const { status, data } = await apiInstance.smartLinksConditionsUpdate(
    smartLinkId,
    smartLinkConditionId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **SmartLinkCondition**|  | |
| **smartLinkId** | [**string**] |  | defaults to undefined|
| **smartLinkConditionId** | [**string**] |  | defaults to undefined|


### Return type

**SmartLinkCondition**

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

# **smartLinksCreate**
> SmartLink smartLinksCreate(data)

Create a new smart link.

### Example

```typescript
import {
    SmartLinksApi,
    Configuration,
    SmartLink
} from './api';

const configuration = new Configuration();
const apiInstance = new SmartLinksApi(configuration);

let data: SmartLink; //

const { status, data } = await apiInstance.smartLinksCreate(
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **SmartLink**|  | |


### Return type

**SmartLink**

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

# **smartLinksDelete**
> smartLinksDelete()

Delete the selected smart link.

### Example

```typescript
import {
    SmartLinksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SmartLinksApi(configuration);

let smartLinkId: string; // (default to undefined)

const { status, data } = await apiInstance.smartLinksDelete(
    smartLinkId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **smartLinkId** | [**string**] |  | defaults to undefined|


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

# **smartLinksDocumentTypesAddCreate**
> SmartLinkDocumentTypeAdd smartLinksDocumentTypesAddCreate(data)

Add a document type to a smart link.

### Example

```typescript
import {
    SmartLinksApi,
    Configuration,
    SmartLinkDocumentTypeAdd
} from './api';

const configuration = new Configuration();
const apiInstance = new SmartLinksApi(configuration);

let smartLinkId: string; // (default to undefined)
let data: SmartLinkDocumentTypeAdd; //

const { status, data } = await apiInstance.smartLinksDocumentTypesAddCreate(
    smartLinkId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **SmartLinkDocumentTypeAdd**|  | |
| **smartLinkId** | [**string**] |  | defaults to undefined|


### Return type

**SmartLinkDocumentTypeAdd**

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

# **smartLinksDocumentTypesList**
> DocumentTypesList200Response smartLinksDocumentTypesList()

Return a list of the selected smart link document types.

### Example

```typescript
import {
    SmartLinksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SmartLinksApi(configuration);

let smartLinkId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.smartLinksDocumentTypesList(
    smartLinkId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **smartLinkId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**DocumentTypesList200Response**

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

# **smartLinksDocumentTypesRemoveCreate**
> SmartLinkDocumentTypeRemove smartLinksDocumentTypesRemoveCreate(data)

Remove a document type from a smart link.

### Example

```typescript
import {
    SmartLinksApi,
    Configuration,
    SmartLinkDocumentTypeRemove
} from './api';

const configuration = new Configuration();
const apiInstance = new SmartLinksApi(configuration);

let smartLinkId: string; // (default to undefined)
let data: SmartLinkDocumentTypeRemove; //

const { status, data } = await apiInstance.smartLinksDocumentTypesRemoveCreate(
    smartLinkId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **SmartLinkDocumentTypeRemove**|  | |
| **smartLinkId** | [**string**] |  | defaults to undefined|


### Return type

**SmartLinkDocumentTypeRemove**

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

# **smartLinksList**
> SmartLinksList200Response smartLinksList()

Returns a list of all the smart links.

### Example

```typescript
import {
    SmartLinksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SmartLinksApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.smartLinksList(
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

**SmartLinksList200Response**

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

# **smartLinksPartialUpdate**
> SmartLink smartLinksPartialUpdate(data)

Edit the selected smart link.

### Example

```typescript
import {
    SmartLinksApi,
    Configuration,
    SmartLink
} from './api';

const configuration = new Configuration();
const apiInstance = new SmartLinksApi(configuration);

let smartLinkId: string; // (default to undefined)
let data: SmartLink; //

const { status, data } = await apiInstance.smartLinksPartialUpdate(
    smartLinkId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **SmartLink**|  | |
| **smartLinkId** | [**string**] |  | defaults to undefined|


### Return type

**SmartLink**

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

# **smartLinksRead**
> SmartLink smartLinksRead()

Return the details of the selected smart link.

### Example

```typescript
import {
    SmartLinksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SmartLinksApi(configuration);

let smartLinkId: string; // (default to undefined)

const { status, data } = await apiInstance.smartLinksRead(
    smartLinkId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **smartLinkId** | [**string**] |  | defaults to undefined|


### Return type

**SmartLink**

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

# **smartLinksUpdate**
> SmartLink smartLinksUpdate(data)

Edit the selected smart link.

### Example

```typescript
import {
    SmartLinksApi,
    Configuration,
    SmartLink
} from './api';

const configuration = new Configuration();
const apiInstance = new SmartLinksApi(configuration);

let smartLinkId: string; // (default to undefined)
let data: SmartLink; //

const { status, data } = await apiInstance.smartLinksUpdate(
    smartLinkId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **SmartLink**|  | |
| **smartLinkId** | [**string**] |  | defaults to undefined|


### Return type

**SmartLink**

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

