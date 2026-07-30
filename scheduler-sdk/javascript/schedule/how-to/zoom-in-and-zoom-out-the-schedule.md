---
layout: post
title: Zoom in and zoom out in JavaScript Scheduler control | Syncfusion
description: Learn here all about Zoom in and zoom out in Syncfusion JavaScript Scheduler control of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Scheduler
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Zoom in and zoom out in JavaScript Scheduler control

By default, the Scheduler component does not provide built-in zoom in or zoom out support. However, this functionality can be achieved by customizing the [`timeScale`](https://ej2.syncfusion.com/documentation/api/schedule#timescale) and [`headerRows`](https://ej2.syncfusion.com/documentation/api/schedule#headerrows) properties.  

Refer to the following code example for implementation.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/zoom-in-out-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/zoom-in-out-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/zoom-in-out-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/zoom-in-out-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/zoom-in-out-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/zoom-in-out-cs1" %}
{% endif %}