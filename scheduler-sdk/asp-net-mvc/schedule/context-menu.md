---
layout: post
title: Context Menu in ASP.NET MVC Scheduler | Syncfusion
description: Learn how to integrate the Context Menu in the Syncfusion ASP.NET MVC Scheduler to perform actions on cells, resource cells, and appointments.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---


# Context Menu in ASP.NET MVC Scheduler

You can display a context menu on the work cells and appointments of the Scheduler by using the [`ContextMenu`](https://ej2.syncfusion.com/aspnetmvc/documentation/context-menu/getting-started) control from the application end. In the following code example, the ContextMenu control is added and its target is set to the Scheduler.

On Scheduler cells, you can display menu items such as `New Event`, `New Recurring Event`, and `Today`. For appointments, you can display related options such as `Edit Event` and `Delete Event`. The default event window can be opened for appointment creation and editing using the `openEditor` method of the Scheduler.

The deletion of appointments can be done by using the `deleteEvent` public method. The [`SelectedDate`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_SelectedDate) property can also be used to navigate between different dates.

N> You can also display custom menu options on Scheduler cells and appointments. The context menu opens on tap-and-hold in responsive mode.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/context-menu/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/context-menu/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/context-menu/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/context-menu/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



N> You can refer to our [ASP.NET MVC Scheduler](https://www.syncfusion.com/scheduler-sdk/aspnet-mvc-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [ASP.NET MVC Scheduler](https://ej2.syncfusion.com/aspnetmvc/schedule/overview#/fluent2) example to know how to present and manipulate data.
