---
layout: post
title: Views in JavaScript Scheduler | Syncfusion
description: Learn about the available views in the Syncfusion JavaScript Scheduler, including day, week, month, agenda, and timeline view modes.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Views in JavaScript Scheduler

The Scheduler provides several view modes, each with its own configuration options. Available modes include Day, Week, Work Week, Month, Agenda, Month Agenda, Year, Timeline Day, Timeline Week, Timeline Work Week, Timeline Year, and Timeline Month. The default active view is `Week`.

Use the header bar to switch views and navigate dates. The active view is highlighted and the current date range appears at the left of the header; clicking the date range opens a calendar popup for quick selection.

By default, the Scheduler shows the standard calendar views: Day, Week, Work Week, Month, and Agenda.

## Setting specific view on scheduler

The Scheduler uses the `Week` view by default. To change the active view, set the [`currentView`](https://ej2.syncfusion.com/documentation/api/schedule#currentview) property to the desired view name. The accepted view names are:

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

Import and inject the required view modules to enable specific view modes. To limit which views appear, configure the [`views`](../api/schedule/views) property.

The example below shows the Scheduler configured with four views: Week, Month, TimelineWeek, and TimelineMonth. The necessary view modules are imported and injected.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs1" %}
{% endif %}

To configure the Scheduler with two views but with different configurations on each view, refer to the following code example. Here, the Week view displays the dates in `dd-MM-yyyy` format, whereas the Month view hides the weekend days and displays in readonly mode.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs2/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs2/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs2/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs2/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs2" %}
{% endif %}

## View specific configuration

Some scenarios require different configurations per view. Define view-specific Scheduler properties using the [`views`](../api/schedule/views) property. The available fields are:

| Property | Type | Description | Applicable views |
|----------|------|-------------|------------------|
| [`option`](https://ej2.syncfusion.com/documentation/api/schedule/views#option)| View | The Scheduler view name used to apply related properties (for example, `Day` or `Week`). | All views.|
| [`isSelected`](https://ej2.syncfusion.com/documentation/api/schedule/views#isselected) | Boolean | Similar to [`currentView`](https://ej2.syncfusion.com/documentation/api/schedule#currentview); defines the active view. | All views. |
| [`dateFormat`](https://ej2.syncfusion.com/documentation/api/schedule#dateformat) | Date | By default, the Scheduler follows the date format as per the default culture assigned to it. When defined under a specific view, only those assigned views follow this date format. | All views. |
| [`readonly`](https://ej2.syncfusion.com/documentation/api/schedule/views#readonly) | Boolean | When set to `true`, prevents the CRUD actions on the respective view where it is defined. | All views. |
| [`resourceHeaderTemplate`](https://ej2.syncfusion.com/documentation/api/schedule/views#resourceheadertemplate) | String | The template option used to customize the resource header cells on the Scheduler. Applied only on the views, where it is defined.| All views. |
| [`dateHeaderTemplate`](https://ej2.syncfusion.com/documentation/api/schedule/views#dateheadertemplate) | String | The template option which is used to customize the date header cells and is applied only on the views, wherever it is defined. | All views. |
| [`eventTemplate`](https://ej2.syncfusion.com/documentation/api/schedule/views#eventtemplate) | String | The template option to customize the events content and appearance. It will get applied to the events of the view where it is currently being defined. | All views. |
| [`showWeekend`](https://ej2.syncfusion.com/documentation/api/schedule/views#showweekend) | Boolean | When set to `false`, it hides the weekend days of a week from the views on which it is defined.| All views. |
| [`group`](https://ej2.syncfusion.com/documentation/api/schedule/views#group) | [GroupModel](../api/schedule/groupModel) | Allows setting different resource grouping options on all available Scheduler view modes. | All views. |
| [`cellTemplate`](https://ej2.syncfusion.com/documentation/api/schedule/views#celltemplate) | String | The template option to customize the work cells of the Scheduler. Applied only on the views, where it is defined. | Applicable on all views except Agenda view. |
| [`workDays`](https://ej2.syncfusion.com/documentation/api/schedule/views#workdays) | Number[] | Used to set the working days on the Scheduler views. | Applicable on all views except Agenda view. |
| [`displayName`](https://ej2.syncfusion.com/documentation/api/schedule/views#displayname) | String | Sets an alternative display name for a customized view. | Applicable on all views except Agenda and Month Agenda. |
| [`interval`](https://ej2.syncfusion.com/documentation/api/schedule/views#interval) | Number | It allows to customize the default Scheduler views with different set of days, weeks, work weeks or months on the applicable view type. | Applicable on all views except Agenda and Month Agenda. |
| [`startHour`](https://ej2.syncfusion.com/documentation/api/schedule/views#starthour) | String | Specifies the start hour to display. Accepts a short time-skeleton string and hides time earlier than this value. | Applicable on Day, Week, Work Week, Timeline Day, Timeline Week, and Timeline Work Week views. |
| [`endHour`](https://ej2.syncfusion.com/documentation/api/schedule/views#endhour) | String | It is used to specify the end hour, at which the Scheduler ends. It accepts the time string in a short skeleton format. | Applicable on Day, Week, Work Week, Timeline Day, Timeline Week, and Timeline Work Week views. |
| [`timeScale`](https://ej2.syncfusion.com/documentation/api/schedule/views#timescale) | [TimeScaleModel](../api/schedule/timeScaleModel) | Configures the timescale for applicable views. | Applicable on Day, Week, Work Week, Timeline Day, Timeline Week, and Timeline Work Week views. |
| [`showWeekNumber`](https://ej2.syncfusion.com/documentation/api/schedule/views#showweeknumber) | Boolean | When set to `true`, shows the week number on the respective weeks.| Applicable on Day, Week, Work Week, and Month views. |
| [`allowVirtualScrolling`](https://ej2.syncfusion.com/documentation/api/schedule/views#allowvirtualscrolling) | Boolean | It is used to enable or disable the virtual scrolling functionality. | Applicable on Agenda and Timeline views. |
| [`headerRows`](https://ej2.syncfusion.com/documentation/api/schedule/views#headerrows) | [HeaderRowsModel](../api/schedule/headerRowsModel) | Defines custom header rows on timeline views to display year, month, week, date, or hour labels on separate rows. | Applicable only on timeline views. |

### Day view

The Day view shows a single day and its appointments. To display multiple consecutive days, set the `interval` option within the [`views`](https://ej2.syncfusion.com/documentation/api/schedule/views) property. View-specific fields from the table above can be defined in the same `views` object.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs3/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs3/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs3/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs3/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs3" %}
{% endif %}

All the table properties apply to Day view except [`allowVirtualScrolling`](https://ej2.syncfusion.com/documentation/api/schedule/views#allowvirtualscrolling) and [`headerRows`](https://ej2.syncfusion.com/documentation/api/schedule/views#headerrows).

### Week view

The Week view shows seven days (Sunday through Saturday) and their appointments. Use [`firstDayOfWeek`](https://ej2.syncfusion.com/documentation/api/schedule/views#firstdayofweek) to change the week's starting day (Sunday=0, Monday=1, etc.). Click dates in the header to navigate to that date in Day view.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs4/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs4/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs4/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs4/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs4" %}
{% endif %}

All table properties apply to Week and Work Week views except [`allowVirtualScrolling`](https://ej2.syncfusion.com/documentation/api/schedule/views#allowvirtualscrolling) and [`headerRows`](https://ej2.syncfusion.com/documentation/api/schedule/views#headerrows).

### Work Week view

The Work Week view displays only the configured working days (commonly five days) and their appointments. Use [`workDays`](https://ej2.syncfusion.com/documentation/api/schedule/views#workdays) to set the working days as an array of integers (Sunday=0, Monday=1, etc.). By default, Work Week shows Monday–Friday. Click a date in the header to open it in Day view.

The following code example depicts how to change the working days only on the `Work Week` view of the Scheduler.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs5/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs5/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs5/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs5/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs5" %}
{% endif %}

Week, Work Week, and Day views can show all-day appointments in a separate row with an expand/collapse control.

### Month view

The Month view displays the entire days of a particular month and all its related appointments. Navigate to a particular date in the day view by clicking on the appropriate date text on the month cells.

By default, creating an appointment in Month view sets it as an all-day event. Clear the `All-day` option in the editor to set explicit start/end times (default editor times are 9:00 AM to 9:30 AM).

The `+ more` indicator appears when a day cell contains additional hidden events; click it to view them.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs6/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs6/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs6/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs6/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs6" %}
{% endif %}

### Year view

The Year view displays all the days of a particular year with months and all its related appointments. You can navigate to a particular date in the day view by clicking on the appropriate date text on the year cells.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs7/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs7/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs7/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs7/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs7" %}
{% endif %}

The Year view displays all months of a year. Dates that contain appointments are highlighted with dots; clicking a date opens the event popup listing those appointments.

### Agenda view

The Agenda view lists appointments in a compact, date-based list (7 days by default). Change the visible range with [`agendaDaysCount`](https://ej2.syncfusion.com/documentation/api/schedule#agendadayscount). Enable virtual scrolling of dates via [`allowVirtualScrolling`](https://ej2.syncfusion.com/documentation/api/schedule/views#allowvirtualscrolling). Hide days with no appointments by setting [`hideEmptyAgendaDays`](https://ej2.syncfusion.com/documentation/api/schedule#hideemptyagendadays`).

The following code example depicts how to customize the display of events within Agenda view alone.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs8/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs8/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs8/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs8/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs8" %}
{% endif %}

Set the Scheduler height in pixels when using the Agenda view.

### Month Agenda view

Month Agenda shows a month calendar with a list of appointments for the selected day displayed below the calendar. Days that contain appointments are marked with a dot.

The example below demonstrates hiding weekend days on `MonthAgenda` and customizing the work-days list for that view only.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs9/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs9/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs9" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs9/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs9/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs9" %}
{% endif %}


### Timeline views – Day, Week, Work Week

Timeline views render time slots horizontally. The Timeline Day view shows a single day with appointments across horizontal slots. Cell height adapts to the Scheduler height; when content overflows, a `+ more` indicator appears to show hidden events.

Import and inject the `TimelineViews` module from `ej2-schedule` to enable Timeline Day, Timeline Week, and Timeline Work Week views.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs10/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs10/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs10" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs10/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs10/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs10" %}
{% endif %}

Similar to the Week view, the timeline week view shows 7 days with its associated appointments with the time slots displayed horizontally.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs11/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs11/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs11" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs11/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs11/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs11" %}
{% endif %}

The example below shows Timeline Work Week on the Scheduler.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs12/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs12/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs12" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs12/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs12/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs12" %}
{% endif %}

Click dates in the header of Timeline views to navigate to Agenda view.

### Timeline Month view

Timeline Month shows the month with time slots laid out horizontally and their appointments. Import and inject the `TimelineMonth` module from `ej2-schedule` to enable this view.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs13/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs13/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs13" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs13/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs13/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs13" %}
{% endif %}

Click dates in the Timeline Month header to navigate to Timeline Day view.

### Timeline Year view

Timeline Year presents a horizontal timeline across the year. In horizontal orientation, each row represents a resource; vertical orientation stacks resources in columns. Resource grouping supports hierarchical child resources.

Import and inject the `TimelineYear` module from `ej2-schedule` to use this view.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs14/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs14/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs14" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs14/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs14/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs14" %}
{% endif %}

Timeline Year is available in `Horizontal` and `Vertical` orientations; control orientation via the `views` property.

#### Resource grouping

The following code example depicts how to group the multiple resources on Timeline Year view and its relevant events are displayed accordingly under those resources.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs15/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs15/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs15" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs15/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs15/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs15/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs15" %}
{% endif %}

#### Auto row height

Timeline Year supports auto row height. When [`rowAutoHeight`](https://ej2.syncfusion.com/documentation/api/schedule#rowautoheight) is enabled, row heights adjust based on overlapping events. When disabled, a `+ more` indicator appears for hidden appointments.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs16/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs16/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs16" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs16/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs16/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs16/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs16" %}
{% endif %}

## Extending view intervals

Change the default span of days shown by a view using the `interval` option. For example, set `interval: 3` for the `Day` view to show three days, or `interval: 2` for `Week` to show two weeks.

Use [`displayName`](https://ej2.syncfusion.com/documentation/api/schedule/views#displayname) to provide an alternate label for customized views on the header bar.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs17/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs17/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs17/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs17" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs17/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs17/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs17/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs17" %}
{% endif %}

The view intervals can be extended for all modes except Agenda and Month-Agenda views.

Use [`isSelected`](https://ej2.syncfusion.com/documentation/api/schedule/views#isselected) to mark a view as the current selection. The sample below demonstrates using `isSelected`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs18/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs18/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs18/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs18" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs18/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs18/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/view-cs18/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/view-cs18" %}
{% endif %}

Refer to the [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour for an overview, and visit the [Scheduler demo](https://ej2.syncfusion.com/demos/#/tailwind3/schedule/overview.html) for interactive examples.

## See Also

* [How to restrict view navigation while clicking on dates](./how-to/prevent-date-navigation)
