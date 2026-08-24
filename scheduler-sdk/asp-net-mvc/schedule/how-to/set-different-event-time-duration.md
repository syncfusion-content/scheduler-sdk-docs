---
layout: post
title: Different Event Time Duration in ASP.NET MVC Scheduler | Syncfusion
description: Learn how to set a different event time duration in the Syncfusion ASP.NET MVC Scheduler to control the default appointment length.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---

# Set Different Event Time Duration in ASP.NET MVC Scheduler

By default, the start and end time of a new appointment created from a cell click in the Scheduler is calculated by adding the [`timeScale.interval`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.ScheduleTimeScale.html) value (in minutes) to the clicked cell's start time. The default `timeScale.interval` is `30`, so a new appointment created by clicking a cell lasts 30 minutes.

To override this default appointment length, handle the [`popupOpen`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_PopupOpen) event and assign a new value (in minutes) to `args.duration`. The change applies only to the **Add** scenario — when the user clicks an empty cell to create a new appointment. Editing an existing appointment is not affected, since the existing event already has its own start and end times.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/event-duration/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/event-duration/data.cs %}
{% endhighlight %}
{% endtabs %}

N> The value assigned to `args.duration` is interpreted as **minutes**. In the example above, `args.duration = 40` makes every new appointment 40 minutes long.
