---
layout: post
title: Disable The Daterangepicker Component in ASP.NET Core Daterangepicker Component
description: Learn here all about how to disable the Daterangepicker component in Syncfusion ASP.NET Core Daterangepicker component of syncfusion and more.
platform: scheduler-sdk
control: Disable The Daterangepicker Component
publishingplatform: scheduler-sdk
documentation: ug
---


# Disable the control

DateRangePicker can be inactivated on a page, by setting [enabled](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Calendars.DateRangePicker.html#Syncfusion_EJ2_Calendars_DateRangePicker_Enabled) value as false that will disable the control completely from all the user interactions including in the form post.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/daterange-picker/how-to/disable/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Disable.cs" %}
{% endhighlight %}{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/daterange-picker/how-to/disable/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Disable.cs" %}
{% endhighlight %}{% endtabs %}
{% endif %}

