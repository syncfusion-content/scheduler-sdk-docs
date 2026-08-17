---
layout: post
title: Different Working Hours in ASP.NET Core Scheduler | Syncfusion
description: Learn how to set different work hours for specific days in the Syncfusion ASP.NET Core Scheduler to match varied team schedules.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---

# Set Different Working Hours per Days in ASP.NET Core Scheduler

By default, the work hours of the Scheduler are highlighted based on the start and end values provided within the `workHours` property, which remain the same for all days. To highlight different work hour ranges for different days, use the `setWorkHours` method. You can pass a date object (or a collection of multiple date objects) as the first argument, and the start and end times to be set as work hours as the second and third arguments, respectively. In the following code example, on a button click, the work hours from 11:00 AM to 08:00 PM on the 15th and 17th of February are added to the Scheduler.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/different-workhours/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/different-workhours/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/different-workhours/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/different-workhours/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

