---
layout: post
title: Open Datepicker Popup On Input Click in ASP.NET Core Datepicker Component
description: Learn here all about open Datepicker popup on input click in Syncfusion ASP.NET Core Datepicker component of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Open Datepicker Popup On Input Click
publishingplatform: scheduler-sdk
documentation: ug
---


# Open the DatePicker popup upon focusing input of DatePicker

You can open the DatePicker popup on input focus by calling the `show` method in the input `focus` event.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/date-picker/how-to/openpopup/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Openpopup.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/date-picker/how-to/openpopup/openpopup.cs %}
{% endhighlight %}
{% endtabs %}

![datepicker](../images/openpopup.png)