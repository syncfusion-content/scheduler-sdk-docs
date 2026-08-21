---
layout: post
title: Show Half-Yearly View in ASP.NET Core Scheduler | Syncfusion
description: Learn how to show a half-yearly view in the Syncfusion ASP.NET Core Scheduler by customizing the year view to render a specific range of consecutive months.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---


# Half-Yearly View in ASP.NET Core Scheduler

The year view of the Scheduler displays all the 365 days and their related appointments of a particular year. You can customize the year view by using the following properties.

* [`firstMonthOfYear`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_FirstMonthOfYear)
* [`monthsCount`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_MonthsCount)
* [`monthHeaderTemplate`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_MonthHeaderTemplate)

In the following code example, you can see how to render only the last six months of a year in the scheduler. To start with the month of  June, `firstMonthYear` is set to 6 and `monthsCount` is set to 6 to render only 6 months.

The following table summarizes the properties used to customize the year view:

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `firstMonthOfYear` | number | `0` (January) | Specifies the first month to render in the year view. |
| `monthsCount` | number | `12` | Specifies the number of months to render in the year view. |
| `monthHeaderTemplate` | string | `null` | Template used to customize the header of each month in the year view. |

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/year-customizations/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/year-customizations/data.cs %}
{% endhighlight %}
{% endtabs %}

