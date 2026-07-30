---
layout: post
title: Customize The Calendar Day Header in ASP.NET Core Calendar Control | Syncfusion
description: Learn here all about how to customize the Calendar Day Header in Syncfusion ASP.NET Core Calendar control of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Customize The Calendar Day Header
publishingplatform: scheduler-sdk
documentation: ug
---


# Customize the calendar day header

You can change the format of the day that has to be displayed in header using [`dayHeaderFormat`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Calendars.Calendar.html#Syncfusion_EJ2_Calendars_Calendar_DayHeaderFormat) property.

N> By default, the format is `Short`.

| **Name** | **Description** |
|------|---------------------|
| `Short` | Sets the short format of day name (like Su ) in day header. |
| `Narrow` | Sets the single character of day name (like S ) in day header. |
| `Abbreviated` | Sets the min format of day name (like Sun ) in day header. |
| `Wide` | Sets the long format of day name (like Sunday ) in day header. |

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/calendar/howto/headerformat/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Headerformat.cs" %}
{% endhighlight %}{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/calendar/howto/headerformat/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Headerformat.cs" %}
{% endhighlight %}{% endtabs %}
{% endif %}


![calendar](../images/narrow.png)

![calendar](../images/abbreviated.png)

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/ASP-NET-Core-UG-Examples/tree/main/Calendar/CalendarHowToSample).