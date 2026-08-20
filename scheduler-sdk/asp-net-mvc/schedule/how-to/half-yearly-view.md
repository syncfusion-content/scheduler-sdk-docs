---
layout: post
title: Show Half-Yearly View in ASP.NET MVC Scheduler | Syncfusion
description: Learn how to show a half-yearly view in the Syncfusion ASP.NET MVC Scheduler by customizing the year view to render a specific range of consecutive months.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---


# Half-Yearly View in ASP.NET MVC Scheduler

By default, the Year view of the Scheduler displays all 365 days of a particular year along with their related appointments. You can customize the Year view to display a specific range of consecutive months by using the following properties.

* [`FirstMonthOfYear`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_FirstMonthOfYear): Sets the first month to be displayed in the Year view. Accepts an integer from `1` (January) to `12` (December).
* [`MonthsCount`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_MonthsCount): Sets the number of consecutive months to render starting from `FirstMonthOfYear`. Accepts an integer from `1` to `12`.
* [`MonthHeaderTemplate`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_MonthHeaderTemplate): Customizes the header cell of each month in the Year view.

In the following code example, the Year view renders only the last six months of a year. To begin with the month of June, `FirstMonthOfYear` is set to `6` and `MonthsCount` is set to `6`, which renders the months from June through November.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/year-customizations/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/year-customizations/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/year-customizations/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/year-customizations/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

## See Also

* [Views in ASP.NET MVC Scheduler](../views)
* [Year view in ASP.NET MVC Scheduler](../views#year-view)

