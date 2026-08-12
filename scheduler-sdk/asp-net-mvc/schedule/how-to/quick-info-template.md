---
layout: post
title: Show Quick Info Template in ASP.NET MVC Scheduler | Syncfusion
description: Learn how to customize the Quick Info popup in the Syncfusion ASP.NET MVC Scheduler using a template to change its appearance and content.
platform: scheduler-sdk
control: Scheduler
publishingplatform: scheduler-sdk
documentation: ug
---

# Show Quick Info Template in ASP.NET MVC Scheduler

This demo showcases the quick popups for cells and appointments with the customized templates.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/quick-info-template/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/quick-info-template/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/quick-info-template/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/quick-info-template/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

