---
layout: post
title: Perform CRUD Actions in ASP.NET Core Scheduler | Syncfusion
description: Learn how to add, edit, and remove events dynamically in the Syncfusion ASP.NET Core Scheduler control.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---

# Perform CRUD Actions Dynamically in ASP.NET Core Scheduler

CRUD actions can be performed dynamically on appointments using the `addEvent`, `saveEvent`, and `deleteEvent` methods of the Scheduler. These methods allow you to programmatically add a new event, update an existing event, or remove an event from the Scheduler without relying on the built-in editor window.

> The methods used in this topic are client-side methods invoked from the browser. They do not persist data to the server; ensure you handle persistence in your own data source if required.

## Normal event

The following example shows how to add, update, and delete a normal (non-recurring) appointment dynamically.

### Add event

Use the `addEvent` method to add a new appointment to the Scheduler by passing the appointment data as an argument.

### Save event

Use the `saveEvent` method to update an existing appointment by passing the modified appointment data as an argument.

### Delete event

Use the `deleteEvent` method to remove an existing appointment by passing the appointment `Id` (or the appointment object) as an argument.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/dynamic-appointments/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/dynamic-appointments/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/dynamic-appointments/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/dynamic-appointments/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

## Recurrence event

The following example shows how to add, update, and delete a recurring appointment dynamically. For recurring appointments, ensure the `RecurrenceRule` and `RecurrenceException` fields are set appropriately when calling `addEvent` or `saveEvent`.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/dynamic-recurrence-appointments/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/dynamic-recurrence-appointments/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/dynamic-recurrence-appointments/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/dynamic-recurrence-appointments/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

