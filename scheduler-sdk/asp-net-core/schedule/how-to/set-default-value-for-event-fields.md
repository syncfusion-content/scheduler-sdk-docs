---
layout: post
title: Default Value for Event Fields in ASP.NET Core Scheduler | Syncfusion
description: Learn how to set default values for event fields in the Syncfusion ASP.NET Core Scheduler editor window to pre-fill data on new appointments.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---

# Set Default Value for Event Fields in ASP.NET Core Scheduler

The default field names displayed in the event editor window (such as Title, Location, etc.) can be customized, and a default value can be set for the Subject field using the `Default` property. This default value is applied to an appointment when it is created with an empty Subject.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/default-subject/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/default-subject/data.cs %}
{% endhighlight %}
{% endtabs %}

