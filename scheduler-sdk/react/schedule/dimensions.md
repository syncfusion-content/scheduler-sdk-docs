---
layout: post
title: Dimensions in React Schedule component | Syncfusion
description: Learn here all about Dimensions in Syncfusion React Schedule component of Syncfusion Essential JS 2 and more.
control: Scheduler
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Dimensions in React Schedule component

Scheduler dimensions refer to the height and width of the entire layout and support three types of values:

* `auto`
* `pixel`
* `percentage`

## Auto height and width

When the [height](https://ej2.syncfusion.com/react/documentation/api/schedule#height) and [width](https://ej2.syncfusion.com/react/documentation/api/schedule#width) of the Scheduler are set to `auto`, it will try as hard as possible to keep an element the same width as its parent container. In other words, the parent container that holds Scheduler, it's width/height will be the sum of its children. By default, Scheduler is assigned with `auto` values for both height and width properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/scheduler-sdk/react/schedule/events-cs43/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/scheduler-sdk/react/schedule/events-cs43/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/react/schedule/events-cs43/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/react/schedule/events-cs43" %}

## Height and width in pixels

The Scheduler height and width will render exactly as per the given pixel values. You can provide pixel values as numbers (for example, `500`) or as strings with a `px` suffix (for example, `'500px'`).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/scheduler-sdk/react/schedule/events-cs44/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/scheduler-sdk/react/schedule/events-cs44/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/react/schedule/events-cs44/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/react/schedule/events-cs44" %}

## Height and width in percentages

When the height and width of the Scheduler are given as percentage, it will make the Scheduler as wide as the parent container.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/scheduler-sdk/react/schedule/events-cs45/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/scheduler-sdk/react/schedule/events-cs45/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/react/schedule/events-cs45/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/react/schedule/events-cs45" %}

> You can refer to our [React Scheduler](https://www.syncfusion.com/react-components/react-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [React Scheduler example](https://ej2.syncfusion.com/react/demos/#/tailwind3/schedule/overview) to knows how to present and manipulate data.

## See Also

* [How to Change Scheduler Cell Dimensions](./cell-customization#setting-cell-dimensions-in-all-views)
