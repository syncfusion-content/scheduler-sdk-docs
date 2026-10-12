---
layout: post
title: Calendar Views in ASP.NET MVC Calendar Control | Syncfusion
description: Learn here all about Calendar Views in Syncfusion ASP.NET MVC Calendar control of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Calendar Views
documentation: ug
---


# Calendar Views in Calendar Control

The Calendar has the following pre-defined views that provide a flexible way to navigate back and forth when selecting dates.

| **View** | **Description** |
| --- | --- |
| month (default) | Displays the days in a month. |
| year | Displays the months in a year. |
| decade | Displays the years in a decade. |

When view is defined to the [start](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Calendars.DatePicker.html#Syncfusion_EJ2_Calendars_DatePicker_Start) property of the Calendar, it allows you to set the initial view on rendering.

The following example demonstrates how to set the `year` as the start view of the Calendar.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/calendar/calendar-view/views/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Views.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/calendar/calendar-view/views/views.cs %}
{% endhighlight %}
{% endtabs %}
## View restriction

By defining the start and depth property with the different view, drill-down and drill-up views navigation can be limited to the user. Calendar views will be drill-down up to the view which is set in [depth](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Calendars.Calendar.html#Syncfusion_EJ2_Calendars_Calendar_Depth) property and drill-up to the view which is set in [start](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Calendars.Calendar.html#Syncfusion_EJ2_Calendars_Calendar_Start) property.

The following example displays the Calendar in `decade` view, and allows you to select a date in `month` view.

N> Depth view should always be smaller than the start view. If the `depth` and `start` views are the same, then the Calendar view remains unchanged.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/calendar/calendar-view/restriction/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Restriction.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/calendar/calendar-view/restriction/restriction.cs %}
{% endhighlight %}
{% endtabs %}

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/ASP-NET-Core-UG-Examples/tree/main/Calendar/CalendarUGSample).