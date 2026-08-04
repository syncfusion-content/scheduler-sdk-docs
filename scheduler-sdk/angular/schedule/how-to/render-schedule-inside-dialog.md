---
layout: post
title: How to render Schedule inside dialog in Angular Scheduler | Syncfusion
description: Learn how to render the Syncfusion Angular Scheduler inside a dialog using an Angular ng-template to avoid layout miscalculations.
platform: ej2-angular
control: Scheduler
documentation: ug
domainurl: ##DomainURL##
---

# How to render Schedule inside dialog in Angular Scheduler

Render the Schedule while opening the dialog inside the angular `ng-template`.

If you render the Schedule before the dialog is opened it will cause wrong calculations on layout and appointment rendering. To avoid this problem render the Schedule only when the dialog is opened.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/schedule-inside-dialog-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/schedule-inside-dialog-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/schedule-inside-dialog-cs1" %}