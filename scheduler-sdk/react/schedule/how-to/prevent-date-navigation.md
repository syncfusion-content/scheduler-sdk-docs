---
layout: post
title: Prevent Date Navigation in React Scheduler | Syncfusion
description: Learn how to prevent date navigation in the Syncfusion React Scheduler to lock the view on a specific date or range.
control: Scheduler
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Prevent Date Navigation in React Scheduler

You can prevent navigation when clicking the date header by removing the `e-navigate` class from header cells. This can be done in the [`renderCell`](https://ej2.syncfusion.com/react/documentation/api/schedule#rendercell) event, as shown in the following example.

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