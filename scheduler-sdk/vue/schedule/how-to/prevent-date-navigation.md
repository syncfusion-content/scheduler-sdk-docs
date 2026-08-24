---
layout: post
title: Prevent Date Navigation in Vue Scheduler | Syncfusion
description: Learn how to prevent date navigation in the Syncfusion Vue Scheduler to lock the view on a specific date or range.
control: Scheduler
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Prevent Date Navigation in Vue Scheduler

Date navigation triggered by clicking a date header can be disabled by removing the `e-navigate` class from the header cells. You can do this with the [`renderCell`](https://ej2.syncfusion.com/vue/documentation/api/schedule#rendercell) event by conditionally removing the class during cell rendering, as shown in the following example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/how-to-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/how-to-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/how-to-cs1" %}