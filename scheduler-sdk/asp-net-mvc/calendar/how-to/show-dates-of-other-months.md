---
layout: post
title: Show Dates Of Other Months in ASP.NET MVC Calendar Control | Syncfusion
description: Learn here all about show dates of other months in Syncfusion ASP.NET MVC Calendar control of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Show Dates Of Other Months
publishingplatform: scheduler-sdk
documentation: ug
---


# Show dates of other months

The following example demonstrates how to show dates of other months.

Using the following styles, you can bring the dates of other months to visibility from its hidden state.

```css
.e-calendar .e-content tr.e-month-hide,
.e-calendar .e-content td.e-other-month>span.e-day {
    display: block;
}

.e-calendar .e-content td.e-month-hide,
.e-calendar .e-content td.e-other-month {
    pointer-events: auto;
    touch-action: auto;
}
```

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/calendar/howto/showdates/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Showdates.cs" %}
{% endhighlight %}{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/calendar/howto/showdates/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Showdates.cs" %}
{% endhighlight %}{% endtabs %}
{% endif %}

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/ASP-NET-Core-UG-Examples/tree/main/Calendar/CalendarHowToSample).