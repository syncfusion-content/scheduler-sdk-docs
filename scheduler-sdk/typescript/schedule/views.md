---
layout: post
title: Views in TypeScript Scheduler | Syncfusion
description: Learn about the available views in the Syncfusion TypeScript Scheduler, including day, week, month, agenda, and timeline view modes.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Views in TypeScript Scheduler

The Scheduler includes a wide variety of view modes with unique configuration options for each view. The available view modes are Day, Week, Work Week, Month, Agenda, Month Agenda, Year, Timeline Day, Timeline Week, Timeline Work Week, Timeline Year, and Timeline Month. By default, the `Week` view is active.

To navigate between different views and dates, navigation options are available in the Scheduler header bar. The active view option is highlighted by default. The date range of the active view is displayed at the left corner of the header bar. Clicking the date range opens a calendar popup for easy date selection.

> By default, the Scheduler displays calendar views such as Day, Week, Work Week, Month, and Agenda.

## Setting specific view on scheduler

As the Scheduler displays the `Week` view by default, set the [`currentView`](https://ej2.syncfusion.com/documentation/api/schedule#currentview) property with the desired view name to change the active view. The view names accepted by the Scheduler are as follows:

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

Import and inject the appropriate view modules into the application to make use of these view modes on the Scheduler. It is also possible to display only the desired views on the Scheduler. To define and configure specific views, use the [`views`](../api/schedule/views) property.

In the following example, the Scheduler displays four views: Week, Month, TimelineWeek, and TimelineMonth. The appropriate view modules are imported and injected properly to display those views on the Scheduler.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/view-cs1" %}

To configure the Scheduler with two views but with different configurations on each view, refer to the following code example. Here, the Week view displays the dates in `dd-MM-yyyy` format, whereas the Month view hides the weekend days and displays in readonly mode.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs2/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs2/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/view-cs2" %}

## View specific configuration

There are scenarios where each view may need different configurations. For such cases, define the applicable scheduler properties within the [`views`](../api/schedule/views) Property for each view option as depicted in the following examples. The fields available to be used within each view option are as follows.

| Property | Type | Description | Applicable views |
|----------|------|-------------|------------------|
| [`option`](https://ej2.syncfusion.com/documentation/api/schedule/views#option) | View | It accepts the Scheduler view name, based on which related properties can be defined. The view names can be `Day`, `Week`, and so on. | All views. |
| [`isSelected`](https://ej2.syncfusion.com/documentation/api/schedule/views#isselected) | Boolean | Acts similar to the [`currentView`](https://ej2.syncfusion.com/documentation/api/schedule#currentview) property and defines the active view of the Scheduler.| All views. |
| [`dateFormat`](https://ej2.syncfusion.com/documentation/api/schedule#dateformat) | Date | By default, the Scheduler follows the date format as per the default culture assigned to it. When defined under a specific view, only those assigned views follow this date format. | All views. |
| [`readonly`](https://ej2.syncfusion.com/documentation/api/schedule/views#readonly) | Boolean | When set to `true`, prevents the CRUD actions on the respective view where it is defined. | All views. |
| [`resourceHeaderTemplate`](https://ej2.syncfusion.com/documentation/api/schedule/views#resourceheadertemplate) | String | The template option used to customize the resource header cells on the Scheduler. Applied only to the views where it is defined. | All views. |
| [`dateHeaderTemplate`](https://ej2.syncfusion.com/documentation/api/schedule/views#dateheadertemplate) | String | The template option used to customize the date header cells and is applied only to the views where it is defined. | All views. |
| [`eventTemplate`](https://ej2.syncfusion.com/documentation/api/schedule/views#eventtemplate) | String | The template option to customize the events content and appearance. It will get applied to the events of the view where it is currently being defined. | All views. |
| [`showWeekend`](https://ej2.syncfusion.com/documentation/api/schedule/views#showweekend) | Boolean | When set to `false`, it hides the weekend days of a week from the views on which it is defined.| All views. |
| [`group`](https://ej2.syncfusion.com/documentation/api/schedule/views#group) | [GroupModel](../api/schedule/groupModel) | Allows setting different resource grouping options on all available Scheduler view modes. | All views. |
| [`cellTemplate`](https://ej2.syncfusion.com/documentation/api/schedule/views#celltemplate) | String | The template option to customize the work cells of the Scheduler. Applied only on the views, where it is defined. | Applicable on all views except Agenda view. |
| [`workDays`](https://ej2.syncfusion.com/documentation/api/schedule/views#workdays) | Number[] | Used to set the working days on the Scheduler views. | Applicable on all views except Agenda view. |
| [`displayName`](https://ej2.syncfusion.com/documentation/api/schedule/views#displayname) | String | When a particular view is customized to display with different intervals, this property allows setting a different display name for each of the views. | Applicable on all views except Agenda and Month Agenda. |
| [`interval`](https://ej2.syncfusion.com/documentation/api/schedule/views#interval) | Number | It allows to customize the default Scheduler views with different set of days, weeks, work weeks or months on the applicable view type. | Applicable on all views except Agenda and Month Agenda. |
| [`startHour`](https://ej2.syncfusion.com/documentation/api/schedule/views#starthour) | String | It is used to specify the start hour, from which the Scheduler should be displayed. It accepts the time string in a short skeleton format and also, hides the time beyond the specified start time. | Applicable on Day, Week, Work Week, Timeline Day, Timeline Week and Timeline Work Week views. |
| [`endHour`](https://ej2.syncfusion.com/documentation/api/schedule/views#endhour) | String | It is used to specify the end hour, at which the Scheduler ends. It accepts the time string in a short skeleton format. | Applicable on Day, Week, Work Week, Timeline Day, Timeline Week, and Timeline Work Week views. |
| [`timeScale`](https://ej2.syncfusion.com/documentation/api/schedule/views#timescale) | [TimeScaleModel](../api/schedule/timeScaleModel) | Allows setting different timescale configuration on each applicable view modes. | Applicable on Day, Week, Work Week, Timeline Day, Timeline Week, and Timeline Work Week views. |
| [`showWeekNumber`](https://ej2.syncfusion.com/documentation/api/schedule/views#showweeknumber) | Boolean | When set to `true`, shows the week number on the respective weeks.| Applicable on Day, Week, Work Week, and Month views. |
| [`allowVirtualScrolling`](https://ej2.syncfusion.com/documentation/api/schedule/views#allowvirtualscrolling) | Boolean | It is used to enable or disable the virtual scrolling functionality. | Applicable on Agenda and Timeline views. |
| [`headerRows`](https://ej2.syncfusion.com/documentation/api/schedule/views#headerrows) | [HeaderRowsModel](../api/schedule/headerRowsModel) | Allows defining the custom header rows on timeline views of the Scheduler to display the year, month, week, date and hour label as an individual row. | Applicable only on all timeline views. |

### Day view

The Day view displays a single day with all its related appointments. It is possible to customize the day view to display more number of days by extending the [`views`](https://ej2.syncfusion.com/documentation/api/schedule/views) property with [`interval`](https://ej2.syncfusion.com/documentation/api/schedule/views#interval) option. You can also define any of the above defined properties within the [`views`](https://ej2.syncfusion.com/documentation/api/schedule/views) object definition as depicted in the following code example.  

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs3/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs3/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/view-cs3" %}

> All the above defined properties can be accessed within Day view except [`allowVirtualScrolling`](https://ej2.syncfusion.com/documentation/api/schedule/views#allowvirtualscrolling) and [`headerRows`](https://ej2.syncfusion.com/documentation/api/schedule/views#headerrows).

### Week view

The Week view displays a count of seven days (from Sunday to Saturday) with all its related appointments. The first day of the week can be changed using the [`firstDayOfWeek`](https://ej2.syncfusion.com/documentation/api/schedule/views#firstdayofweek) which accepts the integer values(Sunday=0, Monday=1, Tuesday=2 and so on) value. Navigate to a particular date in the day view from the week view by clicking on the appropriate dates on the date header bar.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs4/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs4/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/view-cs4" %}

> All the properties defined in the table can be accessed within Week and Work week views except [`allowVirtualScrolling`](https://ej2.syncfusion.com/documentation/api/schedule/views#allowvirtualscrolling) and [`headerRows`](https://ej2.syncfusion.com/documentation/api/schedule/views#headerrows).

### Work Week view

The Work week view displays only the working days of a week (count of 5 days) and its associated appointments. It is possible to customize the working days on the work week view by using the [`workDays`](https://ej2.syncfusion.com/documentation/api/schedule/views#workdays) property which accepts an array of integer values (such as Sunday=0, Monday=1, Tuesday=2 and so on). By default, it displays from Monday to Friday (5 days). You can also navigate to a particular date in the day view from the work week view by clicking on the appropriate dates in the date header bar.

The following code example depicts how to change the working days only on the `Work Week` view of the Scheduler.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs5/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs5/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/view-cs5" %}

> The Week, Work week and Day views can display the all-day row appointments in a separate all-day row with an expand/collapse option to view it.

### Month view

The Month view displays the entire days of a particular month and all its related appointments. Navigate to a particular date in the day view by clicking on the appropriate date text on the month cells.

By default, when creating an appointment through the Month view, it is considered as created for an entire day. Explicitly change this behavior by unchecking the `All-day` option from editor window, which defaults to the start time duration as 9.00 AM and end time as 9.30 AM.

The `+ more` text indicator appears on each day cell of a Month view. Clicking on it allows you to view the hidden appointments for that day.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs6/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs6/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/view-cs6" %}

### Year view

The Year view displays all the days of a particular year with months and all its related appointments. You can navigate to a particular date in the day view by clicking on the appropriate date text on the year cells.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs7/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs7/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/view-cs7" %}

> The Year view also has module support. It displays all the months of a particular year in a calendar view format. In that calendar view, dates that contain appointments are highlighted with dots placed under the individual date. Clicking on a date displays the event popup and lists the events.

### Agenda view

The Agenda view lists appointments in a grid-like layout for the next 7 days by default from the current date. The number of days can be changed using the API [`agendaDaysCount`](https://ej2.syncfusion.com/documentation/api/schedule#agendadayscount). It supports virtual scrolling of dates by enabling the [`allowVirtualScrolling`](https://ej2.syncfusion.com/documentation/api/schedule/views#allowvirtualscrolling) property. Also, you can enable or disable the display of days on the Scheduler that have no appointments by setting the [`hideEmptyAgendaDays`](https://ej2.syncfusion.com/documentation/api/schedule#hideemptyagendadays) property to `true` or `false`.

The following code example depicts how to customize the display of events within the Agenda view alone.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs8/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs8/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/view-cs8" %}

> Setting the Scheduler height in pixels is mandatory for the Agenda view.

### Month Agenda view

A Month-Agenda view shows a month calendar, where clicking on a particular day will display the appointments present on that date below the calendar. The day with appointments are differentiated with a circular dot below the date of the calendar.

The following code example shows how to hide the weekend days in the `MonthAgenda` view and modify the working days list for the Month Agenda view alone.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs9/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs9/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/view-cs9" %}

### Timeline views – Day, Week, Work Week

Similar to the Day view, the Timeline Day view shows a single day with all its appointments, where the time slots are displayed horizontally. By default, the cell height adjusts according to the height set for the Scheduler. When the number of appointments exceeds the visible area of the cells, the `+ more` text indicator is displayed at the bottom to denote the presence of a few more appointments in that time range.

To make use of the timeline views (Timeline Day, Timeline Week and Timeline Work Week) on Scheduler, import and inject the module `TimelineViews` from the `ej2-schedule` package.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs10/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs10/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/view-cs10" %}

Similar to the Week view, the timeline week view shows 7 days with its associated appointments with the time slots displayed horizontally.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs11/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs11/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/view-cs11" %}

The following code example depicts how to display the Timeline Work Week view on the Scheduler.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs12/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs12/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/view-cs12" %}

> Clicking the dates in the date header bar of the Timeline Day, Timeline Week, and Timeline Work Week views navigates to the Agenda view.

### Timeline Month view

A Timeline Month view displays the current month's days along with its appointments. To make use of the Timeline Month view on the Scheduler, import and inject the `TimelineMonth` module from the `ej2-schedule` package.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs13/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs13/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/view-cs13" %}

> Clicking the dates in the date header bar of Timeline Month navigates to the Timeline Day view.

### Timeline Year view

In Timeline Year view, each row depicts a single resource. In the vertical view, each resource is grouped in parallel as columns. Here, the resource grouping follows a tree-view-like hierarchical structure and can contain any level of child resources.

To make use of the timeline Year view on Scheduler, import and inject `TimelineYear` module from the `ej2-schedule` package.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs14/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs14/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/view-cs14" %}

Timeline Year view is available in both the `Horizontal` and `Vertical` orientations. You can manage the orientation of the Timeline Year view through the `views` property.

#### Resource grouping

The following code example depicts how to group multiple resources in the Timeline Year view and display the relevant events under those resources.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs15/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs15/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/view-cs15" %}

#### Auto row height

Timeline Year view supports auto row height. When the [`rowAutoHeight`](https://ej2.syncfusion.com/documentation/api/schedule#rowautoheight) feature is enabled, the row height is automatically adjusted based on the number of overlapping events in the same time range. If auto row height is disabled, the `+ more` text indicator appears on each day cell of the Timeline Year view. Clicking on it allows you to view the hidden appointments for that day.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs16/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs16/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/view-cs16" %}

## Extending view intervals

Customize the display of the default number of days on different Scheduler view modes. For example, extend the Day view to display 3 days by setting the `interval` option to 3 for the `Day` option within the `views` property as shown in the following code example. In the same way, you can also display 2 weeks by setting `interval` to 2 for the `Week` option.

Provide an alternative display name for such customized views on the Scheduler header bar by setting the appropriate [`displayName`](https://ej2.syncfusion.com/documentation/api/schedule/views#displayname) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs17/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs17/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs17/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/view-cs17" %}

> The view intervals can be extended on all the Scheduler view modes except Agenda and Month-Agenda views.

The [`isSelected`](https://ej2.syncfusion.com/documentation/api/schedule/views#isselected) property can be used to set the current view of the Scheduler. The following code sample demonstrates how to use the [`isSelected`](https://ej2.syncfusion.com/documentation/api/schedule/views#isselected) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs18/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs18/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/view-cs18/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/view-cs18" %}

> Refer to the [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour page for an overview of the available features. You can also explore our [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/tailwind3/schedule/overview.html) to learn how to present and manipulate data.

## See Also

* [How to restrict view navigation while clicking on dates](./how-to/prevent-date-navigation)
