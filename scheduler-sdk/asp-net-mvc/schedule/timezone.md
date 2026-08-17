---
layout: post
title: Timezone in ASP.NET MVC Scheduler | Syncfusion
description: Learn how to render appointments in different timezones in the Syncfusion ASP.NET MVC Scheduler for global users and cross-region scheduling.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---


# Timezone in ASP.NET MVC Scheduler

The Scheduler uses the current system timezone by default. If it needs to follow a different, user-specific timezone, use the [`Timezone`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_Timezone) property. In addition to applying a specific timezone to the Scheduler, you can also set different timezone values for individual appointments through the [`StartTimezone`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.ScheduleField.html#Syncfusion_EJ2_Schedule_ScheduleField_StartTimezone) and [`EndTimezone`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.ScheduleField.html#Syncfusion_EJ2_Schedule_ScheduleField_EndTimezone) properties, which can be defined as separate fields within the event fields collection.

**Note**: The **Timezone** property is only applicable for appointment processing and current time indication.

## Understanding date manipulation in JavaScript

The `new Date()` in JavaScript returns the exact current date object with complete time and timezone information. For example, it may return a value such as `Wed Dec 12 2018 05:23:27 GMT+0530 (India Standard Time)`, which indicates that the current date is December 12, 2018 and the current time is 5.23 AM on browsers following the IST timezone.

## Scheduler with no timezone

When no specific timezone is set to the Scheduler, appointments are displayed based on the client system's timezone, which is the default behavior. The same appointment viewed from a different timezone will have different start and end times.

The following code example displays an appointment from 9.00 AM to 10.00 AM when you open the Scheduler from any timezone. This is because the start and end times are provided using `new Date()`, which works based on the client browser's timezone.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/timezone/no-timezone/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/timezone/no-timezone/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/timezone/no-timezone/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/timezone/no-timezone/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



## Scheduler set to specific timezone

When a timezone is set on the Scheduler through the [`Timezone`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_Timezone) property, the appointments are displayed exactly based on the Scheduler timezone regardless of the client timezone. In the following code example, appointments are displayed based on Eastern Time (UTC -05:00).

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/timezone/schedule-timezone/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/timezone/schedule-timezone/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/timezone/schedule-timezone/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/timezone/schedule-timezone/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



## Display events at the same time everywhere with no time difference

Setting [`Timezone`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_Timezone) to UTC for the Scheduler displays the appointments at the same time as in the database for all users in different timezones.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/timezone/sametime/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/timezone/sametime/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/timezone/sametime/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/timezone/sametime/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



## Set specific timezone for events

You can set different timezones for Scheduler events by setting the [`StartTimezone`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.ScheduleField.html#Syncfusion_EJ2_Schedule_ScheduleField_StartTimezone) and [`EndTimezone`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.ScheduleField.html#Syncfusion_EJ2_Schedule_ScheduleField_EndTimezone) properties within the [`EventSettings`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_EventSettings) option. This allows each appointment to maintain a different timezone and be displayed on the Scheduler with the appropriate time differences.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/timezone/specific-timezone/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/timezone/specific-timezone/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/timezone/specific-timezone/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/timezone/specific-timezone/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



## Add or remove timezone names to/from the timezone collection

Instead of displaying all the timezone names within the timezone collection (more than 200 are displayed on the editor window timezone fields by default), you can customize the timezone collection at the application end as shown in the following example.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/timezone/timezone-collection/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/timezone/timezone-collection/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/timezone/timezone-collection/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/timezone/timezone-collection/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



## Timezone methods

### offset

This method is used to calculate the difference between the passed UTC date and timezone.

| Parameters | Type | Description |
|------------|------|-------------|
| Date | Date | UTC time as a date object. |
| Timezone | String | Timezone. |

Returns `number`

```sh
    // Assume your local timezone as IST/UTC+05:30
    var timezone = new ej.schedule.Timezone();
    var date = new Date(2018,11,5,15,25,11);
    var timeZoneOffset = timezone.offset(date,"Europe/Paris");
    console.log(timeZoneOffset); //-60
```

### convert

This method is used to convert the passed date from one timezone to another.

| Parameters | Type | Description |
|------------|------|-------------|
| `Date` | Date | UTC time as a date object. |
| `fromOffset` | number/string | Timezone from which the date needs to be converted. |
| `toOffset` | number/string | Timezone to which the date needs to be converted. |

Returns `Date`

```sh
    // Assume your local timezone as IST/UTC+05:30
    var timezone = new ej.schedule.Timezone();
    var date = new Date(2018,11,5,15,25,11);
    var convertedDate = timezone.convert(date, "Europe/Paris", "Asia/Tokyo");
    var convertedDate1 = timezone.convert(date, 60, -360);
    console.log(convertedDate); //2018-12-05T17:55:11.000Z
    console.log(convertedDate1); //2018-12-05T16:55:11.000Z
```

### add

This method is used to add the time difference between the passed UTC date and timezone.

| Parameters | Type | Description |
|------------|------|-------------|
| Date | Date | UTC time as a date object. |
| Timezone | String | Timezone. |

Returns `Date`

```sh
    // Assume your local timezone as IST/UTC+05:30
    var timezone = new ej.schedule.Timezone();
    var date = new Date(2018,11,5,15,25,11);
    var convertedDate = timezone.add(date, "Europe/Paris");
    console.log(convertedDate); //2018-12-05T05:25:11.000Z
```

### remove

This method is used to remove the time difference between the passed UTC date and timezone.

| Parameters | Type | Description |
|------------|------|-------------|
| Date | Date | UTC as a date object. |
| Timezone | String | Timezone. |

Returns `Date`

```sh
    // Assume your local timezone as IST/UTC+05:30
    var timezone = new ej.schedule.Timezone();
    var date = new Date(2018,11,5,15,25,11);
    var convertedDate = timezone.remove(date, "Europe/Paris");
    console.log(convertedDate); //2018-12-05T14:25:11.000Z
```

### removeLocalOffset

This method is used to remove the local offset time from the passed date.

| Parameters | Type | Description |
|------------|------|-------------|
| Date | Date | UTC as a date object. |

Returns `Date`

```sh
    // Assume your local timezone as IST/UTC+05:30
    var timezone = new ej.schedule.Timezone();
    var date = new Date(2018,11,5,15,25,11);
    var convertedDate = timezone.removeLocalOffset(date);
    console.log(convertedDate); //2018-12-05T15:25:11.000Z
```

N> You can refer to our [ASP.NET MVC Scheduler](https://www.syncfusion.com/scheduler-sdk/aspnet-mvc-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [ASP.NET MVC Scheduler](https://ej2.syncfusion.com/aspnetmvc/schedule/overview#/fluent2) example to know how to present and manipulate data.
