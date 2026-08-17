---
layout: post
title: Working Days and Hours in Vue Scheduler | Syncfusion
description: Learn how to set working days, working hours, time range, and first day of the week in the Syncfusion Vue Scheduler.
control: Scheduler
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Working Days and Hours in Vue Scheduler

The Scheduler can be customized in several ways. It also inherits many calendar-specific features, such as the following:

* Set a custom time range in the Scheduler
* Set different working hours
* Set different working days
* Set a different first day of the week
* Show or hide weekend days
* Show the week number

## Set working days

By default, the Scheduler considers **Monday to Friday** as working days and assigns the value `[1, 2, 3, 4, 5]`, where:

- `0` = Sunday  
- `1` = Monday  
- `2` = Tuesday  
- `3` = Wednesday  
- `4` = Thursday  
- `5` = Friday  
- `6` = Saturday  

Days not included in this collection are treated as **non‑working days**.

- **Work Week** and **Timeline Work Week** views display only the defined working days.
- Other views display all days but visually differentiate non‑working days using inactive cell styles.

> Working or business hours are applied only to the defined working days.

The following example configures **Monday, Wednesday, and Friday** as working days.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/working-days-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/working-days-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/working-days-cs5" %}

## Hiding weekend days

The [`showWeekend`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#showweekend) property is used to show or hide weekend days in a week. It is not applicable to the Work Week view because non-working days are typically not displayed in that view. By default, it is set to `true`. Days that are not part of the Scheduler's working days collection are treated as non-working or weekend days.

Here, the working days are defined as [1, 3, 4, 5] in the Scheduler. The remaining days (0, 2, 6 — Sunday, Tuesday, and Saturday) are considered non-working or weekend days and are hidden from all views when the [`showWeekend`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#showweekend) property is set to `false`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/working-days-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/working-days-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/working-days-cs6" %}

## Show week numbers

You can show the week number in the Scheduler header bar by setting the [`showWeekNumber`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#showweeknumber) property to `true`. By default, its value is `false`. In Month view, the week numbers are displayed in the first column.

> The [`showWeekNumber`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#showweeknumber) property is not applicable to Timeline views because the equivalent [headerRows](./header-rows#display-week-numbers-in-timeline-views) property provides the same behavior with additional customizations.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/working-days-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/working-days-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/working-days-cs7" %}

### Different options for showing week numbers

By default, week numbers are shown in the Scheduler based on the first day of the year. However, you can determine week numbers using the following criteria:

`FirstDay` – The first week of the year is calculated based on the first day of the year.

`FirstFourDayWeek` – The first week of the year begins with the first week that has four or more days.

`FirstFullWeek` – The first week of the year begins when the first day of the week (`firstDayOfWeek`) and the first day of the year match.

For more details, refer to [CalendarWeekRule](https://learn.microsoft.com/en-us/dotnet/api/system.globalization.calendarweekrule?view=net-5.0#remarks).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/working-days-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/working-days-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/working-days-cs8" %}

**Note**: Enable the [`showWeekNumber`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#showweeknumber) property to configure the `weekRule` property. Also, the `weekRule` property depends on the value of the [`firstDayOfWeek`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#firstdayofweek) property.

## Set working hours

Working hours indicate the work-hour range within the Scheduler. This range is highlighted with an active color on work cells. Configure working hours with the [`workHours`](https://ej2.syncfusion.com/vue/documentation/api/schedule#workhours) property, which is an object with the following sub-options:

* [`highlight`](https://ej2.syncfusion.com/vue/documentation/api/schedule/workHoursModel#highlight) – Enables or disables the highlighting of work hours.
* [`start`](https://ej2.syncfusion.com/vue/documentation/api/schedule/workHoursModel#start) – Sets the start time of the working or business hours for a day.
* [`end`](https://ej2.syncfusion.com/vue/documentation/api/schedule/workHoursModel#end) – Sets the end time of the working or business hours for a day.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/working-days-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/working-days-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/working-days-cs9" %}

## Scheduler displaying custom hours

You can display the Scheduler layout within a specific time range by hiding the unwanted hours. Set the start and end hours for the Scheduler using the [`startHour`](https://ej2.syncfusion.com/vue/documentation/api/schedule#starthour) and [`endHour`](https://ej2.syncfusion.com/vue/documentation/api/schedule#endhour) properties.

The following example displays the Scheduler from 7:00 AM to 6:00 PM, and hides the remaining hours in the UI.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/working-days-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/working-days-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/working-days-cs10" %}

## Setting the first day of the week

By default, the Scheduler uses `Sunday` as the first day of the week. To change it, set the [`firstDayOfWeek`](https://ej2.syncfusion.com/vue/documentation/api/schedule#firstdayofweek) property to a value from 0 to 6.

> Sunday is denoted as 0, Monday as 1, and so on.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/working-days-cs11/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/working-days-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/working-days-cs11" %}

## Scroll to a specific time and date

The Scheduler provides the [`scrollTo`](https://ej2.syncfusion.com/vue/documentation/api/schedule#scrollto) method to programmatically scroll to a specific date and time.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/scroll-to-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/scroll-to-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/scroll-to-cs1" %}

### How to scroll to the current time on initial load

In some scenarios, you may need to load the Scheduler so that the system's current time appears in the visible viewport area. In such cases, scroll the Scheduler to a time based on the system clock, as shown in the following example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/working-days-cs12/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/working-days-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/working-days-cs12" %}

> For a complete overview of resource scheduling features, visit the [Vue Scheduler](https://www.syncfusion.com/vue-components/vue-scheduler) feature tour page. Explore live examples at [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/tailwind3/schedule/overview.html) to learn how to present and manipulate data.

## See Also

* [To display the current time indicator](./timescale#highlighting-current-date-and-time)
* [To set different working hours dynamically](./how-to/set-different-work-hours)
* [To set different working hours for each resource](./resources#set-different-work-hours)
* [To set different working days for each resource](./resources#set-different-work-days)