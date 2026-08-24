---
layout: post
title: Recurrence Editor in ASP.NET MVC Scheduler | Syncfusion
description: Learn how to use the Recurrence Editor in the Syncfusion ASP.NET MVC Scheduler to configure daily, weekly, monthly, and yearly recurrence rules.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---


# Recurrence Editor in ASP.NET MVC Scheduler

The Recurrence Editor is integrated into the Scheduler editor window by default to handle recurrence rule generation for events. Apart from this, it can also be used as an individual component referenced from the Scheduler repository to work with recurrence-related processes.

N> All valid recurrence rule strings mentioned in the [`iCalendar`](https://datatracker.ietf.org/doc/html/rfc5545#section-3.3.10) specifications are supported by the Recurrence Editor.

## Customizing the repeat type option in editor

By default, there are five repeat options available in the Recurrence Editor:

* Never
* Daily
* Weekly
* Monthly
* Yearly

You can also customize the Recurrence Editor to display only specific repeat options, such as `Daily` and `Weekly`, by setting the [`frequencies`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.RecurrenceEditor.html#Syncfusion_EJ2_Schedule_RecurrenceEditor_Frequencies) option.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/recurrence-editor/editor-recurrence/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/recurrence-editor/editor-recurrence/data.cs %}
{% endhighlight %}
{% endtabs %}



The other properties available in the Recurrence Editor are tabulated below:

| Properties | Type | Description |
|------------|------|-------------|
| `FirstDayOfWeek` | number | Sets the first day of the week in the Recurrence Editor. |
| `StartDate` | Date | Sets the date from which the recurrence event starts. |
| `DateFormat` | string | Sets the specific date format in the Recurrence Editor. |
| `Locale` | string | Sets the locale to be applied on the Recurrence Editor. |
| `CssClass` | string | Allows custom styling to be applied on the Recurrence Editor using class names. |
| `EnableRtl` | boolean | Allows the Recurrence Editor to render in RTL mode. |
| `MinDate` | Date | Sets the minimum date in the Recurrence Editor. |
| `MaxDate` | Date | Sets the maximum date in the Recurrence Editor. |
| `Value` | string | Sets the recurrence rule value on the Recurrence Editor. |
| `SelectedType` | number | Sets the specific repeat type on the Recurrence Editor. |

## Customizing the End type option in Editor

By default, there are three end options available in the Recurrence Editor:

* Never
* Until
* Count

You can also customize the Recurrence Editor to display only specific end options, such as `Until` and `Count`, by setting the [`endTypes`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.RecurrenceEditor.html#Syncfusion_EJ2_Schedule_RecurrenceEditor_EndTypes) option.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/recurrence-editor/editor-endtype-recurrence/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/recurrence-editor/editor-endtype-recurrence/data.cs %}
{% endhighlight %}
{% endtabs %}


## Accessing the recurrence rule string

The recurrence rule is usually generated based on the options selected from the Recurrence Editor and follows the [`iCalendar`](https://datatracker.ietf.org/doc/html/rfc5545#section-3.3.10) specifications. The generated recurrence rule string is a valid value to be used with the Scheduler event's recurrence rule field.

A `Change` event is available in the Recurrence Editor that triggers every time the fields of the Recurrence Editor change. Within this event argument, you can access the generated recurrence value through the `value` option as shown in the following code example.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/recurrence-editor/rule-generation/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/recurrence-editor/rule-generation/data.cs %}
{% endhighlight %}
{% endtabs %}



## Set specific value on Recurrence Editor

It is possible to display the Recurrence Editor with specific options loaded initially, based on the rule string you provide. The fields of the Recurrence Editor will update their values accordingly when you provide a particular rule through the `setRecurrenceRule` method.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/recurrence-editor/set-rule/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/recurrence-editor/set-rule/data.cs %}
{% endhighlight %}
{% endtabs %}



## Recurrence date generation

You can parse the `RecurrenceRule` of an event to generate the date instances on which that particular event occurs, using the `getRecurrenceDates` method. It generates the dates based on the `RecurrenceRule` that you provide. The parameters to be passed to the `getRecurrenceDates` method are as follows.

| Field name | Type | Description |
|------------|------|-------------|
| `startDate` | Date | Appointment start date. |
| `rule` | String | Recurrence rule present in an event object. |
| `excludeDate` | String | Date collection (in ISO format) to be excluded. It is **optional**. |
| `maximumCount` | Number | Maximum number of dates to be generated. It is **optional**. |
| `viewDate` | Date | Current view range's first date. It is **optional**. |

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/recurrence-editor/date-generation/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/recurrence-editor/date-generation/data.cs %}
{% endhighlight %}
{% endtabs %}



N> The above example will generate two dates, January 7, 2018 and January 9, 2018, by excluding the in-between dates January 8, 2018 and January 10, 2018, since those dates were specified in the exclusion list. The generated dates can then be used to create appointments.

## Recurrence date generation on the server-side

It is also possible to generate recurrence date instances on the server-side by referring to the `RecurrenceHelper` class, which is specifically written and referenced from the application end to handle the date generation process.

N> Refer [here](https://support.syncfusion.com/kb/article/8683/how-to-parse-the-recurrence-rule-at-server-side-in-aspnet-mvc-schedule) for the step-by-step procedure to achieve date generation on the server-side.

## Restrict date generation with a specific count

If the rule is given in the "NEVER ENDS" category, you can specify the maximum count at which date generation should stop, starting from the provided start date. To do so, provide the appropriate `maximumCount` value within the `getRecurrenceDates` method as shown in the following code example.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/recurrence-editor/maximum-count/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/recurrence-editor/maximum-count/data.cs %}
{% endhighlight %}
{% endtabs %}



N> You can refer to our [ASP.NET MVC Scheduler](https://www.syncfusion.com/scheduler-sdk/aspnet-mvc-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [ASP.NET MVC Scheduler](https://ej2.syncfusion.com/aspnetmvc/schedule/overview#/fluent2) example to know how to present and manipulate data.
