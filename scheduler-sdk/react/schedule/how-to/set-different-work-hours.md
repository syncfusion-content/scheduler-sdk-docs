---
layout: post
title: Set Different Working Hours on Different Days in React Scheduler | Syncfusion
description: Learn how to set different work hours for specific days in the Syncfusion React Scheduler using the setWorkHours public method.
control: Scheduler
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Set Different Working Hours on Different Days in React Scheduler

By default, the work hours of the [React Scheduler](https://www.syncfusion.com/react-components/react-scheduler) are highlighted based on the start and end values provided in the [`workHours`](https://ej2.syncfusion.com/react/documentation/api/schedule#workhours) property, which remains the same for all days. To highlight different work hours range for specific days, use the[`setWorkHours`](https://ej2.syncfusion.com/react/documentation/api/schedule#setworkhours) method.

You can pass date object/ multiple date objects collection as first argument and start and end time need to be added as work hours should be passed as second and third arguments respectively. In the following code example, on button click 11:00 AM to 08:00 PM of 15th and 17th February has been added in work hours.

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