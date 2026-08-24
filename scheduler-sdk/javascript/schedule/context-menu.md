---
layout: post
title: Context Menu in JavaScript Scheduler | Syncfusion
description: Learn how to integrate the Context Menu in the Syncfusion JavaScript Scheduler to perform actions on cells, resource cells, and appointments.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Context Menu in JavaScript Scheduler

The context menu can be displayed on work cells and appointments within the Scheduler by manually integrating the [`ContextMenu`](https://ej2.syncfusion.com/documentation/context-menu/getting-started) control from the application. In the following example, the ContextMenu control is added and its target is set to the `Scheduler`.

On Scheduler cells, menu items such as `New Event`, `New Recurring Event`, and `Today` can be displayed. For appointments, relevant options like `Edit Event` and `Delete Event` are available. The default event window for creating or editing appointments can be opened using the [`openEditor`](https://ej2.syncfusion.com/documentation/api/schedule#openeditor) method of the Scheduler.

Appointments can be deleted using the [`deleteEvent`](https://ej2.syncfusion.com/documentation/api/schedule#deleteevent) public method. The [`selectedDate`](https://ej2.syncfusion.com/documentation/api/schedule#selecteddate) property allows navigation between different dates.

> Custom menu options can also be displayed on Scheduler cells and appointments. In responsive mode, the context menu opens with a tap-and-hold gesture.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/context-menu-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/context-menu-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/context-menu-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/context-menu-cs1" %}

> Refer to the [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour page for comprehensive feature demonstrations. You can also explore the [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/tailwind3/schedule/overview.html) to learn how to present and manipulate data.
