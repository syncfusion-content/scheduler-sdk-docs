---
layout: post
title: Context Menu in TypeScript Scheduler | Syncfusion
description: Learn how to integrate the Context Menu in the Syncfusion TypeScript Scheduler to perform actions on cells, resource cells, and appointments.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Context Menu in TypeScript Scheduler

The context menu can be displayed on work cells and appointments within the Scheduler by integrating the [`ContextMenu`](https://ej2.syncfusion.com/documentation/context-menu/getting-started) control in your application. In the following example, the ContextMenu target is set to the Scheduler element.

On Scheduler cells, menu items such as `New Event`, `New Recurring Event`, and `Today` can be displayed. For appointments, relevant options like `Edit Event` and `Delete Event` are available. The default event window for creating or editing appointments can be opened using the [`openEditor`](https://ej2.syncfusion.com/documentation/api/schedule#openeditor) method of the Scheduler.

Appointments can be deleted using the [`deleteEvent`](https://ej2.syncfusion.com/documentation/api/schedule#deleteevent) public method. The [`selectedDate`](https://ej2.syncfusion.com/documentation/api/schedule#selecteddate) property can be used to navigate to a different date.

> Custom menu options can also be displayed on Scheduler cells and appointments. In responsive mode, the context menu opens with a tap-and-hold gesture.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/context-menu-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/context-menu-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/context-menu-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/context-menu-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/context-menu-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/context-menu-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/context-menu-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/context-menu-cs1" %}
{% endif %}

> For more information, refer to the [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour page for comprehensive feature demonstrations. Explore the [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/tailwind3/schedule/overview.html) to learn how to present and manipulate data.
