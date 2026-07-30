---
layout: post
title: Sequence Of Dates in ASP.NET MVC Calendar | Syncfusion
description: Learn here all about how to select a sequence of Dates In Calendar in Syncfusion ASP.NET MVC Calendar control of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Select A Sequence Of Dates In Calendar
publishingplatform: scheduler-sdk
documentation: ug
---


# Select a sequence of dates in Calendar

The following example demonstrates how to select the week dates of chosen date in the Calendar using [values](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Calendars.Calendar.html#Syncfusion_EJ2_Calendars_Calendar_Values) property, when [isMultiSelection](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Calendars.Calendar.html#Syncfusion_EJ2_Calendars_Calendar_IsMultiSelection) property is enabled. Methods of Moment.js is used in this sample for calculating the start and end of week from the selected date.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/calendar/multi-select/multi-moment/tagHelper %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/calendar/multi-select/multi-moment/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Multi.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/calendar/multi-select/multi-moment/multi.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/ASP-NET-Core-UG-Examples/tree/main/Calendar/CalendarHowToSample).