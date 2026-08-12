---
layout: post
title: Render Angular Scheduler Inside Dialog  | Syncfusion
description: Learn how to render the Syncfusion Angular Scheduler inside a dialog using an ng-template to avoid layout calculation issues.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Render Angular Scheduler Inside a Dialog

Render the Scheduler inside an Angular `ng-template` when opening the dialog.

Rendering the Scheduler before the dialog opens can cause incorrect layout and appointment rendering. To avoid this problem, render the Scheduler only when the dialog is opened.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/schedule-inside-dialog-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/schedule-inside-dialog-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/scheduler-sdk/angular/schedule/schedule-inside-dialog-cs1" %}