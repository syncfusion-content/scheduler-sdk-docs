---
layout: post
title: Client Side Validation in Syncfusion ASP.NET Core Datepicker
description: Learn here all about Client Side Validation in Syncfusion ASP.NET Core Datepicker component of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Client Side Validation
documentation: ug
---


# Client side validation

To achieve the client side validation in a DatePicker control by using [Essential JavaScript 2 FormValidator](https://ej2.syncfusion.com/documentation/form-validator/validation-rules). It provides an option to customize the feedback error messages to the corresponding fields to take action to resolve the issue.

In this below example, the required field validation is implemented by mapping the name attribute value to the rules property. It will validate the DatePicker control and display the validation message when the textbox value is empty during form post back or focus out.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/date-picker/how-to/validation/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Validation.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/date-picker/how-to/validation/validation.cs %}
{% endhighlight %}
{% endtabs %}
