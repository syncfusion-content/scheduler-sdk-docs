---
layout: post
title: Set Different Working Hours on Different Days in React Scheduler | Syncfusion
description: Learn how to set different work hours for specific days in the Syncfusion React Scheduler to match varied team schedules.
control: Scheduler
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Set Different Working Hours on Different Days in React Scheduler

By default, the work hours of the [React Scheduler](https://www.syncfusion.com/react-components/react-scheduler) are highlighted based on the start and end values provided in the [`workHours`](https://ej2.syncfusion.com/react/documentation/api/schedule#workhours) property, which remains the same for all days. To highlight different work-hour ranges for specific days, use the [`setWorkHours`](https://ej2.syncfusion.com/react/documentation/api/schedule#setworkhours) method.

You can pass a date object or a collection of date objects as the first argument, and pass the start and end times as the second and third arguments respectively. In the following code example, clicking the button adds work hours from 11:00 AM to 8:00 PM on 15 and 17 February.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/scheduler-sdk/react/schedule/editor-open-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/scheduler-sdk/react/schedule/editor-open-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/react/schedule/editor-open-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/react/schedule/editor-open-cs3" %}