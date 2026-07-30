---
layout: post
title: Customize The Datepicker Day Header in ASP.NET MVC Datepicker Component
description: Learn here all about how to customize the Datepicker day header in Syncfusion ASP.NET MVC Datepicker component of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Customize The Datepicker Day Header
publishingplatform: scheduler-sdk
documentation: ug
---


# Customize the datepicker day header

You can change the format of the day that has to be displayed in header using [dayHeaderFormat](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Calendars.DatePicker.html#Syncfusion_EJ2_Calendars_DatePicker_DayHeaderFormat) property.

N> By default, the format is `Short`.

You can find the possible formats on below.

| **Name** | **Description** |
|------|---------------------|
| `Short` | Sets the short format of day name (like Su ) in day header. |
| `Narrow` | Sets the single character of day name (like S ) in day header. |
| `Abbreviated` | Sets the min format of day name (like Sun ) in day header. |
| `Wide` | Sets the long format of day name (like Sunday ) in day header. |

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/date-picker/how-to/headerformat/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Headerformat.cs" %}
{% endhighlight %}{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/date-picker/how-to/headerformat/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Headerformat.cs" %}
{% endhighlight %}{% endtabs %}
{% endif %}


![datepicker](../images/narrow.png)

![datepicker](../images/abbreviated.png)