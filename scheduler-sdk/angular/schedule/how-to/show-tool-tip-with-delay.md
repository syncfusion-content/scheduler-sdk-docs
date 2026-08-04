---
layout: post
title: How to show tooltip with delay in Angular Scheduler | Syncfusion
description: Learn how to show tooltips with a custom delay in the Syncfusion Angular Scheduler by configuring the Tooltip openDelay property.
platform: ej2-angular
control: Scheduler
documentation: ug
domainurl: ##DomainURL##
---

# How to show tooltip with delay in Angular Scheduler

By default, the [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler) tooltip is displayed immediately. You can introduce a delay before the tooltip appears by setting the Tooltip [`openDelay`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/tooltipModel#opendelay) property.

The following example demonstrates how to configure the tooltip delay in the Schedule component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs53/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs53/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs53" %}