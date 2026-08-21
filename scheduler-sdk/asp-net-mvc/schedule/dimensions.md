---
layout: post
title: Scheduler Dimensions in ASP.NET MVC Scheduler | Syncfusion
description: Learn how to set the height and width of the Syncfusion ASP.NET MVC Scheduler using pixel, percentage, or auto values for responsive layouts.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---


# Dimensions in ASP.NET MVC Scheduler

The Scheduler dimensions refer to both the height and width of the entire layout, and it accepts three types of values:

* auto
* pixel
* percentage

## Auto Height and Width

When the height and width of the Scheduler are set to `auto`, the Scheduler will try as hard as possible to keep an element the same width as its parent container. In other words, the parent container that holds the Scheduler will have a width/height equal to the sum of its children. By default, the Scheduler is assigned `auto` values for both the height and width properties. When `auto` is used, the Scheduler sizes itself based on its content and the parent container, so the rendered size may vary depending on the active view (for example, `Day`, `Week`, or `Month`) and the available viewport.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/dimension/auto/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/dimension/auto/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/dimension/auto/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/dimension/auto/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



## Height and width in pixel

The Scheduler height and width will be rendered exactly as per the given pixel values. It accepts both string (for example, `"650px"`) and number values (for example, `650`). When a number is provided, the Scheduler interprets it as pixels.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/dimension/pixel/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/dimension/pixel/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/dimension/pixel/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/dimension/pixel/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



## Height and width in percentage

When the height and width of the Scheduler are given as a percentage, the Scheduler will be sized relative to its parent container. For the percentage values to take effect, the parent container must have an explicit (non-percentage) height or width; otherwise, the Scheduler may collapse to zero size.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/dimension/percentage/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/dimension/percentage/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/dimension/percentage/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/dimension/percentage/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



N> You can refer to our [ASP.NET MVC Scheduler](https://www.syncfusion.com/scheduler-sdk/aspnet-mvc-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [ASP.NET MVC Scheduler](https://ej2.syncfusion.com/aspnetmvc/Schedule/Overview#/material) example to know how to present and manipulate data.

## See Also

* [How to Change Scheduler Cell Dimensions](./cell-customization#setting-cell-dimensions-in-all-views)