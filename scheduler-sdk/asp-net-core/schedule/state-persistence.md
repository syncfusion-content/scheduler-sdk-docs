---
layout: post
title: State Persistence in ASP.NET Core Scheduler | Syncfusion
description: Learn how to enable state persistence in the Syncfusion ASP.NET Core Scheduler to retain current view, selected date, and scroll position.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---


# State Persistence in ASP.NET Core Scheduler

State persistence allows the Scheduler to retain the [`CurrentView`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_CurrentView), [`SelectedDate`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_SelectedDate), and scroll position values in the [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) for state maintenance, even if the browser is refreshed or if you move to the next page within the browser. This action is handled through the [EnablePersistence](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_EnablePersistence) property, which is set to `false` by default. When it is set to `true`, the `CurrentView`, `SelectedDate`, and scroll position values of the Scheduler component are retained even after refreshing the page.

N> A Scheduler `id` is essential to enable state persistence.

The following example demonstrates how to enable state persistence in the Scheduler component.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/persistence/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/persistence/data.cs %}
{% endhighlight %}
{% endtabs %}


N> You can refer to our [ASP.NET Core Scheduler](https://www.syncfusion.com/aspnet-core-ui-controls/scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [ASP.NET Core Scheduler example](https://ej2.syncfusion.com/aspnetcore/Schedule/Overview#/material) to know how to present and manipulate data.
