# WorkflowTemplatesApi

All URIs are relative to *http://localhost/api/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**workflowTemplatesCreate**](#workflowtemplatescreate) | **POST** /workflow_templates/ | |
|[**workflowTemplatesDelete**](#workflowtemplatesdelete) | **DELETE** /workflow_templates/{workflow_template_id}/ | |
|[**workflowTemplatesDocumentTypesAddCreate**](#workflowtemplatesdocumenttypesaddcreate) | **POST** /workflow_templates/{workflow_template_id}/document_types/add/ | |
|[**workflowTemplatesDocumentTypesList**](#workflowtemplatesdocumenttypeslist) | **GET** /workflow_templates/{workflow_template_id}/document_types/ | |
|[**workflowTemplatesDocumentTypesRemoveCreate**](#workflowtemplatesdocumenttypesremovecreate) | **POST** /workflow_templates/{workflow_template_id}/document_types/remove/ | |
|[**workflowTemplatesDocumentsList**](#workflowtemplatesdocumentslist) | **GET** /workflow_templates/{workflow_template_id}/documents/ | |
|[**workflowTemplatesImageRead**](#workflowtemplatesimageread) | **GET** /workflow_templates/{workflow_template_id}/image/ | |
|[**workflowTemplatesList**](#workflowtemplateslist) | **GET** /workflow_templates/ | |
|[**workflowTemplatesPartialUpdate**](#workflowtemplatespartialupdate) | **PATCH** /workflow_templates/{workflow_template_id}/ | |
|[**workflowTemplatesRead**](#workflowtemplatesread) | **GET** /workflow_templates/{workflow_template_id}/ | |
|[**workflowTemplatesStatesActionsCreate**](#workflowtemplatesstatesactionscreate) | **POST** /workflow_templates/{workflow_template_id}/states/{workflow_template_state_id}/actions/ | |
|[**workflowTemplatesStatesActionsDelete**](#workflowtemplatesstatesactionsdelete) | **DELETE** /workflow_templates/{workflow_template_id}/states/{workflow_template_state_id}/actions/{workflow_template_state_action_id}/ | |
|[**workflowTemplatesStatesActionsList**](#workflowtemplatesstatesactionslist) | **GET** /workflow_templates/{workflow_template_id}/states/{workflow_template_state_id}/actions/ | |
|[**workflowTemplatesStatesActionsPartialUpdate**](#workflowtemplatesstatesactionspartialupdate) | **PATCH** /workflow_templates/{workflow_template_id}/states/{workflow_template_state_id}/actions/{workflow_template_state_action_id}/ | |
|[**workflowTemplatesStatesActionsRead**](#workflowtemplatesstatesactionsread) | **GET** /workflow_templates/{workflow_template_id}/states/{workflow_template_state_id}/actions/{workflow_template_state_action_id}/ | |
|[**workflowTemplatesStatesActionsUpdate**](#workflowtemplatesstatesactionsupdate) | **PUT** /workflow_templates/{workflow_template_id}/states/{workflow_template_state_id}/actions/{workflow_template_state_action_id}/ | |
|[**workflowTemplatesStatesCreate**](#workflowtemplatesstatescreate) | **POST** /workflow_templates/{workflow_template_id}/states/ | |
|[**workflowTemplatesStatesDelete**](#workflowtemplatesstatesdelete) | **DELETE** /workflow_templates/{workflow_template_id}/states/{workflow_template_state_id}/ | |
|[**workflowTemplatesStatesDocumentsList**](#workflowtemplatesstatesdocumentslist) | **GET** /workflow_templates/{workflow_template_id}/states/{workflow_template_state_id}/documents/ | |
|[**workflowTemplatesStatesEscalationsCreate**](#workflowtemplatesstatesescalationscreate) | **POST** /workflow_templates/{workflow_template_id}/states/{workflow_template_state_id}/escalations/ | |
|[**workflowTemplatesStatesEscalationsDelete**](#workflowtemplatesstatesescalationsdelete) | **DELETE** /workflow_templates/{workflow_template_id}/states/{workflow_template_state_id}/escalations/{workflow_template_state_escalation_id}/ | |
|[**workflowTemplatesStatesEscalationsList**](#workflowtemplatesstatesescalationslist) | **GET** /workflow_templates/{workflow_template_id}/states/{workflow_template_state_id}/escalations/ | |
|[**workflowTemplatesStatesEscalationsPartialUpdate**](#workflowtemplatesstatesescalationspartialupdate) | **PATCH** /workflow_templates/{workflow_template_id}/states/{workflow_template_state_id}/escalations/{workflow_template_state_escalation_id}/ | |
|[**workflowTemplatesStatesEscalationsRead**](#workflowtemplatesstatesescalationsread) | **GET** /workflow_templates/{workflow_template_id}/states/{workflow_template_state_id}/escalations/{workflow_template_state_escalation_id}/ | |
|[**workflowTemplatesStatesEscalationsUpdate**](#workflowtemplatesstatesescalationsupdate) | **PUT** /workflow_templates/{workflow_template_id}/states/{workflow_template_state_id}/escalations/{workflow_template_state_escalation_id}/ | |
|[**workflowTemplatesStatesList**](#workflowtemplatesstateslist) | **GET** /workflow_templates/{workflow_template_id}/states/ | |
|[**workflowTemplatesStatesPartialUpdate**](#workflowtemplatesstatespartialupdate) | **PATCH** /workflow_templates/{workflow_template_id}/states/{workflow_template_state_id}/ | |
|[**workflowTemplatesStatesRead**](#workflowtemplatesstatesread) | **GET** /workflow_templates/{workflow_template_id}/states/{workflow_template_state_id}/ | |
|[**workflowTemplatesStatesUpdate**](#workflowtemplatesstatesupdate) | **PUT** /workflow_templates/{workflow_template_id}/states/{workflow_template_state_id}/ | |
|[**workflowTemplatesTransitionsCreate**](#workflowtemplatestransitionscreate) | **POST** /workflow_templates/{workflow_template_id}/transitions/ | |
|[**workflowTemplatesTransitionsDelete**](#workflowtemplatestransitionsdelete) | **DELETE** /workflow_templates/{workflow_template_id}/transitions/{workflow_template_transition_id}/ | |
|[**workflowTemplatesTransitionsFieldsCreate**](#workflowtemplatestransitionsfieldscreate) | **POST** /workflow_templates/{workflow_template_id}/transitions/{workflow_template_transition_id}/fields/ | |
|[**workflowTemplatesTransitionsFieldsDelete**](#workflowtemplatestransitionsfieldsdelete) | **DELETE** /workflow_templates/{workflow_template_id}/transitions/{workflow_template_transition_id}/fields/{workflow_template_transition_field_id} | |
|[**workflowTemplatesTransitionsFieldsList**](#workflowtemplatestransitionsfieldslist) | **GET** /workflow_templates/{workflow_template_id}/transitions/{workflow_template_transition_id}/fields/ | |
|[**workflowTemplatesTransitionsFieldsPartialUpdate**](#workflowtemplatestransitionsfieldspartialupdate) | **PATCH** /workflow_templates/{workflow_template_id}/transitions/{workflow_template_transition_id}/fields/{workflow_template_transition_field_id} | |
|[**workflowTemplatesTransitionsFieldsRead**](#workflowtemplatestransitionsfieldsread) | **GET** /workflow_templates/{workflow_template_id}/transitions/{workflow_template_transition_id}/fields/{workflow_template_transition_field_id} | |
|[**workflowTemplatesTransitionsFieldsUpdate**](#workflowtemplatestransitionsfieldsupdate) | **PUT** /workflow_templates/{workflow_template_id}/transitions/{workflow_template_transition_id}/fields/{workflow_template_transition_field_id} | |
|[**workflowTemplatesTransitionsList**](#workflowtemplatestransitionslist) | **GET** /workflow_templates/{workflow_template_id}/transitions/ | |
|[**workflowTemplatesTransitionsPartialUpdate**](#workflowtemplatestransitionspartialupdate) | **PATCH** /workflow_templates/{workflow_template_id}/transitions/{workflow_template_transition_id}/ | |
|[**workflowTemplatesTransitionsRead**](#workflowtemplatestransitionsread) | **GET** /workflow_templates/{workflow_template_id}/transitions/{workflow_template_transition_id}/ | |
|[**workflowTemplatesTransitionsTriggersCreate**](#workflowtemplatestransitionstriggerscreate) | **POST** /workflow_templates/{workflow_template_id}/transitions/{workflow_template_transition_id}/triggers/ | |
|[**workflowTemplatesTransitionsTriggersDelete**](#workflowtemplatestransitionstriggersdelete) | **DELETE** /workflow_templates/{workflow_template_id}/transitions/{workflow_template_transition_id}/triggers/{workflow_template_transition_trigger_id} | |
|[**workflowTemplatesTransitionsTriggersList**](#workflowtemplatestransitionstriggerslist) | **GET** /workflow_templates/{workflow_template_id}/transitions/{workflow_template_transition_id}/triggers/ | |
|[**workflowTemplatesTransitionsTriggersPartialUpdate**](#workflowtemplatestransitionstriggerspartialupdate) | **PATCH** /workflow_templates/{workflow_template_id}/transitions/{workflow_template_transition_id}/triggers/{workflow_template_transition_trigger_id} | |
|[**workflowTemplatesTransitionsTriggersRead**](#workflowtemplatestransitionstriggersread) | **GET** /workflow_templates/{workflow_template_id}/transitions/{workflow_template_transition_id}/triggers/{workflow_template_transition_trigger_id} | |
|[**workflowTemplatesTransitionsTriggersUpdate**](#workflowtemplatestransitionstriggersupdate) | **PUT** /workflow_templates/{workflow_template_id}/transitions/{workflow_template_transition_id}/triggers/{workflow_template_transition_trigger_id} | |
|[**workflowTemplatesTransitionsUpdate**](#workflowtemplatestransitionsupdate) | **PUT** /workflow_templates/{workflow_template_id}/transitions/{workflow_template_transition_id}/ | |
|[**workflowTemplatesUpdate**](#workflowtemplatesupdate) | **PUT** /workflow_templates/{workflow_template_id}/ | |

# **workflowTemplatesCreate**
> WorkflowTemplate workflowTemplatesCreate(data)

Create a new workflow template.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration,
    WorkflowTemplate
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let data: WorkflowTemplate; //

const { status, data } = await apiInstance.workflowTemplatesCreate(
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **WorkflowTemplate**|  | |


### Return type

**WorkflowTemplate**

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

# **workflowTemplatesDelete**
> workflowTemplatesDelete()

Delete the selected workflow template.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)

const { status, data } = await apiInstance.workflowTemplatesDelete(
    workflowTemplateId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowTemplateId** | [**string**] |  | defaults to undefined|


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

# **workflowTemplatesDocumentTypesAddCreate**
> WorkflowTemplateDocumentTypeAdd workflowTemplatesDocumentTypesAddCreate(data)

Add a document type to a workflow template.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration,
    WorkflowTemplateDocumentTypeAdd
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let data: WorkflowTemplateDocumentTypeAdd; //

const { status, data } = await apiInstance.workflowTemplatesDocumentTypesAddCreate(
    workflowTemplateId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **WorkflowTemplateDocumentTypeAdd**|  | |
| **workflowTemplateId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowTemplateDocumentTypeAdd**

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

# **workflowTemplatesDocumentTypesList**
> DocumentTypesList200Response workflowTemplatesDocumentTypesList()

Returns a list of all the document types attached to a workflow template.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.workflowTemplatesDocumentTypesList(
    workflowTemplateId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
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

# **workflowTemplatesDocumentTypesRemoveCreate**
> WorkflowTemplateDocumentTypeRemove workflowTemplatesDocumentTypesRemoveCreate(data)

Remove a document type from a workflow template.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration,
    WorkflowTemplateDocumentTypeRemove
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let data: WorkflowTemplateDocumentTypeRemove; //

const { status, data } = await apiInstance.workflowTemplatesDocumentTypesRemoveCreate(
    workflowTemplateId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **WorkflowTemplateDocumentTypeRemove**|  | |
| **workflowTemplateId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowTemplateDocumentTypeRemove**

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

# **workflowTemplatesDocumentsList**
> CabinetsDocumentsList200Response workflowTemplatesDocumentsList()

Return a list of all the document executing a specific workflow template.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.workflowTemplatesDocumentsList(
    workflowTemplateId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
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

# **workflowTemplatesImageRead**
> workflowTemplatesImageRead()

Returns an image representation of the selected workflow template.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)

const { status, data } = await apiInstance.workflowTemplatesImageRead(
    workflowTemplateId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowTemplateId** | [**string**] |  | defaults to undefined|


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

# **workflowTemplatesList**
> WorkflowTemplatesList200Response workflowTemplatesList()

Returns a list of all the workflow templates.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.workflowTemplatesList(
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

**WorkflowTemplatesList200Response**

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

# **workflowTemplatesPartialUpdate**
> WorkflowTemplate workflowTemplatesPartialUpdate(data)

Edit the selected workflow template.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration,
    WorkflowTemplate
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let data: WorkflowTemplate; //

const { status, data } = await apiInstance.workflowTemplatesPartialUpdate(
    workflowTemplateId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **WorkflowTemplate**|  | |
| **workflowTemplateId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowTemplate**

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

# **workflowTemplatesRead**
> WorkflowTemplate workflowTemplatesRead()

Return the details of the selected workflow template.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)

const { status, data } = await apiInstance.workflowTemplatesRead(
    workflowTemplateId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowTemplateId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowTemplate**

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

# **workflowTemplatesStatesActionsCreate**
> WorkflowTemplateStateAction workflowTemplatesStatesActionsCreate(data)

Create a new workflow template state action.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration,
    WorkflowTemplateStateAction
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let workflowTemplateStateId: string; // (default to undefined)
let data: WorkflowTemplateStateAction; //

const { status, data } = await apiInstance.workflowTemplatesStatesActionsCreate(
    workflowTemplateId,
    workflowTemplateStateId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **WorkflowTemplateStateAction**|  | |
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateStateId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowTemplateStateAction**

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

# **workflowTemplatesStatesActionsDelete**
> workflowTemplatesStatesActionsDelete()

Delete the selected workflow template state action.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let workflowTemplateStateId: string; // (default to undefined)
let workflowTemplateStateActionId: string; // (default to undefined)

const { status, data } = await apiInstance.workflowTemplatesStatesActionsDelete(
    workflowTemplateId,
    workflowTemplateStateId,
    workflowTemplateStateActionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateStateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateStateActionId** | [**string**] |  | defaults to undefined|


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

# **workflowTemplatesStatesActionsList**
> WorkflowTemplatesStatesActionsList200Response workflowTemplatesStatesActionsList()

Returns a list of all the workflow template state actions.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let workflowTemplateStateId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.workflowTemplatesStatesActionsList(
    workflowTemplateId,
    workflowTemplateStateId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateStateId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**WorkflowTemplatesStatesActionsList200Response**

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

# **workflowTemplatesStatesActionsPartialUpdate**
> WorkflowTemplateStateAction workflowTemplatesStatesActionsPartialUpdate(data)

Edit the selected workflow template state action.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration,
    WorkflowTemplateStateAction
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let workflowTemplateStateId: string; // (default to undefined)
let workflowTemplateStateActionId: string; // (default to undefined)
let data: WorkflowTemplateStateAction; //

const { status, data } = await apiInstance.workflowTemplatesStatesActionsPartialUpdate(
    workflowTemplateId,
    workflowTemplateStateId,
    workflowTemplateStateActionId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **WorkflowTemplateStateAction**|  | |
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateStateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateStateActionId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowTemplateStateAction**

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

# **workflowTemplatesStatesActionsRead**
> WorkflowTemplateStateAction workflowTemplatesStatesActionsRead()

Return the details of the selected workflow template state action.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let workflowTemplateStateId: string; // (default to undefined)
let workflowTemplateStateActionId: string; // (default to undefined)

const { status, data } = await apiInstance.workflowTemplatesStatesActionsRead(
    workflowTemplateId,
    workflowTemplateStateId,
    workflowTemplateStateActionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateStateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateStateActionId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowTemplateStateAction**

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

# **workflowTemplatesStatesActionsUpdate**
> WorkflowTemplateStateAction workflowTemplatesStatesActionsUpdate(data)

Edit the selected workflow template state action.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration,
    WorkflowTemplateStateAction
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let workflowTemplateStateId: string; // (default to undefined)
let workflowTemplateStateActionId: string; // (default to undefined)
let data: WorkflowTemplateStateAction; //

const { status, data } = await apiInstance.workflowTemplatesStatesActionsUpdate(
    workflowTemplateId,
    workflowTemplateStateId,
    workflowTemplateStateActionId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **WorkflowTemplateStateAction**|  | |
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateStateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateStateActionId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowTemplateStateAction**

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

# **workflowTemplatesStatesCreate**
> WorkflowTemplateState workflowTemplatesStatesCreate(data)

Create a new workflow template state.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration,
    WorkflowTemplateState
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let data: WorkflowTemplateState; //

const { status, data } = await apiInstance.workflowTemplatesStatesCreate(
    workflowTemplateId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **WorkflowTemplateState**|  | |
| **workflowTemplateId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowTemplateState**

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

# **workflowTemplatesStatesDelete**
> workflowTemplatesStatesDelete()

Delete the selected workflow template state.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let workflowTemplateStateId: string; // (default to undefined)

const { status, data } = await apiInstance.workflowTemplatesStatesDelete(
    workflowTemplateId,
    workflowTemplateStateId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateStateId** | [**string**] |  | defaults to undefined|


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

# **workflowTemplatesStatesDocumentsList**
> CabinetsDocumentsList200Response workflowTemplatesStatesDocumentsList()

Return a list of all the documents at a specific workflow template state.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let workflowTemplateStateId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.workflowTemplatesStatesDocumentsList(
    workflowTemplateId,
    workflowTemplateStateId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateStateId** | [**string**] |  | defaults to undefined|
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

# **workflowTemplatesStatesEscalationsCreate**
> WorkflowTemplateStateEscalation workflowTemplatesStatesEscalationsCreate(data)

Create a new workflow template state escalation.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration,
    WorkflowTemplateStateEscalation
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let workflowTemplateStateId: string; // (default to undefined)
let data: WorkflowTemplateStateEscalation; //

const { status, data } = await apiInstance.workflowTemplatesStatesEscalationsCreate(
    workflowTemplateId,
    workflowTemplateStateId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **WorkflowTemplateStateEscalation**|  | |
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateStateId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowTemplateStateEscalation**

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

# **workflowTemplatesStatesEscalationsDelete**
> workflowTemplatesStatesEscalationsDelete()

Delete the selected workflow template state escalation.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let workflowTemplateStateId: string; // (default to undefined)
let workflowTemplateStateEscalationId: string; // (default to undefined)

const { status, data } = await apiInstance.workflowTemplatesStatesEscalationsDelete(
    workflowTemplateId,
    workflowTemplateStateId,
    workflowTemplateStateEscalationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateStateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateStateEscalationId** | [**string**] |  | defaults to undefined|


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

# **workflowTemplatesStatesEscalationsList**
> WorkflowTemplatesStatesEscalationsList200Response workflowTemplatesStatesEscalationsList()

Returns a list of all the workflow template state escalations.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let workflowTemplateStateId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.workflowTemplatesStatesEscalationsList(
    workflowTemplateId,
    workflowTemplateStateId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateStateId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**WorkflowTemplatesStatesEscalationsList200Response**

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

# **workflowTemplatesStatesEscalationsPartialUpdate**
> WorkflowTemplateStateEscalation workflowTemplatesStatesEscalationsPartialUpdate(data)

Edit the selected workflow template state escalation.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration,
    WorkflowTemplateStateEscalation
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let workflowTemplateStateId: string; // (default to undefined)
let workflowTemplateStateEscalationId: string; // (default to undefined)
let data: WorkflowTemplateStateEscalation; //

const { status, data } = await apiInstance.workflowTemplatesStatesEscalationsPartialUpdate(
    workflowTemplateId,
    workflowTemplateStateId,
    workflowTemplateStateEscalationId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **WorkflowTemplateStateEscalation**|  | |
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateStateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateStateEscalationId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowTemplateStateEscalation**

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

# **workflowTemplatesStatesEscalationsRead**
> WorkflowTemplateStateEscalation workflowTemplatesStatesEscalationsRead()

Return the details of the selected workflow template state escalation.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let workflowTemplateStateId: string; // (default to undefined)
let workflowTemplateStateEscalationId: string; // (default to undefined)

const { status, data } = await apiInstance.workflowTemplatesStatesEscalationsRead(
    workflowTemplateId,
    workflowTemplateStateId,
    workflowTemplateStateEscalationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateStateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateStateEscalationId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowTemplateStateEscalation**

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

# **workflowTemplatesStatesEscalationsUpdate**
> WorkflowTemplateStateEscalation workflowTemplatesStatesEscalationsUpdate(data)

Edit the selected workflow template state escalation.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration,
    WorkflowTemplateStateEscalation
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let workflowTemplateStateId: string; // (default to undefined)
let workflowTemplateStateEscalationId: string; // (default to undefined)
let data: WorkflowTemplateStateEscalation; //

const { status, data } = await apiInstance.workflowTemplatesStatesEscalationsUpdate(
    workflowTemplateId,
    workflowTemplateStateId,
    workflowTemplateStateEscalationId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **WorkflowTemplateStateEscalation**|  | |
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateStateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateStateEscalationId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowTemplateStateEscalation**

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

# **workflowTemplatesStatesList**
> WorkflowTemplatesStatesList200Response workflowTemplatesStatesList()

Returns a list of all the workflow template states.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.workflowTemplatesStatesList(
    workflowTemplateId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**WorkflowTemplatesStatesList200Response**

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

# **workflowTemplatesStatesPartialUpdate**
> WorkflowTemplateState workflowTemplatesStatesPartialUpdate(data)

Edit the selected workflow template state.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration,
    WorkflowTemplateState
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let workflowTemplateStateId: string; // (default to undefined)
let data: WorkflowTemplateState; //

const { status, data } = await apiInstance.workflowTemplatesStatesPartialUpdate(
    workflowTemplateId,
    workflowTemplateStateId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **WorkflowTemplateState**|  | |
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateStateId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowTemplateState**

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

# **workflowTemplatesStatesRead**
> WorkflowTemplateState workflowTemplatesStatesRead()

Return the details of the selected workflow template state.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let workflowTemplateStateId: string; // (default to undefined)

const { status, data } = await apiInstance.workflowTemplatesStatesRead(
    workflowTemplateId,
    workflowTemplateStateId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateStateId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowTemplateState**

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

# **workflowTemplatesStatesUpdate**
> WorkflowTemplateState workflowTemplatesStatesUpdate(data)

Edit the selected workflow template state.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration,
    WorkflowTemplateState
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let workflowTemplateStateId: string; // (default to undefined)
let data: WorkflowTemplateState; //

const { status, data } = await apiInstance.workflowTemplatesStatesUpdate(
    workflowTemplateId,
    workflowTemplateStateId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **WorkflowTemplateState**|  | |
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateStateId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowTemplateState**

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

# **workflowTemplatesTransitionsCreate**
> WorkflowTemplateTransition workflowTemplatesTransitionsCreate(data)

Create a new workflow template transition.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration,
    WorkflowTemplateTransition
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let data: WorkflowTemplateTransition; //

const { status, data } = await apiInstance.workflowTemplatesTransitionsCreate(
    workflowTemplateId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **WorkflowTemplateTransition**|  | |
| **workflowTemplateId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowTemplateTransition**

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

# **workflowTemplatesTransitionsDelete**
> workflowTemplatesTransitionsDelete()

Delete the selected workflow template transition.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let workflowTemplateTransitionId: string; // (default to undefined)

const { status, data } = await apiInstance.workflowTemplatesTransitionsDelete(
    workflowTemplateId,
    workflowTemplateTransitionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateTransitionId** | [**string**] |  | defaults to undefined|


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

# **workflowTemplatesTransitionsFieldsCreate**
> WorkflowTransitionField workflowTemplatesTransitionsFieldsCreate(data)

Create a new workflow template transition field.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration,
    WorkflowTransitionField
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let workflowTemplateTransitionId: string; // (default to undefined)
let data: WorkflowTransitionField; //

const { status, data } = await apiInstance.workflowTemplatesTransitionsFieldsCreate(
    workflowTemplateId,
    workflowTemplateTransitionId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **WorkflowTransitionField**|  | |
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateTransitionId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowTransitionField**

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

# **workflowTemplatesTransitionsFieldsDelete**
> workflowTemplatesTransitionsFieldsDelete()

Delete the selected workflow template transition field.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let workflowTemplateTransitionId: string; // (default to undefined)
let workflowTemplateTransitionFieldId: string; // (default to undefined)

const { status, data } = await apiInstance.workflowTemplatesTransitionsFieldsDelete(
    workflowTemplateId,
    workflowTemplateTransitionId,
    workflowTemplateTransitionFieldId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateTransitionId** | [**string**] |  | defaults to undefined|
| **workflowTemplateTransitionFieldId** | [**string**] |  | defaults to undefined|


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

# **workflowTemplatesTransitionsFieldsList**
> WorkflowTemplatesTransitionsFieldsList200Response workflowTemplatesTransitionsFieldsList()

Returns a list of all the workflow template transition fields.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let workflowTemplateTransitionId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.workflowTemplatesTransitionsFieldsList(
    workflowTemplateId,
    workflowTemplateTransitionId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateTransitionId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**WorkflowTemplatesTransitionsFieldsList200Response**

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

# **workflowTemplatesTransitionsFieldsPartialUpdate**
> WorkflowTransitionField workflowTemplatesTransitionsFieldsPartialUpdate(data)

Edit the selected workflow template transition field.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration,
    WorkflowTransitionField
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let workflowTemplateTransitionId: string; // (default to undefined)
let workflowTemplateTransitionFieldId: string; // (default to undefined)
let data: WorkflowTransitionField; //

const { status, data } = await apiInstance.workflowTemplatesTransitionsFieldsPartialUpdate(
    workflowTemplateId,
    workflowTemplateTransitionId,
    workflowTemplateTransitionFieldId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **WorkflowTransitionField**|  | |
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateTransitionId** | [**string**] |  | defaults to undefined|
| **workflowTemplateTransitionFieldId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowTransitionField**

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

# **workflowTemplatesTransitionsFieldsRead**
> WorkflowTransitionField workflowTemplatesTransitionsFieldsRead()

Return the details of the selected workflow template transition field.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let workflowTemplateTransitionId: string; // (default to undefined)
let workflowTemplateTransitionFieldId: string; // (default to undefined)

const { status, data } = await apiInstance.workflowTemplatesTransitionsFieldsRead(
    workflowTemplateId,
    workflowTemplateTransitionId,
    workflowTemplateTransitionFieldId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateTransitionId** | [**string**] |  | defaults to undefined|
| **workflowTemplateTransitionFieldId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowTransitionField**

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

# **workflowTemplatesTransitionsFieldsUpdate**
> WorkflowTransitionField workflowTemplatesTransitionsFieldsUpdate(data)

Edit the selected workflow template transition field.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration,
    WorkflowTransitionField
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let workflowTemplateTransitionId: string; // (default to undefined)
let workflowTemplateTransitionFieldId: string; // (default to undefined)
let data: WorkflowTransitionField; //

const { status, data } = await apiInstance.workflowTemplatesTransitionsFieldsUpdate(
    workflowTemplateId,
    workflowTemplateTransitionId,
    workflowTemplateTransitionFieldId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **WorkflowTransitionField**|  | |
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateTransitionId** | [**string**] |  | defaults to undefined|
| **workflowTemplateTransitionFieldId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowTransitionField**

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

# **workflowTemplatesTransitionsList**
> DocumentsWorkflowInstancesLogEntriesTransitionsList200Response workflowTemplatesTransitionsList()

Returns a list of all the workflow template transitions.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.workflowTemplatesTransitionsList(
    workflowTemplateId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**DocumentsWorkflowInstancesLogEntriesTransitionsList200Response**

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

# **workflowTemplatesTransitionsPartialUpdate**
> WorkflowTemplateTransition workflowTemplatesTransitionsPartialUpdate(data)

Edit the selected workflow template transition.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration,
    WorkflowTemplateTransition
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let workflowTemplateTransitionId: string; // (default to undefined)
let data: WorkflowTemplateTransition; //

const { status, data } = await apiInstance.workflowTemplatesTransitionsPartialUpdate(
    workflowTemplateId,
    workflowTemplateTransitionId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **WorkflowTemplateTransition**|  | |
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateTransitionId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowTemplateTransition**

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

# **workflowTemplatesTransitionsRead**
> WorkflowTemplateTransition workflowTemplatesTransitionsRead()

Return the details of the selected workflow template transition.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let workflowTemplateTransitionId: string; // (default to undefined)

const { status, data } = await apiInstance.workflowTemplatesTransitionsRead(
    workflowTemplateId,
    workflowTemplateTransitionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateTransitionId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowTemplateTransition**

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

# **workflowTemplatesTransitionsTriggersCreate**
> WorkflowTemplateTransitionTrigger workflowTemplatesTransitionsTriggersCreate(data)

Create a new workflow template transition trigger.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration,
    WorkflowTemplateTransitionTrigger
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let workflowTemplateTransitionId: string; // (default to undefined)
let data: WorkflowTemplateTransitionTrigger; //

const { status, data } = await apiInstance.workflowTemplatesTransitionsTriggersCreate(
    workflowTemplateId,
    workflowTemplateTransitionId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **WorkflowTemplateTransitionTrigger**|  | |
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateTransitionId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowTemplateTransitionTrigger**

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

# **workflowTemplatesTransitionsTriggersDelete**
> workflowTemplatesTransitionsTriggersDelete()

Delete the selected workflow template transition trigger.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let workflowTemplateTransitionId: string; // (default to undefined)
let workflowTemplateTransitionTriggerId: string; // (default to undefined)

const { status, data } = await apiInstance.workflowTemplatesTransitionsTriggersDelete(
    workflowTemplateId,
    workflowTemplateTransitionId,
    workflowTemplateTransitionTriggerId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateTransitionId** | [**string**] |  | defaults to undefined|
| **workflowTemplateTransitionTriggerId** | [**string**] |  | defaults to undefined|


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

# **workflowTemplatesTransitionsTriggersList**
> WorkflowTemplatesTransitionsTriggersList200Response workflowTemplatesTransitionsTriggersList()

Returns a list of all the workflow template transition triggers.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let workflowTemplateTransitionId: string; // (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.workflowTemplatesTransitionsTriggersList(
    workflowTemplateId,
    workflowTemplateTransitionId,
    ordering,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateTransitionId** | [**string**] |  | defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined|


### Return type

**WorkflowTemplatesTransitionsTriggersList200Response**

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

# **workflowTemplatesTransitionsTriggersPartialUpdate**
> WorkflowTemplateTransitionTrigger workflowTemplatesTransitionsTriggersPartialUpdate(data)

Edit the selected workflow template transition trigger.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration,
    WorkflowTemplateTransitionTrigger
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let workflowTemplateTransitionId: string; // (default to undefined)
let workflowTemplateTransitionTriggerId: string; // (default to undefined)
let data: WorkflowTemplateTransitionTrigger; //

const { status, data } = await apiInstance.workflowTemplatesTransitionsTriggersPartialUpdate(
    workflowTemplateId,
    workflowTemplateTransitionId,
    workflowTemplateTransitionTriggerId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **WorkflowTemplateTransitionTrigger**|  | |
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateTransitionId** | [**string**] |  | defaults to undefined|
| **workflowTemplateTransitionTriggerId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowTemplateTransitionTrigger**

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

# **workflowTemplatesTransitionsTriggersRead**
> WorkflowTemplateTransitionTrigger workflowTemplatesTransitionsTriggersRead()

Return the details of the selected workflow template transition trigger.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let workflowTemplateTransitionId: string; // (default to undefined)
let workflowTemplateTransitionTriggerId: string; // (default to undefined)

const { status, data } = await apiInstance.workflowTemplatesTransitionsTriggersRead(
    workflowTemplateId,
    workflowTemplateTransitionId,
    workflowTemplateTransitionTriggerId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateTransitionId** | [**string**] |  | defaults to undefined|
| **workflowTemplateTransitionTriggerId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowTemplateTransitionTrigger**

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

# **workflowTemplatesTransitionsTriggersUpdate**
> WorkflowTemplateTransitionTrigger workflowTemplatesTransitionsTriggersUpdate(data)

Edit the selected workflow template transition trigger.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration,
    WorkflowTemplateTransitionTrigger
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let workflowTemplateTransitionId: string; // (default to undefined)
let workflowTemplateTransitionTriggerId: string; // (default to undefined)
let data: WorkflowTemplateTransitionTrigger; //

const { status, data } = await apiInstance.workflowTemplatesTransitionsTriggersUpdate(
    workflowTemplateId,
    workflowTemplateTransitionId,
    workflowTemplateTransitionTriggerId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **WorkflowTemplateTransitionTrigger**|  | |
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateTransitionId** | [**string**] |  | defaults to undefined|
| **workflowTemplateTransitionTriggerId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowTemplateTransitionTrigger**

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

# **workflowTemplatesTransitionsUpdate**
> WorkflowTemplateTransition workflowTemplatesTransitionsUpdate(data)

Edit the selected workflow template transition.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration,
    WorkflowTemplateTransition
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let workflowTemplateTransitionId: string; // (default to undefined)
let data: WorkflowTemplateTransition; //

const { status, data } = await apiInstance.workflowTemplatesTransitionsUpdate(
    workflowTemplateId,
    workflowTemplateTransitionId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **WorkflowTemplateTransition**|  | |
| **workflowTemplateId** | [**string**] |  | defaults to undefined|
| **workflowTemplateTransitionId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowTemplateTransition**

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

# **workflowTemplatesUpdate**
> WorkflowTemplate workflowTemplatesUpdate(data)

Edit the selected workflow template.

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration,
    WorkflowTemplate
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let workflowTemplateId: string; // (default to undefined)
let data: WorkflowTemplate; //

const { status, data } = await apiInstance.workflowTemplatesUpdate(
    workflowTemplateId,
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **WorkflowTemplate**|  | |
| **workflowTemplateId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowTemplate**

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

