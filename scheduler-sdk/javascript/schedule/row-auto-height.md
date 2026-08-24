---
layout: post
title: Row Auto Height in JavaScript Scheduler | Syncfusion
description: Learn how to auto-adjust row height in the Syncfusion JavaScript Scheduler timeline and month views to display all overlapping appointments.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---


# Row Auto Height in JavaScript Scheduler

By default, Scheduler rows in Timeline views have a fixed height. When multiple overlapping appointments occur in the same time range, the Scheduler shows a `+n more` indicator. Enable `rowAutoHeight` to auto-adjust row height so overlapping appointments are fully visible instead of being collapsed behind a `+n more` indicator.

Enable row auto height on Timeline and Month views by setting the `rowAutoHeight` property to `true` (default is `false`): [`rowAutoHeight`](https://ej2.syncfusion.com/documentation/api/schedule#rowautoheight).

Note: This feature applies to Timeline views and the calendar Month view.

The sections below demonstrate the feature with examples.

## Calendar month view

By default, the Month view rows accommodate a limited number of appointments based on the available height; remaining overlapping appointments are shown as `+n more`. The example below shows the Month view auto-adjusting row height when `rowAutoHeight` is enabled.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/row-auto-height-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/row-auto-height-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/row-auto-height-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/row-auto-height-cs1" %}

## Timeline views

When [`rowAutoHeight`](https://ej2.syncfusion.com/documentation/api/schedule#rowautoheight) is enabled in Timeline views, row height is adjusted based on the number of overlapping events in the same time range. The following example demonstrates this behavior.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/row-auto-height-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/row-auto-height-cs2/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/row-auto-height-cs2/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/row-auto-height-cs2" %}

## Timeline views with multiple resources

The following example shows how auto row adjustment behaves in Timeline views with multiple resources.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/row-auto-height-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/row-auto-height-cs3/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/row-auto-height-cs3/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/row-auto-height-cs3" %}

## Appointments occupying entire cell

When `rowAutoHeight` is enabled, a small whitespace may remain at the bottom of each cell after appointments render. Set `ignoreWhitespace` to `true` in `eventSettings` to remove that space (default is `false`). The example below demonstrates this setting.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/ignore-whitespace-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/ignore-whitespace-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/ignore-whitespace-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/ignore-whitespace-cs1" %}

**Note**: The [`ignoreWhitespace`](https://ej2.syncfusion.com/documentation/api/schedule/eventSettings#ignorewhitespace) property applies only when `rowAutoHeight` is enabled.

> Refer to the [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour for an overview, and explore the [Scheduler demo](https://ej2.syncfusion.com/demos/#/tailwind3/schedule/overview.html) for practical examples.
