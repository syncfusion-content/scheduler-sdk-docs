---
layout: post
title: Different Event Time Duration in ASP.NET Core Scheduler | Syncfusion
description: Learn how to set a different event time duration in the Syncfusion ASP.NET Core Scheduler to control the default appointment length.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---

# Set Different Event Time Duration in ASP.NET Core Scheduler

In the event window, the start and end time duration is processed based on the `interval` value within the `timeScale` property. By default, the `interval` value is 30, so the start and end time duration in the event window is set to 30 minutes. You can set a custom interval range for the start and end time in the event window using the `popupOpen` event as shown below.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/event-duration/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/event-duration/data.cs %}
{% endhighlight %}
{% endtabs %}
