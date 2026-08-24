---
layout: post
title: Two-Way Binding in Vue Scheduler | Syncfusion
description: Learn how to use two-way binding in the Syncfusion Vue Scheduler to bind and sync data fields seamlessly with the component.
control: Scheduler
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Two-Way Binding in Vue Scheduler

Two-way binding in the Vue Scheduler component can be configured using the `v-model` directive. The Scheduler properties that support two-way binding are:

* `selectedDate`
* `currentView`

## Two-Way Binding with the Vue Scheduler Component's `selectedDate` Property

The following example demonstrates two-way binding with the [`selectedDate`](https://ej2.syncfusion.com/vue/documentation/api/schedule#selecteddate) property. When the `selectedDate` value changes in the Scheduler component, the value reflected in the associated DatePicker component is updated automatically, and changes in the DatePicker component propagate back to the Scheduler.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/two-way-binding-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/two-way-binding-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/two-way-binding-cs1" %}

## Two-Way Binding with the Vue Scheduler Component's `currentView` Property

In the following example, when you change the `currentView` value in the Vue Scheduler component, `v-model` automatically updates the value in the Dropdown component, and changes in the Dropdown component automatically update the value in the [Vue Scheduler](https://www.syncfusion.com/scheduler-sdk/vue-scheduler).

The following example demonstrates how to set two-way binding with the [`currentView`](https://ej2.syncfusion.com/vue/documentation/api/schedule#currentview) property in the Vue Scheduler.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/two-way-binding-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/two-way-binding-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/two-way-binding-cs2" %}

> Refer to the [Vue Scheduler](https://www.syncfusion.com/scheduler-sdk/vue-scheduler) feature tour page for detailed overviews, and explore the [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/tailwind3/schedule/overview.html) for demonstrations on presenting and managing data.