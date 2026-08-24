---
layout: post
title: Entire Time in Responsive Mode in TypeScript Scheduler | Syncfusion
description: Learn how to show the entire time label in responsive mode in the Syncfusion TypeScript Scheduler by customizing the time slot display.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Show Entire Time in Responsive Mode in TypeScript Scheduler

In responsive mode, time slots may not always display the full time label if the available space is limited. For example, **9:00 AM** is visible since it has enough space, but if the Scheduler's start hour is set to **08:45 AM**, the time slot may truncate the label.

To ensure that complete time labels are displayed in responsive mode, you can use the [`majorSlotTemplate`](https://ej2.syncfusion.com/documentation/api/schedule/timeScale#majorslottemplate) property. This property allows customization of the major time slots to render proper and fully visible time labels in the Scheduler.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/timescale-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/timescale-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/timescale-cs1" %}
