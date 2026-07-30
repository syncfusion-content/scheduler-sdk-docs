---
layout: post
title: Customization in TypeScript Daterangepicker control | Syncfusion
description: Learn here all about Customization in Syncfusion TypeScript Daterangepicker control of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Customization 
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Customization in TypeScript Daterangepicker control

The DateRangePicker is available for UI customization that can be achieved by using available properties and events in the component.

## Day cell format

The DateRangePicker is available for UI customization based on your application requirements. It can be achieved by using [`renderDayCell`](../api/daterangepicker/renderDayCellEventArgs#renderdaycelleventargs) event that provides an option to customize each day cell on rendering.

The following example disables the weekends of every month by using `renderDayCell` event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/daterange-picker/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/daterange-picker/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/daterange-picker/getting-started-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/daterange-picker/getting-started-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/daterange-picker/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/daterange-picker/getting-started-cs2" %}
{% endif %}

## Preset Ranges

DateRangePicker provides an option to set the predefined ranges via [`presets`](../api/daterangepicker/#presets) property with the corresponding label. This property will accept the values in the order of label, start date (date object), end date (date object), and append these ranges to the presets pop-up for quick selection. In the following sample, you can easily choose the frequently used range options from the list of ranges.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/daterange-picker/getting-started-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/daterange-picker/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/daterange-picker/getting-started-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/daterange-picker/getting-started-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/daterange-picker/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/daterange-picker/getting-started-cs3" %}
{% endif %}

## First day of week

Start day in a week will differ based on the culture, but you can also customize this based on the application needs. For this, you have to make use of [`firstDayOfWeek`](../api/daterangepicker#firstdayofweek) property. By default, first day of a week in en-US is Sunday. In the following example it is customized to Monday with the help of this property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/daterange-picker/getting-started-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/daterange-picker/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/daterange-picker/getting-started-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/daterange-picker/getting-started-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/daterange-picker/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/daterange-picker/getting-started-cs4" %}
{% endif %}

## See Also

* [How to customize DateRangePicker using cssClass](./how-to/customization-using-cssclass)
* [How to disable DateRangePicker control](./how-to/disable-the-daterangepicker-component)
* [How to customize the DateRangePicker day header](./how-to/customize-the-daterangepicker-day-header)