---
layout: post
title: Prevent The Popup Close in Syncfusion ASP.NET Core Datepicker Control
description: Learn here all about how to prevent the popup close in Syncfusion ASP.NET Core Datepicker component of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Prevent The Popup Close
documentation: ug
---


# Prevent the popup close

To prevent the DatePicker popup from closing, use the preventDefault method from the `PreventableEventArgs`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/date-picker/how-to/popupclose/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Popupclose.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/date-picker/how-to/popupclose/popupclose.cs %}
{% endhighlight %}
{% endtabs %}
