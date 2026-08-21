---
layout: post
title: Apply Resource Colors For Events in ASP.NET Core Schedule | Syncfusion
description: Learn how to prioritize resource colors for events in the Syncfusion ASP.NET Core Scheduler for better visual grouping.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---

# Prioritize Resource Colors for Events in ASP.NET Core Scheduler

By default, the color defined on the top level resource is applied to the events. If you want to apply a specific resource color to events irrespective of its parent resource color, it can be achieved by setting the `resourceColorField` property within the `eventSettings` property as shown below.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/resource-color/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/resource-color/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/resource-color/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/resource-color/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



N> The value of the `resourceColorField` field should match the `name` value given within the `resources` property.