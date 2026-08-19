---
layout: post
title: Zoom In and Zoom Out in JavaScript Scheduler | Syncfusion
description: Learn how to zoom in and zoom out in the Syncfusion JavaScript Scheduler to give users a flexible view of appointments.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Zoom In and Zoom Out in JavaScript Scheduler

The Scheduler does not provide built-in zoom controls, but you can implement zooming by adjusting the `timeScale` and `headerRows` properties programmatically.

See the example below for an implementation approach.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/zoom-in-out-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/zoom-in-out-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/zoom-in-out-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/zoom-in-out-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/zoom-in-out-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/zoom-in-out-cs1" %}
{% endif %}