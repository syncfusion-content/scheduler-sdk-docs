---
layout: post
title: Display Multiple Colors in Single Event in Angular Scheduler | Syncfusion
description: Learn how to render a single appointment with multiple colors in the Syncfusion Angular Scheduler.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Multi-Color events in Angular Scheduler

In [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler) we can display the multiple colors within a single event. This can be achieved by using the `template` option available within the [`eventSettings`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings) property. Here, we've used `SubCount` as an additional field. The SubCount field contains the background color and height values. Based on these values, events will be divided into different colors.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/multiple-color-event/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/multiple-color-event/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/scheduler-sdk/angular/schedule/multiple-color-event" %}