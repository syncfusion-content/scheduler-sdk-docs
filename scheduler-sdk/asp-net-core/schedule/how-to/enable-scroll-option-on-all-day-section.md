---
layout: post
title: Scroll Option on All-Day Section in ASP.NET Core Scheduler | Syncfusion
description: Learn how to enable the scroll option on the all-day section in the Syncfusion ASP.NET Core Scheduler when many appointments overflow the row.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---


# Enable Scroll Option on All-Day Section in ASP.NET Core Scheduler

When you have larger number of appointments in all-day row, it is difficult to view all the appointments properly. In that case you can enable scroller option for all-day row by setting true to `enableAllDayScroll` whereas its default value is false. When setting this property to true, individual scroller for all-day row is enabled when it reaches its maximum height on expanding.

N> This property is not applicable for Scheduler with height `auto`.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/all-day-scroll/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/all-day-scroll/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/all-day-scroll/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/all-day-scroll/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

