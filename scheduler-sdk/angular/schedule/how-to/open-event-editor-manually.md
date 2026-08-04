---
layout: post
title: How to open editor window manually in Angular Scheduler | Syncfusion
description: Learn how to open the event editor window manually in the Syncfusion Angular Scheduler using the openEditor method.
platform: ej2-angular
control: Scheduler
documentation: ug
domainurl: ##DomainURL##
---

# How to open editor window manually in Angular Scheduler

## Open Editor Window externally

The [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler) allows users to manually open the event editor at a specific time or in response to certain events by using the [`openEditor`](https://ej2.syncfusion.com/angular/documentation/api/schedule#openeditor) method, as shown below.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs48/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs48/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs48" %}

## Open editor window on single click

By default, the Scheduler editor window opens when double-clicking cells or appointments. To open the editor window with a single click, use the [`openEditor`](https://ej2.syncfusion.com/angular/documentation/api/schedule#openeditor) method in [`eventClick`](https://ej2.syncfusion.com/angular/documentation/api/schedule#eventclick) and [`cellClick`](https://ej2.syncfusion.com/angular/documentation/api/schedule#cellclick) events handlers, and set the [`showQuickInfo`](https://ej2.syncfusion.com/angular/documentation/api/schedule#showquickinfo) property to `false`. The following example shows how to open editor window on single click of cells and appointments.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs49/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs49/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs49" %}
