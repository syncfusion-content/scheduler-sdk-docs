---
layout: post
title: Scheduler Dimensions in Vue Scheduler | Syncfusion
description: Learn how to set the height and width of the Syncfusion Vue Scheduler using pixel, percentage, or auto values for responsive layouts.
control: Scheduler
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Dimensions in Vue Scheduler

The dimensions of the Schedule component refer to its overall height and width. These properties accept the following value types:

* auto
* pixel
* percentage

## Auto Height and Width

When the height and width of the Scheduler are set to `auto`, it keeps the component sized according to its parent container. In other words, the parent container that holds the Scheduler adjusts to the size of its children. By default, the Scheduler is assigned `auto` values for both height and width properties.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/dimension-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/dimension-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/dimension-cs1" %}

## Height and Width in Pixel

The Schedule component renders its height and width based on exact pixel values when these values are specified. Both string and numeric formats are supported.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/dimension-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/dimension-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/dimension-cs2" %}

## Height and Width in Percentage

When height and width are defined as percentage values, the Schedule component adjusts proportionally to the size of its parent container.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/dimension-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/dimension-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/dimension-cs3" %}

> Refer to the [Vue Scheduler](https://www.syncfusion.com/scheduler-sdk/vue-scheduler) feature tour page for an overview of capabilities. Explore the [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/tailwind3/schedule/overview.html) for demonstrations of layout and data manipulation.

## See Also

* [How to Change Scheduler Cell Dimensions](./cell-customization#setting-cell-dimensions-in-all-views)