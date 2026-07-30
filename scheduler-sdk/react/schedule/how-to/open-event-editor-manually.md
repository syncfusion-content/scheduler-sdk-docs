---
layout: post
title: Open event editor manually in React Schedule component | Syncfusion
description: Learn here all about Open event editor manually in Syncfusion React Schedule component of Syncfusion Essential JS 2 and more.
control: Scheduler
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Open event editor manually in React Schedule component

## Open Editor Window externally

The [React Scheduler](https://www.syncfusion.com/react-components/react-scheduler) allows users to manually open the event editor at a specific time or in response to certain events by using the [`openEditor`](https://ej2.syncfusion.com/react/documentation/api/schedule#openeditor) method, as shown below.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/scheduler-sdk/react/schedule/editor-open-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/scheduler-sdk/react/schedule/editor-open-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/react/schedule/editor-open-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/react/schedule/editor-open-cs1" %}

## Open editor window on single click

By default, the Scheduler editor window opens when double-clicking cells or appointments. To open the editor window with a single click, use the [`openEditor`](https://ej2.syncfusion.com/react/documentation/api/schedule#openeditor) method in [`eventClick`](https://ej2.syncfusion.com/react/documentation/api/schedule#eventclick) and [`cellClick`](https://ej2.syncfusion.com/angular/documentation/api/schedule#cellclick) events handlers, and set the [`showQuickInfo`](https://ej2.syncfusion.com/react/documentation/api/schedule#showquickinfo) property to `false`. The following example shows how to open editor window on single click of cells and appointments.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/scheduler-sdk/react/schedule/editor-open-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/scheduler-sdk/react/schedule/editor-open-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/react/schedule/editor-open-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/react/schedule/editor-open-cs2" %}
