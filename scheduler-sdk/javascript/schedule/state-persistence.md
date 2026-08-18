---
layout: post
title: State Persistence in JavaScript Scheduler | Syncfusion
description: Learn how to enable state persistence in the Syncfusion JavaScript Scheduler to retain current view, selected date, and scroll position.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---


# State Persistence in JavaScript Scheduler

State persistence lets the Scheduler retain the [`currentView`](https://ej2.syncfusion.com/documentation/api/schedule#currentview), [`selectedDate`](.https://ej2.syncfusion.com/documentation/api/schedule#selecteddate) and scroll position in [`localStorage`](https://www.w3schools.com/html/html5_webstorage.asp#) so the UI state survives page reloads or navigation. Enable this behavior with the [`enablePersistence`](https://ej2.syncfusion.com/documentation/api/schedule#enablepersistence) property (default: `false`).

Note: the Scheduler must have a stable `id` for state persistence to work.

The sample below demonstrates enabling state persistence for the Scheduler.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/row-auto-height-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/row-auto-height-cs4/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/row-auto-height-cs4/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/row-auto-height-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/row-auto-height-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/row-auto-height-cs4/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/row-auto-height-cs4/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/row-auto-height-cs4" %}
{% endif %}

> Refer to the [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour for an overview, and explore the [Scheduler demo](https://ej2.syncfusion.com/demos/#/tailwind3/schedule/overview.html) for practical examples.
