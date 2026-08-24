---
layout: post
title: Multi-Color Events in Angular Schedule | Syncfusion
description: Learn how to render a single appointment with multiple colors in the Syncfusion Angular Scheduler component.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Multi-color events in Angular Scheduler

In [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler), you can display multiple colors within a single event by using a custom event template. The `template` option inside `eventSettings` enables this behavior. In the example below, a `SubCount` field supplies background color and height values, and the template uses those values to render event segments in different colors.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/multiple-color-event/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/multiple-color-event/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/samples/scheduler-sdk/angular/schedule/multiple-color-event" %}