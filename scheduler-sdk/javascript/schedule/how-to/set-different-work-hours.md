---
layout: post
title: Set Different Work Hours in JavaScript Scheduler | Syncfusion
description: Learn how to set different work hours for specific days in the Syncfusion JavaScript Scheduler to match varied team schedules.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Set Different Work Hours in JavaScript Scheduler

By default, work hours are defined by the [`workHours`](https://ej2.syncfusion.com/documentation/api/schedule#workhours) property and apply to all days. To highlight different work-hour ranges for specific dates, use the [`setWorkHours`](https://ej2.syncfusion.com/documentation/api/schedule#setworkhours) method.

`setWorkHours` accepts:
- a single `Date` or an array of `Date` objects,
- a start time value,
- an end time value.

The example below sets work hours for February 15 and 17 to 11:00 AM–8:00 PM while leaving other days at their default hours.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/open-editor-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/open-editor-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/open-editor-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/open-editor-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/open-editor-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/open-editor-cs2" %}
{% endif %}