---
layout: post
title: Css customization in React Timepicker component | Syncfusion
description: Learn here all about Css customization in Syncfusion React Timepicker component of Syncfusion Essential JS 2 and more.
control: Css customization 
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# CSS customization in React Timepicker component

The TimePicker component provides extensive CSS customization through the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/timepicker#cssclass) property. Use this property to apply custom CSS classes that control the textbox, popup button, and popup list appearance.

The following sample demonstrates customization of text appearance, hover states, and active states using the `e-custom-style` class. Below is the complete list of CSS classes available for customizing the TimePicker component:

| **Class Name** | **Description** |
| --- | --- |
| e-time-wrapper | Applied to TimePicker wrapper element. |
| e-timepicker |  Applied to input element and TimePicker popup element. |
| e-time-wrapper.e-timepicker | Applied to input element only. |
| e-input-group-icon.e-time-icon | Applied to popup button. |
| e-float-text | Applied to floating label text element. |
| e-popup | Applied to popup element. |
| e-timepicker.e-popup | Applied to TimePicker popup element only. |
| e-list-parent | Applied to popup UL element. |
| e-timepicker.e-list-parent | Applied to TimePicker popup UL element only. |
| e-list-item | Applied to LI elements. |
| e-hover | Applied to LI element hovering time. |
| e-active | Applied to active LI element. |

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/scheduler-sdk/react/time-picker/how-to-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/scheduler-sdk/react/time-picker/how-to-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/react/time-picker/how-to-cs1" %}