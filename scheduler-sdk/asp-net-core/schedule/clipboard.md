---
layout: post
title: Clipboard in ASP.NET Core Scheduler | Syncfusion
description: Learn how to enable cut, copy, and paste for appointments in the Syncfusion ASP.NET Core Scheduler with built-in clipboard support and keyboard shortcuts.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---

# Clipboard in ASP.NET Core Scheduler

Clipboard functionality in the Scheduler control enhances scheduling efficiency by enabling users to cut, copy, and paste appointments with ease. This feature is especially useful for users managing multiple appointments because it eliminates repetitive data entry and allows quick schedule updates.
To activate the clipboard feature in the Scheduler, set the [`allowClipboard`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_AllowClipboard) property to **true**.

> Note: The [`allowKeyboardInteraction`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_AllowKeyboardInteraction) property must be set to **true** for the clipboard feature to work correctly.

## Cut, copy and paste using keyboard

The Syncfusion Schedule control supports keyboard shortcuts to streamline appointment management.

These keyboard shortcuts enable users to efficiently manage their schedules:

| Operation | Shortcut | Description |
|-----------|----------|-------------|
| Copy      | Ctrl+C   | Duplicates appointments for reuse. |
| Cut       | Ctrl+X   | Moves appointments to a new time slot. |
| Paste     | Ctrl+V   | Inserts copied or cut appointments into the selected time slot. |

To use these shortcuts, click an appointment and press **Ctrl+C** to copy or **Ctrl+X** to cut. To paste the copied or cut appointment, click the desired time slot and press **Ctrl+V**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/clipboard/normal-schedule/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/clipboard/normal-schedule/data.cs %}
{% endhighlight %}
{% endtabs %}

> Note: For Mac users, use **Cmd** instead of **Ctrl** for copy, cut, and paste operations.

## Cut, copy, and paste using context menu

You can programmatically manage appointments by using the public methods **cut**, **copy**, and **paste**. These methods allow you to perform the same actions as the context menu or external buttons.

Use these public methods to manage appointments programmatically in the Syncfusion Schedule control:

| Method | Parameters | Description |
|--------|------------|-------------|
| copy   | None | Duplicates the selected appointment for reuse. |
| cut    | None | Removes the selected appointment from its current slot for moving. |
| paste  | targetElement (Scheduler work cell) | Inserts the copied or cut appointment into the specified time slot. |

Using these methods gives you more control over appointment management in the Scheduler.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/clipboard/context-menu/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/clipboard/context-menu/data.cs %}
{% endhighlight %}
{% endtabs %}

## Modifying content before pasting

You can modify the content of an appointment before pasting it by using the [`beforePaste`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_BeforePaste) event to access the appointment details and make the necessary changes.

The following example demonstrates how to copy and paste content from a grid to a Scheduler. To do this, follow these steps:

1. **Select an Item**: Click on an item in the grid.
2. **Copy the Details**: Press **Ctrl + C** to copy the selected event details.
3. **Choose a Time Slot**: Click the desired time slot in the Scheduler.
4. **Paste the Details**: Press **Ctrl + V** to paste the copied appointment details into the selected time slot.

In this example, the `beforePaste` event can be used to intercept the event details before they are pasted. This allows you to modify the content as needed, such as adjusting the time, adding notes, or changing other appointment details.

> Note: Ensure that the field mapping matches the Scheduler fields.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/clipboard/schedule-grid/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/clipboard/schedule-grid/data.cs %}
{% endhighlight %}
{% endtabs %}


> You can refer to our [ASP.NET Core Scheduler](https://www.syncfusion.com/aspnet-core-ui-controls/scheduler) feature tour page for its feature highlights. You can also explore our [ASP.NET Core Scheduler example](https://ej2.syncfusion.com/aspnetcore/Schedule/Overview#/material) to learn how to present and manipulate data.

