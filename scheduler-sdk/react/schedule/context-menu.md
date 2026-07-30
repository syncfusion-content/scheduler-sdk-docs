---
layout: post
title: Context menu in React Schedule component | Syncfusion
description: Learn here all about Context menu in Syncfusion React Schedule component of Syncfusion Essential JS 2 and more.
control: Scheduler
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Context menu in React Schedule component

You can display a context menu on scheduler work cells and appointments by using the [`ContextMenu`](https://ej2.syncfusion.com/react/documentation/context-menu/getting-started) control manually in the application. In the following code example, the context menu is added in the example and its target is set to the Scheduler component.

On scheduler cells, you can display menu items such as `New Event`, `New Recurring Event`, and `Today`. For appointments, you can display options such as `Edit Event` and `Delete Event`. Use the [`openEditor`](https://ej2.syncfusion.com/react/documentation/api/schedule#openeditor) method of the Scheduler to open the default event window for creating or editing appointments.

The deletion of appointments can be done by using the [`deleteEvent`](https://ej2.syncfusion.com/react/documentation/api/schedule#deleteevent) public method. Also, the [`selectedDate`](https://ej2.syncfusion.com/react/documentation/api/schedule#selecteddate) property can be used to navigate between different dates.

> You can also display custom menu options on scheduler cells and appointments. Context menu will open on tap-hold in responsive mode.

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

> You can refer to our [React Scheduler](https://www.syncfusion.com/react-components/react-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [React Scheduler example](https://ej2.syncfusion.com/react/demos/#/tailwind3/schedule/overview) to knows how to present and manipulate data.
