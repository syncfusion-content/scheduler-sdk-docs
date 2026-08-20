---
layout: post
title: Scheduler Interactions in TypeScript Scheduler | Syncfusion
description: Learn about mouse and touch interactions in the Syncfusion TypeScript Scheduler, including cell selection, event selection, and date navigation.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Interactions in TypeScript Scheduler

The following table describes the Scheduler actions and illustrates how these actions are carried out through mouse and touch interactions on the Scheduler.

| Actions | Mouse interaction | Touch interaction |
|-------|---------| --------------- |
| Single click or tap on cells | Single click on a cell to select it. | Single tapping on cells will display a `+` icon on the cell. Tapping on it again will open the new event editor window. |
| Multiple cell selection | Single click on a cell and drag the selection to other cells to enable multiple cell selection. |  No multiple cell selection is allowed using touch gestures. |
| Event selection | Single click on an event to select it. | Tap and hold an event to select it, which opens a small popup at the top with options to edit or delete. The popup also displays the selected event's subject. |
| Multiple event selection and deletion | Pressing the `Ctrl` key and single-clicking multiple events one after another enables multiple event selection. Pressing the `Delete` key after event selection deletes all selected events. | Tap and hold an event to select it, which opens a small popup at the top with options to edit or delete. Continue single-tapping other events to enable multiple event selection. The popup at the top remains open and shows the number of selected events. Selecting the `Delete` option from the popup deletes all selected events. |
| Date navigation | Click the previous or next date navigation icons in the header bar to navigate between dates. | Swipe the Scheduler viewport left or right to navigate between dates on touch devices. Prevent swiping by disabling the [`allowSwiping`](../api/schedule#allowswiping) property. **Note:** Swiping does not work when a horizontal scroller is present in the Scheduler. Alternatively, use the previous and next navigation icons in the header bar to navigate. |
| View navigation | Use the view buttons in the header bar to switch between views. | The view options are available in the popup options at the top-right end of the header bar; choose the desired view from there. |
| Drag and drop | Click on an event and try moving it over the Scheduler to enable drag and drop action. |  Tap hold the event and try moving it over the Scheduler to enable drag and drop action. |
| Event resizing | Hover the mouse over the edges of Scheduler events and when the pointer changes to the resize handler, click and drag to resize an event to the desired time range. | Touch the event edges and resize the event directly. |
| Tooltip | Hover the mouse pointer over events or resource headers to display the tooltip. | Tap and hold events to open the tooltip. |
| Open editor window | Double-click cells or events to open the editor window. | Double-click cells or events to open the editor window. Single-tap cells to display a `+` icon on the cell. Tap it again to open the new event editor window. To open the editor for events, single-tap the event and then tap the edit icon to open the editor window in `Edit` mode. |
| Open quick info popup | Single-clicking a cell opens a quick popup prompting for new event creation. Single-clicking an event opens a popup displaying event information along with options to edit and delete it. | No quick info popup is available while single-tapping cells. Single-tapping events opens the popup showing event information. |

> Refer to the [JavaScript Scheduler](https://www.syncfusion.com/scheduler-sdk/javascript-scheduler) feature tour page for its feature representations. Also explore our [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/tailwind3/schedule/overview.html) to learn how to present and manipulate data.
