---
layout: post
title: Client Side Validation Using Form Validator in ASP.NET MVC Timepicker Component
description: Learn here all about Client Side Validation Using Form Validator in Syncfusion ASP.NET MVC Timepicker component of syncfusion and more.
platform: scheduler-sdk
control: Client Side Validation Using Form Validator
publishingplatform: scheduler-sdk
documentation: ug
---


# Client side validation using FormValidator

To achieve client side validation in a TimePicker component, use [Essential JavaScript 2 FormValidator](https://ej2.syncfusion.com/documentation/form-validator). It provides an option to customize feedback error messages to the corresponding fields for taking action and resolving the issue.

In the following example, the required field validation is implemented by mapping the name attribute value to the rules property. It validates the TimePicker component and displays the validation message when the textbox value is empty during form post back or focus out.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/time-picker/how-to/validation/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Validation.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/time-picker/how-to/validation/validation.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/time-picker/how-to/validation/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Validation.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/time-picker/how-to/validation/validation.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}
