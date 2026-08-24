---
layout: post
title: Apply Resource Colors for Events in ASP.NET MVC Scheduler | Syncfusion
description: Learn how to prioritize resource colors for events in the Syncfusion ASP.NET MVC Scheduler for better visual grouping.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---

# Prioritize Resource Colors for Events in ASP.NET MVC Scheduler

By default, the top-level resource color is applied to the events. If you want to apply a specific resource color to events irrespective of the parent resource color, this can be achieved by setting the `resourceColorField` field within the `eventSettings` property as shown below. The value of `resourceColorField` is the name of the resource whose color should be prioritized.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/resource-color/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/resource-color/data.cs %}
{% endhighlight %}
{% endtabs %}



N> The `resourceColorField` value must match the `name` of a resource defined in the `resources` property. For example, if the resource is added with `Name("Categories")`, set `ResourceColorField("Categories")` on the event settings.