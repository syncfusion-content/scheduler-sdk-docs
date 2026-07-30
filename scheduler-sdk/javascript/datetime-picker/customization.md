---
layout: post
title: Customization in JavaScript Datetimepicker control | Syncfusion
description: Learn here all about Customization in Syncfusion JavaScript Datetimepicker control of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Customization 
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Customization in JavaScript Datetimepicker control

The DateTimePicker is available for UI customization that can be achieved by using available properties and events in the component.

## Day and Time Cell format

The DateTimePicker is available for UI customization based on your application requirements. It can be achieved by using [`renderDayCell`](../api/datetimepicker/renderDayCellEventArgs#renderdaycelleventargs) event that provides an option to customize each day cell on rendering.

The following example disables the weekends of every month by using `renderDayCell` event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/datetime-picker/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/datetime-picker/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/datetime-picker/getting-started-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/datetime-picker/getting-started-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/datetime-picker/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/datetime-picker/getting-started-cs2" %}
{% endif %}

## Adding mandatory asterisk to placeholder and float label

You can add a mandatory `asterisk(*)` to placeholder and float label using <b>.e-input-group.e-control-wrapper.e-float-input .e-float-text::after</b> class.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/datetime-picker/asterisk-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/datetime-picker/asterisk-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/datetime-picker/asterisk-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/datetime-picker/asterisk-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/datetime-picker/asterisk-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/datetime-picker/asterisk-cs1" %}
{% endif %}

## See Also

* [How to disable the DateTimePicker control](./how-to/disable-the-datetimepicker-component)
* [How to customize the DateTimePicker day header](./how-to/customize-the-datetimepicker-day-header)