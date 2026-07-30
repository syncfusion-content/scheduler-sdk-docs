---
layout: post
title: Prevent the popup close in Vue Datepicker component | Syncfusion
description: Learn here all about Prevent the popup close in Syncfusion Vue Datepicker component of Syncfusion Essential JS 2 and more.
control: Prevent the popup close 
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Prevent the popup close in Vue Datepicker component

To prevent the DatePicker popup from closing, use the preventDefault method from the `PreventableEventArgs`.

The following example demonstrates how to prevent the popup from closing.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/date-picker/min-max-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/date-picker/min-max-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/vue/date-picker/min-max-cs4" %}