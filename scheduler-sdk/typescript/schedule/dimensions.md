---
layout: post
title: Dimensions in TypeScript Scheduler | Syncfusion
description: Learn how to set the height and width of the Syncfusion TypeScript Scheduler using pixel, percentage, or auto values for responsive layouts.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Dimensions in TypeScript Scheduler

The Scheduler dimensions refer to both the height and width of the entire layout. It accepts the following three types of values:

* auto
* pixel
* percentage

## Auto Height and Width

When the Scheduler's [`height`](../api/schedule#height) and [`width`](../api/schedule#width) are set to `auto`, it expands to fill the available space inside its parent container. In other words, the Scheduler adapts its dimensions to match the parent container. By default, Scheduler uses `auto` values for both height and width.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/dimension-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/dimension-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/dimension-cs1" %}

## Height and Width in pixel

The Scheduler height and width are rendered exactly according to the provided pixel values. This property accepts both string and number values.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/dimension-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/dimension-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/dimension-cs2" %}

## Height and Width in percentage

When the height and width of the Scheduler are defined as percentages, the component adjusts its size relative to the parent container.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/dimension-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/dimension-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/dimension-cs3" %}

> Can refer our [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour page for its comprehensive feature representations. You can also explore our [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/tailwind3/schedule/overview.html) to learn how to present and manipulate data.

## See Also

* [How to Change Scheduler Cell Dimensions](./cell-customization#setting-cell-dimensions-in-all-views)