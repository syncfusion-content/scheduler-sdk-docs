---
layout: post
title: Views in ASP.NET MVC Scheduler | Syncfusion
description: Learn about the available views in the Syncfusion ASP.NET MVC Scheduler, including day, week, month, agenda, and timeline view modes and customizations.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---


# Views in ASP.NET MVC Scheduler

The Scheduler includes a wide variety of view modes with unique configuration options for each view. The available view modes are Day, Week, Work Week, Month, Year, Agenda, Month Agenda, Timeline Day, Timeline Week, Timeline Work Week, Timeline Month, and Timeline Year, out of which the `Week` view is set as the active view.

To navigate between different views and dates, the navigation options are available on the Scheduler header bar. The active view option is usually highlighted by default. The date range of the active view will also be displayed at the left corner of the header bar, clicking on which will open a calendar popup for the ease of selecting the desired date.

N> By default, the Scheduler displays calendar views such as Day, Week, Work Week, Month, and Agenda.

## Setting specific view on scheduler

As the Scheduler displays the `Week` view by default, to change the active view, set the [`currentView`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_CurrentView) property with the desired view name. The applicable view names that the Scheduler accepts are as follows,

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

It is possible to display only the desired views on the Scheduler using the [`e-schedule-views`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.ScheduleView.html) property.

In the following example, the Scheduler displays 2 views, namely `Week` and `TimelineDay`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/views/specific-views/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/views/specific-views/data.cs %}
{% endhighlight %}
{% endtabs %}



To configure the Scheduler with different configurations on each view, refer to the following code example. Here, the Week view displays the dates in `dd-MM-yyyy` format, whereas the Month view hides the weekend days and is also displayed in read-only mode.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/views/individual-views/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/views/individual-views/data.cs %}
{% endhighlight %}
{% endtabs %}



## View specific configuration

There are scenarios where each view may need to have different configurations. For such cases, you can define the applicable Scheduler properties within the [`views`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_Views) property for each view option as depicted in the following examples. The fields available to be used within each view option are as follows.

| Property | Type | Description | Applicable views |
|----------|------|-------------|------------------|
| `option` | View | It accepts the Scheduler view name, based on which we can define its related properties. The view names can be `Day`, `Week` and so on. | All views.|
| `isSelected` | Boolean | It acts similar to the `currentView` property and defines the active view of the Scheduler.| All views. |
| `dateFormat` | Date | By default, Scheduler follows the date format as per the default culture assigned to it. When it is defined under specific view, only those assigned views follows this date format. | All views. |
| `readonly` | Boolean | When set to `true`, prevents the CRUD actions on the respective view under where it is defined. | All views. |
| `resourceHeaderTemplate` | String | The template option which is used to customize the resource header cells on the Scheduler. It gets applied only on the views, wherever it is defined.| All views. |
| `dateHeaderTemplate` | String | The template option which is used to customize the date header cells and is applied only on the views, wherever it is defined. | All views. |
| `eventTemplate` | String | The template option to customize the events background. It will get applied to the events of the view to which it is currently being defined. | All views. |
| `showWeekend` | Boolean | When set to `false`, it hides the weekend days of a week from the views on which it is defined.| All views. |
| [`group`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_Group) | [GroupModel](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.ScheduleGroup.html) | Allows to set different resource grouping options on all available Scheduler view modes. | All views. |
| `cellTemplate` | String | The template option to customize the work cells of the Scheduler and is applied only on the views, on which it is defined. | Applicable on all views except Agenda view. |
| `workDays` | Number[] | It is used to set the working days on the Scheduler views. | Applicable on all views except Agenda view. |
| `displayName` | String | When a particular view is customized to display with different intervals, this property allows the user to set different display name for each of the views. | Applicable on all views except Agenda and Month Agenda. |
| `interval` | Number | It allows to customize the default Scheduler views with different set of days, weeks, work weeks or months on the applicable view type. | Applicable on all views except Agenda and Month Agenda. |
| `startHour` | String | It is used to specify the start hour, from which the Scheduler should be displayed. It accepts the time string in a short skeleton format and also, hides the time beyond the specified start time. | Applicable on Day, Week, Work Week, Timeline Day, Timeline Week and Timeline Work Week views. |
| `endHour` | String | It is used to specify the end hour, at which the Scheduler ends. It accepts the time string in a short skeleton format. | Applicable on Day, Week, Work Week, Timeline Day, Timeline Week, and Timeline Work Week views. |
| `timeScale` | [TimeScaleModel](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.ScheduleTimeScale.html) | Allows to set different timescale configuration on each applicable view modes. | Applicable on Day, Week, Work Week, Timeline Day, Timeline Week, and Timeline Work Week views. |
| `showWeekNumber` | Boolean | When set to `true`, shows the week number on the respective weeks.| Applicable on Day, Week, Work Week, and Month views. |
| `allowVirtualScrolling` | Boolean | It is used to enable or disable the virtual scrolling functionality. | Applicable on Agenda and Timeline views. |
| `headerRows` | [`HeaderRowsModel`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.ScheduleHeaderRow.html) | Allows defining the custom header rows on timeline views of the Scheduler to display the year, month, week, date and hour label as an individual row. | Applicable only on all timeline views. |

