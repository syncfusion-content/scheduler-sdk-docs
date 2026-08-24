---
layout: post
title: Open Editor Window Manually in Angular Scheduler | Syncfusion
description: Learn how to open the event editor manually in the Syncfusion Angular Scheduler on cell or event click, including on a single click.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Open Editor Window Programmatically in Angular Scheduler

## Open Editor Window externally

The [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler) allows users to manually open the event editor at a specific time or in response to certain events by using the [`openEditor`](https://ej2.syncfusion.com/angular/documentation/api/schedule#openeditor) method, as shown below.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/default-cs48/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/default-cs48/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://helpstaging.syncfusion.com/samples/scheduler-sdk/angular/schedule/default-cs48" %}

## Open editor window on single click

By default, the Scheduler editor window opens when cells or appointments are double-clicked. To open the editor with a single click, use the [`openEditor`](https://ej2.syncfusion.com/angular/documentation/api/schedule#openeditor) method in the `eventClick` and `cellClick` event handlers, and set the [`showQuickInfo`](https://ej2.syncfusion.com/angular/documentation/api/schedule#showquickinfo) property to `false`. The example below shows how to open the editor window with a single click on cells and appointments.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/default-cs49/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/default-cs49/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://helpstaging.syncfusion.com/samples/scheduler-sdk/angular/schedule/default-cs49" %}
