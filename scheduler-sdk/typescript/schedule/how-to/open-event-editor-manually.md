---
layout: post
title: Manual event editor in TypeScript Scheduler | Syncfusion
description: Learn here all about Open event editor manually in Syncfusion TypeScript Scheduler control of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Scheduler
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Open event editor manually in TypeScript Scheduler control

The Scheduler control provides flexibility for event creation and editing. By default, the editor opens when double-clicking on cells or appointments. However, you can also trigger the editor programmatically. This guide demonstrates different approaches to manually open the event editor window in your Scheduler application.

## Open editor window externally

The Scheduler allows users to manually open the event editor for a specific time range or event using the [`openEditor`](https://ej2.syncfusion.com/documentation/api/schedule#openeditor) method.  

- To open the editor for a specific time range, pass the cell details as the first argument and **Add** as the second argument.  
- To open the editor for an existing event, pass the event details as the first argument and **Save** as the second argument.  


{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/open-editor-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/open-editor-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/open-editor-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/open-editor-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/open-editor-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/open-editor-cs1" %}
{% endif %}

## Open editor window on single click

By default, the Scheduler editor window opens when double-clicking cells or appointments. You can also configure it to open with a single click by using the [`openEditor`](https://ej2.syncfusion.com/documentation/api/schedule#openeditor) method within the [`eventClick`](https://ej2.syncfusion.com/documentation/api/schedule#eventclick) and [`cellClick`](https://ej2.syncfusion.com/documentation/api/schedule#cellclick) events of the Scheduler. Additionally, set [`showQuickInfo`](https://ej2.syncfusion.com/documentation/api/schedule#showquickinfo) to `false` to disable the default quick info popup.  

The following example demonstrates how to open the editor window with a single click on cells and appointments.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/default-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/default-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/default-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/default-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/default-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/default-cs5" %}
{% endif %}
