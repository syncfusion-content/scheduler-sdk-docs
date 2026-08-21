---
layout: post
title: Row Auto Height in ASP.NET MVC Scheduler | Syncfusion
description: Learn how to auto-adjust row height in the Syncfusion ASP.NET MVC Scheduler timeline and month views to display all overlapping appointments.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---


# Row Auto Height in ASP.NET MVC Scheduler

By default, the height of the Scheduler rows in the Timeline views is static and therefore, when the same time range holds multiple overlapping appointments, a `+n more` text indicator is displayed. With this feature enabled, you can now view all the overlapping appointments present in those specific time ranges by auto-adjusting the row height based on the appointment count, instead of displaying the `+n more` text indicator.

To enable auto row height adjustments on Scheduler Timeline views and the Month view, set `true` to the [`RowAutoHeight`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_RowAutoHeight) property, whose default value is `false`.

N> This auto row height adjustment is applicable only on the Timeline views as well as on the calendar Month view.

Now, let's see how it works on those applicable views with examples.

## Calendar Month view

By default, the rows of the calendar Month view can hold only a limited number of appointments based on the row height, and the rest of the overlapping appointments are indicated with a `+n more` text indicator. The following example shows how the month view row auto-adjusts based on the number of appointments when this [`RowAutoHeight`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_RowAutoHeight) feature is enabled.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/row-auto-height/month-view/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/row-auto-height/month-view/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/row-auto-height/month-view/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/row-auto-height/month-view/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



## Timeline views

When the feature [`RowAutoHeight`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_RowAutoHeight) is enabled in Timeline views, the row height gets auto-adjusted based on the number of overlapping events occupied on the same time range, which is demonstrated in the following example.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/row-auto-height/timeline-view/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/row-auto-height/timeline-view/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/row-auto-height/timeline-view/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/row-auto-height/timeline-view/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



## Timeline views with multiple resources

The following example shows how the auto row adjustment feature works on the Timeline views with multiple resources.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/row-auto-height/timeline-resource/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/row-auto-height/timeline-resource/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/row-auto-height/timeline-resource/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/row-auto-height/timeline-resource/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



## Appointments occupying entire cell

By default, with the [`RowAutoHeight`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_RowAutoHeight) feature enabled, there will be whitespace at the bottom of the cell when an appointment is rendered. To avoid this whitespace, set the [`IgnoreWhitespace`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.ScheduleEventSettings.html#Syncfusion_EJ2_Schedule_ScheduleEventSettings_IgnoreWhitespace) property to `true` within [`EventSettings`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_EventSettings); its default value is `false`. In the following code example, the whitespace below the appointments has been ignored.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/row-auto-height/ignore-whitespace/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/row-auto-height/ignore-whitespace/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/row-auto-height/ignore-whitespace/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/row-auto-height/ignore-whitespace/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



**Note**: The [`IgnoreWhitespace`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.ScheduleEventSettings.html#Syncfusion_EJ2_Schedule_ScheduleEventSettings_IgnoreWhitespace) property is applicable only when the [`RowAutoHeight`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_RowAutoHeight) feature is enabled in the Scheduler.

N> You can refer to our [ASP.NET MVC Scheduler](https://www.syncfusion.com/scheduler-sdk/aspnet-mvc-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [ASP.NET MVC Scheduler](https://ej2.syncfusion.com/aspnetmvc/schedule/overview#/fluent2) example to know how to present and manipulate data.
