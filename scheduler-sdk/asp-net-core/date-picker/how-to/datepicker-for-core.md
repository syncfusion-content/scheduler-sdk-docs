---
layout: post
title: Datepicker For Core in ASP.NET Core Datepicker Component
description: Learn here all about Datepicker for Core in Syncfusion ASP.NET Core Datepicker component of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Datepicker For Core
publishingplatform: scheduler-sdk
documentation: ug
---


# Render DatePickerFor

The DatePickerFor component can be rendered by passing a value from the model. The selected date value can be retrieved during form submission using the post method at the server end.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/date-picker/how-to/datepicker-for/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Datepickerfor.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/date-picker/how-to/datepicker-for/datepickerfor.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/date-picker/how-to/datepicker-for/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Datepickerfor.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/date-picker/how-to/datepicker-for/datepickerfor.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

![DatePickerFor Component in ASP.NET Core](../images/asp-net-core-datepickerfor-value-post.png)
