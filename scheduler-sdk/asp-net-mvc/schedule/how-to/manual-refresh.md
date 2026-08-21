---
layout: post
title: Manually Refresh Layout in ASP.NET MVC Scheduler | Syncfusion
description: Learn how to manually refresh specific templates and the overall layout in the Syncfusion ASP.NET MVC Scheduler without re-rendering the entire component.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---


# Programmatically Refresh Layout in ASP.NET MVC Scheduler

The Scheduler allows you to refresh its layout manually without re-rendering the entire DOM element by using the [`refreshLayout`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_RefreshLayout) public method. The following example demonstrates how to call the `refreshLayout` method on demand.

Use `refreshLayout()` when the Scheduler's cell dimensions, scroll position, or template content appear out of sync with the rest of the page (for example, after the Scheduler is shown inside a hidden container, after a sidebar/panel resize, or after dynamic CSS changes). If you also need to reload the data source, use the [`refresh()`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_Refresh) method instead.

N> The `refreshLayout` method only updates the layout; it does not reload the event data from the server.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/manual-refresh/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/manual-refresh/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/manual-refresh/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/manual-refresh/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

## See Also

* [Views in ASP.NET MVC Scheduler](../views)
* [How to perform CRUD actions dynamically](./add-edit-and-remove-events)


