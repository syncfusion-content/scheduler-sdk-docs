---
layout: post
title: State Persistence in ASP.NET MVC Scheduler | Syncfusion
description: Learn how to enable state persistence in the Syncfusion ASP.NET MVC Scheduler to retain current view, selected date, and scroll position.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---


# State Persistence in ASP.NET MVC Scheduler

State persistence allows the Scheduler to retain the [`CurrentView`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_CurrentView), [`SelectedDate`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_SelectedDate), and scroll position values in the [`localStorage`](https://www.w3schools.com/html/html5_webstorage.asp#) for state maintenance, even if the browser is refreshed or you navigate to another page within the browser. This behavior is controlled by the [`EnablePersistence`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_EnablePersistence) property, which is set to `false` by default. When it is set to `true`, the `CurrentView`, `SelectedDate`, and scroll position values of the Scheduler component are retained even after the page is refreshed.

N> The Scheduler `id` must be set to preserve state with persistence.

The following example demonstrates how to enable state persistence for the Scheduler component.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/persistence/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/persistence/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/persistence/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/persistence/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



N> You can refer to our [ASP.NET MVC Scheduler](https://www.syncfusion.com/scheduler-sdk/aspnet-mvc-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [ASP.NET MVC Scheduler](https://ej2.syncfusion.com/aspnetmvc/schedule/overview#/fluent2) example to know how to present and manipulate data.
