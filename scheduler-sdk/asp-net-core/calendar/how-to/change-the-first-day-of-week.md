---
layout: post
title: Change The First Day Of Week in ASP.NET Core Calendar Control | Syncfusion
description: Learn here all about how to change the first day of week in Syncfusion ASP.NET Core Calendar control of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Change The First Day Of Week
publishingplatform: scheduler-sdk
documentation: ug
---


# Change the first day of the week

The Calendar provides an option to change the first day of the week by using the [firstDayOfWeek](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Calendars.Calendar.html#Syncfusion_EJ2_Calendars_Calendar_FirstDayOfWeek) property. Generally, the day of the week starts from 0 (Sunday) and ends with 6 (Saturday).

N> By default, the first day of the week is culture specific.

The following example shows the Calendar with `Tuesday` as the first day of the week.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/calendar/howto/firstday/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Firstday.cs" %}
{% endhighlight %}{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/calendar/howto/firstday/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Firstday.cs" %}
{% endhighlight %}{% endtabs %}
{% endif %}

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/ASP-NET-Core-UG-Examples/tree/main/Calendar/CalendarHowToSample).