---
layout: post
title: Header Bar in TypeScript Scheduler | Syncfusion
description: Learn how to show or hide the header bar and customize date and view navigation in the Syncfusion TypeScript Scheduler.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Header Bar in TypeScript Scheduler

The Scheduler header bar can be customized using the built-in options.

## Show or hide header bar

By default, the header bar displays the date and view navigation options that let the user switch between dates and views. Hide the header bar by setting [`showHeaderBar`](https://ej2.syncfusion.com/documentation/api/schedule#showheaderbar) to `false`. Its default value is `true`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/header-bar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/header-bar-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/header-bar-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/header-bar-cs1" %}

## Customizing header bar using template

In addition to the default date navigation and view options, you can add custom items to the Scheduler header bar using the [`toolbarItems`](https://ej2.syncfusion.com/documentation/api/schedule#toolbaritems) property. To display default items, assign a `name` field to each item (for example: `Previous`, `Next`, `Today`, `DateRangeText`, `NewEvent`, and `Views`). For custom items, set the `name` to `Custom`. The example below shows default items used alongside a custom external dropdown list.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/header-bar-template/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/header-bar-template/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/header-bar-template/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/header-bar-template" %}

## Customizing header bar using events

You can also add custom items to the Scheduler header bar by handling the [`actionBegin`](https://ej2.syncfusion.com/documentation/api/schedule#actionbegin) event. In the example below, an employee image is added to the header bar; clicking it opens a popup that shows the person's profile information.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/header-bar-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/header-bar-cs2/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/header-bar-cs2/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/header-bar-cs2" %}

## How to display the view options within the header bar popup

By default, the header bar displays view navigation options that let the user switch between views. Move these view options to the header bar popup by setting [`enableAdaptiveUI`](https://ej2.syncfusion.com/documentation/api/schedule#enableadaptiveui) to `true`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/header-bar-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/header-bar-cs3/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/header-bar-cs3/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/header-bar-cs3" %}

> Refer to [resources](./resources#adaptive-ui-in-desktop) to learn more about adaptive UI in the Resources scheduler.

## Date header customization

The Scheduler UI that displays date text in views is the date header. Customize date header cells either using the [`dateHeaderTemplate`](../api/schedule#dateheadertemplate) option or the [`renderCell`](https://ej2.syncfusion.com/documentation/api/schedule#rendercell) event.

### Using date header template

The [`dateHeaderTemplate`](../api/schedule#dateheadertemplate) option is used to customize the date header cells of day, week and work-week views.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/date-header-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/date-header-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/date-header-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/date-header-cs1" %}

### Using `renderCell` event

In month view, the `dateHeaderTemplate` is not applicable. Use the [`renderCell`](https://ej2.syncfusion.com/documentation/api/schedule#rendercell) event to add custom content beside the date text in month cells.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/render-cell-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/render-cell-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/render-cell-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/render-cell-cs1" %}

## Customizing the date range text

The [`dateRangeTemplate`](../api/schedule#daterangetemplate) option customizes the date range text displayed in the Scheduler. By default, the date range text is determined by the current view; use `dateRangeTemplate` to override the default text.

The `dateRangeTemplate` receives `startDate`, `endDate`, and `currentView` as input, which you can use to compose a custom date range string.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/default-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/default-cs4/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/default-cs4/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/default-cs4" %}

## Customizing header indent cells

Use the [`headerIndentTemplate`](https://ej2.syncfusion.com/documentation/api/schedule#headerindenttemplate) option to customize the header indent cells in both vertical and timeline views. In vertical views, the template customizes the top-left indent where the time column header meets the date headers. In timeline views, it customizes the left indent that appears before the resource headers.

**Example:** To customize the left header indent cell to display resource text, refer to the code example below.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/header-indent-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/header-indent-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/header-indent-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/header-indent-cs1" %}

> Refer to the [JavaScript Scheduler](https://www.syncfusion.com/scheduler-sdk/javascript-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/tailwind3/schedule/overview.html) to see practical implementations of data presentation and manipulation techniques.
