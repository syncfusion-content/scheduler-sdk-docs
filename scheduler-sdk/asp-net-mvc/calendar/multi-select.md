---
layout: post
title: Multi Select in ASP.NET MVC Calendar Control | Syncfusion
description: Learn here all about Multi Select in Syncfusion ASP.NET MVC Calendar control of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Multi Select
publishingplatform: scheduler-sdk
documentation: ug
---


# Multi Selection in Calendar Control

Calendar provides an option to select **single** or **multiple dates** by using `isMultiSelection` and `values` properties. By default, `isMultiSelection` property will be in disabled state.

| API | Type | Description |
|------|------|----------------------|
| `isMultiSelection`| **Boolean**| Enables the multi-selection option in the Calendar control |
|`values`| **Date[]** | Gets or sets the date range values in multi-selection option |

The following example demonstrates the functionality of `isMultiSelection` property and `values` properties in the Calendar control.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/calendar/multi-select/multi/tagHelper %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/calendar/multi-select/multi/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Multi.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/calendar/multi-select/multi/multi.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/ASP-NET-Core-UG-Examples/tree/main/Calendar/CalendarUGSample).