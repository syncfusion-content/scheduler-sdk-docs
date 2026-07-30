---
layout: post
title: Prevent the popup close in JavaScript Datepicker control | Syncfusion
description: Learn here all about Prevent the popup close in Syncfusion JavaScript Datepicker control of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Prevent the popup close 
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Prevent the popup close in JavaScript Datepicker control

To prevent the DatePicker popup from closing, use the preventDefault method from the `PreventableEventArgs`.

The following example demonstrates how to prevent the popup from closing.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/date-picker/getting-started-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/date-picker/getting-started-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/date-picker/getting-started-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/date-picker/getting-started-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/date-picker/getting-started-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/date-picker/getting-started-cs7" %}
{% endif %}
