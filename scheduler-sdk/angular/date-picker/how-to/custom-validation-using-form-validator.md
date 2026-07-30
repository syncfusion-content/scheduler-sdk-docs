---
layout: post
title: Custom validation using form validator in Angular Datepicker component | Syncfusion
description: Learn here all about Custom validation using form validator in Syncfusion Angular Datepicker component of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Custom validation using form validator 
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Custom validation using form validator in Angular Datepicker component

The client side validation takes place in the browser to avoid the waiting time to receive the response from sever. It validates the form elements to provide the better feedback messages to correct the every fields before the form submission.

To achieve the client side validation in a DatePicker component by using `FormValidator` function. It provides an option to customize the feedback error messages to the corresponding fields to take action to resolve the issue.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/date-picker/how-to-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/date-picker/how-to-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/scheduler-sdk/angular/date-picker/how-to-cs1" %}
