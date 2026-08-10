---
layout: post
title: Set Default Value for Event Fields in React Scheduler | Syncfusion
description: Learn how to set default values for event fields in the Syncfusion React Scheduler editor window to pre-fill data on new appointments.
control: Scheduler
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Set Default Value for Event Fields in React Scheduler

Event window default fields name like Title, Location, etc.. can be customized and default value can be set to Subject field using [`default`](https://ej2.syncfusion.com/react/documentation/api/schedule/fieldOptions#default) property which will be added if an appointment is created with empty subject.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/scheduler-sdk/react/schedule/local-data-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/scheduler-sdk/react/schedule/local-data-cs17/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/react/schedule/local-data-cs17/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/react/schedule/local-data-cs17" %}