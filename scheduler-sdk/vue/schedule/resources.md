---
layout: post
title: Resources and Grouping in Vue Scheduler | Syncfusion
description: Learn how to assign and group resources in the Syncfusion Vue Scheduler with multi-level grouping, resource fields, and timeline views.
control: Scheduler
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Resources and Grouping in Vue Scheduler

Resources and grouping support allows the Scheduler to be shared by multiple resources. Also, the appointments for each resource are displayed under the relevant resources. Each resource in the Scheduler is arranged in column or row order, with individual spacing to display all its respective appointments on a single page. It also supports multiple levels of grouping, enabling the categorization of resources in a hierarchical structure and showing them either in expandable groups (Timeline views) or in a vertical hierarchy one after another (Calendar views).

It is also possible to assign one or more resources to the same appointment by allowing multiple selection of resource options in the event editor window.

The HTML5 JavaScript Scheduler groups resources based on different criteria. It includes grouping appointments based on resources, grouping resources based on dates, and timeline scheduling. Also, the resource data binds to Scheduler either as a local JSON collection or a URL, retrieving data from remote data services.

## Resource fields

The default options available within the [`resources`](https://ej2.syncfusion.com/vue/documentation/api/schedule/group#resources) collection are as follows:

| Field name      |  Type   | Description |
|-----------------|---------|----------------|
| [`field`](https://ej2.syncfusion.com/vue/documentation/api/schedule/resources#field) | String | A value that binds to the resource field of the event object. |
| [`title`](https://ej2.syncfusion.com/vue/documentation/api/schedule/resources#title) | String | It holds the title of the resource field to be displayed on the event editor window. |
| [`name`](https://ej2.syncfusion.com/vue/documentation/api/schedule/resources#name) | String | A unique resource name used for differentiating various resource objects while grouping. |
| [`allowMultiple`](https://ej2.syncfusion.com/vue/documentation/api/schedule/resources#allowmultiple) | Boolean | When set to `true`, allows multiple selection of resource names, thus creating multiple instances of the same appointment for the selected resources. |
| [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/schedule/resources#datasource) | Object | Assigns the resource `dataSource`, where data can be passed either as an array of JavaScript objects or as an instance of [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager) when processing remote data. When remote data is assigned to `dataSource`, check the available [adaptors](https://ej2.syncfusion.com/documentation/data/adaptors) to customize data processing. |
| [`query`](https://ej2.syncfusion.com/vue/documentation/api/schedule/resources#query) | Query | Defines the external [`query`](https://ej2.syncfusion.com/documentation/api/data/query) that will be executed along with the data processing. |
| [`idField`](https://ej2.syncfusion.com/vue/documentation/api/schedule/resources#idfield) | String | Binds the resource ID field name from the resources `dataSource`. |
| [`expandedField`](https://ej2.syncfusion.com/vue/documentation/api/schedule/resources#expandedfield) | String | Binds the `expandedField` name from the resources `dataSource`. It usually holds a boolean value that decides whether the resource in timeline views is collapsed or expanded on initial load. |
| [`textField`](https://ej2.syncfusion.com/vue/documentation/api/schedule/resources#textfield) | String | Binds the text field name from the resources `dataSource`. It usually holds the resource names. |
| [`groupIDField`](https://ej2.syncfusion.com/vue/documentation/api/schedule/resources#groupidfield) | String | Binds the group ID field name from the resource `dataSource`. It usually holds the value of resource IDs of parent level resources. |
| [`colorField`](https://ej2.syncfusion.com/vue/documentation/api/schedule/resources#colorfield) | String | Binds the color field name from the resource `dataSource`. The color value mapped in this field will be applied to the events of resources. |
| [`startHourField`](https://ej2.syncfusion.com/vue/documentation/api/schedule/resources#starthourfield) | String | Binds the start hour field name from the resource `dataSource`. It allows different work start hours for the resources. |
| [`endHourField`](https://ej2.syncfusion.com/vue/documentation/api/schedule/resources#endhourfield) | String | Binds the end hour field name from the resource `dataSource`. It allows different work end hours for the resources. |
| [`workDaysField`](https://ej2.syncfusion.com/vue/documentation/api/schedule/resources#workdaysfield) | String | Binds the work days field name from the resource `dataSource`. It allows different working day collections for the resources. |
| [`cssClassField`](https://ej2.syncfusion.com/vue/documentation/api/schedule/resources#cssclassfield) | String | Binds the custom CSS class field name from the resources `dataSource`. It maps the CSS class defined for the specific resources and applies it to their events. |

## Resource data binding

The resource data can be bound to Scheduler either as a local JSON collection or a service URL, retrieving data from remote services.

### Using local JSON data

The following code example shows how to bind local JSON data to the `dataSource` of the [`resources`](https://ej2.syncfusion.com/vue/documentation/api/schedule/group#resources) collection.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div>
    <div id='app'>
      <div id='container'>
        <ejs-schedule id='Schedule' width='100%' height='550px' :eventSettings='eventSettings'
          :selectedDate='selectedDate' :currentView='currentView'>
          <e-views>
            <e-view option='Week'></e-view>
            <e-view option='Month'></e-view>
            <e-view option='TimelineWeek'></e-view>
            <e-view option='TimelineMonth'></e-view>
            <e-view option='Agenda'></e-view>
          </e-views>
          <e-resources>
            <e-resource field='OwnerId' title='Owner' name='Owners' :dataSource='resourceDataSource'
              textField='OwnerText' idField='Id' colorField='OwnerColor'>
            </e-resource>
          </e-resources>
        </ejs-schedule>
      </div>
    </div>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { resourceData } from './datasource.js';
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, ResourcesDirective as EResources, ResourceDirective as EResource, Week, Month, Agenda, TimelineViews, TimelineMonth } from '@syncfusion/ej2-vue-schedule';

const width = '100%';
const height = '550px';
const currentView = 'Week';
const views = ['Week', 'Month', 'TimelineWeek', 'TimelineMonth', 'Agenda'];
const selectedDate = new Date(2018, 3, 1);
const resourceDataSource = [
  { OwnerText: 'Nancy', Id: 1, OwnerColor: '#ffaa00' },
  { OwnerText: 'Steven', Id: 2, OwnerColor: '#f8a398' },
  { OwnerText: 'Michael', Id: 3, OwnerColor: '#7499e1' }
];
const eventSettings = { dataSource: resourceData };

provide('schedule', [Week, Month, Agenda, TimelineViews, TimelineMonth]);

</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-vue-calendars/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-vue-inputs/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-vue-navigations/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-vue-popups/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div>
    <div id='app'>
      <div id='container'>
        <ejs-schedule id='Schedule' width='100%' height='550px' :eventSettings='eventSettings'
          :selectedDate='selectedDate' :currentView='currentView'>
          <e-views>
            <e-view option='Week'></e-view>
            <e-view option='Month'></e-view>
            <e-view option='TimelineWeek'></e-view>
            <e-view option='TimelineMonth'></e-view>
            <e-view option='Agenda'></e-view>
          </e-views>
          <e-resources>
            <e-resource field='OwnerId' title='Owner' name='Owners' :dataSource='resourceDataSource'
              textField='OwnerText' idField='Id' colorField='OwnerColor'>
            </e-resource>
          </e-resources>
        </ejs-schedule>
      </div>
    </div>
  </div>
</template>

<script>
import { resourceData } from './datasource.js';
import { ScheduleComponent, ViewDirective, ViewsDirective, ResourcesDirective, ResourceDirective, Week, Month, Agenda, TimelineViews, TimelineMonth } from '@syncfusion/ej2-vue-schedule';

export default {
  components: {
    'ejs-schedule': ScheduleComponent,
    'e-views': ViewsDirective,
    'e-view': ViewDirective,
    'e-resources': ResourcesDirective,
    'e-resource': ResourceDirective
  },
  data() {
    return {
      width: '100%',
      height: '550px',
      currentView: 'Week',
      views: ['Week', 'Month', 'TimelineWeek', 'TimelineMonth', 'Agenda'],
      selectedDate: new Date(2018, 3, 1),
      resourceDataSource: [
        { OwnerText: 'Nancy', Id: 1, OwnerColor: '#ffaa00' },
        { OwnerText: 'Steven', Id: 2, OwnerColor: '#f8a398' },
        { OwnerText: 'Michael', Id: 3, OwnerColor: '#7499e1' }
      ],
      eventSettings: { dataSource: resourceData }
    }
  },
  provide: {
    schedule: [Week, Month, Agenda, TimelineViews, TimelineMonth]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3.css";
</style>

{% endhighlight %}
{% endtabs %}

### Using remote service URL

Resources can also be retrieved from a remote endpoint using `DataManager` with an adaptor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div>
    <div id='app'>
      <div id='container'>
        <ejs-schedule id='Schedule' width='100%' height='550px' :eventSettings='eventSettings'
          :selectedDate='selectedDate' :currentView='currentView'>
          <e-views>
            <e-view option='Week'></e-view>
            <e-view option='Month'></e-view>
            <e-view option='TimelineWeek'></e-view>
            <e-view option='TimelineMonth'></e-view>
            <e-view option='Agenda'></e-view>
          </e-views>
          <e-resources>
            <e-resource field='OwnerId' title='Owner' name='Owners' :dataSource='resourceDataSource'
              textField='OwnerText' idField='Id' colorField='OwnerColor'>
            </e-resource>
          </e-resources>
        </ejs-schedule>
      </div>
    </div>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, ResourcesDirective as EResources, ResourceDirective as EResource, Week, Month, Agenda, TimelineViews, TimelineMonth } from '@syncfusion/ej2-vue-schedule';
import { resourceData } from './datasource.js';

let resource = new DataManager({
  url: 'Home/GetResourceData',
  adaptor: new UrlAdaptor,
  crossDomain: true
});

const width = '100%';
const height = '550px';
const currentView = 'Week';
const views = ['Week', 'Month', 'TimelineWeek', 'TimelineMonth', 'Agenda'];
const selectedDate = new Date(2018, 3, 1);
const resourceDataSource = resource;
const eventSettings = { dataSource: resourceData };

provide('schedule', [Week, Month, Agenda, TimelineViews, TimelineMonth]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div>
    <div id='app'>
      <div id='container'>
        <ejs-schedule id='Schedule' width='100%' height='550px' :eventSettings='eventSettings'
          :selectedDate='selectedDate' :currentView='currentView'>
          <e-views>
            <e-view option='Week'></e-view>
            <e-view option='Month'></e-view>
            <e-view option='TimelineWeek'></e-view>
            <e-view option='TimelineMonth'></e-view>
            <e-view option='Agenda'></e-view>
          </e-views>
          <e-resources>
            <e-resource field='OwnerId' title='Owner' name='Owners' :dataSource='resourceDataSource'
              textField='OwnerText' idField='Id' colorField='OwnerColor'>
            </e-resource>
          </e-resources>
        </ejs-schedule>
      </div>
    </div>
  </div>
</template>

<script>
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { ScheduleComponent, ViewDirective, ViewsDirective, ResourcesDirective, ResourceDirective, Week, Month, Agenda, TimelineViews, TimelineMonth } from '@syncfusion/ej2-vue-schedule';
import { resourceData } from './datasource.js';

let resource = new DataManager({
  url: 'Home/GetResourceData',
  adaptor: new UrlAdaptor,
  crossDomain: true
});

export default {
  components: {
    'ejs-schedule': ScheduleComponent,
    'e-views': ViewsDirective,
    'e-view': ViewDirective,
    'e-resources': ResourcesDirective,
    'e-resource': ResourceDirective
  },
  data() {
    return {
      width: '100%',
      height: '550px',
      currentView: 'Week',
      views: ['Week', 'Month', 'TimelineWeek', 'TimelineMonth', 'Agenda'],
      selectedDate: new Date(2018, 3, 1),
      resourceDataSource: resource,
      eventSettings: { dataSource: resourceData }
    }
  },
  provide: {
    schedule: [Week, Month, Agenda, TimelineViews, TimelineMonth]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3.css";
</style>

{% endhighlight %}
{% endtabs %}

## Scheduler with multiple resources

It is possible to display the Scheduler in the default mode without visually showcasing all the resources, while still allowing the required resources to be assigned to appointments through the event editor resource options.

The appointments belonging to different resources will be displayed together in the default Scheduler, and will be differentiated based on the resource color assigned in the **resources** collection.

Learn how to add appointments from multiple resources to [Vue Scheduler](https://www.syncfusion.com/vue-components/vue-scheduler) by watching this video.

{% youtube "https://www.youtube.com/watch?v=kBwxxhC8bB0" %}

**Example:** To display default Scheduler with multiple resource options in the event editor, ignore the group option and simply define the `resources` property with all its internal options.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/multiple-resources-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/multiple-resources-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/multiple-resources-cs1" %}

> Setting [`allowMultiple`](https://ej2.syncfusion.com/vue/documentation/api/schedule/resources#allowmultiple) to `true` in the above code example allows you to select multiple resources from the event editor and creates multiple copies of the same appointment in the Scheduler for each resource while rendering.

## Resource grouping

Resource grouping support allows the Scheduler to group resources in a hierarchical structure, both as expandable groups in Timeline views and as a vertical hierarchy displaying resources one after another in calendar views.

Scheduler supports both single- and multiple-level resource grouping, which can be customized in both timeline and vertical Scheduler views.

### Vertical resource view

The following code example shows how multiple resources are grouped and how their events are displayed in the default calendar views.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/resource-grouping-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/resource-grouping-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/resource-grouping-cs1" %}

### Timeline resource view

The following code example shows how to group multiple resources in Timeline Scheduler views and how their relevant events are displayed under those resources.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/resource-grouping-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/resource-grouping-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/resource-grouping-cs2" %}

### Grouping single-level resources

This kind of grouping allows the Scheduler to display all resources at a single level simultaneously. The appointments mapped under resources will be displayed with the colors defined by the [`colorField`](https://ej2.syncfusion.com/vue/documentation/api/schedule/resources#colorfield) in the resources collection.

**Example:** To display the Scheduler with single level resource grouping,

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/single-level-resource-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/single-level-resource-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/single-level-resource-cs1" %}

> The `name` field defined in the **resources** collection, such as `Owners`, will be mapped within the [`group`](https://ej2.syncfusion.com/vue/documentation/api/schedule#group) property to enable grouping for those resource levels in the Scheduler.

### Grouping multi-level resources

It is possible to group Scheduler resources at multiple levels by mapping child resources to each parent resource. In the following example, there are two levels of resources, and the second-level resources are defined with [`groupID`](https://ej2.syncfusion.com/vue/documentation/api/schedule/resources#groupidfield) mapping to the first-level resource's ID to establish the parent-child relationship between them.

To get started quickly with grouping multiple resources in Vue Scheduler, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=kBwxxhC8bB0" %}

**Example:** To display the Scheduler with multiple level resource grouping options,

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/resource-grouping-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/resource-grouping-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/resource-grouping-cs3" %}

### One-to-One grouping

In multi-level grouping, Scheduler usually groups child resources based on the [`groupID`](https://ej2.syncfusion.com/vue/documentation/api/schedule/resources#groupidfield) that maps to the `Id` field of parent-level resources, with [`byGroupID`](https://ej2.syncfusion.com/vue/documentation/api/schedule/group#bygroupid) set to `true` by default. There is also an option that allows you to group all child resources against each parent resource. To enable this kind of grouping, set [`byGroupID`](https://ej2.syncfusion.com/vue/documentation/api/schedule/group#bygroupid) to `false` within the [`group`](https://ej2.syncfusion.com/vue/documentation/api/schedule#group) property. In the following code example, there are two levels of resources, and all three child-level resources are mapped one to one with each resource on the first level.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/resource-grouping-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/resource-grouping-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/resource-grouping-cs4" %}

### Grouping resources by date

It groups resources under each date and is applicable only to calendar views such as Day, Week, Work Week, Month, Agenda, and Month Agenda. To enable this grouping, set the [`byDate`](https://ej2.syncfusion.com/vue/documentation/api/schedule/group#bydate) option to `true` within the [`group`](https://ej2.syncfusion.com/vue/documentation/api/schedule#group) property.

**Example:** To display the Scheduler with resources grouped by date,

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/single-level-resource-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/single-level-resource-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/single-level-resource-cs2" %}

> This type of grouping by date is not applicable to any timeline view.

## Customizing parent resource cells

In timeline views, work cells of a parent resource can be customized by checking the [`elementType`](https://ej2.syncfusion.com/vue/documentation/api/schedule/renderCellEventArgs#elementtype) as `resourceGroupCells` in the [`renderCell`](https://ej2.syncfusion.com/vue/documentation/api/schedule#rendercell) event. In the following code example, the background color of the work hours has been changed.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/resource-grouping-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/resource-grouping-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/resource-grouping-cs5" %}

## Working with shared events

Multiple resources can share the same events, allowing CRUD actions on one shared instance to reflect on all other shared instances simultaneously. To enable this option, set the [`allowGroupEdit`](https://ej2.syncfusion.com/vue/documentation/api/schedule/group#allowgroupedit) option to `true` within the [`group`](https://ej2.syncfusion.com/vue/documentation/api/schedule/group) property. With this property enabled, a single appointment object will be maintained within the appointment collection, even if it is shared by more than one resource. The resource fields of that appointment object will be stored in an array that contains the IDs of the multiple resources.

> Any actions such as create, edit, or delete performed on one shared event instance will be reflected on all other related instances visible in the UI.

**Example:** To edit all the resource events simultaneously,

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/resource-grouping-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/resource-grouping-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/resource-grouping-cs6" %}

## Simple resource header customization

It is possible to customize the resource header cells using the built-in template option and change their appearance in both vertical and timeline views. All resource-related fields and other information can be accessed within the resource header template option.

**Example:** To customize the resource header and display it along with the designation [`resource field`](https://ej2.syncfusion.com/vue/documentation/api/schedule/resources), refer to the code example below.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/resource-header-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/resource-header-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/resource-header-cs1" %}

> To customize the resource header in compact mode, use the `e-device` class as shown in the code example.

![Resource header template in compact mode](./images/header-template.png)

## Customizing resource header with multiple columns

It is possible to customize resource headers to display multiple columns such as Room, Type, and Capacity. The following code example shows how to achieve this, and it is applicable only to timeline views.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/resource-header-column-customization-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/resource-header-column-customization-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/resource-header-column-customization-cs1" %}

## Collapse/Expand child resources in timeline views

It is possible to expand and collapse resources that have child resources in timeline views dynamically. By default, resources are in the expanded state with their child resources. You can collapse and expand child resources in the UI by setting the [`expandedField`](https://ej2.syncfusion.com/vue/documentation/api/schedule/resources#expandedfield) option to `false`; its default value is `true`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/resource-grouping-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/resource-grouping-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/resource-grouping-cs8" %}

## Displaying tooltip for resource headers

It is possible to display tooltips over the resource headers showing resource information. By default, no tooltips are displayed on the resource headers, and to enable them, you need to assign the customized template design to the [`headerTooltipTemplate`](https://ej2.syncfusion.com/vue/documentation/api/schedule/group#headertooltiptemplate) option within the [`group`](https://ej2.syncfusion.com/vue/documentation/api/schedule/group) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/header-tooltip-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/header-tooltip-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/header-tooltip-cs1" %}

## Choosing among resource colors for appointments

By default, the colors defined in the top-level resources collection are applied to the events. If you want to apply a specific resource color to events regardless of the top-level parent resource color, define the [`resourceColorField`](https://ej2.syncfusion.com/vue/documentation/api/schedule/eventSettings#resourcecolorfield) option within the [`eventSettings`](https://ej2.syncfusion.com/vue/documentation/api/schedule/eventSettings) property.

In the following example, the colors mentioned in the second level will get applied over the events.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/resource-color-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/resource-color-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/resource-color-cs1" %}

> The value of the `resourceColorField` field should be mapped to the [`name`](https://ej2.syncfusion.com/vue/documentation/api/schedule/resources#name) value given within the [`resources`](https://ej2.syncfusion.com/vue/documentation/api/schedule/resources) property.

## Dynamically add and remove resources

It is possible to add or remove resources dynamically to and from the Scheduler. In the following example, when the checkboxes are checked and unchecked, the respective resources are added or removed from the Scheduler layout. To add a new resource dynamically, use the [`addResource`](https://ej2.syncfusion.com/vue/documentation/api/schedule#addresource) method, which accepts arguments such as the resource object, resource name (the level within which the resource object is added), and index (the position where the resource needs to be added).

To remove resources dynamically, use the [`removeResource`](https://ej2.syncfusion.com/vue/documentation/api/schedule#removeresource) method, which accepts the index (the position from where the resource is removed) and resource name (the level in which the resource object exists) as parameters.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/dynamic-resource-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/dynamic-resource-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/dynamic-resource-cs1" %}

## Setting different working days and hours for resources

Each resource in the Scheduler can have different working hours as well as different working days set to it. There are default options available within the `resources` collection, to customize the default working hours and days of the Scheduler.

* [Using the work day field for different work days](#set-different-work-days)
* [Using the start hour and end hour fields for different work hours](#set-different-work-hours)

### Set different work days

Different working days can be set for the resources of Scheduler using the [`workDaysField`](https://ej2.syncfusion.com/vue/documentation/api/schedule/resources#workdaysfield) property, which maps the working days field from the resource dataSource. This field accepts a collection of day indexes from 0 to 6. By default, it is set to [1, 2, 3, 4, 5], and in the following example, each resource is set with different values and therefore renders only those working days. This option is applicable only to calendar views and is not applicable to timeline views.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/multiple-resources-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/multiple-resources-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/multiple-resources-cs2" %}

### Set different work hours

Different working hours can be set for the resources of Scheduler using the [`startHourField`](https://ej2.syncfusion.com/vue/documentation/api/schedule/resources#starthourfield) and [`endHourField`](https://ej2.syncfusion.com/vue/documentation/api/schedule/resources#endhourfield) properties, which map the `startHourField` and `endHourField` fields from the resource dataSource.

* `startHourField` - Denotes the start time of the working/business hour in a day.
* `endHourField` - Denotes the end time limit of the working/business hour in a day.

Working hours indicate the work-hour duration of a day, which is highlighted visually with the active color over the work cells. Each resource in the Scheduler can be defined with its own set of working hours as shown in the following example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/multiple-resources-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/multiple-resources-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/multiple-resources-cs3" %}

In this example, a resource named `Will Smith` is depicted with working hours ranging from 8:00 AM to 3:00 PM and is visually highlighted, whereas the other two resources have different working hours set.

## Hide non-working days when grouped by date

In Scheduler, you can set custom work days for each resource and group the Scheduler by date to display those work days. By default, the Scheduler shows all days when it is grouped by date, even if they are not included in the custom work days for the resources. However, you can use the [`hideNonWorkingDays`](https://ej2.syncfusion.com/vue/documentation/api/schedule/group#hidenonworkingdays) property to display only the custom work days in the Scheduler.

To use the [`hideNonWorkingDays`](https://ej2.syncfusion.com/vue/documentation/api/schedule/group#hidenonworkingdays) property, you need to include it in the configuration options for your Scheduler component. Set the value of [`hideNonWorkingDays`](https://ej2.syncfusion.com/vue/documentation/api/schedule/group#hidenonworkingdays) to `true` to enable this feature.

**Example:** To display the Scheduler with resources grouped by date for custom working days,

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/single-level-resource-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/single-level-resource-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/single-level-resource-cs3" %}

> The [`hideNonWorkingDays`](https://ej2.syncfusion.com/vue/documentation/api/schedule/group#hidenonworkingdays) property only applies when the Scheduler is grouped [`byDate`](https://ej2.syncfusion.com/vue/documentation/api/schedule/group#bydate).

## Compact view in mobile

Although the Scheduler views are designed with mobile responsiveness in mind, when using Scheduler with multiple resources it is difficult to view all resources and their relevant events at once on mobile. Therefore, a new compact mode has been introduced for displaying multiple Scheduler resources on mobile devices. By default, this mode is enabled when using Scheduler with multiple resources on mobile devices. If you need to disable this compact mode, set [`enableCompactView`](https://ej2.syncfusion.com/vue/documentation/api/schedule/group#enablecompactview) to `false` within the [`group`](https://ej2.syncfusion.com/vue/documentation/api/schedule/group) property. Disabling this option displays the desktop mode of the Scheduler view on mobile devices.

With this compact view enabled on mobile, you can view only a single resource at a time. To switch to other resources, use the tree view on the left, which lists the other available resources. Clicking one of them displays that resource and its related appointments.

![Resources in compact mode](./images/resource-mobile.png)

Clicking the menu icon before the resource text shows the resources available in the Scheduler as follows.

![Resources menu option in compact mode](./images/resource-menu.png)

## Adaptive UI in desktop

By default, the Scheduler layout adapts automatically to desktop and mobile devices with appropriate UI changes. If you want to display the adaptive Scheduler in desktop mode with adaptive enhancements, set the [`enableAdaptiveUI`](https://ej2.syncfusion.com/vue/documentation/api/schedule#enableadaptiveui) property to `true`. Enabling this option displays the exact mobile mode of the Scheduler view on desktop devices.

Some of the default changes made for compact Scheduler rendering on desktop devices are as follows:
* View options displayed in the Navigation drawer.
* Plus icon is added to the header for new event creation.
* Today icon is added to the header instead of the Today button.
* With Multiple resources – only one resource has been shown to enhance the view experience of resource events details clearly. To switch to other resources, there is a TreeView on the left that lists all other available resources, clicking on which will display that particular resource and its related events.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/resource-grouping-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/resource-grouping-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/resource-grouping-cs7" %}

> For a complete overview of resource scheduling features, visit the [Vue Scheduler](https://www.syncfusion.com/vue-components/vue-scheduler) feature tour page. Explore live examples at [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/tailwind3/schedule/overview.html) to learn how to present and manipulate data.