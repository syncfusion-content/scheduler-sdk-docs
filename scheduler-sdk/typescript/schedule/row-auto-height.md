---
layout: post
title: Row Auto Height in TypeScript Scheduler | Syncfusion
description: Learn how to auto-adjust row height in the Syncfusion TypeScript Scheduler timeline and month views to display all overlapping appointments.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Row Auto Height in TypeScript Scheduler

By default, the height of Scheduler rows in Timeline views is static and therefore, when the same time range holds multiple overlapping appointments, a `+n more` text indicator is displayed. When the row auto height feature is enabled, all overlapping appointments present in those specific time ranges can be viewed by auto-adjusting the row height based on the number of appointments instead of displaying the `+n more` text indicator.

To enable auto row height adjustments in Scheduler Timeline views and the Month view, set the [`rowAutoHeight`](https://ej2.syncfusion.com/documentation/api/schedule#rowautoheight) property to `true`; its default value is `false`.

> **Note:** This auto row height adjustment is applicable only to Timeline views and the calendar Month view.

The following sections demonstrate how this feature works on the applicable views with practical examples.

## Calendar month view

By default, the rows of the calendar Month view can accommodate only a limited number of appointments based on the available row height, and the rest of the overlapping appointments are indicated with a `+n more` text indicator. The following example shows how the Month view row auto-adjusts based on the number of appointments when this [`rowAutoHeight`](https://ej2.syncfusion.com/documentation/api/schedule#rowautoheight) feature is enabled.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/row-auto-height-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/row-auto-height-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/row-auto-height-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/row-auto-height-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/row-auto-height-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/row-auto-height-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/row-auto-height-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/row-auto-height-cs1" %}
{% endif %}

## Timeline views

When the [`rowAutoHeight`](https://ej2.syncfusion.com/documentation/api/schedule#rowautoheight) feature is enabled in Timeline views, the row height is auto-adjusted based on the number of overlapping events in the same time range, as demonstrated in the following example.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/row-auto-height-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/row-auto-height-cs2/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/row-auto-height-cs2/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/row-auto-height-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/row-auto-height-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/row-auto-height-cs2/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/row-auto-height-cs2/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/row-auto-height-cs2" %}
{% endif %}

## Timeline views with multiple resources

The following example shows how the auto row adjustment feature works on timeline views with multiple resources.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/row-auto-height-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/row-auto-height-cs3/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/row-auto-height-cs3/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/row-auto-height-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/row-auto-height-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/row-auto-height-cs3/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/row-auto-height-cs3/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/row-auto-height-cs3" %}
{% endif %}

## Appointments occupying entire cell

By default, when the [`rowAutoHeight`](https://ej2.syncfusion.com/documentation/api/schedule#rowautoheight) feature is enabled, a small space remains at the bottom of each cell after appointments are rendered. To avoid this space, the [`ignoreWhitespace`](https://ej2.syncfusion.com/documentation/api/schedule/eventSettings#ignorewhitespace) property is set to `true` within [`eventSettings`](https://ej2.syncfusion.com/documentation/api/schedule/eventSettings), whereas its default value is `false`. In the following code example, the whitespace below the appointments has been ignored.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/ignore-whitespace-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/ignore-whitespace-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/ignore-whitespace-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/ignore-whitespace-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/ignore-whitespace-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/ignore-whitespace-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/ignore-whitespace-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/ignore-whitespace-cs1" %}
{% endif %}

> **Note:** The [`ignoreWhitespace`](https://ej2.syncfusion.com/documentation/api/schedule/eventSettings#ignorewhitespace) property is only applicable when the [`rowAutoHeight`](https://ej2.syncfusion.com/documentation/api/schedule#rowautoheight) feature is enabled in the Scheduler.

> Refer to the [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour page for its groundbreaking feature representations. Also explore our [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/tailwind3/schedule/overview.html) to learn how to present and manipulate data.
