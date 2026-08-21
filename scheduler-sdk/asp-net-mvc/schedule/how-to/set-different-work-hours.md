---
layout: post
title: Different Working Hours in ASP.NET MVC Scheduler | Syncfusion
description: Learn how to set different work hours for specific days in the Syncfusion ASP.NET MVC Scheduler to match varied team schedules.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---

# Set Different Working Hours on Different Days in ASP.NET MVC Scheduler

By default, the work hours of the Scheduler are highlighted based on the start and end values provided within the [`WorkHours`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_WorkHours) property, which remains the same for all days. To highlight a different work hours range for different days, use the [`setWorkHours`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_SetWorkHours_System_Date_System_String_System_String_) method. You can pass a single date object or a collection of multiple date objects as the first argument, and the start and end time values to be applied as work hours as the second and third arguments, respectively. In the following code example, on a button click, 11:00 AM to 08:00 PM on the 15th and 17th of February are added as work hours.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/different-workhours/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/different-workhours/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/different-workhours/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/how-to/different-workhours/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

