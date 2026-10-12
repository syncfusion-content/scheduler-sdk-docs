---
layout: post
title: Daterangepicker For Mvc in ASP.NET Core Daterangepicker Component
description: Learn here all about Daterangepicker for Mvc in Syncfusion ASP.NET Core Daterangepicker component of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Daterangepicker For Mvc
publishingplatform: scheduler-sdk
documentation: ug
---


# Render DateRangePickerFor

The DateRangePickerFor component can be rendered by passing value from the model. The selected date range value can be retrieved during form submission using the post method at the server end.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/daterange-picker/how-to/daterangepicker-for/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Daterangepickerfor.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/daterange-picker/how-to/daterangepicker-for/daterangepickerfor.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/daterange-picker/how-to/daterangepicker-for/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Daterangepickerfor.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/daterange-picker/how-to/daterangepicker-for/daterangepickerfor.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}


![DateRangePickerFor Component in ASP.NET MVC](../images/asp-net-mvc-daterangepickerfor-value-post.png)
