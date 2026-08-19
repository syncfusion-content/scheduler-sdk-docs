---
layout: post
title: State Persistence in Vue Scheduler | Syncfusion
description: Learn how to enable state persistence in the Syncfusion Vue Scheduler to retain current view, selected date, and scroll position.
control: Scheduler
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# State Persistence in Vue Scheduler

State persistence allows the Scheduler to retain the [`currentView`](https://ej2.syncfusion.com/vue/documentation/api/schedule#currentview), [`selectedDate`](https://ej2.syncfusion.com/vue/documentation/api/schedule#selecteddate), and scroll position values in [`localStorage`](https://www.w3schools.com/html/html5_webstorage.asp#) for state maintenance even if the browser is refreshed or you move to another page in the browser. This behavior is handled through the [`enablePersistence`](https://ej2.syncfusion.com/vue/documentation/api/schedule#enablepersistence) property, which is set to `false` by default. When it is set to `true`, `currentView`, `selectedDate`, and scroll position values of the Scheduler component are retained even after refreshing the page.

> **Note**: The Scheduler `id` is required to enable state persistence.

The following sample demonstrates how to enable state persistence for the Scheduler component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/working-days-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/working-days-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/working-days-cs4" %}

> For a complete overview of Scheduler features, visit the [Vue Scheduler](https://www.syncfusion.com/vue-components/vue-scheduler) feature tour page. Explore live examples at [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/tailwind3/schedule/overview.html) to learn how to present and manipulate data.