---
layout: post
title: Date format in JavaScript Daterangepicker control | Syncfusion
description: Learn here all about Date format in Syncfusion JavaScript Daterangepicker control of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Date format 
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Date format in JavaScript Daterangepicker control

Date format is a way of representing the date value in different string format in the textbox.

By default, the DateRangePicker's format is based on the culture. You can also set the own custom format by using the [`format`](../api/daterangepicker/#format) property.

> Once the date format property has been defined it will be common to all the cultures.

To know more about the date format standards, refer to the [Internationalization Date Format](https://ej2.syncfusion.com/documentation/common/internationalization) section.

The following example demonstrates the DateRangePicker with the custom format (`yyyy-MM-dd`).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/daterange-picker/getting-started-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/daterange-picker/getting-started-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/daterange-picker/getting-started-cs14" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/daterange-picker/getting-started-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/daterange-picker/getting-started-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/daterange-picker/getting-started-cs14" %}
{% endif %}

## Input formats 

The [`inputFormats`](../api/daterangepicker/) property in the DateRangePicker control allows users to enter dates in various formats, providing flexibility in date entry. This property accepts an array of predefined formats that the control recognizes, enabling users to input dates in different ways while ensuring they are parsed correctly.
 
When the user types the date in any of the specified input formats, it will be automatically converted to the display format after pressing Enter, the Tab key, or when the input loses focus. This enhances the user experience by allowing intuitive data entry through various custom input formats.
 
The following example demonstrates the DateRangePicker with multiple input formats.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/daterange-picker/getting-started-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/daterange-picker/getting-started-cs15/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/daterange-picker/getting-started-cs15" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/daterange-picker/getting-started-cs15/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/daterange-picker/getting-started-cs15/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/daterange-picker/getting-started-cs15" %}
{% endif %}
