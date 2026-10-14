---
layout: post
title: Render Datepicker | Syncfusion ASP.NET Core Datepicker Control
description: Learn here all about Datepicker for Core in Syncfusion ASP.NET Core Datepicker component of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Datepicker For Core
documentation: ug
---


# Render ASP.NET Core DatePicker Control

The DatePickerFor component can be rendered by passing a value from the model. The selected date value can be retrieved during form submission using the post method at the server end.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/date-picker/how-to/datepicker-for/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Datepickerfor.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/date-picker/how-to/datepicker-for/datepickerfor.cs %}
{% endhighlight %}
{% endtabs %}

![DatePickerFor Component in ASP.NET Core](../images/asp-net-core-datepickerfor-value-post.png)
