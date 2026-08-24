---
layout: post
title: Clipboard in JavaScript Scheduler | Syncfusion
description: Learn how to enable cut, copy, and paste for appointments in the Syncfusion JavaScript Scheduler with built-in clipboard support and keyboard shortcuts.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Clipboard in JavaScript Scheduler

The Clipboard functionality in the Scheduler enhances scheduling efficiency by enabling users to cut, copy, and paste appointments seamlessly. This feature is particularly beneficial for managing multiple appointments, eliminating repetitive data entry and allowing users to quickly adjust their schedules.

To activate clipboard functionality in the Scheduler, set the [`allowClipboard`](https://ej2.syncfusion.com/documentation/api/schedule#allowclipboard) property to `true`.

> Note: The [`allowKeyboardInteraction`](https://ej2.syncfusion.com/documentation/api/schedule#allowkeyboardinteraction) property is set to `true` for proper clipboard functionality via keyboard shortcuts.

## Cut, copy, and paste using keyboard

The Scheduler supports keyboard shortcuts to streamline appointment management operations.

Use these keyboard shortcuts to manage appointments efficiently:

| Operation | Shortcut | Description                                                      |
|-----------|----------|------------------------------------------------------------------|
| Copy      | Ctrl+C   | Duplicate the selected appointment for reuse in another time slot. |
| Cut       | Ctrl+X   | Remove the selected appointment from its current slot for relocation. |
| Paste     | Ctrl+V   | Insert the copied or cut appointment into the target time slot.  |

To perform these operations, select an appointment and press **Ctrl+C** to copy or **Ctrl+X** to cut. Then, select the desired destination time slot and press **Ctrl+V** to paste the appointment.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/clipboard-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/clipboard-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/clipboard-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/clipboard-cs1" %}

> Note: For Mac users, use `Cmd` instead of `Ctrl` for copy, cut, and paste operations.

## Cut, copy, and paste using context menu

You can programmatically manage appointments using the public methods `cut`, `copy`, and `paste`. These methods perform the same actions as the context menu or external buttons.

Use these public methods to programmatically control appointment operations in the Scheduler:

| Method | Parameters                     | Description                                                                                     |
|--------|--------------------------------|-------------------------------------------------------------------------------------------------|
| [`copy`](https://ej2.syncfusion.com/documentation/api/schedule#copy)   | None                           | Duplicate the selected appointment for reuse.                                                   |
| [`cut`](https://ej2.syncfusion.com/documentation/api/schedule#cut)    | None                           | Remove the selected appointment from its current slot for moving.                               |
| [`paste`](https://ej2.syncfusion.com/documentation/api/schedule#paste)  | targetElement (Scheduler's work-cell) | Insert the copied or cut appointment into the specified time slot.                              |

By using these methods, you can programmatically cut, copy, and paste appointments in the Scheduler, providing more control over appointment management.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/clipboard-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/clipboard-cs2/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/clipboard-cs2/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/clipboard-cs2" %}

## Modifying content before pasting

You can modify the content of an appointment before pasting it by using [`beforePaste`](https://ej2.syncfusion.com/documentation/api/schedule#beforepaste) event accessing the appointment details and making necessary changes.

The following example demonstrates how to copy content from a Grid control and paste it into the Scheduler. Follow these steps:

1. **Select an Item**: Click on an item in the Grid control.
2. **Copy the Details**: Press **Ctrl + C** to copy the selected item details.
3. **Choose a Time Slot**: Click on the desired time slot in the Scheduler.
4. **Paste the Details**: Press **Ctrl + V** to paste the copied appointment details into the selected time slot.

The `beforePaste` event intercepts the appointment data before insertion, allowing you to map Grid fields to Scheduler fields and modify properties as needed.

> Note: Ensure that the field mapping matches the Scheduler's event fields.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/clipboard-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/clipboard-cs3/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/clipboard-cs3/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/clipboard-cs3" %}


> Refer to our [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour page for an overview of key capabilities. You can also explore the [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/tailwind3/schedule/overview.html) to learn how to present and manipulate data.
