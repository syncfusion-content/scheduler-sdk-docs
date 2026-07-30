---
layout: post
title: Calendar mode in JavaScript Scheduler control | Syncfusion
description: Learn here all about Calendar mode in Syncfusion JavaScript Scheduler control of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Calendar mode 
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Calendar mode in JavaScript Scheduler control

The Scheduler supports two calendar modes to accommodate different regional and cultural requirements for date representation and event scheduling.

* Gregorian Calendar
* Islamic Calendar

## Gregorian Calendar

The Scheduler displays Gregorian calendar dates by default, which is the most widely used calendar system worldwide. The Gregorian calendar is a solar calendar consisting of 12 months with 28 to 31 days each. A standard year contains 365 days, while a leap year (occurring when the year is divisible by four, with certain exceptions) contains 366 days.

## Islamic Calendar

The Islamic calendar, also known as the Hijri or Muslim calendar, is a lunar calendar consisting of 12 months with a total of 354 or 355 days per year. Each month begins with the sighting of the new lunar cycle, resulting in months that alternate between 29 and 30 days. Typically, odd-numbered months contain 30 days while even-numbered months contain 29 days.

> The current Islamic year is 1440 AH. Usually the Gregorian calendar runs from approximately 11 September 2018 to 30 August 2019 for this 1440 AH year.

The Scheduler provides the [`calendarMode`](https://ej2.syncfusion.com/documentation/api/schedule#calendarmode) property to switch between Gregorian and Islamic calendar modes. This property accepts the values `Gregorian` (default) or `Islamic`. Setting this property to `Islamic` enables the Scheduler to display and process dates according to the Islamic calendar system. The following example demonstrates how to configure the Scheduler to display Islamic calendar dates.

To implement Islamic calendar functionality in the Scheduler, import the `Calendar` and `Islamic` modules from the `ej2-calendars` package and inject them using the `Calendar.Inject` method. Additionally, the following CLDR (Common Locale Data Repository) data files must be loaded using the `loadCldr` function:

* numberingSystems.json
* ca-gregorian.json
* numbers.json
* timeZoneNames.json
* ca-islamic.json

> For detailed instructions on installing and loading CLDR data, refer to the [`Internationalization`](https://ej2.syncfusion.com/documentation/common/internationalization#installing-cldr-data) documentation.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/islamic-calendar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/islamic-calendar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/islamic-calendar-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/islamic-calendar-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/islamic-calendar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/islamic-calendar-cs1" %}
{% endif %}

> You can refer to our [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/tailwind3/schedule/overview.html) to knows how to present and manipulate data.
