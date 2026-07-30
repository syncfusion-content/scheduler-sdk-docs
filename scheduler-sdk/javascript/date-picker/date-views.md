---
layout: post
title: Date views in JavaScript Datepicker control | Syncfusion
description: Learn here all about Date views in Syncfusion JavaScript Datepicker control of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Date views 
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Date views in JavaScript Datepicker control

The DatePicker has the following predefined views that provides a flexible way to navigate back and forth to select the date.

| **View** | **Description** |
| --- | --- |
| month (default) | Displays the days in a month |
| year | Displays the months in a year |
| decade | Displays the years in a decade |

## Start view

You can use the [`start`](../api/datepicker#start) property to define the initial rendering view.

The following example demonstrates how to create a DatePicker with `decade` as initial rendering view.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/date-picker/getting-started-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/date-picker/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/date-picker/getting-started-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/date-picker/getting-started-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/date-picker/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/date-picker/getting-started-cs4" %}
{% endif %}

## Depth view

Define the [`depth`](../api/datepicker#depth) property to control the view navigation.

> Always the depth view has to be smaller than the start view, otherwise the view restriction will be not restricted.

The following example demonstrates how to create a DatePicker that allows users to select a month.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/date-picker/getting-started-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/date-picker/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/date-picker/getting-started-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/date-picker/getting-started-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/date-picker/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/date-picker/getting-started-cs5" %}
{% endif %}

> To know more about Calendar views refer the Calendar's [Calendar Views](../calendar/calendar-views/) section.