### Day view

Usually a day view displays a single day with all its related appointments. It is possible to customize the day view to display more number of days by extending the `e-schedule-views` property with `interval` option. You can also define any of the above defined properties within the `e-schedule-views` object definition as depicted in the following code example.  

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/views/view-template/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/views/view-template/data.cs %}
{% endhighlight %}
{% endtabs %}



N> All the above defined properties can be accessed within Day view except `allowVirtualScrolling` and `headerRows`.

### Week view

The Week view displays a count of 7 days (from Sunday to Saturday) with all its related appointments. The first day of the week can be changed using the `firstDayOfWeek` property, which accepts an integer (Sunday=0, Monday=1, Tuesday=2, and so on) value. You can navigate to a particular date in the Day view from the Week view by clicking on the appropriate dates on the date header bar.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/views/week-template/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/views/week-template/data.cs %}
{% endhighlight %}
{% endtabs %}



N> All the above defined properties in the table can be accessed within Week and Work week views except `allowVirtualScrolling` and `headerRows`.

### Work Week view

The Work Week view displays only the working days of a week (count of 5 days) and its associated appointments. It is possible to customize the working days on the Work Week view by using the `workDays` property, which accepts an array of integer values (such as Sunday=0, Monday=1, Tuesday=2, and so on). By default, it displays from Monday to Friday (5 days). You can also navigate to a particular date in the Day view from the Work Week view by clicking on the appropriate dates in the date header bar.

The following code example depicts how to change the working days only on the `Work Week` view of the Scheduler.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/views/work-week-template/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/views/work-week-template/data.cs %}
{% endhighlight %}
{% endtabs %}



N> The Week, Work Week, and Day views can display the all-day row appointments in a separate all-day row with an expand/collapse option to view them.

### Month view

A Month view displays the entire days of a particular month and all its related appointments. You can navigate to a particular date in the Day view by clicking on the appropriate date text on the month cells.

By default, when you try to create an appointment through Month view, it is considered as created for an entire day. You can explicitly change this behavior by unchecking the `All-day` option from the editor window, so that it defaults to the start time as 9.00 AM and the end time as 9.30 AM.

You can also have the `+ more` text indicator on each day cell of a Month view, clicking on which will allow you to view the hidden appointments of a day.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/views/month-template/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/views/month-template/data.cs %}
{% endhighlight %}
{% endtabs %}



### Year view

A Year view displays all the days of a particular year with months and all its related appointments. You can navigate to a particular date in the Day view by clicking on the appropriate date text on the year cells.

Year view is available in both the `Horizontal` and `Vertical` orientations. You can manage the orientation of year view through `views` property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/views/year-template/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/views/year-template/data.cs %}
{% endhighlight %}
{% endtabs %}



N> The year view also has module support. In that, you can get all the months of a particular year in a calendar view format. In that calendar view, appointment-containing dates are highlighted with dots placed under the individual date. When you click on the date, the event popup will be displayed and the events will be listed.

### Agenda view

The Agenda view lists out the appointments in a grid-like view for the next 7 days by default from the current date. The count of the days can be changed using the API [`agendaDaysCount`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_AgendaDaysCount). It allows virtual scrolling of dates by enabling the `allowVirtualScrolling` property. Also, you can enable or disable the display of days on the Scheduler that have no appointments by setting `true` or `false` to the [`hideEmptyAgendaDays`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_HideEmptyAgendaDays) property.

