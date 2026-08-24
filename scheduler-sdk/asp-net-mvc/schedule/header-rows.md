---
layout: post
title: Timeline Header Rows in ASP.NET MVC Scheduler | Syncfusion
description: Learn how to add additional header rows in timeline views of the Syncfusion ASP.NET MVC Scheduler, including year, month, week, and date rows.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---


# Timeline Header Rows in ASP.NET MVC Scheduler

In addition to the default date and time header rows, the Timeline views can display additional header rows such as year, month, week, date, and hour. This can be achieved using the [`HeaderRows`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_HeaderRows) property, which is applicable only on the timeline views. The possible rows that can be added using the `HeaderRows` property are as follows.

* `Year`
* `Month`
* `Week`
* `Date`
* `Hour`

N> The `Hour` row is not applicable for the Timeline month view.

The following example shows the Scheduler displaying all the available header rows in the timeline views.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/header-rows/all-option/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/header-rows/all-option/data.cs %}
{% endhighlight %}
{% endtabs %}



## Display year and month rows in timeline views

To display the timeline Scheduler with only year and month names, define the `Year` and `Month` options within the [`HeaderRows`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_HeaderRows) property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/header-rows/year-month/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/header-rows/year-month/data.cs %}
{% endhighlight %}
{% endtabs %}



## Display week numbers in timeline views

The week number can be displayed in a separate header row of the timeline Scheduler by setting the `Week` option within the [`HeaderRows`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_HeaderRows) property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/header-rows/week-number/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/header-rows/week-number/data.cs %}
{% endhighlight %}
{% endtabs %}



## Displaying dates of a complete year in timeline view

It is possible to display a complete year in a timeline view by setting the [`Interval`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.ScheduleTimeScale.html#Syncfusion_EJ2_Schedule_ScheduleTimeScale_Interval) value as `12` and defining the **TimelineMonth** view option within the [`Views`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_Views) property of the Scheduler.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/header-rows/complete-year/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/header-rows/complete-year/data.cs %}
{% endhighlight %}
{% endtabs %}



## Customizing header rows using a template

You can customize the text of the header rows and display images or formatted text on each individual header row using the built-in `Template` option available within the [`HeaderRows`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_HeaderRows) property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/header-rows/header-row-template/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/header-rows/header-row-template/data.cs %}
{% endhighlight %}
{% endtabs %}



N> You can refer to our [ASP.NET MVC Scheduler](https://www.syncfusion.com/scheduler-sdk/aspnet-mvc-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [ASP.NET MVC Scheduler](https://ej2.syncfusion.com/aspnetmvc/schedule/overview#/fluent2) example to know how to present and manipulate data.
