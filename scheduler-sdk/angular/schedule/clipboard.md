---
layout: post
title: Clipboard in Angular Scheduler | Syncfusion
description: Learn how to enable cut, copy, and paste for appointments in the Syncfusion Angular Scheduler using built-in clipboard support and keyboard shortcuts.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Clipboard in Angular Scheduler

Clipboard functionality in the Scheduler enhances scheduling efficiency by enabling users to cut, copy, and paste appointments with ease. This feature is especially beneficial for those managing multiple appointments, as it eliminates repetitive data entry and allows users to quickly adjust their schedules.
To activate the clipboard feature in the Scheduler, set the [`allowClipboard`](https://ej2.syncfusion.com/angular/documentation/api/schedule#allowclipboard) property to `true`.

> Note: The [`allowKeyboardInteraction`](https://ej2.syncfusion.com/angular/documentation/api/schedule#allowkeyboardinteraction) property must be set to `true` for clipboard support to work correctly.

## Cut, copy and paste using keyboard

The Angular Scheduler supports keyboard shortcuts to streamline appointment management:

| Operation | Shortcut | Description |
|-----------|----------|-------------|
| Copy | Ctrl+C | Duplicate appointments. |
| Cut | Ctrl+X | Move appointments to a new time slot. |
| Paste | Ctrl+V | Place copied or cut appointments into the selected time slot. |

To use these shortcuts, click an appointment and press **Ctrl+C** to copy or **Ctrl+X** to cut. To paste, click a time slot and press **Ctrl+V**.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/scheduler-sdk/angular/schedule/clipboard-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/clipboard-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/clipboard-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/scheduler-sdk/angular/schedule/clipboard-cs1" %}

> Note: For Mac users, use **Cmd** instead of **Ctrl** for copy, cut, and paste shortcuts.

## Cut, copy, and paste using context menu

You can programmatically manage appointments by using the public methods [`cut`](https://ej2.syncfusion.com/angular/documentation/api/schedule#cut), [`copy`](https://ej2.syncfusion.com/angular/documentation/api/schedule#copy), and [`paste`](https://ej2.syncfusion.com/angular/documentation/api/schedule#paste). These methods perform the same actions as keyboard shortcuts or context menu options.

Utilize these methods to manage appointments in the Schedule control:

| Method | Parameters | Description |
|--------|------------|-------------|
| [`copy`](https://ej2.syncfusion.com/angular/documentation/api/schedule#copy) | None | Duplicate the selected appointment for reuse. |
| [`cut`](https://ej2.syncfusion.com/angular/documentation/api/schedule#cut) | None | Remove the selected appointment from its current slot. |
| [`paste`](https://ej2.syncfusion.com/angular/documentation/api/schedule#paste) | targetElement (Scheduler work cell) | Insert the copied or cut appointment into the specified time slot. |

By using these methods, you can programmatically cut, copy, and paste appointments in the Scheduler, providing more control over appointment management.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/scheduler-sdk/angular/schedule/clipboard-cs2/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/clipboard-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/clipboard-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/scheduler-sdk/angular/schedule/clipboard-cs2" %}
## Modifying content before pasting

You can modify the content of an appointment before pasting it by using the [`beforePaste`](https://ej2.syncfusion.com/angular/documentation/api/schedule#beforepaste) event to access the appointment details and make necessary changes.

The following example demonstrates how to copy and paste content from a grid to a Scheduler. To do this, follow these steps:

1. **Select an item**: Click an item in the grid.
2. **Copy the details**: Press **Ctrl + C** to copy the selected event details.
3. **Choose a time slot**: Click the desired time slot in the Scheduler.
4. **Paste the details**: Press **Ctrl + V** to paste the copied appointment details into the selected time slot.

In this example, the `beforePaste` event can be used to intercept the event details before they are pasted. This allows you to modify the content as needed.

> Note: Ensure that the field mapping matches the fields in the Scheduler.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/scheduler-sdk/angular/schedule/clipboard-cs3/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/clipboard-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/clipboard-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/scheduler-sdk/angular/schedule/clipboard-cs3" %}


> You can refer to our [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler) feature tour page for its feature overview. You can also explore our [Angular Scheduler example](https://ej2.syncfusion.com/angular/demos/#/material/schedule/overview) to learn how to present and manipulate data.
