---
layout: post
title: Enable Scroll Option on All-Day Section in Vue Scheduler | Syncfusion
description: Learn how to enable a scroll option on the all-day section in the Syncfusion Vue Scheduler when many appointments overflow the row.
control: Scheduler
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Enable Scroll Option on All-Day Section in Vue Scheduler

When many appointments are added to the all-day row, it can be difficult to view them within the available space. In such cases, enable scrolling for the all-day row by setting the [`enableAllDayScroll`](https://ej2.syncfusion.com/vue/documentation/api/schedule#enablealldayscroll) property to `true`. By default, this property is `false`. When enabled, a separate scroll bar appears for the all-day row after it reaches its maximum allowed height.

> Note: This property is not applicable when the Scheduler height is set to `auto`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/virtual-scrolling-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/virtual-scrolling-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/virtual-scrolling-cs1" %}
