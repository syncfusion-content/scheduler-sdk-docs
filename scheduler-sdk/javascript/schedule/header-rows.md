---
layout: post
title: Header Rows in JavaScript Scheduler | Syncfusion
description: Learn how to add additional header rows in timeline views of the Syncfusion JavaScript Scheduler, including year, month, week, and date rows.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---


# Header Rows in JavaScript Scheduler

Timeline views support additional header rows beyond the default date and time headers. Use the [`headerRows`](https://ej2.syncfusion.com/documentation/api/schedule#headerrows) property to show rows such as:

- `Year`
- `Month`
- `Week`
- `Date`
- `Hour`

Note: the `Hour` row is not applicable for the Timeline month view.

The following example demonstrates the Scheduler displaying all available header rows in a timeline view.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/header-rows-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/header-rows-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/header-rows-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/header-rows-cs1" %}

## Display year and month rows in timeline views

To display a timeline with only year and month information, specify the `Year` and `Month` options in the [`headerRows`](https://ej2.syncfusion.com/documentation/api/schedule#headerrows) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/header-rows-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/header-rows-cs2/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/header-rows-cs2/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/header-rows-cs2" %}

## Display week numbers in timeline views

Display week numbers in a dedicated header row by including the `Week` option in the [`headerRows`](https://ej2.syncfusion.com/documentation/api/schedule#headerrows) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/header-rows-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/header-rows-cs3/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/header-rows-cs3/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/header-rows-cs3" %}

## Timeline view displaying dates of a complete year

Show a complete year in a Timeline view by setting the [`interval`](https://ej2.syncfusion.com/documentation/api/schedule/timeScale#interval) value to 12 and adding the `TimelineMonth` view to the Scheduler's `views` property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/header-rows-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/header-rows-cs4/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/header-rows-cs4/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/header-rows-cs4" %}

## Customizing the header rows using template

Customize header row text, formatted content, or images using the [`template`](https://ej2.syncfusion.com/documentation/api/schedule/headerRows#template) option of the [`headerRows`](https://ej2.syncfusion.com/documentation/api/schedule#headerrows) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/header-rows-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/header-rows-cs5/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/header-rows-cs5/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/header-rows-cs5" %}

> Refer to our [JavaScript Scheduler](https://www.syncfusion.com/scheduler-sdk/javascript-scheduler) feature tour page for comprehensive feature demonstrations. You can also explore the [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/tailwind3/schedule/overview.html) to learn how to present and manipulate data.
