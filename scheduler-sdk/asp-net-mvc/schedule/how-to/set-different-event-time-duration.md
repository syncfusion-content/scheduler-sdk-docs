---
layout: post
title: Set Different Event Time Duration in ASP.NET MVC Schedule Component
description: Learn here all about Set Different Event Time Duration in Syncfusion ASP.NET MVC Schedule component of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Set Different Event Time Duration
publishingplatform: scheduler-sdk
documentation: ug
---

# Set Different Time Duration on Event Editor

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

