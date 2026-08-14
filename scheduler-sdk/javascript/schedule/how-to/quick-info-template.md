---
layout: post
title: Quick Info Template in JavaScript Scheduler | Syncfusion
description: Learn how to customize the Quick Info popup in the Syncfusion JavaScript Scheduler using a template to change its appearance and content.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Quick Info Template in JavaScript Scheduler

The Scheduler displays a Quick Info popup when users click cells or appointments. By default it shows standard details; you can customize its appearance and content using templates.

This guide shows how to create custom Quick Info templates for empty time cells and for appointments.

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