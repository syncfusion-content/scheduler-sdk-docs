---
layout: post
title: Half yearly view in JavaScript Scheduler control | Syncfusion
description: Learn here all about Half yearly view in Syncfusion JavaScript Scheduler control of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Scheduler
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Half-yearly view in JavaScript Scheduler control

The **Year view** of the Scheduler displays all 365 days of a year along with their associated appointments. This view can be customized using the following properties:

* [`firstMonthOfYear`](../../api/schedule#firstmonthofyear) – Defines the starting month of the year view.  
* [`monthsCount`](../../api/schedule#monthscount) – Specifies the number of months to be displayed.  
* [`monthHeaderTemplate`](../../api/schedule#monthheadertemplate) – Provides a template option to customize the header of each month.

In the following example, the Scheduler is configured to render only the last six months of a year. By setting [`firstMonthOfYear`](../../api/schedule#firstmonthofyear) to `6`, the view begins with June. The [`monthsCount`](../../api/schedule#monthscount) property is set to `6` to display six months, resulting in a half-year view.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/year-customizations-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/year-customizations-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/year-customizations-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/year-customizations-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/year-customizations-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/year-customizations-cs1" %}
{% endif %}