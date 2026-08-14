---
layout: post
title: Timescale in JavaScript Scheduler | Syncfusion
description: Learn how to customize time slots in the Syncfusion JavaScript Scheduler to set the interval and slot count per row.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---


# Timescale in JavaScript Scheduler

Time slots are the individual time cells displayed in Day, Week, and Work Week views (left in calendar views; top in timeline views). Use the [`timeScale`](https://ej2.syncfusion.com/documentation/api/schedule#timescale) property to control slot duration and appearance. The main options are:

- [`enable`](https://ej2.syncfusion.com/documentation/api/schedule/timeScale#enable) — When `true`, grid lines indicate each slot and appointments align to precise durations; when `false`, slots are not shown. Default: `true`.
- [`interval`](https://ej2.syncfusion.com/documentation/api/schedule/timeScale#interval) — Major slot duration in minutes (e.g., `60` for one hour). Default: `60`.
- [`slotCount`](https://ej2.syncfusion.com/documentation/api/schedule/timeScale#slotcount) — Number of minor slots per major interval. Default: `2` (each hour split into two 30-minute slots).

Note: the maximum number of slots rendered per day (interval × slotCount) is 1000 due to HTML table colspan limits. This restriction applies to `TimelineDay`, `TimelineWeek`, and `TimelineWorkWeek` views.

## Setting different time slot durations

Combine `interval` and `slotCount` to create custom slot durations. For example, `interval: 60` with `slotCount: 6` produces six 10-minute slots per hour.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/timescale-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/timescale-cs2/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/timescale-cs2/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/timescale-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/timescale-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/timescale-cs2/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/timescale-cs2/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/timescale-cs2" %}
{% endif %}

## Customizing time cells using templates

The [`timeScale`](https://ej2.syncfusion.com/documentation/api/schedule#timescale) property also provides template options for customizing the appearance of time slots:

* [`majorSlotTemplate`](https://ej2.syncfusion.com/documentation/api/schedule/timeScale#majorslottemplate) – Template for major time slots. Accepts a string or HTMLElement, and displays parsed content in the major time cells. Time details are accessible within the template.
* [`minorSlotTemplate`](https://ej2.syncfusion.com/documentation/api/schedule/timeScale#minorslottemplate) – Template for minor time slots. Accepts a string or HTMLElement, and displays parsed content in the minor time cells. Time details are accessible within the template.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/timescale-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/timescale-cs3/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/timescale-cs3/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/timescale-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/timescale-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/timescale-cs3/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/timescale-cs3/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/timescale-cs3" %}
{% endif %}

## Hiding the timescale

Grid lines indicating time durations can be toggled in the Scheduler by setting the [`enable`](https://ej2.syncfusion.com/documentation/api/schedule/timeScale#enable) option within the [`timeScale`](https://ej2.syncfusion.com/documentation/api/schedule#timescale) property to `true` or `false`. The default value is `true`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/timescale-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/timescale-cs4/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/timescale-cs4/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/timescale-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/timescale-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/timescale-cs4/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/timescale-cs4/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/timescale-cs4" %}
{% endif %}

## Highlighting current date and time

By default, the Scheduler highlights the current date in the date header on all views and marks the current system time in Day, Week, Work Week, Timeline Day, Timeline Week, and Timeline Work Week views. To disable the current time indicator, set the [`showTimeIndicator`](https://ej2.syncfusion.com/documentation/api/schedule#showtimeindicator) property to `false`. The default value is `true`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/timescale-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/timescale-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/timescale-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/timescale-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/timescale-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/timescale-cs5" %}
{% endif %}

> Refer to the [JavaScript Scheduler feature tour](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) for a comprehensive overview of its capabilities. Explore the [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/material/schedule/overview.html) to see how to present and manipulate data effectively.