---
layout: post
title: Set different event duration in React Schedule | Syncfusion
description: Learn here all about Set different event time duration in Syncfusion React Schedule component of Syncfusion Essential JS 2 and more.
control: Scheduler 
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Set different event time duration in React Schedule component

In the event window, the start and end time durations are based on the [`interval`](https://ej2.syncfusion.com/react/documentation/api/schedule/timeScaleModel#interval) value within the [`timeScale`](https://ej2.syncfusion.com/react/documentation/api/schedule#timescale) property. By default, the [`interval`](https://ej2.syncfusion.com/react/documentation/api/schedule/timeScaleModel#interval) value is 30, so the start and end time durations in the event window are 30 minutes. You can set a custom interval range for the start and end times in the event window by using the `popupOpen` event, as shown below.

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