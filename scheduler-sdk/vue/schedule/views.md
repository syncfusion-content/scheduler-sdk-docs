---
layout: post
title: Views in Vue Scheduler | Syncfusion
description: Learn about the available views in the Syncfusion Vue Scheduler, including day, week, month, agenda, and timeline view modes and customizations.
control: Scheduler
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Views in Vue Scheduler

The Scheduler includes a wide variety of view modes with unique configuration options for each view. The available view modes are Day, Week, Work Week, Month, Year, Agenda, Month Agenda, Timeline Day, Timeline Week, Timeline Work Week, Timeline Month, and Timeline Year. By default, the `Week` view is active.

To navigate between different views and dates, the navigation options are available in the Scheduler header bar. The active view option is usually highlighted by default. The date range of the active view is also displayed in the left corner of the header bar; clicking it opens a calendar popup for easier date selection.

> By default, the Scheduler displays the standard calendar views such as **Day**, **Week**, **Work Week**, **Month**, and **Agenda**.

## Setting Specific View on Scheduler

As the Scheduler displays the `Week` view by default, set the [`currentView`](https://ej2.syncfusion.com/vue/documentation/api/schedule#currentview) property to change the active view. The Scheduler accepts the following view names:

* Day
* Week
* WorkWeek
* Month
* Year
* Agenda
* MonthAgenda
* TimelineDay
* TimelineWeek
* TimelineWorkWeek
* TimelineMonth
* TimelineYear

It is necessary to import and inject the appropriate view modules into the application to use these view modes in the Scheduler. It is also possible to display only the desired views. To define and configure specific views, use the [`views`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views) property.

In the following example, the Scheduler displays four views: Week, Month, TimelineWeek, and TimelineMonth. The appropriate view modules are imported and injected to display those views in the Scheduler.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/view-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/view-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/view-cs2" %}

To configure the Scheduler with only two views, but with different configurations for each view, refer to the following code example. Here, the Week view displays the dates in `dd-MM-yyyy` format, whereas the Month view hides weekend days and displays it in read-only mode.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/view-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/view-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/view-cs3" %}

## View Specific Configuration

There are scenarios where each view may need different configurations. For such cases, you can define the applicable Scheduler properties within the `views` property for each view option as shown in the following examples. The fields available for each view option are as follows.

| Property       | Type      | Description | Applicable views |
|----------------|-----------|-------------|------------------|
| [`option`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#option) | View | Accepts the Scheduler view name, based on which related properties can be defined. The view names can be `Day`, `Week`, and so on. | All views |
| [`isSelected`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#isselected) | Boolean | Acts similar to the `currentView` property and defines the active view of the Scheduler. | All views |
| [`dateFormat`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#dateformat) | Date | By default, Scheduler follows the date format based on the assigned culture. When it is defined for a specific view, only those assigned views follow this date format. | All views |
| [`readonly`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#readonly) | Boolean | When set to `true`, prevents CRUD actions on the respective view where it is defined. | All views |
| [`resourceHeaderTemplate`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#resourceheadertemplate) | String | The template option used to customize the resource header cells on the Scheduler. It is applied only to the views where it is defined. | All views |
| [`dateHeaderTemplate`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#dayheadertemplate) | String | The template option used to customize the date header cells. It is applied only to the views where it is defined. | All views |
| [`eventTemplate`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#eventtemplate) | String | The template option used to customize the event appearance. It is applied to the events of the view where it is defined. | All views |
| [`showWeekend`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#showweekend) | Boolean | When set to `false`, it hides weekend days from the views where it is defined. | All views |
| [`group`](https://ej2.syncfusion.com/vue/documentation/api/schedule/group) | [GroupModel](https://ej2.syncfusion.com/vue/documentation/api/schedule/groupModel) | Allows different resource grouping options on all available Scheduler view modes. | All views |
| [`cellTemplate`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#celltemplate) | String | The template option used to customize the work cells of the Scheduler. It is applied only to the views where it is defined. | Applicable on all views except Agenda view |
| [`workDays`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#workdays) | Number[] | Used to set the working days on the Scheduler views. | Applicable on all views except Agenda view |
| [`displayName`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#displayname) | String | When a particular view is customized to display different intervals, this property allows you to set a different display name for each view. | Applicable on all views except Agenda and Month Agenda |
| [`interval`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#interval) | Number | Allows you to customize the default Scheduler views with a different set of days, weeks, work weeks, or months on the applicable view type. | Applicable on all views except Agenda and Month Agenda |
| [`startHour`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#starthour) | String | Used to specify the start hour from which the Scheduler should be displayed. It accepts a time string in a short skeleton format and also hides the time beyond the specified start time. | Applicable on Day, Week, Work Week, Timeline Day, Timeline Week, and Timeline Work Week views |
| [`endHour`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#endhour) | String | Used to specify the end hour at which the Scheduler ends. It accepts a time string in a short skeleton format. | Applicable on Day, Week, Work Week, Timeline Day, Timeline Week, and Timeline Work Week views |
| [`timeScale`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#timescale) | [TimeScaleModel](https://ej2.syncfusion.com/vue/documentation/api/schedule/timeScaleModel) | Allows you to set a different timescale configuration for each applicable view mode. | Applicable on Day, Week, Work Week, Timeline Day, Timeline Week, and Timeline Work Week views |
| [`showWeekNumber`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#showweeknumber) | Boolean | When set to `true`, shows the week number on the respective weeks. | Applicable on Day, Week, Work Week, and Month views |
| [`allowVirtualScrolling`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#allowvirtualscrolling) | Boolean | Used to enable or disable the virtual scrolling functionality. | Applicable on Agenda and Timeline views |
| [`headerRows`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#headerrows) | [HeaderRowsModel](https://ej2.syncfusion.com/vue/documentation/api/schedule/headerRowsModel) | Allows defining custom header rows on timeline views of the Scheduler to display year, month, week, date, and hour labels as individual rows. | Applicable only on timeline views |

### Day view

Usually a Day view displays a single day with all its related appointments. It is possible to customize the Day view to display more days by extending the [`views`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views) property with the [`interval`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#interval) option. You can also define any of the properties above within the `views` object definition, as shown in the following code example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/view-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/view-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/view-cs4" %}

> All the properties defined above can be accessed within Day view except [`allowVirtualScrolling`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#allowvirtualscrolling) and [`headerRows`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#headerrows).

### Week view

The Week view displays seven days (from Sunday to Saturday) with all its related appointments. The first day of the week can be changed using the [`firstDayOfWeek`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#firstdayofweek) property, which accepts an integer value (Sunday=0, Monday=1, Tuesday=2, and so on). You can navigate to a particular date in Day view from the Week view by clicking the appropriate dates in the date header bar.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/view-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/view-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/view-cs5" %}

> All the properties defined in the table can be accessed within Week and Work Week views except [`allowVirtualScrolling`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#allowvirtualscrolling) and [`headerRows`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#headerrows).

### Work Week view

The Work Week view displays only the working days of a week (five days) and its associated appointments. It is possible to customize the working days in the Work Week view by using the [`workDays`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#workdays) property, which accepts an array of integer values (such as Sunday=0, Monday=1, Tuesday=2, and so on). By default, it displays Monday through Friday (five days). You can also navigate to a particular date in Day view from the Work Week view by clicking the appropriate dates in the date header bar.

The following code example depicts how to change the working days only on the `Work Week` view of the Scheduler.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/view-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/view-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/view-cs6" %}

> The Week, Work Week, and Day views can display all-day row appointments in a separate all-day row with an expand/collapse option.

### Month view

A Month view displays all the days of a particular month and their related appointments. You can navigate to a particular date in Day view by clicking the appropriate date text in the month cells.

By default, when you try to create an appointment through Month view, it is treated as an all-day appointment. You can explicitly change this behavior by unchecking the `All-day` option in the editor window, so that it defaults to a start time of 9:00 AM and an end time of 9:30 AM.

You can also have the `+ more` text indicator on each day cell of a Month view, clicking which allows you to view the hidden appointments for that day.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/view-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/view-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/view-cs7" %}

### Year view

A Year view displays all the days of a particular year with months and their related appointments. You can navigate to a particular date in Day view by clicking the appropriate date text in the year cells.

Year view is available in both the `Horizontal` and `Vertical` orientations. You can manage the orientation of Year view through the [`orientation`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#orientation) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/view-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/view-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/view-cs8" %}

> Year view also has module support. In this view, you can display all the months of a particular year in a calendar format. Dates with appointments are highlighted with dots below the individual date. When you click a date, the event popup is displayed and the events are listed.

### Agenda view

The Agenda view lists appointments in a grid-like view for the next seven days by default from the current date. The count of days can be changed using the API [`agendaDaysCount`](https://ej2.syncfusion.com/vue/documentation/api/schedule#agendadayscount). It allows virtual scrolling of dates by enabling the [`allowVirtualScrolling`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#allowvirtualscrolling) property. You can also enable or disable the display of days on the Scheduler that have no appointments by setting [`hideEmptyAgendaDays`](https://ej2.syncfusion.com/vue/documentation/api/schedule#hideemptyagendadays) to `true` or `false`.

The following code example depicts how to customize the display of events within Agenda view alone.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/view-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/view-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/view-cs9" %}

### Month Agenda view

A Month Agenda view shows a month calendar, where clicking a particular day displays the appointments present on that date below the calendar. Days with appointments are differentiated with a circular dot below the date.

The following code example shows how to hide weekend days in `MonthAgenda` view and modify the working days list only for Month Agenda view.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/view-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/view-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/view-cs10" %}

### Timeline views – Day, Week, Work Week

Similar to the Day view, Timeline Day view shows a single day with all its appointments, with time slots displayed horizontally. By default, the cell height adjusts according to the height set for the Scheduler. When the number of appointments exceeds the visible area of the cells, the `+ more` text indicator is displayed at the bottom to denote additional appointments in that time range.

To use the timeline views (Timeline Day, Timeline Week, and Timeline Work Week) in the Scheduler, import and inject the `TimelineViews` module from the `ej2-vue-schedule` package.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/view-cs11/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/view-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/view-cs11" %}

Similar to the Week view, Timeline Week view shows seven days with its associated appointments, with the time slots displayed horizontally.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/view-cs12/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/view-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/view-cs12" %}

The following code example shows how to display Timeline Work Week view in the Scheduler.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/view-cs13/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/view-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/view-cs13" %}

> Clicking the dates in the date header bar of Timeline Day, Timeline Week, and Timeline Work Week allows you to navigate to the Agenda view.

### Timeline Month view

A Timeline Month view displays the days of the current month along with their appointments. To use the Timeline Month view in the Scheduler, import and inject the `TimelineMonth` module from the `ej2-vue-schedule` package.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/view-cs14/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/view-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/view-cs14" %}

> Clicking the dates in the date header bar of Timeline Month allows you to navigate to Timeline Day view.

### Timeline Year view

In Timeline Year view, each row depicts a single resource. Whereas in the vertical view, each resource is grouped as columns. Here, the resource grouping follows a tree-view-like hierarchical structure and can contain any level of child resources.

To use Timeline Year view in the Scheduler, import and inject the `TimelineYear` module from the `ej2-vue-schedule` package.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/view-cs15/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/view-cs15/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/view-cs15" %}

#### Resource grouping

The following code example shows how to group multiple resources in Timeline Year view and display their relevant events under those resources.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div>
    <div id='app'>
      <div id='container'>
        <ejs-schedule id='Schedule' width='100%' height='550px' :eventSettings='eventSettings'
          :selectedDate='selectedDate' :currentView='currentView' :group='group'>
          <e-views>
            <e-view option='TimelineYear' displayName='Horizontal Timeline Year' isSelected=true></e-view>
            <e-view option='TimelineYear' displayName='Vertical Timeline Year' orientation='Vertical'></e-view>
          </e-views>
          <e-resources>
            <e-resource field='OwnerId' title='Owner' name='Owners' :allowMultiple='allowMultiple'
              :dataSource='resourceDataSource' textField='OwnerText' idField='Id' colorField='OwnerColor'>
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
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, ResourcesDirective as EResources, ResourceDirective as EResource, TimelineYear } from '@syncfusion/ej2-vue-schedule';

const width = '100%';
const height = '550px';
const currentView = 'Week';
const views = ['TimelineYear'];
const selectedDate = new Date(2018, 3, 1);
const allowMultiple = true;
const resourceDataSource = [
  { OwnerText: 'Nancy', Id: 1, OwnerColor: '#ffaa00' },
  { OwnerText: 'Steven', Id: 2, OwnerColor: '#f8a398' },
  { OwnerText: 'Michael', Id: 3, OwnerColor: '#7499e1' }
];
const eventSettings = { dataSource: resourceData };
const group = { resources: ['Owners'] };

provide('schedule', [TimelineYear]);

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
          :selectedDate='selectedDate' :currentView='currentView' :group='group'>
          <e-views>
            <e-view option='TimelineYear' displayName='Horizontal Timeline Year' isSelected=true></e-view>
            <e-view option='TimelineYear' displayName='Vertical Timeline Year' orientation='Vertical'></e-view>
          </e-views>
          <e-resources>
            <e-resource field='OwnerId' title='Owner' name='Owners' :allowMultiple='allowMultiple'
              :dataSource='resourceDataSource' textField='OwnerText' idField='Id' colorField='OwnerColor'>
            </e-resource>
          </e-resources>
        </ejs-schedule>
      </div>
    </div>
  </div>
</template>

<script>
import { resourceData } from './datasource.js';
import { ScheduleComponent, ViewDirective, ViewsDirective, ResourcesDirective, ResourceDirective, TimelineYear } from '@syncfusion/ej2-vue-schedule';

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
      views: ['TimelineYear'],
      selectedDate: new Date(2018, 3, 1),
      allowMultiple: true,
      resourceDataSource: [
        { OwnerText: 'Nancy', Id: 1, OwnerColor: '#ffaa00' },
        { OwnerText: 'Steven', Id: 2, OwnerColor: '#f8a398' },
        { OwnerText: 'Michael', Id: 3, OwnerColor: '#7499e1' }
      ],
      eventSettings: { dataSource: resourceData },
      group: {
        resources: ['Owners']
      },
    }
  },
  provide: {
    schedule: [TimelineYear]
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

#### Auto row height

Timeline Year view supports auto row height. When the [`rowAutoHeight`](https://ej2.syncfusion.com/vue/documentation/api/schedule#rowautoheight) feature is enabled, the row height is adjusted automatically based on the number of overlapping events in the same time range. If you disable auto row height, the `+ more` text indicator appears on each day cell of Timeline Year view, and clicking it allows you to view the hidden appointments for that day.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/view-cs16/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/view-cs16/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/view-cs16" %}

## Extending view intervals

It is possible to customize the display of the default number of days in different Scheduler view modes. For example, a Day view can be extended to display three days by setting the [`interval`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#interval) option to 3 for the `Day` option within the [`views`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views) property, as shown in the following code example. In the same way, you can also display two weeks by setting `interval` to 2 for the `Week` option.

You can provide an alternative display name for such customized views in the Scheduler header bar by setting the appropriate [`displayName`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#displayname) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/view-cs17/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/view-cs17/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/view-cs17" %}

> View intervals can be extended for all Scheduler view modes except Agenda and Month Agenda views.

## See Also

* [How to restrict view navigation while clicking dates](./how-to/prevent-date-navigation)

> For a complete overview of Scheduler features, visit the [Vue Scheduler](https://www.syncfusion.com/vue-components/vue-scheduler) feature tour page. Explore live examples at [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/tailwind3/schedule/overview.html) to learn how to present and manipulate data.