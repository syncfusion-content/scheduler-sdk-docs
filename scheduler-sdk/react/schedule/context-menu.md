---
layout: post
title: Context Menu in React Scheduler | Syncfusion
description: Learn how to integrate the Context Menu in the Syncfusion React Scheduler to perform actions on cells, resource cells, and appointments.
control: Scheduler
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Context Menu in React Scheduler

You can display a context menu on scheduler work cells and appointments by using the [`ContextMenu`](https://ej2.syncfusion.com/react/documentation/context-menu/getting-started) control manually in the application. In the following code example, the context menu is added in the example and its target is set to the Scheduler component.

## Context menu options

On scheduler cells, you can display menu items such as:
- `New Event`
- `New Recurring Event`
- `Today`

For appointments, you can display options such as:
- `Edit Event`
- `Delete Event`

## Using public methods

Use the [`openEditor`](https://ej2.syncfusion.com/react/documentation/api/schedule#openeditor) method of the Scheduler to open the default event window for creating or editing appointments.

The deletion of appointments can be done by using the [`deleteEvent`](https://ej2.syncfusion.com/react/documentation/api/schedule#deleteevent) public method. Also, the [`selectedDate`](https://ej2.syncfusion.com/react/documentation/api/schedule#selecteddate) property can be used to navigate between different dates.

> **Note:** You can also display custom menu options on scheduler cells and appointments. Context menu will open on tap-hold in responsive mode.

## Implementation example

The following example demonstrates how to implement a context menu for the Scheduler:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/scheduler-sdk/react/schedule/context-menu-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/scheduler-sdk/react/schedule/context-menu-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/react/schedule/context-menu-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/scheduler-sdk/react/schedule/context-menu-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/react/schedule/context-menu-cs1" %}

## See also

* [Syncfusion React Scheduler](https://www.syncfusion.com/scheduler-sdk/react-scheduler)
* [Scheduler API Reference](https://ej2.syncfusion.com/react/documentation/api/schedule)
* [ContextMenu Component Documentation](https://ej2.syncfusion.com/react/documentation/context-menu/getting-started)
* [Scheduler Live Examples](https://ej2.syncfusion.com/react/demos/#/tailwind3/schedule/overview)
