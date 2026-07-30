---
layout: post
title: Datetimepicker For Core in ASP.NET Core Datetimepicker Component
description: Learn here all about Datetimepicker for core in Syncfusion ASP.NET Core Datetimepicker component of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Datetimepicker For Core
publishingplatform: scheduler-sdk
documentation: ug
---


# Render DateTimePickerFor

The DateTimePickerFor component can be rendered by passing a value from the model. The selected date value can be retrieved during form submission using the post method at the server end.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/datetime-picker/datetimepicker-for/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Datetimepickerfor.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/datetime-picker/datetimepicker-for/datetimepickerfor.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/datetime-picker/datetimepicker-for/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Datetimepickerfor.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/datetime-picker/datetimepicker-for/datetimepickerfor.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

![DateTimePickerFor Component in ASP.NET Core](../images/asp-net-core-datetimepickerfor-value-post.png)
