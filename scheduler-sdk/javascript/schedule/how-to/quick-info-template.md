---
layout: post
title: Quick info template in JavaScript Scheduler control | Syncfusion
description: Learn here all about Quick info template in Syncfusion JavaScript Scheduler control of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Scheduler
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Quick Info template in JavaScript Scheduler control

The Scheduler control displays a pop-up window (Quick Info) when users click on cells or appointments. By default, this Quick Info shows standard information. You can customize its appearance and content using templates to better suit your application requirements.

This guide demonstrates how to create custom templates for Quick Info pop-ups that appear when clicking on both empty time cells and appointments in the Scheduler control.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/how-to-quick-info-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/how-to-quick-info-template-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/how-to-quick-info-template-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/how-to-quick-info-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/how-to-quick-info-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/how-to-quick-info-template-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/how-to-quick-info-template-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/how-to-quick-info-template-cs1" %}
{% endif %}