---
layout: post
title: Show Half-Yearly View in JavaScript Scheduler | Syncfusion
description: Learn how to show a half-yearly view in the Syncfusion JavaScript Scheduler by customizing the year view to render a specific range of consecutive months.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Half-Yearly View in JavaScript Scheduler

The Year view displays all days of a year and their appointments. You can customize it with these properties:

- [`firstMonthOfYear`](../../api/schedule#firstmonthofyear) — the starting month for the view.
- [`monthsCount`](../../api/schedule#monthscount) — number of months to display.
- [`monthHeaderTemplate`](../../api/schedule#monthheadertemplate) — template for each month's header.

The example below configures the Scheduler to show the last six months of the year: set [`firstMonthOfYear`](../../api/schedule#firstmonthofyear) to `6` (June) and [`monthsCount`](../../api/schedule#monthscount) to `6` to render a half-year view.

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