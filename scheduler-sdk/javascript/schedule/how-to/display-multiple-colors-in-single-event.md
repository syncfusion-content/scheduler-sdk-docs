---
layout: post
title: Display Multi-Color Events in JavaScript Scheduler | Syncfusion
description: Learn how to render a single appointment in multiple colors in the Syncfusion JavaScript Scheduler using a custom event template.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Multi-Color events in JavaScript Scheduler

The Scheduler can render a single event with multiple colors by dividing its visual representation into segments with different background colors. Use the [`template`](https://ej2.syncfusion.com/documentation/api/schedule/eventSettingsModel#template) property of [`eventSettings`](https://ej2.syncfusion.com/documentation/api/schedule#eventsettings) to provide a custom event template.

This example uses a `SubCount` field that holds background color and height values. The template divides the event into color segments based on those values.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/multiple-color-event/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/multiple-color-event/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/multiple-color-event" %}
