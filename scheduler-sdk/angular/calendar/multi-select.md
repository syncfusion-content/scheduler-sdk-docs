---
layout: post
title: Multi select in Angular Calendar component | Syncfusion
description: Learn here all about Multi select in Syncfusion Angular Calendar component of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Multi select 
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Multi select in Angular Calendar component

Calendar provides an option to select **single** or **multiple dates** or **sequence of dates** by using [`isMultiSelection`](https://ej2.syncfusion.com/angular/documentation/api/calendar#ismultiselection) and [`values`](https://ej2.syncfusion.com/angular/documentation/api/calendar#values) properties. By default, [`isMultiSelection`](https://ej2.syncfusion.com/angular/documentation/api/calendar#ismultiselection) property will be in disabled state.

The following example demonstrates the functionality of  `isMultiSelection` property and `values` properties in the Calendar control.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/calendar/getting-started-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/calendar/getting-started-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/scheduler-sdk/angular/calendar/getting-started-cs14" %}