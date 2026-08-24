---
layout: post
title: Open Event Editor Manually in TypeScript Scheduler | Syncfusion
description: Learn how to open the event editor manually in the Syncfusion TypeScript Scheduler on cell or event click, including on a single click.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Open Event Editor Programmatically in TypeScript Scheduler

The Scheduler control provides flexibility for event creation and editing. By default, the editor opens when you double-click cells or appointments. However, you can also trigger the editor programmatically. This guide demonstrates different approaches to manually open the event editor window in your Scheduler application.

## Open editor window externally

The Scheduler allows users to manually open the event editor for a specific time range or event using the [`openEditor`](https://ej2.syncfusion.com/documentation/api/schedule#openeditor) method.  

- To open the editor for a specific time range, pass the cell details as the first argument and **Add** as the second argument.  
- To open the editor for an existing event, pass the event details as the first argument and **Save** as the second argument.  


{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/open-editor-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/open-editor-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/open-editor-cs1" %}

## Open editor window on single click

By default, the Scheduler editor window opens when double-clicking cells or appointments. You can also configure it to open with a single click by using the [`openEditor`](https://ej2.syncfusion.com/documentation/api/schedule#openeditor) method within the [`eventClick`](https://ej2.syncfusion.com/documentation/api/schedule#eventclick) and [`cellClick`](https://ej2.syncfusion.com/documentation/api/schedule#cellclick) events of the Scheduler. Additionally, set [`showQuickInfo`](https://ej2.syncfusion.com/documentation/api/schedule#showquickinfo) to `false` to disable the default quick info popup.  

The following example demonstrates how to open the editor window with a single click on cells and appointments.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/default-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/default-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/default-cs5" %}
