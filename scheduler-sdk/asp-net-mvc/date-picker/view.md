---
layout: post
title: View in ASP.NET MVC Datepicker Component | Syncfusion
description: Learn here all about View in Syncfusion ASP.NET MVC Datepicker component of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: View
publishingplatform: scheduler-sdk
documentation: ug
---


# Start and Depth View

The DatePicker has the following predefined views that provides a flexible way to navigate back and forth to select the date.

| **View** | **Description** |
| --- | --- |
| month (default) | Displays the days in a month |
| year | Displays the months in a year |
| decade | Displays the years in a decade |

## Start view

You can use the [start](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Calendars.DatePicker.html#Syncfusion_EJ2_Calendars_DatePicker_Start) property to define the initial rendering view.

The following example demonstrates how to create a DatePicker with `decade` as initial rendering view.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/date-picker/view/start/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Start.cs" %}
{% endhighlight %}
{% endtabs %}

## Depth view

Define the [depth](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Calendars.DatePicker.html#Syncfusion_EJ2_Calendars_DatePicker_Depth) property to control the view navigation.

N> Always the depth view has to be smaller than the start view, otherwise the view restriction will be not restricted.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/date-picker/view/depth/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Depth.cs" %}
{% endhighlight %}
{% endtabs %}

N> To know more about Calendar views refer the Calendar's [Calendar Views](https://help.syncfusion.com/scheduler-sdk/asp-net-mvc/calendar/calendar-views) section.