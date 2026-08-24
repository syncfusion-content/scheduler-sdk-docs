---
layout: post
title: Header Customization in ASP.NET MVC Scheduler | Syncfusion
description: Learn how to show or hide the header bar and customize date and view navigation in the Syncfusion ASP.NET MVC Scheduler.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---


# Header Customization in ASP.NET MVC Scheduler

The header part of Scheduler can be customized easily with the built-in options available.

## Show or Hide header bar

By default, the header bar holds the date and view navigation options, through which the user can switch between the dates and various views. This header bar can be hidden from the UI by setting `false` to the [`ShowHeaderBar`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_ShowHeaderBar) property. Its default value is `true`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/header-bar/show-hide/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/header-bar/show-hide/data.cs %}
{% endhighlight %}
{% endtabs %}



## Customizing header bar

Apart from the default date navigation and view options available on the header bar, you can add custom items to the Scheduler header bar by handling the [`ActionBegin`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_ActionBegin) event with the `toolbarItemRender` request type. In the following example, an employee image is added to the header bar; clicking it opens a popup showing that person's short profile information.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/header-bar/custom-header-bar/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/header-bar/custom-header-bar/data.cs %}
{% endhighlight %}
{% endtabs %}



## How to display the view options within the header bar popup

By default, the header bar holds the view navigation options, through which the user can switch between various views. You can move these view options into the header bar popup by setting `true` to the [`EnableAdaptiveUI`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_EnableAdaptiveUI) property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/header-bar/adaptive-ui/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/header-bar/adaptive-ui/data.cs %}
{% endhighlight %}
{% endtabs %}



N> Refer [here](./resources#adaptive-ui-in-desktop) to know more about adaptive UI in the resources view of the Scheduler.

## Date header customization

The Scheduler UI that displays the date text on all views is considered as the date header cells. You can customize the date header cells of the Scheduler using either the [`DateHeaderTemplate`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_DateHeaderTemplate) option or the [`RenderCell`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_RenderCell) event.

### Using the date header template

The [`DateHeaderTemplate`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_DateHeaderTemplate) option is used to customize the date header cells of day, week, and work-week views.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/header-bar/custom-date-header/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/header-bar/custom-date-header/data.cs %}
{% endhighlight %}
{% endtabs %}



### Using the RenderCell event

In month view, the date header template is not applicable. The same customization can be added beside the date text in month cells by using the [`RenderCell`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_RenderCell) event.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/header-bar/render-cell/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/header-bar/render-cell/data.cs %}
{% endhighlight %}
{% endtabs %}

## Customizing the date range text

The [`DateRangeTemplate`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_DateRangeTemplate) option allows you to customize the text content of the date range displayed in the Scheduler. By default, the date range text is determined by the current Scheduler view. You can use the [`DateRangeTemplate`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_DateRangeTemplate) option to override the default text and specify your own custom text.

The [`DateRangeTemplate`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_DateRangeTemplate) template includes the `startDate`, `endDate`, and `currentView` options that you can use to customize the date range text.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/header-bar/custom-date-range/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/header-bar/custom-date-range/data.cs %}
{% endhighlight %}
{% endtabs %}

N> You can refer to our [ASP.NET MVC Scheduler](https://www.syncfusion.com/scheduler-sdk/aspnet-mvc-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [ASP.NET MVC Scheduler](https://ej2.syncfusion.com/aspnetmvc/Schedule/Overview#/material) example to know how to present and manipulate data.
