---
layout: post
title: Scheduler Dimensions in ASP.NET Core Scheduler | Syncfusion
description: Learn how to set the height and width of the Syncfusion ASP.NET Core Scheduler using pixel, percentage, or auto values for responsive layouts.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---


# Dimensions in ASP.NET Core Scheduler

Scheduler dimensions refer to both the height and width of the entire layout, and they accept three types of values:

* auto
* pixel
* percentage

## Auto Height and Width

When the height and width of the Scheduler are set to `auto`, the component tries to match the size of its parent container. In other words, the parent container that holds the Scheduler sizes itself based on its children. By default, the Scheduler is assigned `auto` values for both height and width.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/dimension/auto/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/dimension/auto/data.cs %}
{% endhighlight %}
{% endtabs %}



## Height and Width in pixel

The Scheduler height and width are rendered exactly as specified by the pixel values. It accepts both string and number values.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/dimension/pixel/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/dimension/pixel/data.cs %}
{% endhighlight %}
{% endtabs %}



## Height and Width in percentage

When the height and width of the Scheduler are given as percentages, the Scheduler expands to match the parent container.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/dimension/percentage/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/dimension/percentage/data.cs %}
{% endhighlight %}
{% endtabs %}



N> You can refer to our [ASP.NET Core Scheduler](https://www.syncfusion.com/scheduler-sdk/aspnet-core-scheduler) feature tour page for more details. You can also explore our [ASP.NET Core Scheduler example](https://ej2.syncfusion.com/aspnetcore/Schedule/Overview#/material) to learn how to present and manipulate data.

## See Also

* [How to Change Scheduler Cell Dimensions](./cell-customization#setting-cell-dimensions-in-all-views)