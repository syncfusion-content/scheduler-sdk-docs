---
layout: post
title: Dimensions in Angular Scheduler | Syncfusion
description: Learn how to set the height and width of the Syncfusion Angular Scheduler using pixel, percentage, or auto values for responsive layouts.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Dimensions in Angular Scheduler

Scheduler dimensions refer to the height and width of the entire layout and support three value types:

* `auto`
* `pixel`
* `percentage`

## Auto height and width

When the height and width of the Scheduler are set to `auto`, it tries to keep the component sized to its parent container. In other words, the parent container that holds the Scheduler will size itself based on its children. By default, the Scheduler uses `auto` for both the height and width properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/dimension-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/dimension-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://helpstaging.syncfusion.com/samples/scheduler-sdk/angular/schedule/dimension-cs1" %}

## Height and width in pixels

The Scheduler height and width render exactly as the given pixel values. You can provide pixel values as numbers (for example, `500`) or as strings with a `px` suffix (for example, `'500px'`).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/dimension-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/dimension-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://helpstaging.syncfusion.com/samples/scheduler-sdk/angular/schedule/dimension-cs2" %}

## Height and width in percentages

When the height and width of the Scheduler are given as percentages, the Scheduler expands to match the parent container.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/dimension-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/dimension-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://helpstaging.syncfusion.com/samples/scheduler-sdk/angular/schedule/dimension-cs3" %}

> You can refer to our [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler) feature tour page for an overview of its features. You can also explore our [Angular Scheduler example](https://ej2.syncfusion.com/angular/demos/#/material/schedule/overview) to learn how to present and manipulate data.

## See Also

* [How to Change Scheduler Cell Dimensions](./cell-customization#setting-cell-dimensions-in-all-views)