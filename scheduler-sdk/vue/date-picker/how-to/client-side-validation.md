---
layout: post
title: Client side validation in Vue Datepicker component | Syncfusion
description: Learn here all about Client side validation in Syncfusion Vue Datepicker component of Syncfusion Essential JS 2 and more.
control: Client side validation 
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Client side validation in Vue Datepicker component

To achieve the client side validation in a DatePicker component by using [Essential<sup style="font-size:70%">&reg;</sup> JavaScript 2 FormValidator](https://ej2.syncfusion.com/documentation/form-validator/). It provides an option to customize the feedback error messages to the corresponding fields to take action to resolve the issue.

In the below example, the required field validation is implemented by mapping the name attribute value to the rules property. It will validate the DatePicker component and display the validation message when the textbox value is empty during form post back or focus out.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/date-picker/getting-started-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/date-picker/getting-started-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/vue/date-picker/getting-started-cs4" %}