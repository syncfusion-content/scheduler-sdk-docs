---
layout: post
title: Manually Refresh Layout in ASP.NET MVC Scheduler | Syncfusion
description: Learn how to manually refresh specific templates and the overall layout in the Syncfusion ASP.NET MVC Scheduler without re-rendering the entire component.
platform: scheduler-sdk
control: Scheduler
publishingplatform: scheduler-sdk
documentation: ug
---


# Programmatically Refresh Layout in ASP.NET MVC Scheduler

In Scheduler, we can able to refresh the layout manually without re-render the DOM element by using the `refreshLayout` public method.  The following example code explains to know how to use the refreshLayout method.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/manual-refresh/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/manual-refresh/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/manual-refresh/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/manual-refresh/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}


