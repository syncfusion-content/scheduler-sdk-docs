---
layout: post
title: Responsive Full Time Display in TypeScript Scheduler | Syncfusion
description: Learn here all about Show entire time in responsive mode in Syncfusion TypeScript Scheduler control of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Scheduler
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Show entire time in responsive mode in TypeScript Scheduler control

In responsive mode, time slots may not always display the full time label if the available space is limited. For example, **9 AM** is visible since it has enough space, but if the Scheduler’s start hour is set to **08:45 AM**, the time slot may truncate the label.  

To ensure that complete time labels are displayed in responsive mode, you can use the [`majorSlotTemplate`](https://ej2.syncfusion.com/documentation/api/schedule/timeScale#majorslottemplate) property. This property allows customization of the major time slots to render proper and fully visible time labels in the Scheduler.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/timescale-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/timescale-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/timescale-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/timescale-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/timescale-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/timescale-cs1" %}
{% endif %}