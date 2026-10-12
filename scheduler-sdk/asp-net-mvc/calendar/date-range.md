---
layout: post
title: Date Range in ASP.NET MVC Calendar Control | Syncfusion
description: Learn here all about Date Range in Syncfusion ASP.NET MVC Calendar control of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Date Range
documentation: ug
---


# Date Range in Calendar Control

Calendar provides an option to select a date value within a specified range by defining the [min](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Calendars.Calendar.html#Syncfusion_EJ2_Calendars_Calendar_Min) and [max](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Calendars.Calendar.html#Syncfusion_EJ2_Calendars_Calendar_Max) properties. The min date should always be lesser than the max date. If the value of `min` or `max` properties are changed through code behind, then update the `value` property to be set within the specified range. Or else, if the value is out of specified date range and less than `min` date, value property will be updated with min date or the value is higher than max date, value property will be updated with `max` date.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/calendar/daterange/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Daterange.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/calendar/daterange/daterange.cs %}
{% endhighlight %}
{% endtabs %}

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/ASP-NET-Core-UG-Examples/tree/main/Calendar/CalendarUGSample).