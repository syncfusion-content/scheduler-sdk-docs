---
layout: post
title: Manually Refresh Layout in Vue Scheduler | Syncfusion
description: Learn how to manually refresh the layout in the Syncfusion Vue Scheduler using the refreshLayout public method without re-rendering the DOM.
control: Scheduler
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Manually Refresh Layout in Vue Scheduler

In the Vue Schedule component, the layout can be manually refreshed without re-rendering the entire DOM by using the [`refreshLayout`](https://ej2.syncfusion.com/vue/documentation/api/schedule#refreshlayout) public method. This method updates the layout to reflect changes such as style adjustments or structural modifications. The following example demonstrates how to use the `refreshLayout` method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/app-crud-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/app-crud-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/app-crud-cs3" %}
