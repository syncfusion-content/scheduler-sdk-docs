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

When you have a large number of appointments in the all-day row, it can be difficult to view them properly. In this case, you can enable an individual scroller for the all-day row by setting the [`enableAllDayScroll`](https://ej2.syncfusion.com/angular/documentation/api/schedule#enablealldayscroll) property to `true`, whereas its default value is `false`. When set to `true`, the all-day row displays a scroller when expanded beyond its maximum height.

> Note: This property is not applicable for Scheduler with height `auto`.

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