---
layout: post
title: Perform CRUD Actions Dynamically in ASP.NET MVC Scheduler | Syncfusion
description: Learn how to add, edit, and remove events dynamically in the Syncfusion ASP.NET MVC Scheduler control.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---

# Perform CRUD Actions Dynamically in ASP.NET MVC Scheduler

CRUD actions can be manually performed on appointments using the `addEvent`, `saveEvent`, and `deleteEvent` client-side methods, as shown below. This is useful when you need to create, update, or remove appointments programmatically in response to a custom UI action instead of using the built-in editor window.

N> The methods shown in this section operate on the Scheduler's local event collection. To persist the changes to a server-side store, handle the [`actionBegin`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_ActionBegin) and [`actionComplete`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_ActionComplete) events and forward the payload to your data source.

## Prerequisites

Before proceeding, ensure that:

* The Syncfusion ASP.NET MVC Scheduler is installed and the required client-side resources (`ej2-schedule`, `ej2-base`, and `ej2-data`) are referenced in your view or layout. The `ej2-data` package is required because the recurrence example uses `ej.data.DataManager` and `ej.data.Query`.
* The `using Syncfusion.EJ2.Schedule` namespace is included in the view.

## Normal event

The following example demonstrates how to add a new appointment, edit an existing appointment, and delete an appointment using `addEvent`, `saveEvent`, and `deleteEvent` respectively. Click the **ADD**, **EDIT**, and **DELETE** buttons to trigger each action.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/dynamic-appointments/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/dynamic-appointments/data.cs %}
{% endhighlight %}
{% endtabs %}



## Recurrence event

The following example shows how to programmatically add, edit, and delete recurring appointments. When editing or deleting a recurring appointment, the second argument to `saveEvent` and `deleteEvent` specifies the edit type (for example, `EditOccurrence` to edit a single occurrence, or `DeleteSeries` to delete the entire series). The valid values are `EditOccurrence`, `EditSeries`, `DeleteOccurrence`, and `DeleteSeries`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/dynamic-recurrence-appointments/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/dynamic-recurrence-appointments/data.cs %}
{% endhighlight %}
{% endtabs %}

