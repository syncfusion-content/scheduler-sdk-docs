---
layout: post
title: Calendar Mode in ASP.NET Core Scheduler | Syncfusion
description: Learn how to render the Syncfusion ASP.NET Core Scheduler in Gregorian and Islamic calendar modes to support different regional date formats.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---


# Calendar Mode in ASP.NET Core Scheduler

The Scheduler supports the following two types of calendar mode:

* Gregorian Calendar
* Islamic Calendar

## Gregorian Calendar

By default, the Scheduler displays Gregorian calendar dates, which are the most widely used calendar dates in the world. The Gregorian calendar is a solar calendar with 12 months, each having 28 to 31 days. A year divisible by four is considered a leap year in this calendar mode. A leap year usually has 366 days, whereas a regular year has 365 days.

## Islamic Calendar

The Islamic calendar, also known as the Hijri or Muslim calendar, is a lunar calendar with 12 months in a year and 354 or 355 days. Each month denotes the beginning of a new lunar cycle, so each month can have 29 or 30 days depending on the visibility of the moon. In this calendar, odd-numbered months have 30 days and even-numbered months have 29 days.

N> The current Islamic year is 1440 AH. The Gregorian calendar usually runs from approximately 11 September 2018 to 30 August 2019 for this 1440 AH year.

The Scheduler has a `calendarMode` property that is used to switch between Gregorian and Islamic calendar modes. By default, it is set to `Gregorian`, and to use Islamic calendar dates, set the Scheduler's `calendarMode` to `Islamic`. The following example shows how to display Islamic calendar dates on the Scheduler.

It requires the following CLDR data to be loaded using the `loadCldr` function.

* numberingSystems.json
* ca-gregorian.json
* numbers.json
* timeZoneNames.json
* ca-islamic.json

N> For more information on installing the CLDR data, refer to the [`Internationalization`](https://ej2.syncfusion.com/aspnetcore/documentation/common/internationalization#installing-cldr-data) topic.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/islamic-calendar/calendar/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/islamic-calendar/calendar/data.cs %}
{% endhighlight %}
{% endtabs %}

N> However, this feature does not yet support recurrence options. Support for recurrence options is planned for a future release.

N> You can refer to our [ASP.NET Core Scheduler](https://www.syncfusion.com/scheduler-sdk/aspnet-core-scheduler) feature tour page for its feature highlights. You can also explore our [ASP.NET Core Scheduler example](https://ej2.syncfusion.com/aspnetcore/Schedule/Overview#/material) to learn how to present and manipulate data.
