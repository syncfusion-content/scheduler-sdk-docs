---
layout: post
title: Entire Time in Responsive Mode in JavaScript Scheduler | Syncfusion
description: Learn how to show the entire time label in responsive mode in the Syncfusion JavaScript Scheduler by customizing the time slot display.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Show Entire Time in Responsive Mode in JavaScript Scheduler

In responsive mode, time labels may be truncated when space is limited (for example, if the start hour is 08:45 AM). To ensure full time labels are displayed, provide a custom major-slot renderer using the [`majorSlotTemplate`](https://ej2.syncfusion.com/documentation/api/schedule/timeScale#majorslottemplate) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/timescale-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/timescale-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/timescale-cs1" %}