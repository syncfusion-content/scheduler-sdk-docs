---
layout: post
title: Set Different Event Time Duration in React Scheduler | Syncfusion
description: Learn how to set a different event time duration in the Syncfusion React Scheduler by customizing the timeScale interval in the popupOpen event.
control: Scheduler
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Set Different Event Time Duration in React Scheduler

In event window, start/end time duration will be processed based on the [`interval`](https://ej2.syncfusion.com/react/documentation/api/schedule/timeScaleModel#interval) value within the [`timeScale`](https://ej2.syncfusion.com/react/documentation/api/schedule#timescale) property. By default, [`interval`](https://ej2.syncfusion.com/react/documentation/api/schedule/timeScaleModel#interval) value is 30, therefore in event window start/end time duration will be in 30 minutes duration. You can set custom interval range to the start/end time in event window using `popupOpen` event as shown below.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/scheduler-sdk/react/schedule/local-data-cs18/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/scheduler-sdk/react/schedule/local-data-cs18/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/react/schedule/local-data-cs18/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/react/schedule/local-data-cs18" %}