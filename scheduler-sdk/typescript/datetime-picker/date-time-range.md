---
layout: post
title: Date time range in TypeScript Datetimepicker control | Syncfusion
description: Learn here all about Date time range in Syncfusion TypeScript Datetimepicker control of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Date time range 
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Date time range in TypeScript Datetimepicker control

## DateTime Restriction

DateTimePicker provides an option to select a date and time value within a specified range by using the [`min`](../api/datetimepicker#min)
and [`max`](../api/datetimepicker#max) properties. Always the min value has to be lesser than the max value.

When the min and max properties are configured and the selected datetime value is out-of-range or invalid, then the model value will be set to `out of range` datetime value or `null` respectively with highlighted `error` class to indicates the datetime is out of range or invalid.

The value property depends on the min/max with respect to [`strictMode`](./strict-mode) property.

The below example allows selecting a date within the range from 7th to 27th day in a month.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/datetime-picker/getting-started-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/datetime-picker/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/datetime-picker/getting-started-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/datetime-picker/getting-started-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/datetime-picker/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/datetime-picker/getting-started-cs4" %}
{% endif %}

> If the value of `min` or `max` properties changed through code behind, then you have to update the `value` property to set within the range.

## Time Restriction

DateTimePicker provides an option to select time value within a specified range by using the [`minTime`](../api/datetimepicker#minTime)
and [`maxTime`](../api/datetimepicker#maxTime) properties. Always the minTime value has to be lesser than the maxTime value.

When minTime and maxTime are set, the component will prioritize min if minTime is less than the current min time, and max if maxTime is greater than the current max time. Conversely, it will prioritize minTime if it is greater than the current min time, and maxTime if it is less than the current max time. These behaviors apply only when min and max Dates are selected or pre-bounded, with minTime and maxTime values set for all other dates apart from min and max dates.

The value property depends on the minTime/maxTime with respect to [`strictMode`](./strict-mode) property.

The below example allows selecting a date within the range from 10:00 AM to 8:30 PM of each day.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/datetime-picker/getting-started-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/datetime-picker/getting-started-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/datetime-picker/getting-started-cs12" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/datetime-picker/getting-started-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/datetime-picker/getting-started-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/datetime-picker/getting-started-cs12" %}
{% endif %}