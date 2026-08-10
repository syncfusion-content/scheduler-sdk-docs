---
layout: post
title: Different Event Time Duration in ASP.NET MVC Scheduler | Syncfusion
description: Learn how to set a different event time duration in the Syncfusion ASP.NET MVC Scheduler to control the default appointment length.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---

# Set Different Event Time Duration in ASP.NET MVC Scheduler

In event window, start/end time duration will be processed based on the `interval` value within the `timeScale` property. By default, `interval` value is 30, therefore in event window start/end time duration will be in 30 mins duration. You can set custom interval range to the start/end time in event window using `popupOpen` event as shown below.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/event-duration/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/event-duration/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/event-duration/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/event-duration/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

