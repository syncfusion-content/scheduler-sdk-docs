---
layout: post
title: Timezone in JavaScript Scheduler | Syncfusion
description: Learn how to render appointments in different time zones in the Syncfusion JavaScript Scheduler for global users and cross-region scheduling.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Timezone in JavaScript Scheduler

By default, the Scheduler uses the client's system time zone. Use the [`timezone`](https://ej2.syncfusion.com/documentation/api/schedule#timezone) property to render and process appointments in a specific time zone. Individual events can also include `startTimezone` and `endTimezone` fields in the event data.

Note: the `timezone` property affects appointment processing and the current-time indicator.

## Understanding date behavior in JavaScript

JavaScript's `new Date()` returns a Date object that includes local time and the client's time zone offset. For example:  
`Wed Dec 12 2018 05:23:27 GMT+0530 (India Standard Time)` — indicating local time 5:23 AM in IST (UTC+05:30).

## Scheduler with no explicit timezone

When no Scheduler `timezone` is specified, appointments render using the browser's local time zone. For example, `new Date()` values are shown in the viewer's local time.

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

Set the Scheduler's [`timezone`](https://ej2.syncfusion.com/documentation/api/schedule#timezone) to force appointments to display in a particular zone regardless of the client's local setting. The example below demonstrates appointments displayed in Eastern Time (UTC−05:00).

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

If events are stored in UTC and should appear at the same wall-clock time for all users, set the Scheduler [`timezone`](https://ej2.syncfusion.com/documentation/api/schedule#timezone) to `UTC`. This keeps displayed times consistent with stored database values across regions.

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

To preserve an appointment's originating zone, include `startTimezone` and `endTimezone` in the event data. The Scheduler adjusts rendering to reflect the correct offsets.

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

The timezone editor shows a large collection of zones by default. Customize the list at the application level to surface only relevant zones or to add/remove entries.

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

> Refer to the [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour for an overview, and see the [Scheduler demo](https://ej2.syncfusion.com/demos/#/material/schedule/overview.html) for sample usage.