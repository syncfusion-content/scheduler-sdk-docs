---
layout: post
title: Manual Refresh in ASP.NET MVC Schedule Component
description: Learn here all about Manual Refresh in Syncfusion ASP.NET MVC Schedule component of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Manual Refresh
publishingplatform: scheduler-sdk
documentation: ug
---


# Refresh Layout

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


