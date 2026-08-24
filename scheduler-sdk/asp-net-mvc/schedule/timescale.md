---
layout: post
title: Timescale Customization in ASP.NET MVC Scheduler | Syncfusion
description: Learn how to customize the time slots in the Syncfusion ASP.NET MVC Scheduler to set the duration, interval, and slot count per row.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---


# Timescale Customization in ASP.NET MVC Scheduler

The time slots are usually the time cells that are displayed on the Day, Week, and Work Week views of both the calendar (in the leftmost position) and timeline views (at the top). The [`TimeScale`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_TimeScale) property lets you control and set the required time slot duration for the work cells displayed on the Scheduler. It includes the following sub-options:

* [`Enable`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.ScheduleTimeScale.html#Syncfusion_EJ2_Schedule_ScheduleTimeScale_Enable) - When set to `true`, allows the Scheduler to display appointments accurately against the exact time duration. If set to `false`, all the appointments of a day are displayed one below the other with no grid lines. Its default value is `true`.
* [`Interval`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.ScheduleTimeScale.html#Syncfusion_EJ2_Schedule_ScheduleTimeScale_Interval) – Defines the duration on which the time axis is displayed, for example, in 1 hour or 30 minute intervals. It accepts values in minutes and defaults to `60`.
* [`SlotCount`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.ScheduleTimeScale.html#Syncfusion_EJ2_Schedule_ScheduleTimeScale_SlotCount) – Decides the number of slots to be split for the specified time interval duration. It defaults to `2`, thus displaying two slots to represent an hour (each slot representing 30 minutes).

**Note**: The upper limit for rendering slots within a single day, using the **Interval** and **SlotCount** properties of the **TimeScale**, is `1000`. This constraint aligns with the maximum **colspan** value permissible for the **table** element, also capped at `1000`. This restriction applies exclusively to the `TimelineDay`, `TimelineWeek`, and `TimelineWorkWeek` views.

## Setting different time slot duration

The [`Interval`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.ScheduleTimeScale.html#Syncfusion_EJ2_Schedule_ScheduleTimeScale_Interval) and [`SlotCount`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.ScheduleTimeScale.html#Syncfusion_EJ2_Schedule_ScheduleTimeScale_SlotCount) properties can be used together on the Scheduler to set a different time slot duration, as shown in the following code example. Here, six time slots together represent an hour.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/timescale/timescale/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/timescale/timescale/data.cs %}
{% endhighlight %}
{% endtabs %}



## Customizing time cells using a template

The [`TimeScale`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_TimeScale) property also provides template options that allow customization of time slots:

* [`MajorSlotTemplate`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.ScheduleTimeScale.html#Syncfusion_EJ2_Schedule_ScheduleTimeScale_MajorSlotTemplate) - The template option to be applied for major time slots. The template accepts either a string or an `HTMLElement` as the template design, and the parsed design is displayed on the time cells. Time details can be accessed within this template.
* [`MinorSlotTemplate`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.ScheduleTimeScale.html#Syncfusion_EJ2_Schedule_ScheduleTimeScale_MinorSlotTemplate) - The template option to be applied for minor time slots. The template accepts either a string or an `HTMLElement` as the template design, and the parsed design is displayed on the time cells. Time details can be accessed within this template.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/timescale/template/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/timescale/template/data.cs %}
{% endhighlight %}
{% endtabs %}



## Hiding the timescale

The grid lines that indicate the exact time duration can be enabled or disabled on the Scheduler by setting `true` or `false` to the `Enable` option within the [`TimeScale`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_TimeScale) property. Its default value is `true`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/timescale/on-off-timescale/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/timescale/on-off-timescale/data.cs %}
{% endhighlight %}
{% endtabs %}



## Highlighting current date and time

By default, the Scheduler indicates the current date with a highlighted date header on all views and marks the system's current time on specific views such as Day, Week, Work Week, Timeline Day, Timeline Week, and Timeline Work Week. To stop highlighting the current time indicator on Scheduler views, set `false` on the [`ShowTimeIndicator`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_ShowTimeIndicator) property, which defaults to `true`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/timescale/time-indicator/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/timescale/time-indicator/data.cs %}
{% endhighlight %}
{% endtabs %}



N> You can refer to our [ASP.NET MVC Scheduler](https://www.syncfusion.com/scheduler-sdk/aspnet-mvc-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [ASP.NET MVC Scheduler](https://ej2.syncfusion.com/aspnetmvc/schedule/overview#/fluent2) example to know how to present and manipulate data.
