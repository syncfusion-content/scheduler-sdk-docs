---
layout: post
title: Client side validation in JavaScript Datepicker control | Syncfusion
description: Learn here all about Client side validation in Syncfusion JavaScript Datepicker control of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Client side validation 
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Client side validation in JavaScript Datepicker control

To achieve the client side validation in a DatePicker component by using [Essential<sup style="font-size:70%">&reg;</sup> JavaScript 2 FormValidator](../../form-validator/). It provides an option to customize the feedback error messages to the corresponding fields to take action to resolve the issue.

In this below example, the required field validation is implemented by mapping the name attribute value to the rules property. It will validate the DatePicker component and display the validation message when the textbox value is empty during form post back or focus out.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/date-picker/form-validator-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/date-picker/form-validator-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/date-picker/form-validator-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/date-picker/form-validator-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/date-picker/form-validator-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/date-picker/form-validator-cs1" %}
{% endif %}