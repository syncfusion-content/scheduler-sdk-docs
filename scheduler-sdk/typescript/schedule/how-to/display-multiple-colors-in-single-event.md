---
layout: post
title: Display Multi-Color Events in TypeScript Scheduler | Syncfusion
description: Learn how to render a single appointment in multiple colors in the Syncfusion TypeScript Scheduler using a custom event template.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Multi-Color events in TypeScript Scheduler

The Scheduler allows rendering a single event with multiple colors by dividing its visual representation into segments with different background colors. This is achieved using the [`template`](https://ej2.syncfusion.com/documentation/api/schedule/eventSettingsModel#template) property of [`eventSettings`](https://ej2.syncfusion.com/documentation/api/schedule#eventsettings).
Here, `SubCount` is used as an additional field. The `SubCount` field contains the background color and height values. Based on these values, events are divided into different colors.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/multiple-color-event/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/multiple-color-event/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/multiple-color-event" %}

