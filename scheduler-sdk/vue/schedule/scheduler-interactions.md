---
layout: post
title: Scheduler Interactions in Vue Scheduler | Syncfusion
description: Learn about mouse and touch interactions in the Syncfusion Vue Scheduler, including cell selection, event selection, and date navigation.
control: Scheduler
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Scheduler Interactions in Vue Scheduler

The Vue Schedule component supports rich **mouse**, **keyboard**, and **touch** interactions to create, view, and manage appointments efficiently across desktop and mobile environments. These interactions enable intuitive actions such as cell selection, event manipulation, navigation, and editing.

The following table outlines the supported interactions and how they differ between mouse and touch input modes.

|Actions        | Mouse interaction | Touch interaction |
|---------------|-------------------|-------------------|
| Single click or tap on cells | Single click a cell to select it. | Single-tap a cell to display a `+` icon. Tap it again to open the new event editor window. |
| Multiple cell selection | Click and drag across cells to enable multiple cell selection. | Multiple cell selection is not supported with touch gestures. |
| Event selection | Single click an event to select it. | Tap and hold an event to select it and open a small popup at the top with options to edit or delete. The popup also displays the selected event's subject. |
| Multiple event selection and deletion | Press and hold the `Ctrl` key while clicking multiple events to enable multiple event selection. Press the `Delete` key after selection to delete all selected events. | Tap and hold an event to select it, which opens a small popup at the top with options to edit or delete. Continue single-tapping other events to enable multiple selection. The popup remains open and shows the count of selected events. Tap `Delete` in the popup to delete all selected events. |
| Date navigation | Click the previous or next date navigation icons in the header bar to move between dates. | Swipe the Scheduler viewport left or right to move between dates on touch devices. You can prevent swiping by disabling the [`allowSwiping`](https://ej2.syncfusion.com/vue/documentation/api/schedule#allowswiping) property. Note: Swiping does not work when a horizontal scroller is present in the Scheduler. You can also use the previous and next navigation icons in the header bar to navigate. |
| View navigation | Select a view from the header bar or popup options to change the view. | The view options are available within the popup options at the top-right corner of the header bar, and you can choose a view from there. |
| Drag and drop | Click an event and drag it within the Scheduler to perform drag and drop. | Tap and hold an event, then drag it within the Scheduler to perform drag and drop. |
| Event resizing | Hover over the edges of a Scheduler event until the resize cursor appears, then drag to resize the event. | Touch the edges of an event and resize it directly. |
| Tooltip | Hover the mouse pointer over an event or resource header to display the tooltip. | Tap and hold events to open the tooltip. |
| Open editor window  | Double-click cells or events to open the editor window. | Double-tap cells or events to open the editor window. Single-tap a cell to display a `+` icon, then tap it again to open the new event editor window. To open the editor for an event, single-tap it and then tap the edit icon to open the editor window in `Edit` mode. |
| Open quick info popup | Single-click a cell to open a quick popup for new event creation. Single-click an event to open a popup displaying event information with options to edit or delete it. | No quick info popup is available when single-tapping cells. Single-tap an event to open the popup showing event information. |

## Disabling swipe navigation

Horizontal swipe navigation between dates can be disabled using the `allowSwiping` property. This is useful in scenarios where horizontal scrolling is enabled within the Scheduler layout.

> For a complete overview of Scheduler features, visit the [Vue Scheduler](https://www.syncfusion.com/vue-components/vue-scheduler) feature tour page. Explore live examples at [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/tailwind3/schedule/overview.html) to learn how to present and manipulate data.