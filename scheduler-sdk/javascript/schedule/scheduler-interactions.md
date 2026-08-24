---
layout: post
title: Scheduler Interactions in JavaScript Scheduler | Syncfusion
description: Learn about mouse and touch interactions in the Syncfusion JavaScript Scheduler, including cell selection, event selection, and date navigation.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Interactions in JavaScript Scheduler

The table below summarizes mouse and touch interactions supported by the Scheduler.

| Actions | Mouse interaction | Touch interaction |
|-------|---------| --------------- |
| Single click or tap on cells | Click a cell to select it. | Tap a cell to show a + icon; tap the + to open the new-event editor. |
| Multiple cell selection | Click and drag across cells to select multiple cells. | Multiple cell selection is not supported with touch gestures. |
| Event selection | Click an event to select it. | Long-press an event to select it and open a small popup with edit/delete options and the event subject. |
| Multiple event selection and deletion | Hold `Ctrl` and click multiple events to select them; press `Delete` to remove selected events. | Long-press an event to select it, then tap other events to add to the selection; use the popup's Delete option to remove all selected events. |
| Date navigation | Click the previous/next icons in the header to navigate dates. | Swipe the scheduler viewport left/right to navigate dates. Disable swiping with [`allowSwiping`](../api/schedule#allowswiping). Note: swiping may be disabled when a horizontal scroller is present. |
| View navigation | Use drag-and-drop on events to move them between views or dates. | View options are available in the header popup; choose a view from the popup. |
| Drag and drop | Click and drag an event to move it. | Long-press and drag an event to move it. |
| Event resizing | Hover near an event edge, then drag the resize handle to change the duration. | Touch an event edge and drag to resize. |
| Tooltip | Hover an event or resource header to show the tooltip. | Long-press an event to show the tooltip. |
| Open editor window  | Double-click a cell or event to open the editor window. | Double-tap a cell or event to open the editor. Tap a cell to show the + icon, then tap the + to open the new-event editor. To edit an event, tap it and use the edit icon in the popup. |
| Open quick info popup | Click a cell or event to open the quick popup for creating or viewing an event. | Single-tapping an event opens the quick popup showing event details; cells require the + icon to open the new-event editor. |

> Refer to the [JavaScript Scheduler](https://www.syncfusion.com/scheduler-sdk/javascript-scheduler) feature tour for an overview, and explore the [Scheduler demo](https://ej2.syncfusion.com/demos/#/tailwind3/schedule/overview.html) for practical examples.
