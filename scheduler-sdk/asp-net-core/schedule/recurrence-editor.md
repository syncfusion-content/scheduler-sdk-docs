---
layout: post
title: Recurrence Editor in ASP.NET Core Scheduler | Syncfusion
description: Learn how to use the Recurrence Editor in the Syncfusion ASP.NET Core Scheduler to configure daily, weekly, monthly, and yearly recurrence rules.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---


# Recurrence Editor in ASP.NET Core Scheduler

The Recurrence editor is integrated into the Scheduler editor window by default to generate recurrence rules for events. It can also be used as a standalone component by referencing it from the Scheduler repository for recurrence-related workflows. Before using the samples, ensure the Scheduler package is installed and the project is configured with a data source.

N> All the valid recurrence rule string mentioned in the [`iCalendar`](https://tools.ietf.org/html/rfc5545#section-3.3.10) specifications are applicable to use with the recurrence editor.

## Customizing the repeat type option in editor

By default, there are five repeat options available in the recurrence editor:

* Never
* Daily
* Weekly
* Monthly
* Yearly

It is possible to customize the recurrence editor to display only specific repeat options, such as `Daily` and `Weekly`, by setting the appropriate [`frequencies`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Schedule.RecurrenceEditor.html#Syncfusion_EJ2_Schedule_RecurrenceEditor_Frequencies) option.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/recurrence-editor/editor-recurrence/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/recurrence-editor/editor-recurrence/data.cs %}
{% endhighlight %}
{% endtabs %}



The other properties available in the recurrence editor are listed below:

| Properties | Type | Description |
|------------|------|-------------|
| `firstDayOfWeek` | number | Sets the first day of the week on recurrence editor.|
| `startDate` | Date | Sets the start date from which date the recurrence event starts. |
| `dateFormat` | string | Sets the specific date format on recurrence editor.|
| `locale` | string | Sets the locale to be applied on recurrence editor.|
| `cssClass` | string | Allows styling to be applied on recurrence editor with custom class names.|
| `enableRtl` | boolean | Allows recurrence editor to render in RTL mode.|
| `minDate` | Date | Sets the minimum date on recurrence editor.|
| `maxDate` | Date | Sets the maximum date on recurrence editor.|
| `value` | string | Sets the recurrence rule value on recurrence editor. |
| `selectedType` | number | Sets the specific repeat type on the recurrence editor.|

## Customizing the End Type Option in Editor

By default, there are three end options available in the recurrence editor:

* Never
* Until
* Count

It is possible to customize the recurrence editor to display only specific end options, such as `Until` and `Count`, by setting the appropriate [`endTypes`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Schedule.RecurrenceEditor.html#Syncfusion_EJ2_Schedule_RecurrenceEditor_EndTypes) option.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/recurrence-editor/editor-endtype-recurrence/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/recurrence-editor/editor-endtype-recurrence/data.cs %}
{% endhighlight %}
{% endtabs %}


## Accessing the recurrence rule string

The recurrence rule is usually generated based on the options selected in the recurrence editor, and it follows the [`iCalendar`](https://tools.ietf.org/html/rfc5545#section-3.3.10) specifications. The generated recurrence rule string is valid and can be used with the Scheduler event’s recurrence rule field.

A `change` event is available in the recurrence editor. It triggers whenever the recurrence editor fields change. In the event argument, you can access the generated recurrence value through the `value` option, as shown in the following code example.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/recurrence-editor/rule-generation/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/recurrence-editor/rule-generation/data.cs %}
{% endhighlight %}
{% endtabs %}



## Set specific value on recurrence editor

It is possible to display the recurrence editor with specific options loaded initially based on the rule string that you provide. The fields of the recurrence editor change accordingly when you provide a particular rule through the `setRecurrenceRule` method.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/recurrence-editor/set-rule/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/recurrence-editor/set-rule/data.cs %}
{% endhighlight %}
{% endtabs %}



## Recurrence date generation

You can parse an event’s `recurrenceRule` to generate the date instances on which that event occurs by using the `getRecurrenceDates` method. It generates dates based on the `recurrenceRule` that you provide. The parameters for the `getRecurrenceDates` method are as follows.

| Field name | Type | Description |
|------------|------|-------------|
| `startDate` | Date| Appointment start date. |
| `rule` | String| Recurrence rule present in an event object. |
| `excludeDate` | String | Date collection (in ISO format) to be excluded. It is **optional**. |
| `maximumCount` | Number | Number of date count to be generated. It is **optional**. |
| `viewDate` | Date | Current view range's first date. It is **optional**. |

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/recurrence-editor/date-generation/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/recurrence-editor/date-generation/data.cs %}
{% endhighlight %}
{% endtabs %}



N> Above example will generate two dates January 7, 2018 & January 9 2018 by excluding the in between dates January 8 2018 & January 10 2018, since those dates were given in the exclusion list. Generated dates can then be utilized to create appointments.

## Recurrence date generation in server-side

It is also possible to generate recurrence date instances on the server side by manually referring to the `RecurrenceHelper` class, which is specifically written and used on the application side to handle this date generation process.

N> Refer [here](https://www.syncfusion.com/kb/10009/how-to-parse-the-recurrencerule-at-server-side) for step-by-step guidance on generating dates on the server side.

## Restrict date generation with specific count

If the rule is in the "NEVER ENDS" category, you can specify the maximum count when you want to stop generating dates starting from the provided start date. To do so, provide the appropriate `maximumCount` value within the `getRecurrenceDates` method, as shown in the following code example.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/recurrence-editor/maximum-count/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/recurrence-editor/maximum-count/data.cs %}
{% endhighlight %}
{% endtabs %}



N> You can refer to our [ASP.NET Core Scheduler](https://www.syncfusion.com/aspnet-core-ui-controls/scheduler) feature tour page for an overview of its features. You can also explore our [ASP.NET Core Scheduler example](https://ej2.syncfusion.com/aspnetcore/Schedule/Overview#/material) to learn how to present and manipulate data.
