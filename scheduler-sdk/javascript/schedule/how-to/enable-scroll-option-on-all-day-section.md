---
layout: post
title: Enable Scroll in All-Day Section in JavaScript Scheduler | Syncfusion
description: Learn how to enable a scroll option on the all-day section in the Syncfusion JavaScript Scheduler when many appointments overflow the row.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Enable Scrolling in the All-Day Section of the JavaScript Scheduler

When the all-day row contains many appointments, viewing them can be difficult. Enable a dedicated scroller for the all-day row by setting [`enableAllDayScroll`](https://ej2.syncfusion.com/documentation/api/schedule#enablealldayscroll) to `true` (default: `false`).

> Note: This property does not apply when the Scheduler height is `auto`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs39/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs39/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs39" %}