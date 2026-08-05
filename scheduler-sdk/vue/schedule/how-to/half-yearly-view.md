---
layout: post
title: Show Half-Yearly View in Vue Scheduler | Syncfusion
description: Learn how to show a half-yearly view in the Syncfusion Vue Scheduler by configuring FirstMonthOfYear and MonthsCount in the year view.
control: Scheduler
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Show Half-Yearly View in Vue Scheduler

The year view of our scheduler displays all the 365 days and their related appointments of a particular year. You can customize the year view by using the following properties.

* [`firstMonthOfYear`](https://ej2.syncfusion.com/vue/documentation/api/schedule#firstmonthofyear)
* [`monthsCount`](https://ej2.syncfusion.com/vue/documentation/api/schedule#monthscount)
* [`monthHeaderTemplate`](https://ej2.syncfusion.com/vue/documentation/api/schedule#monthheadertemplate)

The following example demonstrates how to render only the last six months of a year in the Schedule. To begin the view from June, the `firstMonthOfYear` property is set to `6`, and `monthsCount` is set to `6` to display six months in total.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/year-customizations-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/year-customizations-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/year-customizations-cs1" %}