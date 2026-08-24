---
layout: post
title: Add, Edit, and Remove Events in Vue Scheduler | Syncfusion
description: Learn how to add, edit, and remove events dynamically in the Syncfusion Vue Scheduler component with simple steps.
control: Scheduler
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Add, Edit, and Remove Events in Vue Scheduler

CRUD actions can be performed on events using the [`addEvent`](https://ej2.syncfusion.com/vue/documentation/api/schedule#addevent), [`saveEvent`](https://ej2.syncfusion.com/vue/documentation/api/schedule#saveevent), and [`deleteEvent`](https://ej2.syncfusion.com/vue/documentation/api/schedule#deleteevent) methods. These methods let you create new events, update existing ones, and remove events from the Scheduler.

## Normal Event

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/app-crud-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/app-crud-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/app-crud-cs1" %}

## Recurrence Event

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/app-crud-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/app-crud-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/app-crud-cs2" %}