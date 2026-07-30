---
layout: post
title: Clipboard in TypeScript Scheduler control | Syncfusion
description: Learn here all about Clipboard in Syncfusion TypeScript Scheduler control of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Clipboard 
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Clipboard in TypeScript Scheduler control

The Clipboard functionality in the Scheduler control enhances scheduling efficiency by enabling users to cut, copy, and paste appointments seamlessly. This feature is particularly beneficial for managing multiple appointments, eliminating repetitive data entry and allowing users to quickly adjust their schedules.

To activate clipboard functionality in the Scheduler, set the [`allowClipboard`](https://ej2.syncfusion.com/documentation/api/schedule#allowclipboard) property to **true**.

>Note: The [`allowKeyboardInteraction`](https://ej2.syncfusion.com/documentation/api/schedule#allowkeyboardinteraction) property is set to **true** for proper clipboard functionality through keyboard shortcuts.

## Cut, copy, and paste using keyboard

The Scheduler control supports keyboard shortcuts to streamline appointment management operations.

Use these keyboard shortcuts to efficiently manage appointments:

| Operation | Shortcut | Description                                                      |
|-----------|----------|------------------------------------------------------------------|
| Copy      | Ctrl+C   | Duplicate the selected appointment for reuse in another time slot. |
| Cut       | Ctrl+X   | Remove the selected appointment from its current slot for relocation. |
| Paste     | Ctrl+V   | Insert the copied or cut appointment into the target time slot.  |

To perform these operations, select an appointment and press **Ctrl+C** to copy or **Ctrl+X** to cut. Then, select the desired destination time slot and press **Ctrl+V** to paste the appointment.

{% if page.publishingplatform == "typescript" %}

 {% tabs %} 
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/clipboard-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/clipboard-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/clipboard-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/clipboard-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/clipboard-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/clipboard-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/clipboard-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/clipboard-cs1" %}
{% endif %}

>Note: For Mac users, use **Cmd** instead of **Ctrl** for copy, cut, and paste operations.

## Cut, copy, and paste using context menu

You can programmatically manage appointments by using the public methods **cut**, **copy**, and **paste**. These methods allow you to perform the same actions as the context menu or external buttons.

Use these public methods to programmatically control appointment operations in the Scheduler control:

| Method | Parameters                     | Description                                                                                     |
|--------|--------------------------------|-------------------------------------------------------------------------------------------------|
| [`copy`](https://ej2.syncfusion.com/documentation/api/schedule#copy)   | None                           | Duplicate the selected appointment for reuse.                                                   |
| [`cut`](https://ej2.syncfusion.com/documentation/api/schedule#cut)    | None                           | Remove the selected appointment from its current slot for moving.                               |
| [`paste`](https://ej2.syncfusion.com/documentation/api/schedule#paste)  | targetElement (Scheduler's work-cell) | Insert the copied or cut appointment into the specified time slot.                              |

By using these methods, you can programmatically cut, copy, and paste appointments in the scheduler, providing more control over the appointment management process.

{% if page.publishingplatform == "typescript" %}

 {% tabs %} 
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/clipboard-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/clipboard-cs2/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/clipboard-cs2/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/clipboard-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/clipboard-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/clipboard-cs2/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/clipboard-cs2/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/clipboard-cs2" %}
{% endif %}

## Modifying content before pasting

You can modify the content of an appointment before pasting it by using [`beforePaste`](https://ej2.syncfusion.com/documentation/api/schedule#beforepaste) event accessing the appointment details and making necessary changes.

The following example demonstrates how to copy content from a Grid control and paste it into the Scheduler. Follow these steps:

1. **Select an Item**: Click on an item in the Grid control.
2. **Copy the Details**: Press **Ctrl + C** to copy the selected item details.
3. **Choose a Time Slot**: Click on the desired time slot in the Scheduler.
4. **Paste the Details**: Press **Ctrl + V** to paste the copied appointment details into the selected time slot.

The `beforePaste` event intercepts the appointment data before insertion, allowing you to map Grid fields to Scheduler fields and modify properties as needed.

>Note: Ensure that the field mapping matches with the fields in the scheduler.

{% if page.publishingplatform == "typescript" %}

 {% tabs %} 
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/clipboard-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/clipboard-cs3/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/clipboard-cs3/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/clipboard-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/clipboard-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/clipboard-cs3/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/clipboard-cs3/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/clipboard-cs3" %}
{% endif %}


> You can refer to our [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/tailwind3/schedule/overview.html) to knows how to present and manipulate data.
