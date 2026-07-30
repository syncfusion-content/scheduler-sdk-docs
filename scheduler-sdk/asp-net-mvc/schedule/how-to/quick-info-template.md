---
layout: post
title: Quick Info Template in ASP.NET MVC Schedule Component
description: Learn here all about Quick Info Template in Syncfusion ASP.NET MVC Schedule component of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Quick Info Template
publishingplatform: scheduler-sdk
documentation: ug
---

# Show quick info Template

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

