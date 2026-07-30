---
layout: post
title: Show dates of other months in React Calendar component | Syncfusion
description: Learn here all about Show dates of other months in Syncfusion React Calendar component of Syncfusion Essential JS 2 and more.
control: Show dates of other months 
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Show dates of other months in React Calendar component

The following example demonstrates how to show dates from other months.

The styles below make other-month dates visible when they are hidden by default.

```css
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

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/scheduler-sdk/react/calendar/other-month-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/scheduler-sdk/react/calendar/other-month-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/react/calendar/other-month-cs1" %}
