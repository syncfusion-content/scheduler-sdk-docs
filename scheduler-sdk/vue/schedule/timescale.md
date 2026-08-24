---
layout: post
title: Timescale Customization in Vue Scheduler | Syncfusion
description: Learn how to customize time slots in the Syncfusion Vue Scheduler to set the interval and slot count per row.
control: Scheduler
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Timescale Customization in Vue Scheduler

The time slots are usually the time cells displayed in the Day, Week, and Work Week views of both the calendar (leftmost position) and timeline views (top position). The [`timeScale`](../api/schedule/timeScale) property allows you to control and set the required time-slot duration for the work cells displayed in the Scheduler. It includes the following sub-options:

* [`enable`](https://ej2.syncfusion.com/vue/documentation/api/schedule/timeScale#enable) - When set to `true`, allows the Scheduler to display appointments accurately against the exact time duration. If set to `false`, all the appointments of a day are displayed one below the other with no grid lines. Its default value is `true`.
* [`interval`](https://ej2.syncfusion.com/vue/documentation/api/schedule/timeScale#interval) - Defines the time duration at which the time axis is displayed, such as 1 hour or 30 minutes. It accepts values in minutes and defaults to 60.
* [`slotCount`](https://ej2.syncfusion.com/vue/documentation/api/schedule/timeScale#slotcount) - Decides how many slots are split for the specified time interval duration. It defaults to 2, thus displaying two slots to represent an hour, with each slot depicting 30 minutes.

> Note: The upper limit for rendering slots within a single day, using the **interval** and **slotCount** properties of **timeScale**, is 1000. This constraint aligns with the maximum **colspan** value permissible for the **table** element, which is also capped at 1000. This restriction applies only to the `TimelineDay`, `TimelineWeek`, and `TimelineWorkWeek` views.

## Setting different time slot duration

The [`interval`](https://ej2.syncfusion.com/vue/documentation/api/schedule/timeScale#interval) and [`slotCount`](https://ej2.syncfusion.com/vue/documentation/api/schedule/timeScale#slotcount) properties can be used together in the Scheduler to set a different time-slot duration, as shown in the following code example. Here, six time slots together represent an hour.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/timescale-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/timescale-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/timescale-cs1" %}

## Customizing time cells using template

The [`timeScale`](../api/schedule/timeScale) property also supports templates that allow complete customization of time-slot appearance. These templates can be defined using either strings or HTML elements and have access to time-related details.


* [`majorSlotTemplate`](https://ej2.syncfusion.com/vue/documentation/api/schedule/timeScale#majorslottemplate) - The template option applied to major time slots. The template accepts either a string or an HTMLElement as the template design, and the parsed design is displayed on the time cells. The time details can be accessed within this template.
* [`minorSlotTemplate`](https://ej2.syncfusion.com/vue/documentation/api/schedule/timeScale#minorslottemplate) - The template option applied to minor time slots. The template accepts either a string or an HTMLElement as the template design, and the parsed design is displayed on the time cells. The time details can be accessed within this template.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/timescale-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/timescale-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/timescale-cs2" %}

## Hiding the timescale grid

The visibility of the Scheduler’s time grid can be controlled using the `enable` option in the [`timeScale`](../api/schedule/timeScale) configuration. When `enable` is set to `false`, the grid lines that represent exact time durations are hidden, and appointments are displayed without time alignment.

The default value of this option is `true`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/timescale-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/timescale-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/timescale-cs3" %}

## Highlighting the current date and time

By default, the Scheduler highlights the **current date** in the date header and displays a **current time indicator** in applicable views, including Day, Week, Work Week, Timeline Day, Timeline Week, and Timeline Work Week.

To disable the current time indicator, set the [`showTimeIndicator`](../api/schedule#showtimeindicator) property to `false`. The default value of this property is `true`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/timescale-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/timescale-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/timescale-cs4" %}

> For a complete overview of Scheduler features, visit the [Vue Scheduler](https://www.syncfusion.com/scheduler-sdk/vue-scheduler) feature tour page. Explore live examples at [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/tailwind3/schedule/overview.html) to learn how to present and manipulate data.