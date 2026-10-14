---
layout: post
title: Render Timepicker For Mvc in Syncfusion ASP.NET MVC Timepicker Control
description: Learn here all about Timepicker For Mvc in Syncfusion ASP.NET MVC Timepicker component of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Timepicker For Mvc
documentation: ug
---


# Render ASP.NET MVC TimePicker Control

The TimePickerFor component can be rendered by passing a value from the model. The selected date value can be retrieved during form submission using the post method at the server end.

The following sample demonstrates how to retrieve the value in the controller by rendering the  TimePickerFor component.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/time-picker/how-to/timepicker-for/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Timepickerfor.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/time-picker/how-to/timepicker-for/timepickerfor.cs %}
{% endhighlight %}
{% endtabs %}

Selected value will be retrieved as below.

![TimePickerFor Component in ASP.NET MVC](../images/asp-net-mvc-timepickerfor-value-post.png)
