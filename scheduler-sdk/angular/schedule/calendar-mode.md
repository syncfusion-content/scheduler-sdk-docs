---
layout: post
title: Calendar Mode in Angular Scheduler | Syncfusion
description: Learn how to render the Syncfusion Angular Scheduler in Gregorian and Islamic calendar modes to support different regional date formats.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Calendar Mode in Angular Scheduler

The Scheduler supports two calendar modes:

* Gregorian Calendar
* Islamic Calendar

## Gregorian Calendar

By default, the Scheduler uses the Gregorian calendar, the most widely adopted solar calendar globally. The Gregorian calendar consists of 12 months, each with 28 to 31 days. Leap years, which are divisible by four, have 366 days; non-leap years contain 365 days.

## Islamic Calendar

The Islamic calendar, also known as the Hijri or Muslim calendar, is a lunar calendar with 12 months in a year and 354 or 355 days. Each month denotes the start of a new lunar cycle, and each month can have 29 or 30 days depending on moon visibility. Odd-numbered months have 30 days, and even-numbered months have 29 days.

> The current Islamic year is 1440 AH. Usually, the Gregorian calendar runs from approximately 11 September 2018 to 30 August 2019 for this 1440 AH year.

The Scheduler has a property [`calendarMode`](https://ej2.syncfusion.com/angular/documentation/api/schedule#calendarmode) that is used to switch between the Gregorian and Islamic calendar modes. By default, it is set to `Gregorian`, and to use Islamic calendar dates, set the Scheduler `calendarMode` to `Islamic`. The following example shows how to display Islamic calendar dates on the Scheduler.

To use the Islamic calendar in the Scheduler, import the `Calendar` and `Islamic` modules from the `ej2-calendars` package and inject them using the `Calendar.Inject` method. Also, ensure the following CLDR data files are loaded via the `loadCldr` function, as this is necessary for multilingual and Islamic date support:

* numberingSystems.json
* ca-gregorian.json
* numbers.json
* timeZoneNames.json
* ca-islamic.json

> For complete instructions on installing and loading CLDR data, refer to the [Internationalization guide](https://ej2.syncfusion.com/angular/documentation/common/internationalization#installing-cldr-data).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/islamic-calendar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/islamic-calendar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://helpstaging.syncfusion.com/samples/scheduler-sdk/angular/schedule/islamic-calendar-cs1" %}

> You can refer to our [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler) feature tour page for its feature overview. You can also explore our [Angular Scheduler example](https://ej2.syncfusion.com/angular/demos/#/material/schedule/overview) to learn how to present and manipulate data.
