---
layout: post
title: Show Quick Info Template in ASP.NET Core Scheduler | Syncfusion
description: Learn how to customize the Quick Info popup in the Syncfusion ASP.NET Core Scheduler using a template to change its appearance and content.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---

# Quick Info Template in ASP.NET Core Scheduler

This demo showcases the quick popups for cells and appointments with the customized templates.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/quick-info-template/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/quick-info-template/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/quick-info-template/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/quick-info-template/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

