---
layout: post
title: Date format in Angular Daterangepicker component | Syncfusion
description: Learn here all about Date format in Syncfusion Angular Daterangepicker component of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Date format 
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Date format in Angular Daterangepicker component

## Date Format

Date format is a way of representing the date value in different string format in textbox.

By default the DateRangePicker's format is based on the culture. You can also set the own custom format by using the [`format`](https://ej2.syncfusion.com/angular/documentation/api/daterangepicker/#format) property.

>Once the date format property has been defined it will be common to all the cultures.

To know more about the date format standards, refer to the [Internationalization Date Format](http://ej2.syncfusion.com/documentation/base/internationalization#date-formatter-and-parser) section.

The following example demonstrates the DateRangePicker with the custom format (`yyyy-MM-dd`).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/daterange-picker/getting-started-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/daterange-picker/getting-started-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/scheduler-sdk/angular/daterange-picker/getting-started-cs12" %}

## Input formats 

The [`inputFormats`](https://ej2.syncfusion.com/angular/documentation/api/daterangepicker/) property in the DateRangePicker control allows users to enter dates in various formats, providing flexibility in date entry. This property accepts an array of predefined formats that the control recognizes, enabling users to input dates in different ways while ensuring they are parsed correctly.
 
When the user types the date in any of the specified input formats, it will be automatically converted to the display format after pressing Enter, the Tab key, or when the input loses focus. This enhances the user experience by allowing intuitive data entry through various custom input formats.
 
The following example demonstrates the DateRangePicker with multiple input formats.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/daterange-picker/getting-started-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/daterange-picker/getting-started-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/scheduler-sdk/angular/daterange-picker/getting-started-cs13" %}
