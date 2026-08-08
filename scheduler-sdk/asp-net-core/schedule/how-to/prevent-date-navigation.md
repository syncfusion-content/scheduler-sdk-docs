---
layout: post
title: Prevent Date Navigation in ASP.NET Core Scheduler | Syncfusion
description: Learn how to prevent date navigation in the Syncfusion ASP.NET Core Scheduler to lock the view on a specific date or range.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---

# Prevent Date Navigation in ASP.NET Core Scheduler

We can prevent navigation while clicking on the date header by simply removing `e-navigate` class from header cells which can be achieved in the `renderCell` event as shown in the following code example.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/navigating/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/navigating/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/navigating/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/navigating/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

