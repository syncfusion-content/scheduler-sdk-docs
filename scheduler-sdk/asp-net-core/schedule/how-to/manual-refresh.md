---
layout: post
title: Manually Refresh Layout in ASP.NET Core Scheduler | Syncfusion
description: Learn how to manually refresh specific templates and the overall layout in the Syncfusion ASP.NET Core Scheduler without re-rendering the entire component.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---

# Programmatically Refresh Layout in ASP.NET Core Scheduler

In the Scheduler, you can refresh the layout manually without re-rendering the DOM element by using the `refreshLayout` public method. The following example code demonstrates how to use the `refreshLayout` method.

You can also pass specific template names as arguments to refresh only those templates. For example, to refresh only the date header and event container, call `refreshLayout(['dateHeader', 'eventContainer'])`. Refer to the Scheduler API for the full list of supported template names.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/manual-refresh/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/manual-refresh/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/manual-refresh/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/manual-refresh/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}


