---
layout: post
title: Customization in TypeScript Datepicker control | Syncfusion
description: Learn here all about Customization in Syncfusion TypeScript Datepicker control of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Customization 
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Customization in TypeScript Datepicker control

You can customize the  entire appearance of the input element and Calendar by using custom [`cssClass`](../api/datepicker#cssclass) property.
and also you can use the calendar's [`renderDayCell`](../api/datepicker/renderDayCellEventArgs#renderdaycelleventargs) event to customize the appearance of the each day cell.

Below is the list of classes that provides flexible way to customize the DatePicker component.

| **Class Name** | **Description** |
| --- | --- |
| e-date-wrapper | Applied to DatePicker wrapper |
| e-datepicker | Applied to the DatePicker element.|
| e-float-text | Applied to the floating label.  |
| e-date-icon | Applied to the DatePicker icon. |
| e-popup-wrapper | Applied to DatePicker popup wrapper.|
| e-calendar | Applied to Calendar element. |
| e-header | Applied to Calendar header.|
| e-title |Applied to Calendar title. |
| e-icon-container | Applied to Calendar previous and next icon container.|
| e-prev |  Applied to Calendar previous icon.|
| e-next | Applied to Calendar next icon.|
| e-weekend | Applied to Calendar weekend dates.|
| e-other-month |  Applied to Calendar other month dates.|
| e-day | Applied to each day cell of the Calendar.|
| e-selected | Applied to Calendar selected dates.|
| e-disabled | Applied to Calendar disabled dates.|

The following example disables the weekends of every month using `renderDayCell` event. Here we have used the `e-disabled` class to highlight the disabled date.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/date-picker/customization-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/date-picker/customization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/date-picker/customization-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/date-picker/customization-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/date-picker/customization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/date-picker/customization-cs1" %}
{% endif %}

## Adding mandatory asterisk to placeholder and float label

You can add a mandatory `asterisk(*)` to placeholder and float label using <b>.e-input-group.e-control-wrapper.e-float-input .e-float-text::after</b> class.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/date-picker/asterisk-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/date-picker/asterisk-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/date-picker/asterisk-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/date-picker/asterisk-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/date-picker/asterisk-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/date-picker/asterisk-cs1" %}
{% endif %}

## See Also

* [How to disable the DatePicker control](./how-to/disabled-the-datepicker-component)
* [How to set read-only for DatePicker](./how-to/set-the-readonly)
* [How to customize the DatePicker day header](./how-to/customize-the-datepicker-day-header)
