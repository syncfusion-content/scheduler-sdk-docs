---
layout: post
title: Prevent Date Navigation in JavaScript Scheduler | Syncfusion
description: Learn how to prevent date navigation in the Syncfusion JavaScript Scheduler to lock the view on a specific date or range.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Prevent Date Navigation in JavaScript Scheduler

By default, clicking a date header navigates the Scheduler to that date. To keep the view fixed, disable this behavior.

Prevent date navigation by removing the `e-navigate` CSS class from header cells via the [`renderCell`](https://ej2.syncfusion.com/documentation/api/schedule#rendercell) event. Example:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/how-to-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/how-to-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/how-to-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/how-to-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/how-to-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/how-to-cs1" %}
{% endif %}