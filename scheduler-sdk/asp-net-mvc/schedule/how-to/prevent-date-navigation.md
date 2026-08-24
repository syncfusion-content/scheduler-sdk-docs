---
layout: post
title: Prevent Date Navigation in ASP.NET MVC Scheduler | Syncfusion
description: Learn how to prevent date navigation in the Syncfusion ASP.NET MVC Scheduler to lock the view on a specific date or range.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---

# Prevent Date Navigation in ASP.NET MVC Scheduler

By default, the Scheduler navigates to a different date when the user clicks a date in the header or in the Month view. You can prevent this navigation by removing the `e-navigate` CSS class from the date header and month view cells inside the [`RenderCell`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_RenderCell) event, as shown in the following code example.

In the example below, the `onRenderer` handler checks the `elementType` of the rendered cell. When the cell is a `dateHeader` (the day labels in the Day, Week, and Work Week views) or a `monthCells` cell (each day cell in the Month view), the `e-navigate` class is removed from all of its child nodes. Without this class, the click handler that performs date navigation is not bound to those cells, so the click is effectively a no-op.

N> Removing the `e-navigate` class disables navigation on the date header and Month view cells only. To also disable the **Previous**, **Next**, and **Today** toolbar buttons, set the `ShowHeaderBar` toolbar configuration, or handle the [`Navigating`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_Navigating) event and cancel the action.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/navigating/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/navigating/data.cs %}
{% endhighlight %}
{% endtabs %}

