---
layout: post
title: Timescale in TypeScript Scheduler control | Syncfusion
description: Learn all about Timescale in the Syncfusion TypeScript Scheduler control of Essential JS 2, including configuration, customization, and advanced options.
platform: scheduler-sdk
control: Timescale 
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Timescale in TypeScript Scheduler control

Time slots are the individual time cells displayed in the Day, Week, and Work Week views of the Scheduler—positioned to the left in calendar views and at the top in timeline views. The [`timeScale`](https://ej2.syncfusion.com/documentation/api/schedule#timescale) property enables precise control over the time slot duration and appearance for Scheduler work cells. The `timeScale` property includes the following sub-options:

* [`enable`](https://ej2.syncfusion.com/documentation/api/schedule/timeScale#enable) – When set to `true`, the Scheduler displays appointments accurately against the exact time duration, with grid lines indicating each slot. If set to `false`, all appointments for a day are shown one below the other without grid lines. Default is `true`.
* [`interval`](https://ej2.syncfusion.com/documentation/api/schedule/timeScale#interval) – Defines the duration of each major time slot in minutes (e.g., 60 for 1 hour, 30 for 30 minutes). Default is 60.
* [`slotCount`](https://ej2.syncfusion.com/documentation/api/schedule/timeScale#slotcount) – Specifies how many minor slots each major interval is divided into. Default is 2, so each hour is split into two 30-minute slots.

> **Note:** The maximum number of slots that can be rendered in a single day using the **interval** and **slotCount** properties is 1000. This limit matches the maximum **colspan** value allowed for the HTML **table** element. This restriction applies only to the `TimelineDay`, `TimelineWeek`, and `TimelineWorkWeek` views.

## Setting different time slot durations

The [`interval`](https://ej2.syncfusion.com/documentation/api/schedule/timeScale#interval) and [`slotCount`](https://ej2.syncfusion.com/documentation/api/schedule/timeScale#slotcount) properties can be combined to set custom time slot durations. For example, setting `interval` to 60 and `slotCount` to 6 creates six 10-minute slots per hour, as shown in the following example.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/timescale-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/timescale-cs2/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/timescale-cs2/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/timescale-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/timescale-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/timescale-cs2/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/timescale-cs2/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/timescale-cs2" %}
{% endif %}

## Customizing time cells using templates

The [`timeScale`](https://ej2.syncfusion.com/documentation/api/schedule#timescale) property also provides template options for customizing the appearance of time slots:

* [`majorSlotTemplate`](https://ej2.syncfusion.com/documentation/api/schedule/timeScale#majorslottemplate) – Template for major time slots. Accepts a string or HTMLElement, and displays parsed content in the major time cells. Time details are accessible within the template.
* [`minorSlotTemplate`](https://ej2.syncfusion.com/documentation/api/schedule/timeScale#minorslottemplate) – Template for minor time slots. Accepts a string or HTMLElement, and displays parsed content in the minor time cells. Time details are accessible within the template.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/timescale-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/timescale-cs3/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/timescale-cs3/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/timescale-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/timescale-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/timescale-cs3/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/timescale-cs3/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/timescale-cs3" %}
{% endif %}

## Hiding the timescale

Grid lines indicating time durations can be toggled in the Scheduler by setting the [`enable`](https://ej2.syncfusion.com/documentation/api/schedule/timeScale#enable) option within the [`timeScale`](https://ej2.syncfusion.com/documentation/api/schedule#timescale) property to `true` or `false`. The default value is `true`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/timescale-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/timescale-cs4/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/timescale-cs4/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/timescale-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/timescale-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/timescale-cs4/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/timescale-cs4/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/timescale-cs4" %}
{% endif %}

## Highlighting current date and time

By default, the Scheduler highlights the current date in the date header on all views and marks the current system time in Day, Week, Work Week, Timeline Day, Timeline Week, and Timeline Work Week views. To disable the current time indicator, set the [`showTimeIndicator`](https://ej2.syncfusion.com/documentation/api/schedule#showtimeindicator) property to `false`. The default value is `true`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/timescale-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/timescale-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/timescale-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/timescale-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/timescale-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/timescale-cs5" %}
{% endif %}

> Refer to the [JavaScript Scheduler feature tour](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) for a comprehensive overview of its capabilities. Explore the [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/material/schedule/overview.html) to see how to present and manipulate data effectively.