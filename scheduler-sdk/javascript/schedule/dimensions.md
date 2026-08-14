---
layout: post
title: Dimensions in JavaScript Scheduler | Syncfusion
description: Learn how to set the height and width of the Syncfusion JavaScript Scheduler using pixel, percentage, or auto values for responsive layouts.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Dimensions in JavaScript Scheduler

The Scheduler dimensions refer to both the height and width of the entire layout. It accepts the following three types of values:

* auto
* pixel
* percentage

## Auto Height and Width

When the [`height`](../api/schedule#height) and [`width`](../api/schedule#width) of the Scheduler are set to `auto`, the component sizes itself to match its parent container. By default, the Scheduler uses `auto` values for both height and width properties.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/dimension-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/dimension-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/dimension-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/dimension-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/dimension-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/dimension-cs1" %}
{% endif %}

## Height and Width in pixel

The Scheduler height and width are rendered exactly according to the provided pixel values. This property accepts both string and number values.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/dimension-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/dimension-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/dimension-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/dimension-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/dimension-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/dimension-cs2" %}
{% endif %}

## Height and Width in percentage

When the height and width of the Scheduler are defined as percentages, the component adjusts its size relative to the parent container.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/dimension-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/dimension-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/dimension-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/dimension-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/dimension-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/dimension-cs3" %}
{% endif %}

> Refer to our [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour page for comprehensive feature information. You can also explore the [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/tailwind3/schedule/overview.html) to learn how to present and manipulate data.

## See Also

* [How to Change Scheduler Cell Dimensions](./cell-customization#setting-cell-dimensions-in-all-views)