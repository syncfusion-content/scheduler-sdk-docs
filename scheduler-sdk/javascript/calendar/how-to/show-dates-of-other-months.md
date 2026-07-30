---
layout: post
title: Show dates of other months in JavaScript Calendar control | Syncfusion
description: Learn here all about Show dates of other months in Syncfusion JavaScript Calendar control of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Show dates of other months 
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Show dates of other months in JavaScript Calendar control

The following example demonstrates how to show dates of other months.

Using the styles below, you can bring the dates of other months to visibility from its hidden state.

```
.e-calendar .e-content tr.e-month-hide,
.e-calendar .e-content td.e-other-month>span.e-day {
    display: block;
}

.e-calendar .e-content td.e-month-hide,
.e-calendar .e-content td.e-other-month {
    pointer-events: auto;
    touch-action: auto;
}
```

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/calendar/how-to-othermonth-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/calendar/how-to-othermonth-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/calendar/how-to-othermonth-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/calendar/how-to-othermonth-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/calendar/how-to-othermonth-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/calendar/how-to-othermonth-cs1" %}
{% endif %}
