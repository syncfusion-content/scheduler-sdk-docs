---
layout: post
title: Multi-Colors in Single Event in React Scheduler | Syncfusion
description: Learn how to render a single appointment with multiple colors in the Syncfusion React Scheduler using a custom event template.
control: Scheduler
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Multi-Color events in React Scheduler

In the [React Scheduler](https://www.syncfusion.com/scheduler-sdk/react-scheduler), you can display multiple colors within a single event. This is achieved by using the `template` option within the [`eventSettings`](https://ej2.syncfusion.com/react/documentation/api/schedule/eventSettings) property. In this example, `SubCount` is used as an additional field. The `SubCount` field contains the background color and height values. Based on these values, events are divided into different colors.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/scheduler-sdk/react/schedule/multiple-color-event/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/scheduler-sdk/react/schedule/multiple-color-event/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/react/schedule/multiple-color-event/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/react/schedule/multiple-color-event" %}