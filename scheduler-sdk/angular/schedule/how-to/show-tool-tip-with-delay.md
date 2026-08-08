---
layout: post
title: Show Tooltip with Delay in Angular Scheduler | Syncfusion
description: Learn how to show the appointment tooltip with a delay in the Syncfusion Angular Scheduler for a smoother user experience.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Show Tooltip with Delay in Angular Scheduler

By default, the [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler) tooltip is displayed immediately. You can introduce a delay before the tooltip appears by setting the Tooltip [`openDelay`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/tooltipModel#opendelay) property.

The following example demonstrates how to configure the tooltip delay in the Schedule component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/default-cs53/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/default-cs53/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/scheduler-sdk/angular/schedule/default-cs53" %}