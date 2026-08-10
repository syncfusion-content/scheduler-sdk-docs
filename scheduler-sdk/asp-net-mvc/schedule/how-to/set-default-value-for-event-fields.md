---
layout: post
title: Set Default Value for Event Fields in ASP.NET MVC Scheduler | Syncfusion
description: Learn how to set default values for event fields in the Syncfusion ASP.NET MVC Scheduler editor window to pre-fill data on new appointments.
platform: scheduler-sdk
control: Scheduler
publishingplatform: scheduler-sdk
documentation: ug
---

# Set Default Value for Event Fields in ASP.NET MVC Scheduler

Event window default fields name like Title, Location, etc.. can be customized and default value can be set to Subject field using `Default` property which will be added if an appointment is created with empty subject.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/default-subject/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/default-subject/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/default-subject/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/default-subject/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

