---
layout: post
title: Two way binding in Vue Datepicker component | Syncfusion
description: Learn here all about Two way binding in Syncfusion Vue Datepicker component of Syncfusion Essential JS 2 and more.
control: Two way binding 
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Two way binding in Vue Datepicker component

Two-way binding can be achieved by using the `v-model` directive in Vue. In the following sample, when you change the value in one DatePicker component, v-model will automatically update the value in the other DatePicker.

The following example demonstrates how to set the `two-way-binding` in the DatePicker.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/date-picker/two-way-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/date-picker/two-way-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/vue/date-picker/two-way-cs1" %}