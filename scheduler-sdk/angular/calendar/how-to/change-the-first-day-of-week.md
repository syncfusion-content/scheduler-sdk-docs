---
layout: post
title: Change the first day of week in Angular Calendar component | Syncfusion
description: Learn here all about Change the first day of week in Syncfusion Angular Calendar component of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Change the first day of week 
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Change the first day of week in Angular Calendar component

The Calendar provides an option to change the first day of the week by using the [`firstDayOfWeek`](https://ej2.syncfusion.com/angular/documentation/api/calendar#firstdayofweek) property.
Day of the week starts from 0(Sunday) to 6(Saturday).

> By default, the first day of week will be based on culture.

The following example demonstrates the Calendar with `Tuesday` as first day of the week.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/calendar/getting-started-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/calendar/getting-started-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/scheduler-sdk/angular/calendar/getting-started-cs10" %}