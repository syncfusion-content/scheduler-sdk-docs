---
layout: post
title: Open Editor Window Manually in ASP.NET MVC Scheduler | Syncfusion
description: Learn how to open the event editor manually in the Syncfusion ASP.NET MVC Scheduler on cell or event click, including on a single click.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---

# Open Editor Window Programmatically in ASP.NET MVC Scheduler

## Open Editor Window Manually

The Scheduler allows you to manually open the event editor for a specific time range or for an existing event by using the [`openEditor`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_OpenEditor) method. To open the editor for a specific time range, pass the cell details as the first argument and `Add` as the second argument. To open the editor for an existing event, pass the event data as the first argument and `Save` as the second argument.

In the following code example, clicking the **Click to open Editor** button opens the editor in `Add` mode for the cell that starts on `February 15, 2018 at 10:00 AM`, and clicking the **Click to open Event Editor** button opens the editor in `Save` mode for an existing event.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/event-editor/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/event-editor/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/event-editor/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/event-editor/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



## Open editor window on single click

By default, the Scheduler editor window opens when you double-click a cell or an appointment. You can also open the editor window with a single click by handling the [`EventClick`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_EventClick) and [`CellClick`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_CellClick) events, calling `openEditor`, and setting the [`ShowQuickInfo`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_ShowQuickInfo) property to `false` to suppress the default quick-info popup.

N> When the clicked event is a recurring appointment, the example invokes `quickPopup.openRecurrenceAlert()` to show the standard recurrence confirmation dialog instead of opening the editor directly. This ensures the user can choose between editing a single occurrence or the entire series.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/single-click-editor/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/single-click-editor/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/single-click-editor/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/single-click-editor/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}


