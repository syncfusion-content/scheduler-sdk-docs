---
layout: post
title: Prevent Date Navigation in ASP.NET Core Scheduler | Syncfusion
description: Learn how to prevent date navigation in the Syncfusion ASP.NET Core Scheduler to lock the view on a specific date or range.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---

# Prevent Date Navigation in ASP.NET Core Scheduler

You can prevent navigation when clicking on the date header by removing the `e-navigate` class from the header cells. This can be done in the `renderCell` event, as shown in the following code example.

The `renderCell` event is triggered for each cell rendered in the Scheduler, including the date header cells. By checking the `elementType` property of the event arguments, you can target only the header cells and remove the `e-navigate` class to disable navigation.

> This approach disables only the date header navigation. The Scheduler toolbar (date picker, navigation buttons) can still be used to change the date. To fully lock the date, you may also need to handle the `Navigating` event and cancel it.

The following example demonstrates how to prevent date navigation by removing the `e-navigate` class in the `renderCell` event.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/navigating/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/navigating/data.cs %}
{% endhighlight %}
{% endtabs %}

## See also

* [Navigating event in ASP.NET Core Scheduler](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_Navigating)
* [renderCell event in ASP.NET Core Scheduler](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_RenderCell)