The following code example depicts how to customize the display of events within Agenda view alone.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/views/agenda-template/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/views/agenda-template/data.cs %}
{% endhighlight %}
{% endtabs %}

N> Schedule Height is mandatory to set in pixels for Agenda view alone.



### Month Agenda view

A Month Agenda view shows a month calendar, where clicking on a particular day will display the appointments present on that date below the calendar. The days with appointments are differentiated with a circular dot below the date of the calendar.

The following code example shows how to hide the weekend days on `MonthAgenda` view as well as the working days list is modified on Month Agenda view alone.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/views/month-agenda/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/views/month-agenda/data.cs %}
{% endhighlight %}
{% endtabs %}



### Timeline views – Day, Week, Work Week

Similar to the Day view, Timeline Day view shows a single day with all its appointments where the time slots are displayed horizontally. By default, the cell height adjusts as per the height set on the Scheduler. When the number of appointments exceeds the visible area of the cells, the `+ more` text indicator will be displayed at the bottom to denote the presence of additional appointments in that time range.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/views/timeline-day/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/views/timeline-day/data.cs %}
{% endhighlight %}
{% endtabs %}



Similar to the Week view, the Timeline Week view shows 7 days with its associated appointments, with the time slots displayed horizontally.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/views/timeline-week/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/views/timeline-week/data.cs %}
{% endhighlight %}
{% endtabs %}



The following code example depicts how to display the Timeline Work Week view on the Scheduler,

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/views/timeline-work-week/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/views/timeline-work-week/data.cs %}
{% endhighlight %}
{% endtabs %}



N> Clicking on the dates in the date header bar of Timeline Day, Timeline Week, and Timeline Work Week views allows you to navigate to the Agenda view.

### Timeline Month view

A Timeline Month view displays the current month's days along with their appointments.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/views/timeline-month/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/views/timeline-month/data.cs %}
{% endhighlight %}
{% endtabs %}



N> Clicking on the dates in the date header bar of Timeline month will allow you to navigate to the Timeline day view.

### Timeline Year view

In Timeline Year view, each row depicts a single resource. Whereas in the vertical view, each resource is grouped parallelly as columns. Here, the resource grouping follows a tree-view-like hierarchical grouping structure and can contain any level of child resources.

To make use of the Timeline Year view on the Scheduler, import and inject the `TimelineYear` module from the `ej2-schedule` package.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/views/timeline-year/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/views/timeline-year/data.cs %}
{% endhighlight %}
{% endtabs %}



#### Resource grouping

The following code example depicts how to group the multiple resources on Timeline Year view and its relevant events are displayed accordingly under those resources.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/views/timeline-year-resource/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/views/timeline-year-resource/data.cs %}
{% endhighlight %}
{% endtabs %}



#### Auto row height

Timeline Year view supports Auto row height. When the feature [`rowAutoHeight`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_RowAutoHeight) is enabled, the row height gets auto-adjusted based on the number of overlapping events occupied in the same time range. If you disable the Auto row height, the `+ more` text indicator is shown on each day cell of a Timeline Year view, clicking on which will allow you to view the hidden appointments of a day.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/views/row-autoheight/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/views/row-autoheight/data.cs %}
{% endhighlight %}
{% endtabs %}



## Extending view intervals

It is possible to customize the display of the default number of days on different Scheduler view modes. For example, a Day view can be extended to display 3 days by setting the `interval` option as 3 for the `Day` option within the `e-schedule-views` property as depicted in the following code example. In the same way, you can also display 2 weeks by setting interval as 2 for the `Week` option.

You can provide the alternative display name for such customized views on the Scheduler header bar, by setting the appropriate `displayName` property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/views/extended-views/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/views/extended-views/data.cs %}
{% endhighlight %}
{% endtabs %}



N> The view intervals can be extended on all the Scheduler view modes except Agenda and Month-Agenda views.

## See Also

* [How to restrict view navigation while clicking on dates](./how-to/prevent-date-navigation)

N> You can refer to our [ASP.NET MVC Scheduler](https://www.syncfusion.com/scheduler-sdk/aspnet-mvc-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [ASP.NET MVC Scheduler](https://ej2.syncfusion.com/aspnetmvc/schedule/overview#/fluent2) example to knows how to present and manipulate data.
