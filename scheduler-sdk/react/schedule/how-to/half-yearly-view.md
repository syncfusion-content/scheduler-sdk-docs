---
layout: post
title: Half-yearly view in React Schedule component | Syncfusion
description: Learn here all about Half yearly view in Syncfusion React Schedule component of Syncfusion Essential JS 2 and more.
control: Scheduler
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Half-yearly view in React Schedule component

The year view of the [React Scheduler](https://www.syncfusion.com/react-components/react-scheduler) displays all 365 days and their appointments for a given year. You can customize this view by using the following properties:

* [`firstMonthOfYear`](https://ej2.syncfusion.com/react/documentation/api/schedule#firstmonthofyear)
* [`monthsCount`](https://ej2.syncfusion.com/react/documentation/api/schedule#monthscount)
* [`monthHeaderTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule#monthheadertemplate)

In the following code example, you can see how to render only the last six months of a year in the Schedule component. To start with June, set `firstMonthOfYear` to 6 and `monthsCount` to 6 to render six consecutive months.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/scheduler-sdk/react/schedule/year-customizations-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/scheduler-sdk/react/schedule/year-customizations-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/react/schedule/year-customizations-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/react/schedule/year-customizations-cs1" %}