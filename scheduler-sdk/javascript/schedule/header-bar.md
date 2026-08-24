---
layout: post
title: Header Bar in JavaScript Scheduler | Syncfusion
description: Learn how to show or hide the header bar and customize date and view navigation in the Syncfusion JavaScript Scheduler.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Header Bar in JavaScript Scheduler

The Scheduler header can be customized using the built-in options.

## Show or Hide header bar

By default, the header bar displays date and view navigation options to switch between dates and views. Hide the header bar by setting the [`showHeaderBar`](https://ej2.syncfusion.com/documentation/api/schedule#showheaderbar) property to `false`. Its default value is `true`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/header-bar-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/header-bar-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/header-bar-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/header-bar-cs1" %}

## Customizing header bar using template

In addition to the default date navigation and view options, you can add custom items to the Scheduler header using the [`toolbarItems`](https://ej2.syncfusion.com/documentation/api/schedule#toolbaritems) property. To display the default items, assign a [`name`](https://ej2.syncfusion.com/documentation/api/schedule/toolbarItem#name) field to each item. The names of the default items are `Previous`, `Next`, `Today`, `DateRangeText`, `NewEvent`, and `Views`. For a custom item, use the name `Custom`. The example below uses default items together with an external dropdown as a custom item.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/header-bar-template/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/header-bar-template/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/header-bar-template/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/header-bar-template" %}

## Customizing header bar using events

You can also add header items dynamically using the [`actionBegin`](https://ej2.syncfusion.com/documentation/api/schedule#actionbegin) event. The example below adds an employee image to the header; clicking it opens a popup with the person's profile information.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/header-bar-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/header-bar-cs2/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/header-bar-cs2/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/header-bar-cs2" %}

## How to display the view options within the header bar popup

By default, the header bar displays view navigation options. Move the view options into the header bar popup by setting the [`enableAdaptiveUI`](https://ej2.syncfusion.com/documentation/api/schedule#enableadaptiveui) property to `true`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/header-bar-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/header-bar-cs3/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/header-bar-cs3/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/header-bar-cs3" %}

> Refer to [Adaptive UI](./resources#adaptive-ui-in-desktop) to learn more about adaptive UI in Scheduler.

## Date header customization

The date text shown in the Scheduler views is rendered in the date header cells. Customize these cells using the [`dateHeaderTemplate`](../api/schedule#dateheadertemplate) option or the [`renderCell`](https://ej2.syncfusion.com/documentation/api/schedule#rendercell) event.

### Using date header template

The [`dateHeaderTemplate`](../api/schedule#dateheadertemplate) option is used to customize the date header cells of day, week and work-week views.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/date-header-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/date-header-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/date-header-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/date-header-cs1" %}

### Using renderCell event

In month view, the date header template is not applicable and therefore the same customization can be added beside the date text in month cells by making use of the [`renderCell`](https://ej2.syncfusion.com/documentation/api/schedule#rendercell) event.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/render-cell-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/render-cell-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/render-cell-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/render-cell-cs1" %}

## Customizing the date range text

The [`dateRangeTemplate`](../api/schedule#daterangetemplate) option allows you to customize the date range text displayed in the Scheduler. By default, the date range text is derived from the current view. Use the `dateRangeTemplate` options — `startDate`, `endDate`, and `currentView` — to provide custom text.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/default-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/default-cs4/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/default-cs4/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/default-cs4" %}

## Customizing header indent cells

Customize the header indent cells using the [`headerIndentTemplate`](https://ej2.syncfusion.com/documentation/api/schedule#headerindenttemplate) option and change the look and appearance in both the vertical and timeline views. In vertical views, the template customizes the indent area at the top-left corner where the time column header meets the date headers. In timeline views, it customizes the left indent area that appears before the resource headers.

**Example:** To customize the header left indent cell to display resources text, refer to the below code example.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/header-indent-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/header-indent-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/header-indent-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/header-indent-cs1" %}

> Refer to the [JavaScript Scheduler](https://www.syncfusion.com/scheduler-sdk/javascript-scheduler) feature tour page for comprehensive feature demonstrations. You can also explore the [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/tailwind3/schedule/overview.html) for practical implementations of data presentation and manipulation.
