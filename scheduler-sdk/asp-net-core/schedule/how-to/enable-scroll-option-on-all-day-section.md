---
layout: post
title: Scroller on All-Day Section in ASP.NET Core Scheduler | Syncfusion
description: Learn how to enable the scroll option on the all-day section in the Syncfusion ASP.NET Core Scheduler when many appointments overflow the row.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---


# Enable Scroll Option on All-Day Section in ASP.NET Core Scheduler

When you have a large number of appointments in the all-day row, it is difficult to view all of them at once. In that case, you can enable the scroller option for the all-day row by setting `enableAllDayScroll` to `true`. Its default value is `false`. When this property is set to `true`, an individual scroller is enabled for the all-day row when it reaches its maximum height on expanding.

N> This property is not applicable when the Scheduler is configured with `height` set to `auto`.

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

