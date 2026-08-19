---
layout: post
title: State Persistence in TypeScript Scheduler | Syncfusion
description: Learn how to enable state persistence in the Syncfusion TypeScript Scheduler to retain current view, selected date, and scroll position.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# State Persistence in TypeScript Scheduler

State persistence allows the Scheduler to retain the [`currentView`](https://ej2.syncfusion.com/documentation/api/schedule#currentview), [`selectedDate`](https://ej2.syncfusion.com/documentation/api/schedule#selecteddate), and scroll position values in [`localStorage`](https://www.w3schools.com/html/html5_webstorage.asp#) for state maintenance even if the browser is refreshed or when navigating to another page within the browser. This action is handled through the [`enablePersistence`](https://ej2.syncfusion.com/documentation/api/schedule#enablepersistence) property, which is `false` by default. When set to `true`, the [`currentView`](https://ej2.syncfusion.com/documentation/api/schedule#currentview), [`selectedDate`](https://ej2.syncfusion.com/documentation/api/schedule#selecteddate), and scroll position values of the Scheduler component are retained even after refreshing the page.

> **Note:** The Scheduler `id` is required to enable state persistence.

The following sample demonstrates how to set state persistence of the Scheduler component.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/row-auto-height-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/row-auto-height-cs4/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/row-auto-height-cs4/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/row-auto-height-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/row-auto-height-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/row-auto-height-cs4/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/row-auto-height-cs4/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/row-auto-height-cs4" %}
{% endif %}

> Refer to the [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour page for its feature representations. Also explore our [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/tailwind3/schedule/overview.html) to learn how to present and manipulate data.
