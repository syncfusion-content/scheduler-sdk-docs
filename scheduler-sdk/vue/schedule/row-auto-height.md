---
layout: post
title: Row Auto Height in Vue Scheduler | Syncfusion
description: Learn how to auto-adjust row height in the Syncfusion Vue Scheduler timeline and month views to display all overlapping appointments.
control: Scheduler
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Row Auto Height in Vue Scheduler

By default, row heights in **Timeline views** of the Vue Schedule component are fixed. When multiple appointments overlap within the same time range, the component displays a **“+n more”** indicator instead of rendering all appointments.

The **row auto height** feature dynamically increases the height of Scheduler rows based on the number of overlapping appointments. This allows all events within the same time range to be displayed without using the “+n more” indicator.

To enable auto row height adjustments in Scheduler Timeline views and Month view, set the [`rowAutoHeight`](../api/schedule#rowautoheight) property to `true`. Its default value is `false`.

> This auto row height adjustment applies only to Timeline views and the calendar Month view.

Now, let's see how it works in those applicable views with examples.

## Calendar month view

In the Month view, each date cell has a fixed height by default. When multiple appointments overlap, excess events are collapsed and represented by a “+n more” indicator.
When [`rowAutoHeight`](https://ej2.syncfusion.com/vue/documentation/api/schedule#rowautoheight) is enabled, the height of each date row expands automatically to accommodate all appointments in that cell. This ensures that all events are visible within the Month view without requiring additional interaction.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/working-days-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/working-days-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/working-days-cs1" %}

## Timeline views

When the [`rowAutoHeight`](https://ej2.syncfusion.com/vue/documentation/api/schedule#rowautoheight) feature is enabled in Timeline views, the row height is adjusted automatically based on the number of overlapping events in the same time range, as demonstrated in the following example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/working-days-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/working-days-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/working-days-cs2" %}

## Timeline views with multiple resources

The row auto height feature also works when multiple resources are configured in Timeline views. In this scenario, each resource row expands independently based on the number of appointments assigned to that resource within the same time range.
This ensures that overlapping events for different resources are fully visible and clearly separated, even in complex multi-resource schedules.

The following example shows how the auto row adjustment feature works on timeline views with multiple resources.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/working-days-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/working-days-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/working-days-cs3" %}

## Appointments occupying entire cell

By default, when the [`rowAutoHeight`](../api/schedule#rowautoheight) feature is enabled, there is space at the bottom of the cell when an appointment is rendered. To avoid this space, set the [`ignoreWhitespace`](../api/schedule/eventSettings#ignorewhitespace) property to `true` within [`eventSettings`](../api/schedule/eventSettings); its default value is `false`. The following example demonstrates how appointments fill the available cell space by ignoring the default bottom whitespace.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/ignore-whitespace-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/ignore-whitespace-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/ignore-whitespace-cs1" %}

**Note**: The [`ignoreWhitespace`](https://ej2.syncfusion.com/vue/documentation/api/schedule/eventSettings#ignorewhitespace) property is applicable only when the [`rowAutoHeight`](https://ej2.syncfusion.com/vue/documentation/api/schedule#rowautoheight) feature is enabled in the Scheduler.

> For a complete overview of Scheduler features, visit the [Vue Scheduler](https://www.syncfusion.com/vue-components/vue-scheduler) feature tour page. Explore live examples at [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/tailwind3/schedule/overview.html) to learn how to present and manipulate data.