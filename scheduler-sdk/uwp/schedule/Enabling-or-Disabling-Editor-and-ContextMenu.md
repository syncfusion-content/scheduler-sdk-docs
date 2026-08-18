---
layout: post
title: Enabling or Disabling Editor in UWP Scheduler | Syncfusion
description: Learn about enabling or disabling editor and context menu in Syncfusion UWP Scheduler (SfSchedule) control and more.
platform: scheduler-sdk
control: SfSchedule
documentation: ug
---

# Enabling or Disabling Editor in UWP Scheduler

You can enable or disable the Schedule appointment editor and context menu in schedule using **AllowEditing** property and its default value is true. If the **AllowEditing** property value is set as false, you could not create or edit the schedule appointment using editor or context menu.

{% tabs %}
{% highlight xaml %}

    <Schedule:SfSchedule AllowEditing="False" />

{% endhighlight %}

{% highlight c# %}

    SfSchedule schedule = new SfSchedule();
    schedule.AllowEditing = false;
    this.grid.Children.Add(schedule);

{% endhighlight %}
{% endtabs %}