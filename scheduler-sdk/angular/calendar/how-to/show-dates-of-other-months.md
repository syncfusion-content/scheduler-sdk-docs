---
layout: post
title: Show dates of other months in Angular Calendar component | Syncfusion
description: Learn here all about Show dates of other months in Syncfusion Angular Calendar component of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Show dates of other months 
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Show dates of other months in Angular Calendar component

The following example demonstrates how to show dates in other months.

The below styles changes the Calendar's other month dates to visible state from its hidden state.

```css
.e-calendar .e-content tr.e-month-hide {
    display: table-row;
}

.e-calendar .e-content td.e-other-month>span.e-day {
    display: inline-block;
}

.e-calendar .e-content td.e-month-hide,
.e-calendar .e-content td.e-other-month {
    pointer-events: auto;
    touch-action: auto;
}
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/calendar/how-to-othermonth-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/calendar/how-to-othermonth-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/scheduler-sdk/angular/calendar/how-to-othermonth-cs1" %}