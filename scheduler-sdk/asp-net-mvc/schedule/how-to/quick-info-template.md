---
layout: post
title: Show Quick Info Template in ASP.NET MVC Scheduler | Syncfusion
description: Learn how to customize the Quick Info popup in the Syncfusion ASP.NET MVC Scheduler using a template to change its appearance and content.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---

# Show Quick Info Template in ASP.NET MVC Scheduler

The Quick Info popup is the small overlay that appears when you click a cell or an appointment in the Scheduler. By default, it shows a header, body, and footer with built-in styling. You can replace each of these three regions with your own markup by using the [`QuickInfoTemplates`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_QuickInfoTemplates) property, which exposes three sub-templates: `Header`, `Content`, and `Footer`.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/quick-info-template/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/quick-info-template/data.cs %}
{% endhighlight %}
{% endtabs %}

N> To completely disable the Quick Info popup (for example, to use the editor window directly on a single click), set the [`ShowQuickInfo`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_ShowQuickInfo) property to `false`.

N> To completely disable the Quick Info popup (for example, to use the editor window directly on a single click), set the [`ShowQuickInfo`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_ShowQuickInfo) property to `false`.

