---
layout: post
title: Add, Edit, and Remove Events in JavaScript Scheduler | Syncfusion
description: Learn on how to add, edit, and remove events dynamically in the Syncfusion JavaScript Scheduler control.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Add, Edit, and Remove Events in JavaScript Scheduler

Perform CRUD (Create, Read, Update, Delete) operations on Scheduler appointments programmatically using these methods:

- [`addEvent`](https://ej2.syncfusion.com/documentation/api/schedule#addevent) — create new event(s).
- [`saveEvent`](https://ej2.syncfusion.com/documentation/api/schedule#saveevent) — update or create an event.
- [`deleteEvent`](https://ej2.syncfusion.com/documentation/api/schedule#deleteevent) — remove event(s).

These methods are useful when you need to manage appointments without the built-in event editor.

## Normal event

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/app-crud-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/app-crud-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/app-crud-cs1" %}

## Recurrence event

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/app-crud-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/app-crud-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/app-crud-cs2" %}
