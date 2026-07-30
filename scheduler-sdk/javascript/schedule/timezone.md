---
layout: post
title: Timezone in JavaScript Schedule control | Syncfusion
description: Learn all about timezone handling in the Syncfusion JavaScript Scheduler control of Essential JS 2.
platform: scheduler-sdk
control: Timezone 
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Timezone in JavaScript Schedule control

By default, the Scheduler uses the client system's time zone. To display or process appointments in a specific time zone, use the [`timezone`](https://ej2.syncfusion.com/documentation/api/schedule#timezone) property. Individual appointments can also carry their own time zone information by using `startTimezone` and `endTimezone` fields in the event data.

> Note: The `timezone` property affects appointment processing and the current-time indicator only.

## Understanding date behavior in JavaScript

JavaScript's `new Date()` returns a Date object that includes local time and the client's time zone offset. For example:  
`Wed Dec 12 2018 05:23:27 GMT+0530 (India Standard Time)` — indicating local time 5:23 AM in IST (UTC+05:30).

## Scheduler with no explicit timezone

When no time zone is set on the Scheduler, appointments render according to the client browser's time zone. For example, providing start/end times with `new Date()` will present those times in the viewer's local time zone.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs1" %}
{% endif %}

## Scheduler set to a specific timezone

Setting the Scheduler's [`timezone`](https://ej2.syncfusion.com/documentation/api/schedule#timezone) property forces all appointments to display according to that time zone regardless of the client's local setting. The example below demonstrates appointments displayed in Eastern Time (UTC−05:00).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs2/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs2/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs2/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs2/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs2" %}
{% endif %}

## Display events at the same time everywhere (UTC)

If events are stored in UTC and the goal is to present the same wall-clock time to all users, set the Scheduler's [`timezone`](https://ej2.syncfusion.com/documentation/api/schedule#timezone) to `UTC`. Doing so ensures event times match the stored database times for every user, regardless of their local time zone.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs3/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs3/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs3/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs3/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs3" %}
{% endif %}

## Per-event time zones

To keep each appointment in its originating time zone, provide `startTimezone` and `endTimezone` properties in the event datasource. The Scheduler will render events with appropriate offsets so that time differences are correctly reflected.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs4" %}
{% endif %}

## Customize timezone list in the editor

The timezone editor displays a large collection (200+) of time zone names by default. You can customize this collection at the application level to show only relevant zones or to add/remove entries.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs5/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs5/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs5/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs5/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/time-zone-cs5" %}
{% endif %}

## Timezone utility methods

The Scheduler provides a `Timezone` utility with helper methods for offset calculation and conversion.

### offset

Calculates the offset (in minutes) between the passed UTC date and the specified time zone.

| Parameters | Type | Description |
|------------|------|-------------|
| date | Date | UTC date object. |
| timezone | String | IANA time zone identifier (for example, "Europe/Paris"). |

Returns `number`

```ts
// Assume local timezone is IST (UTC+05:30)
let timezone: Timezone = new Timezone();
let date: Date = new Date(2018,11,5,15,25,11);
let timeZoneOffset: number = timezone.offset(date, "Europe/Paris");
console.log(timeZoneOffset); // -60
```

### convert

Converts a date from one timezone to another.

| Parameters | Type | Description |
|------------|------|-------------|
| date | Date | UTC date object. |
| fromOffset | number|string | Source timezone (offset in minutes or IANA name). |
| toOffset | number|string | Target timezone (offset in minutes or IANA name). |

Returns `Date`

```ts
// Assume local timezone is IST (UTC+05:30)
let timezone: Timezone = new Timezone();
let date: Date = new Date(2018,11,5,15,25,11);
let convertedDate: Date = timezone.convert(date, "Europe/Paris", "Asia/Tokyo");
let convertedDate1: Date = timezone.convert(date, 60, -360);
console.log(convertedDate);  // 2018-12-05T08:55:11.000Z
console.log(convertedDate1); // 2018-12-05T16:55:11.000Z
```

### add

Adds the time difference between the passed UTC date and the specified timezone, returning a Date adjusted to that zone.

| Parameters | Type | Description |
|------------|------|-------------|
| date | Date | UTC date object. |
| timezone | String | IANA time zone identifier. |

Returns `Date`

```ts
// Assume local timezone is IST (UTC+05:30)
let timezone: Timezone = new Timezone();
let date: Date = new Date(2018,11,5,15,25,11);
let convertedDate: Date = timezone.add(date, "Europe/Paris");
console.log(convertedDate); // 2018-12-05T05:25:11.000Z
```

### remove

Removes the time difference between the passed UTC date and the specified timezone.

| Parameters | Type | Description |
|------------|------|-------------|
| date | Date | UTC date object. |
| timezone | String | IANA time zone identifier. |

Returns `Date`

```ts
// Assume local timezone is IST (UTC+05:30)
let timezone: Timezone = new Timezone();
let date: Date = new Date(2018,11,5,15,25,11);
let convertedDate: Date = timezone.remove(date, "Europe/Paris");
console.log(convertedDate); // 2018-12-05T14:25:11.000Z
```

### removeLocalOffset

Removes the local offset from the given date.

| Parameters | Type | Description |
|------------|------|-------------|
| date | Date | UTC date object. |

Returns `Date`

```ts
// Assume local timezone is IST (UTC+05:30)
let timezone: Timezone = new Timezone();
let date: Date = new Date(2018,11,5,15,25,11);
let convertedDate: Date = timezone.removeLocalOffset(date);
console.log(convertedDate); // 2018-12-05T15:25:11.000Z
```

> Refer to the [JavaScript Scheduler feature tour](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) for an overview of capabilities, and see the [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/material/schedule/overview.html) for sample usage and demonstrations.