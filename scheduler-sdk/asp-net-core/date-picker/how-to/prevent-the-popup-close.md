---
layout: post
title: Prevent The Popup Close in ASP.NET Core Datepicker Component
description: Learn here all about how to prevent the popup close in Syncfusion ASP.NET Core Datepicker component of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Prevent The Popup Close
publishingplatform: scheduler-sdk
documentation: ug
---


# Prevent the popup close

To prevent the DatePicker popup from closing, use the preventDefault method from the `PreventableEventArgs`.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/date-picker/how-to/popupclose/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Popupclose.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/date-picker/how-to/popupclose/popupclose.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/date-picker/how-to/popupclose/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Popupclose.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/date-picker/how-to/popupclose/popupclose.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

