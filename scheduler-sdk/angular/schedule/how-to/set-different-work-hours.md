---
layout: post
title: Different Working Hours per Days in Angular Scheduler | Syncfusion
description: Learn how to set different work hours for specific days in the Syncfusion Angular Scheduler to match varied team schedules.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Set Different Working Hours on Different Days in Angular Scheduler

By default, the [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler) highlights work hours using the `workHours` property, which applies the same range to every day. To define different work hours for specific days, use the [`setWorkHours`](https://ej2.syncfusion.com/angular/documentation/api/schedule#setworkhours) method.

Pass a single `Date` object or an array of dates as the first argument, then provide the start and end times as the second and third arguments. The example below shows how to set work hours from 11:00 AM to 8:00 PM for February 15 and 17.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/default-cs52/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/default-cs52/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/scheduler-sdk/angular/schedule/default-cs52" %}