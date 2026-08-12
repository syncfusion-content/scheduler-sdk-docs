---
layout: post
title: Enable Scroll Option on All-Day Section in Scheduler | Syncfusion
description: Learn how to enable the scroll option on the all-day section in the Syncfusion Angular Scheduler when many appointments overflow the row.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Enable Scroll Option on All-Day Section in Angular Scheduler

When a large number of appointments overflow the all-day row, enable a dedicated scrollbar by setting the [`enableAllDayScroll`](https://ej2.syncfusion.com/angular/documentation/api/schedule#enablealldayscroll) property to `true`. The default value is `false`. When enabled, the all-day row displays a scrollbar if its content exceeds the maximum height.

> Note: This property is not applicable when Scheduler height is set to `auto`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/default-cs46/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/default-cs46/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/scheduler-sdk/angular/schedule/default-cs46" %}

![Scrolling](../images/schedule-scrolling.png)