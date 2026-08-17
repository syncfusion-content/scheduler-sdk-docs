---
layout: post
title: Prevent Date Navigation in Angular Scheduler | Syncfusion
description: Learn how to prevent date navigation in the Syncfusion Angular Scheduler to lock the view on a specific date or range.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Prevent Date Navigation in Angular Scheduler

Prevent navigation when clicking the date header by removing the `e-navigate` class from header cells in the [`renderCell`](https://ej2.syncfusion.com/angular/documentation/api/schedule#rendercell) event. The demo below shows how to implement this.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/default-cs50/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/default-cs50/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/scheduler-sdk/angular/schedule/default-cs50" %}