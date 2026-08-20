---
layout: post
title: Resources in TypeScript Scheduler | Syncfusion
description: Learn how to assign and group resources in the Syncfusion TypeScript Scheduler with multi-level grouping and timeline resource views.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Resources in TypeScript Scheduler

Resources and grouping support allows the Scheduler to be shared by multiple resources. Appointments for each resource display under the relevant resource in a column or row layout. Each resource in the Scheduler is arranged in column-wise or row-wise order, with individual spacing to display all respective appointments on a single page. The Scheduler supports both single and multiple levels of resource grouping, enabling the categorization of resources in a hierarchical structure. Resources appear either as expandable groups in Timeline views or as a vertical hierarchy in Calendar views.

Multiple resources can be assigned to the same appointment by allowing multiple resource selection in the event editor window.

The Scheduler groups resources based on different criteria, including grouping appointments by resources, grouping resources by dates, and timeline scheduling. Resource data can be bound to the Scheduler either as a local JSON collection or through a URL retrieving data from remote services.

## Resource fields

The default options available within the [`resources`](https://ej2.syncfusion.com/documentation/api/schedule/resources) collection are as follows:

| Field name | Type | Description |
|-------|---------| --------------- |
| `field` | String | A value that binds to the resource [`field`](https://ej2.syncfusion.com/documentation/api/schedule/resources#field) of event object. |
| `title` | String | It holds the [`title`](https://ej2.syncfusion.com/documentation/api/schedule/resources#title) of the resource field to be displayed on the event editor window. |
| `name` | String | A unique resource [`name`](https://ej2.syncfusion.com/documentation/api/schedule/resources#name) used for differentiating various resource objects while grouping. |
| `allowMultiple` | Boolean | When set to `true`, the [`allowMultiple`](https://ej2.syncfusion.com/documentation/api/schedule/resources#allowmultiple) property allows the selection of multiple resource names, thus creating multiple instances of the same appointment for the selected resources. |
| `dataSource` | Object | Assigns the resource [`dataSource`](https://ej2.syncfusion.com/documentation/api/schedule/resources#datasource), where data can be passed either as an array of JavaScript objects, or else can create an instance of [`DataManager`](http://ej2.syncfusion.com/documentation/data/api-dataManager) for processing remote data. With remote data assigned to [`dataSource`](https://ej2.syncfusion.com/documentation/api/schedule/resources#datasource), check the available [adaptors](http://ej2.syncfusion.com/documentation/data/adaptors) to customize the data processing. |
| `query` | Query | Defines the external [`query`](http://ej2.syncfusion.com/documentation/data/api-query) that will be executed along with data processing. |
| `idField` | String | Binds the resource ID field name from the resources [`dataSource`](https://ej2.syncfusion.com/documentation/api/schedule/resources#datasource). |
| `expandedField` | String | Binds the [`expandedField`](https://ej2.syncfusion.com/documentation/api/schedule/resources#expandedfield) name from the resources [`dataSource`](https://ej2.syncfusion.com/documentation/api/schedule/resources#datasource). It usually holds a boolean value that determines whether the resource in Timeline views is in a collapsed or expanded state on initial load. |
| `textField` | String | Binds the [`textField`](https://ej2.syncfusion.com/documentation/api/schedule/resources#textfield) name from the resources [`dataSource`](https://ej2.syncfusion.com/documentation/api/schedule/resources#datasource). It usually holds the resource names. |
| `groupIDField` | String | Binds the [`groupIDField`](https://ej2.syncfusion.com/documentation/api/schedule/resources#groupidfield) name from the resource [`dataSource`](https://ej2.syncfusion.com/documentation/api/schedule/resources#datasource). It usually holds the resource IDs of parent-level resources. |
| `colorField` | String | Binds the [`colorField`](https://ej2.syncfusion.com/documentation/api/schedule/resources#colorfield) name from the resource [`dataSource`](https://ej2.syncfusion.com/documentation/api/schedule/resources#datasource). The color value mapped in this field will be applied to the events of resources. |
| `startHourField` | String | Binds the [`startHourField`](https://ej2.syncfusion.com/documentation/api/schedule/resources#starthourfield) name from the resource [`dataSource`](https://ej2.syncfusion.com/documentation/api/schedule/resources#datasource). It allows providing different work start hour for the resources. |
| `endHourField` | String | Binds the [`endHourField`](https://ej2.syncfusion.com/documentation/api/schedule/resources#endhourfield) name from the resource [`dataSource`](https://ej2.syncfusion.com/documentation/api/schedule/resources#datasource). It allows providing different work end hour for the resources. |
| `workDaysField` | String | Binds the [`workDaysField`](https://ej2.syncfusion.com/documentation/api/schedule/resources#workdaysfield) name from the resources [`dataSource`](https://ej2.syncfusion.com/documentation/api/schedule/resources#datasource). It allows providing different working days collection for the resources. |
| `cssClassField` | String | Binds the custom [`cssClassField`](https://ej2.syncfusion.com/documentation/api/schedule/resources#cssclassfield) name from the resources [`dataSource`](https://ej2.syncfusion.com/documentation/api/schedule/resources#datasource). It maps the CSS class written for specific resources and applies it to the events of those resources. |

## Resource data binding

Resource data can be bound to the Scheduler either as a local JSON collection or through a service URL retrieving resource data from remote data services.

### Using local JSON data

The following code example demonstrates how to bind local JSON data to the [`dataSource`](https://ej2.syncfusion.com/documentation/api/schedule/resources#datasource) of the [`resources`](https://ej2.syncfusion.com/documentation/api/schedule/resources) collection.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-local-data/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-local-data/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-local-data/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-local-data" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-local-data/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-local-data/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-local-data/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-local-data" %}
{% endif %}

### Using remote service URL

The following code example demonstrates how to bind remote data for the resources [`dataSource`](https://ej2.syncfusion.com/documentation/api/schedule/resources#datasource).

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-remote-data/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-remote-data/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-remote-data/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-remote-data/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-remote-data/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-remote-data/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% endif %}

The server-side controller code to handle the resource datasource is as follows.

```c#
using Microsoft.AspNetCore.Mvc;

namespace Core_DotNet9.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public List<Resource> GetResourceData()
        {
            var resources = new List<Resource>
            {
                new Resource { Id = 1, OwnerText = "Alice", OwnerColor = "#1aaa55" },
                new Resource { Id = 2, OwnerText = "Bob", OwnerColor = "#357cd2" },
                new Resource { Id = 3, OwnerText = "Charlie", OwnerColor = "#7fa900" }
            };
            return resources;
        }
        public class Resource
        {
            public int Id { get; set; }
            public string OwnerText { get; set; }
            public string OwnerColor { get; set; }
        }
    }
}

```

## Scheduler with multiple resources

Display the Scheduler in default mode without visually showcasing all resources, while allowing assignment of required resources to appointments through the event editor resource options.

Appointments belonging to different resources display together on the default Scheduler, differentiated by the resource color assigned in the **resources** collection (indicating which resource the appointment belongs to).

**Example:** To display the default Scheduler with multiple resource options in the event editor, ignore the [`group`](https://ej2.syncfusion.com/documentation/api/schedule#group) option and simply define the [`resources`](https://ej2.syncfusion.com/documentation/api/schedule/resources) property with all its internal options.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/multiple-resource-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/multiple-resource-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/multiple-resource-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/multiple-resource-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/multiple-resource-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/multiple-resource-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/multiple-resource-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/multiple-resource-cs1" %}
{% endif %}

> Setting [`allowMultiple`](https://ej2.syncfusion.com/documentation/api/schedule/resources#allowmultiple) to `true` in the above code example allows selection of multiple resources from the event editor and also creates multiple copies of the same appointment in the Scheduler for each resource while rendering.

## Resource grouping

Resource grouping support allows the Scheduler to group resources in a hierarchical structure both as expandable groups (Timeline views) and as vertical hierarchy displaying resources one after the other (Resources view).

The Scheduler supports both single and multiple levels of resource grouping that can be customized in both Timeline and vertical Scheduler views.

### Vertical resource view

The following code example displays how multiple resources are grouped and their events are displayed in the default calendar views.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs1" %}
{% endif %}

### Timeline resource view

The following code example demonstrates how to group the multiple resources on Timeline Scheduler views with their relevant events displayed accordingly under those resources.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs2/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs2/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs2/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs2/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs2" %}
{% endif %}

### Grouping single-level resources

This grouping allows the Scheduler to display all resources at a single level simultaneously. The appointments mapped under resources display with colors as per the [`colorField`](https://ej2.syncfusion.com/documentation/api/schedule/resources#colorfield) defined in the resources collection.

**Example:** To display the Scheduler with single-level resource grouping,

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/single-level-resource-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/single-level-resource-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/single-level-resource-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/single-level-resource-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/single-level-resource-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/single-level-resource-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/single-level-resource-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/single-level-resource-cs1" %}
{% endif %}

> The [`name`](https://ej2.syncfusion.com/documentation/api/schedule/resources#name) field defined in the **resources** collection namely `Owners` will be mapped within the [`group`](https://ej2.syncfusion.com/documentation/api/schedule/group) property, in order to enable the grouping option with those resource levels on the Scheduler.

### Grouping multi-level resources

Group the Scheduler resources in multiple levels by mapping child resources to each parent resource. In the following example, there are 2 levels of resources, where the second-level resources are defined with [`groupID`](https://ej2.syncfusion.com/documentation/api/schedule/resources#groupidfield) mapping to the first-level resource's ID to establish the parent-child relationship between them.

**Example:** To display the Scheduler with multiple level resource grouping options,

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/multi-level-resource-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/multi-level-resource-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/multi-level-resource-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/multi-level-resource-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/multi-level-resource-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/multi-level-resource-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/multi-level-resource-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/multi-level-resource-cs1" %}
{% endif %}

### One-to-One grouping

In multi-level grouping, Scheduler usually groups resources on the child level based on the `GroupID` that maps with the `Id` field of parent-level resources (with [`byGroupID`](https://ej2.syncfusion.com/documentation/api/schedule/group#bygroupid) set to true by default). There is also an option to group all child resource(s) against each parent resource. To enable this kind of grouping, set [`byGroupID`](https://ej2.syncfusion.com/documentation/api/schedule/group#bygroupid) to `false` within the [`group`](https://ej2.syncfusion.com/documentation/api/schedule/group) property. In the following code example, there are two levels of resources, and all three child-level resources are mapped one to one with each resource on the first level.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/multi-level-resource-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/multi-level-resource-cs2/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/multi-level-resource-cs2/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/multi-level-resource-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/multi-level-resource-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/multi-level-resource-cs2/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/multi-level-resource-cs2/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/multi-level-resource-cs2" %}
{% endif %}

### Grouping resources by date

Group the number of resources under each date, applicable only on Calendar views such as Day, Week, Work Week, Month, Agenda, and Month-Agenda. To enable such grouping, set [`byDate`](https://ej2.syncfusion.com/documentation/api/schedule/group#bydate) option to `true` within the [`group`](https://ej2.syncfusion.com/documentation/api/schedule/group) property.

**Example:** To display the Scheduler with resources grouped by date,

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/group-by-date-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/group-by-date-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/group-by-date-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/group-by-date-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/group-by-date-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/group-by-date-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/group-by-date-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/group-by-date-cs1" %}
{% endif %}

> **Note:** This grouping by date is not applicable to any Timeline views.

## Customizing parent resource cells

In timeline views, work cells of parent resources can be customized by checking the [`elementType`](https://ej2.syncfusion.com/documentation/api/schedule/renderCellEventArgs#elementtype) as `resourceGroupCells` in the [`renderCell`](https://ej2.syncfusion.com/documentation/api/schedule#rendercell) event. In the following code example, the background color of work hours has been changed.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs3/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs3/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs3/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs3/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs3" %}
{% endif %}

## Working with shared events

Multiple resources can share the same events, allowing CRUD actions on one instance to reflect on all shared instances simultaneously. To enable this option, set the [`allowGroupEdit`](https://ej2.syncfusion.com/documentation/api/schedule/group#allowgroupedit) option to `true` within the [`group`](https://ej2.syncfusion.com/documentation/api/schedule/group) property. With this property enabled, a single appointment object is maintained within the appointment collection, even if it is shared by more than one resource, while the resource fields of that appointment object are stored in an array that holds the IDs of multiple resources.

> **Note:** Any create, edit, or delete action performed on a shared event instance is reflected on all related instances visible in the UI.

**Example:** To edit all resource events simultaneously,

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs4/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs4/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs4" %}
{% endif %}

## Simple resource header customization

Customize the resource header cells using the built-in template option to change the look and appearance in both vertical and Timeline view modes. All resource-related fields and other information can be accessed within the [`resourceHeaderTemplate`](https://ej2.syncfusion.com/documentation/api/schedule#resourceheadertemplate) option.

**Example:** To customize the resource header and display it along with the designation [`resource`](https://ej2.syncfusion.com/documentation/api/schedule/resources) field, refer to the code example below.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-header-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-header-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-header-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/resource-header-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-header-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-header-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-header-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/resource-header-cs1" %}
{% endif %}

> To customize the resource header in compact mode properly, use the `e-device` class as shown in the code example.

![Resource header template in compact mode](./images/header-template.png)

## Customizing resource header with multiple columns

Customize the resource headers to display multiple columns such as Room, Type, and Capacity. The following code example demonstrates how to achieve this and applies only to timeline views.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-header-column-customization-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-header-column-customization-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-header-column-customization-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/resource-header-column-customization-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-header-column-customization-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-header-column-customization-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-header-column-customization-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/resource-header-column-customization-cs1" %}
{% endif %}

## Collapse/Expand child resources in timeline views

Expand and collapse resources that have child resources in Timeline views dynamically. By default, resources are in an expanded state with their child resources. You can collapse and expand the child resources in the UI by setting the [`expandedField`](https://ej2.syncfusion.com/documentation/api/schedule/resources#expandedfield) option to `false`; its default value is `true`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs5/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs5/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs5/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs5/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs5" %}
{% endif %}

## Displaying tooltip for resource headers

Display tooltips over resource headers showing the resource information. By default, no tooltips are displayed on resource headers. To enable tooltips, assign a customized template design to the [`headerTooltipTemplate`](https://ej2.syncfusion.com/documentation/api/schedule/group#headertooltiptemplate) option within the [`group`](https://ej2.syncfusion.com/documentation/api/schedule/group) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/header-tooltip-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/header-tooltip-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/header-tooltip-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/header-tooltip-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/header-tooltip-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/header-tooltip-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/header-tooltip-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/header-tooltip-cs1" %}
{% endif %}

## Choosing among resource colors for appointments

By default, colors defined on the top-level resources collection are applied to events. To apply specific resource colors to events regardless of the top-level parent resource color, define the [`resourceColorField`](https://ej2.syncfusion.com/documentation/api/schedule/eventSettings#resourcecolorfield) option within the [`eventSettings`](https://ej2.syncfusion.com/documentation/api/schedule/eventSettings) property.

In the following example, colors mentioned in the second level are applied over the events.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-color-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-color-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-color-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/resource-color-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-color-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-color-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-color-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/resource-color-cs1" %}
{% endif %}

> **Note:** The value of the [`resourceColorField`](https://ej2.syncfusion.com/documentation/api/schedule/eventSettings#resourcecolorfield) field should map to the [`name`](https://ej2.syncfusion.com/documentation/api/schedule/resources#name) value defined within the [`resources`](https://ej2.syncfusion.com/documentation/api/schedule/resources) property.

## Setting different style to each resource appointments

By default, the appearance of events is the same for all resource events. If you want to apply different styles to each resource event, define the [`cssClassField`](https://ej2.syncfusion.com/documentation/api/schedule/resources#cssclassfield) option within the [`resources`](https://ej2.syncfusion.com/documentation/api/schedule/resources) property to map different cssClass fields from the resource data source, as shown in the following example.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-css-class-field-api-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-css-class-field-api-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-css-class-field-api-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/resource-css-class-field-api-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-css-class-field-api-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-css-class-field-api-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-css-class-field-api-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/resource-css-class-field-api-cs1" %}
{% endif %}

## Dynamically add and remove resources

Add or remove resources dynamically to and from the Scheduler. In the following example, when the checkboxes are checked and unchecked, the respective resources are added or removed from the Scheduler layout. To add a new resource dynamically, use the [`addResource`](https://ej2.syncfusion.com/documentation/api/schedule#addresource) method, which accepts the resource object, resource name (the level within which to add the resource object), and index (the position where the resource needs to be added) as arguments.

To remove resources dynamically, use the [`removeResource`](https://ej2.syncfusion.com/documentation/api/schedule#removeresource) method, which accepts the index (position from where the resource should be removed) and resource name (the level within which the resource object is present) as parameters.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/dynamic-resource-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/dynamic-resource-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/dynamic-resource-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/dynamic-resource-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/dynamic-resource-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/dynamic-resource-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/dynamic-resource-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/dynamic-resource-cs1" %}
{% endif %}

## Setting different working days and hours for resources

Each resource in the Scheduler can have different working hours and working days. There are default options available within the [`resources`](https://ej2.syncfusion.com/documentation/api/schedule/resources) collection to customize the Scheduler's default working hours and days.

* [Using the work day field for different work days](#set-different-work-days)
* [Using the start hour and end hour fields for different work hours](#set-different-work-hours)

### Set different work days

Set different working days for Scheduler resources using the [`workDaysField`](https://ej2.syncfusion.com/documentation/api/schedule/resources#workdaysfield) property, which maps the working days field from the resource data source. This field accepts a collection of day indexes from 0 to 6. By default, it is set to [1, 2, 3, 4, 5]. In the following example, each resource has different values and therefore each will render only those working days. This option applies only to vertical views and does not apply to timeline views.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/multiple-resource-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/multiple-resource-cs2/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/multiple-resource-cs2/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/multiple-resource-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/multiple-resource-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/multiple-resource-cs2/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/multiple-resource-cs2/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/multiple-resource-cs2" %}
{% endif %}

### Set different work hours

Different working hours can be set for Scheduler resources using the [`startHourField`](https://ej2.syncfusion.com/documentation/api/schedule/resources#starthourfield) and [`endHourField`](https://ej2.syncfusion.com/documentation/api/schedule/resources#endhourfield) properties, which map the `startHourField` and `endHourField` values from the resource data source.

* [`startHourField`](https://ej2.syncfusion.com/documentation/api/schedule/resources#starthourfield) - Denotes the start time of the working/business hour in a day.
* [`endHourField`](https://ej2.syncfusion.com/documentation/api/schedule/resources#endhourfield) - Denotes the end time limit of the working/business hour in a day.

Working hours indicate the duration of a workday and are visually highlighted with an active color over work cells. Each resource in the Scheduler can have its own set of working hours, as depicted in the following example.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/multiple-resource-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/multiple-resource-cs3/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/multiple-resource-cs3/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/multiple-resource-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/multiple-resource-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/multiple-resource-cs3/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/multiple-resource-cs3/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/multiple-resource-cs3" %}
{% endif %}

In this example, a resource named `Will Smith` is shown with working hours ranging from 8.00 AM to 3.00 PM, visually illustrated with active colors, whereas the other two resources have different working hours set.

## Hide non-working days when grouped by date

In the Scheduler, set custom work days for each resource and group the Scheduler by date to display these work days. By default, the Scheduler shows all days when it is grouped by date, even if they are not included in the custom work days for the resources. However, use the [`hideNonWorkingDays`](../api/schedule/group#hidenonworkingdays) property to display only the custom work days in the Scheduler.

To use the [`hideNonWorkingDays`](../api/schedule/group#hidenonworkingdays) property, include it in the Scheduler component configuration. Set [`hideNonWorkingDays`](../api/schedule/group#hidenonworkingdays) to `true` to enable this feature.

**Example:** To display the Scheduler with resources grouped by date for custom working days,

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/group-by-date-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/group-by-date-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/group-by-date-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/group-by-date-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/group-by-date-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/group-by-date-cs2" %}
{% endif %}

> **Note:** The [`hideNonWorkingDays`](../api/schedule/group#hidenonworkingdays) property only applies when the Scheduler is grouped by [`byDate`](../api/schedule/group#bydate).

## Scroll to specific resource

You can manually scroll to a specific resource in the Scheduler using the [`scrollToResource`](https://ej2.syncfusion.com/documentation/api/schedule#scrolltoresource) method, as shown in the following code example.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/scroll-to-resource-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/scroll-to-resource-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/scroll-to-resource-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/scroll-to-resource-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/scroll-to-resource-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/scroll-to-resource-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/scroll-to-resource-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/scroll-to-resource-cs1" %}
{% endif %}

## Compact view in mobile

Although the Scheduler views are designed with mobile responsiveness in mind, when using the Scheduler with multiple resources it is difficult to view all resources and their relevant events at once on mobile devices. Therefore, a compact mode has been introduced specifically for multiple resources on mobile devices. By default, this mode is enabled when using the Scheduler with multiple resources on mobile devices. To disable compact mode, set the [`enableCompactView`](https://ej2.syncfusion.com/documentation/api/schedule/group#enablecompactview) option within the [`group`](https://ej2.syncfusion.com/documentation/api/schedule/group) property to `false`. Disabling this option displays the desktop Scheduler view on mobile devices.

With this compact view enabled on mobile, only a single resource is shown at a time. To switch to other resources, there is a TreeView on the left listing the available resources; clicking one displays that resource and its related appointments.

![Resources in compact mode](./images/resource-mobile.png)

Clicking on the menu icon before the resource text will show the resources available in the Scheduler as following.

![Resources menu option in compact mode](./images/resource-menu.png)

## Adaptive UI in desktop

By default, the Scheduler layout adapts automatically on desktop and mobile devices with appropriate UI changes. To display the adaptive Scheduler in desktop mode with adaptive enhancements, set the [`enableAdaptiveUI`](https://ej2.syncfusion.com/documentation/api/schedule#enableadaptiveui) property to `true`. Enabling this option displays the mobile Scheduler view on desktop devices.

Some of the default changes made for the compact Scheduler to render on desktop devices are as follows:
* View options displayed in the Navigation drawer.
* Plus icon added to the header for new event creation.
* Today icon added to the header instead of the Today button.
* With Multiple resources – only one resource is shown to enhance the view experience of resource events details clearly. To switch to other resources, there is a TreeView on the left that lists all other available resources. Clicking on a resource displays that particular resource and its related events.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs6/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs6/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs6/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs6/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/resource-grouping-cs6" %}
{% endif %}

> Refer to the [JavaScript Scheduler](https://www.syncfusion.com/scheduler-sdk/javascript-scheduler) feature tour page for its feature representations. Also explore the [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/tailwind3/schedule/overview.html) to learn how to present and manipulate data.
