---
layout: post
title: Show Half-Yearly View in Angular Scheduler | Syncfusion
description: Learn how to show a half-yearly view in the Syncfusion Angular Scheduler by configuring FirstMonthOfYear and MonthsCount in the year view.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Show Half-Yearly View in Angular Scheduler

The year view of the [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler) displays all 365 days and their appointments for a given year. You can customize this view by using the following properties:

* [`firstMonthOfYear`](https://ej2.syncfusion.com/angular/documentation/api/schedule#firstmonthofyear)
* [`monthsCount`](https://ej2.syncfusion.com/angular/documentation/api/schedule#monthscount)
* [`monthHeaderTemplate`](https://ej2.syncfusion.com/angular/documentation/api/schedule#monthheadertemplate)

In the following code example, you can see how to render only the last six months of a year in the Schedule component. To start with June, set `firstMonthOfYear` to 6 and `monthsCount` to 6 to render six consecutive months.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/scheduler-sdk/angular/schedule/year-customizations-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/year-customizations-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/year-customizations-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/scheduler-sdk/angular/schedule/year-customizations-cs1" %}
