---
layout: post
title: Customization using cssclass in JavaScript Daterangepicker control | Syncfusion
description: Learn here all about Customization using cssclass in Syncfusion JavaScript Daterangepicker control of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Customization using cssclass 
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Customization using cssclass in JavaScript Daterangepicker control

To customize UI, you can make use of [`cssClass`](../../api/daterangepicker#cssclass) that will be added to the DateRangePicker component as the root CSS class. With this CSS class, you can override existing styles of DateRangePicker.

Following is the list of classes that provides flexible way to customize the DateRangePicker component.

| **Class Name** | **Description** |
| --- | --- |
| e-date-range-wrapper | Applied to DateRangePicker wrapper. |
| e-range-icon | Applied to DateRangePicker icon. |
| e-popup | Applied to DateRangePicker popup wrapper.|
| e-calendar | Applied to both Calendar element. |
| e-right-calendar | Applied to right Calendar element. |
| e-left-calendar | Applied to left Calendar element. |
| e-start-label | Applied to start label in a popup. |
| e-end-calendar | Applied to end label in a popup. |
| e-day-span | Applied to day span details label in a popup. |
| e-footer | Applied to footer elements in a popup. |
| e-apply | Applied to apply button in footer in a popup. |
| e-cancel | Applied to cancel button in footer in a popup. |
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

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/daterange-picker/customcss-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/daterange-picker/customcss-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/daterange-picker/customcss-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/daterange-picker/customcss-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/daterange-picker/customcss-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/daterange-picker/customcss-cs1" %}
{% endif %}