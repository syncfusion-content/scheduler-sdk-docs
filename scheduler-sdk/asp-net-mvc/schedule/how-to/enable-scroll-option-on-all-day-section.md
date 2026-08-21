---
layout: post
title: Scroll Option on All-Day Section in ASP.NET MVC Scheduler | Syncfusion
description: Learn how to enable the scroll option on the all-day section in the Syncfusion ASP.NET MVC Scheduler when many appointments overflow the row.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---


# Enable Scroll Option on All-Day Section in ASP.NET MVC Scheduler

When you have a large number of appointments in the all-day row, it is difficult to view all of them properly. In that case, you can enable the scroller option for the all-day row by setting the [`EnableAllDayScroll`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_EnableAllDayScroll) property to `true`. Its default value is `false`.

When this property is set to `true`, an individual scroller is enabled for the all-day row when it reaches its maximum height on expanding. This property is applicable to the Day, Week, Work Week, Timeline Day, Timeline Week, and Timeline Work Week views.

N> This property is not applicable for the Scheduler when the `Height` is set to `auto`.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/all-day-scroll/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/all-day-scroll/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/all-day-scroll/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/all-day-scroll/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

## See Also

* [Views in ASP.NET MVC Scheduler](../views)
* [How to perform CRUD actions dynamically](./add-edit-and-remove-events)

