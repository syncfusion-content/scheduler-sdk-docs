---
layout: post
title: Working Days in TypeScript Scheduler | Syncfusion
description: Learn how to set working days, working hours, time range, and first day of the week in the Syncfusion TypeScript Scheduler.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Working Days in TypeScript Scheduler

The Scheduler can be customized in various ways and inherits almost all calendar-specific features, including options to:

* Set a custom time range display on the Scheduler
* Set different working hours
* Set different working days
* Set a different first day of the week
* Show or hide weekend days
* Show the week number

## Set working days

By default, the Scheduler considers the weekdays from Monday to Friday as `Working days` and therefore defaults to [1, 2, 3, 4, 5], where 1 represents Monday, 2 represents Tuesday, and so on. The days that are not defined in this working days collection are considered non-working days. When weekend days are hidden in the Scheduler, all non-working days are also hidden from the layout.

The Work Week and Timeline Work Week views display the defined working days exactly on the Scheduler layout, whereas other views display all days and simply differentiate the non-working days in the UI with an inactive cell color.

> Working business hours displayed on the Scheduler are valid only on these specified working days.

The following example shows how to set the Scheduler to display Monday, Wednesday, and Friday as the working days of a week.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/working-days-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/working-days-cs1" %}
{% endif %}

## Hiding weekend days

The [`showWeekend`](https://ej2.syncfusion.com/documentation/api/schedule/views#showweekend) property is used to show or hide the weekend days of a week, and it is not applicable to the Work Week view because non-working days are usually not displayed in that view. By default, it is set to `true`. The days that are not part of the Scheduler's working days collection are usually considered non-working or weekend days.

Here, the working days are defined as [1, 3, 4, 5] in the Scheduler, and therefore the remaining days (0, 2, 6 — Sunday, Tuesday, and Saturday) are considered non-working or weekend days and are hidden from all views when the [`showWeekend`](https://ej2.syncfusion.com/documentation/api/schedule/views#showweekend) property is set to `false`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs2/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs2/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/working-days-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs2/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs2/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/working-days-cs2" %}
{% endif %}

## Show week numbers

The week number count can be displayed in the header bar of the Scheduler by setting the [`showWeekNumber`](https://ej2.syncfusion.com/documentation/api/schedule/views#showweeknumber) property to `true`. By default, this property is set to `false`. In Month view, the week numbers are displayed as the first column.

> The [`showWeekNumber`](https://ej2.syncfusion.com/documentation/api/schedule/views#showweeknumber) property is not applicable on Timeline views, as it has the equivalent [`headerRows`](./header-rows#display-week-numbers-in-timeline-views) property to handle such requirement with additional customizations.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs3/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs3/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/working-days-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs3/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs3/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/working-days-cs3" %}
{% endif %}

### Different options in showing week numbers

By default, week numbers are shown in the Scheduler based on the first day of the year. However, the week numbers can be determined based on the following criteria.

`FirstDay` – The first week of the year is calculated based on the first day of the year.

`FirstFourDayWeek` – The first week of the year begins with the first week that has four or more days.

`FirstFullWeek` – The first week of the year begins when it contains the first day of the week (`firstDayOfWeek`) and the first day of the year.

For more details, refer to [this link](https://docs.microsoft.com/en-us/dotnet/api/system.globalization.calendarweekrule?view=net-5.0#remarks).

**Note:** Enable the [`showWeekNumber`](https://ej2.syncfusion.com/documentation/api/schedule/views#showweeknumber) property to configure the [`weekRule`](https://ej2.syncfusion.com/documentation/api/schedule#weekrule) property. Also, the `weekRule` property depends on the value of the [`firstDayOfWeek`](https://ej2.syncfusion.com/documentation/api/schedule/views#firstdayofweek) property.

Working hours indicate the work-hour range within the Scheduler and are visually highlighted with an active color on work cells. The working hours can be set on the Scheduler using the [`workHours`](https://ej2.syncfusion.com/documentation/api/schedule#workhours) property, which is an object type and includes the following sub-options:

* [`highlight`](https://ej2.syncfusion.com/documentation/api/schedule/workHoursModel#highlight) – Enables or disables the highlighting of work hours.
* [`start`](https://ej2.syncfusion.com/documentation/api/schedule/workHoursModel#start) – Sets the start time of the working or business hours of a day.
* [`end`](https://ej2.syncfusion.com/documentation/api/schedule/workHoursModel#end) – Sets the end time of the working or business hours of a day.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs5/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs5/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/working-days-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs5/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs5/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/working-days-cs5" %}
{% endif %}

## Scheduler displaying custom hours

The Scheduler layout can display specific time durations by hiding unwanted hours. To do so, set the start and end hours for the Scheduler using the [`startHour`](https://ej2.syncfusion.com/documentation/api/schedule#starthour) and [`endHour`](https://ej2.syncfusion.com/documentation/api/schedule#endhour) properties respectively.

The following code example displays the Scheduler from 7:00 AM to 6:00 PM and hides the remaining hours in the UI.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs6/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs6/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/working-days-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs6/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs6/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/working-days-cs6" %}
{% endif %}

## Setting start day of the week

By default, the Scheduler sets `Sunday` as the first day of the week. To change the Scheduler's start day of the week to a different day, use the [`firstDayOfWeek`](https://ej2.syncfusion.com/documentation/api/schedule#firstdayofweek) property with values ranging from 0 to 6.

> Here, Sunday is always denoted as 0, Monday as 1, and so on.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs7/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs7/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/working-days-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs7/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs7/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/working-days-cs7" %}
{% endif %}

## Scroll to specific time and date

The Scheduler can be manually scrolled to a specific time using the [`scrollTo`](https://ej2.syncfusion.com/documentation/api/schedule#scrollto) method, as shown in the following code example.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/scroll-to-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/scroll-to-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/scroll-to-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/scroll-to-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/scroll-to-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/scroll-to-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/scroll-to-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/scroll-to-cs1" %}
{% endif %}

### How to scroll to current time on initial load

In scenarios where the Scheduler needs to display the system's current time in the currently visible viewport area, it must be scrolled to a specific time based on the system's current time, as shown in the following code example.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs8/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs8/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/working-days-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs8/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/working-days-cs8/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/working-days-cs8" %}
{% endif %}

> Refer to the [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour page for an overview of its capabilities. You can also explore our [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/tailwind3/schedule/overview.html) to learn how to present and manipulate data.

## See Also

* [To display the current time indicator](./timescale#highlighting-current-date-and-time)
* [To set different working hours dynamically](./how-to/set-different-work-hours)
* [To set different working hours for each resource](./resources#set-different-work-hours)
* [To set different working days for each resource](./resources#set-different-work-days)