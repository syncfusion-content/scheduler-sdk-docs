---
layout: post
title: Time range in TypeScript Timepicker control | Syncfusion
description: Learn here all about Time range in Syncfusion TypeScript Timepicker control of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Time range 
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Time range in TypeScript Timepicker control

TimePicker provides an option to select a time value within a specified range by using the [`min`](../api/timepicker#min) and [`max`](../api/timepicker#max) properties.  The min value should always be lesser than the max value.

When the min and max properties are configured and the selected time value is out-of-range or invalid, then the model value will be set to `out of range` time value or `null` respectively with highlighted `error` class to indicates the time is out of range or invalid.

The value property depends on the min/max with respect to [`strictMode`](./strict-mode) property.

The following example allows you to select a time value within a range of `9:00 AM` to `11:30 AM`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/time-picker/getting-started-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/time-picker/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/time-picker/getting-started-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/time-picker/getting-started-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/time-picker/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/time-picker/getting-started-cs4" %}
{% endif %}

> If the value of `min` or `max` property is changed through code behind you have to update the `value` property to set within the range.

## Time Range customization using two TimePicker components

Here, two TimePicker components are used to select the start and end time. The below sample illustrates the appointment time selection scenario with the start and end time option.

Before the start time selection, the end time TimePicker is in disable state. When the start time is selected, then you will be able to select the end time or else, need to select the entire business hours 9:00 to 18:00 from the Business Hours option. Once the options are checked, both the TimePicker components goes to readonly state.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/time-picker/time-range-customization-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/time-picker/time-range-customization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/time-picker/time-range-customization-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/time-picker/time-range-customization-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/time-picker/time-range-customization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/time-picker/time-range-customization-cs1" %}
{% endif %}