---
layout: post
title: Render Schedule inside dialog in Angular Schedule | Syncfusion
description: Learn here all about Render schedule inside dialog in Syncfusion Angular Schedule component of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Render Schedule inside dialog in Angular Schedule component

Render the Schedule while opening the dialog inside the angular `ng-template`.

If you render the Schedule before the dialog is opened it will cause wrong calculations on layout and appointment rendering. To avoid this problem render the Schedule only when the dialog is opened.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/schedule-inside-dialog-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/schedule-inside-dialog-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/scheduler-sdk/angular/schedule/schedule-inside-dialog-cs1" %}