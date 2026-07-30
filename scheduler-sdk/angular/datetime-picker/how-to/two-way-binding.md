---
layout: post
title: Two way binding in Angular Datetimepicker component | Syncfusion
description: Learn here all about Two way binding in Syncfusion Angular Datetimepicker component of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Two way binding 
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Two way binding in Angular Datetimepicker component

The following example demonstrates how to achieve **two-way binding** by binding the **value** to the first DateTimePicker component by using property binding and binding the model data using **ngModel** by using model binding to the DateTimePicker component. The **value** of the DateTimePicker will get change, when their is any change in the property value or model value.

> The two-way binding can also be achieved only by using **property binding** or **model binding** in the DateTimePicker component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/datetime-picker/two-way-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/datetime-picker/two-way-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/scheduler-sdk/angular/datetime-picker/two-way-cs1" %}