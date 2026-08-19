---
layout: post
title: Prevent Date Navigation in TypeScript Scheduler | Syncfusion
description: Learn how to prevent date navigation in the Syncfusion TypeScript Scheduler to lock the view on a specific date or range.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Prevent Date Navigation in TypeScript Scheduler

By default, clicking date headers in the Scheduler control navigates to the corresponding date view. In certain scenarios, you may want to disable this navigation behavior to maintain a fixed view.

You can prevent date navigation by removing the `e-navigate` CSS class from the header cells. This can be achieved using the [`renderCell`](https://ej2.syncfusion.com/documentation/api/schedule#rendercell) event, as shown in the following example.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/how-to-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/how-to-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/how-to-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/how-to-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/how-to-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/how-to-cs1" %}
{% endif %}