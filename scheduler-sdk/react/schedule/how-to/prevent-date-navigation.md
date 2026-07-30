---
layout: post
title: Prevent date navigation in React Schedule component | Syncfusion
description: Learn here all about Prevent date navigation in Syncfusion React Schedule component of Syncfusion Essential JS 2 and more.
control: Scheduler 
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Prevent date navigation in React Schedule component

We can prevent navigation while clicking on the date header by simply removing `e-navigate` class from header cells which can be achieved in the [`renderCell`](https://ej2.syncfusion.com/react/documentation/api/schedule#rendercell) event as shown in the below demo.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/scheduler-sdk/react/schedule/local-data-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/scheduler-sdk/react/schedule/local-data-cs16/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/react/schedule/local-data-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/react/schedule/local-data-cs16" %}