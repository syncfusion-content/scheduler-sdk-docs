---
layout: post
title: Open Event Editor Manually in JavaScript Scheduler | Syncfusion
description: Learn how to open the event editor manually in the Syncfusion JavaScript Scheduler on cell or event click, including on a single click.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Open Event Editor Programmatically in JavaScript Scheduler

The Scheduler opens the editor by default on double-clicks, but you can trigger it programmatically. This guide shows how to open the editor for a time range or an existing event.

## Open editor window externally

Use [`openEditor`](https://ej2.syncfusion.com/documentation/api/schedule#openeditor) to open the event editor manually:

- To open the editor for a specific time range, pass the cell details as the first argument and the string `Add` as the second argument.
- To open the editor for an existing event, pass the event data as the first argument and the string `Save` as the second argument.
{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/open-editor-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/open-editor-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/open-editor-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/open-editor-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/open-editor-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/open-editor-cs1" %}
{% endif %}

## Open editor window on single click

By default, the Scheduler editor window opens when double-clicking cells or appointments. You can also configure it to open with a single click by using the [`openEditor`](https://ej2.syncfusion.com/documentation/api/schedule#openeditor) method within the [`eventClick`](https://ej2.syncfusion.com/documentation/api/schedule#eventclick) and [`cellClick`](https://ej2.syncfusion.com/documentation/api/schedule#cellclick) events of the Scheduler. Additionally, set [`showQuickInfo`](https://ej2.syncfusion.com/documentation/api/schedule#showquickinfo) to `false` to disable the default quick info popup.  

The following example demonstrates how to open the editor window with a single click on cells and appointments.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/default-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/default-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/default-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/default-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/default-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/default-cs5" %}
{% endif %}
