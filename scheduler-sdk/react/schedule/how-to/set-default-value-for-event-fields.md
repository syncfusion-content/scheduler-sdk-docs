---
layout: post
title: Set Default Values for React Schedule Event Fields | Syncfusion
description: Learn here all about Set default value for event fields in Syncfusion React Schedule component of Syncfusion Essential JS 2 and more.
control: Scheduler 
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Set default values for event fields in React Schedule component

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