---
layout: post
title: Select a sequence of dates in calendar in JavaScript Calendar control | Syncfusion
description: Learn here all about Select a sequence of dates in calendar in Syncfusion JavaScript Calendar control of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Select a sequence of dates in calendar 
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Select a sequence of dates in calendar in JavaScript Calendar control

The following example demonstrates how to select the week dates of chosen date in the Calendar using [`values`](../../api/calendar#values) property, when [`multiSelection`](../../api/calendar#ismultiselection) property is enabled. Methods of Moment.js is used in this sample for calculating the start and end of week from the selected date.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/calendar/how-to-multiselect-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/calendar/how-to-multiselect-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/calendar/how-to-multiselect-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/calendar/how-to-multiselect-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/calendar/how-to-multiselect-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/calendar/how-to-multiselect-cs1" %}
{% endif %}
