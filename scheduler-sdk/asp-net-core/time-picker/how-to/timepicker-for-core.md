---
layout: post
title: Timepicker For Core in ASP.NET Core Timepicker Component
description: Learn here all about Timepicker For Core in Syncfusion ASP.NET Core Timepicker component of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Timepicker For Core
publishingplatform: scheduler-sdk
documentation: ug
---


# Render TimePickerFor

The TimePickerFor component can be rendered by passing a value from the model. The selected date value can be retrieved during form submission using the post method at the server end.

The following sample demonstrates how to retrieve the value in the controller by rendering the  TimePickerFor component.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/time-picker/how-to/timepicker-for/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Timepickerfor.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/time-picker/how-to/timepicker-for/timepickerfor.cs %}
{% endhighlight %}
{% endtabs %}

Selected value will be retrieved as below.

![TimePickerFor Component in ASP.NET Core](../images/asp-net-core-timepickerfor-value-post.png)
