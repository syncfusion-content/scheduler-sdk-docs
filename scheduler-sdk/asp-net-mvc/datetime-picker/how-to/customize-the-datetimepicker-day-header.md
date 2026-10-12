---
layout: post
title: Day Header in Syncfusion ASP.NET MVC Datetimepicker Control
description: Learn here all about how to customize the Datetimepicker Day Header in Syncfusion ASP.NET MVC Datetimepicker component of syncfusion and more.
platform: scheduler-sdk
control: Customize The Datetimepicker Day Header
documentation: ug
---


# Customize the datetimepicker day header

You can change the format of the day that has to be displayed in header using [dayHeaderFormat](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Calendars.DateTimePicker.html#Syncfusion_EJ2_Calendars_DateTimePicker_DayHeaderFormat) property.

N> By default, the format is `Short`.

| **Name** | **Description** |
|------|---------------------|
| `Short` | Sets the short format of day name (like Su ) in day header. |
| `Narrow` | Sets the single character of day name (like S ) in day header. |
| `Abbreviated` | Sets the min format of day name (like Sun ) in day header. |
| `Wide` | Sets the long format of day name (like Sunday ) in day header. |

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/datetime-picker/headerformat/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Headerformat.cs" %}
{% endhighlight %}
{% endtabs %}

![datetimepicker](../images/narrow.png) ![datetimepicker](../images/abbreviated.png)