---
layout: post
title: Scheduler Interactions in Blazor Scheduler | Syncfusion
description: Learn about mouse and touch interactions in the Syncfusion Blazor Scheduler, including cell selection, event selection, and date navigation.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---

# Interactions in Blazor Scheduler

The following table describes the Scheduler actions and shows how they are performed with mouse and touch interactions.

| Actions | Mouse interaction | Touch interaction |
|-------|---------| --------------- |
| Single click or tap on cells | Single-click a cell to select it. | Single-tap a cell to display a `+` icon. Tap it again to open the new event editor. |
| Multiple cell selection | Click and drag across cells to select multiple cells. | Multiple cell selection is not supported with touch gestures. |
| Event selection | Single-click an event to select it. | Tap and hold an event to select it and open a popup with edit or delete options. The popup also displays the selected event subject. |
| Multiple event selection and deletion | Hold `Ctrl` and click multiple events one by one to select them. Press `Delete` to remove all selected events. | Tap and hold an event to select it and open a popup with edit or delete options. Then tap other events to select them as well. The popup stays open and shows the number of selected events. Tap `Delete` in the popup to remove all selected events. |
| Date navigation | Click the previous or next navigation icons in the header bar to move between dates. | Swipe the Scheduler viewport left or right to navigate between dates on touch devices. Swiping does not work when a horizontal scroller is present in Scheduler. You can also use the previous and next navigation icons in the header bar. |
| View navigation | Click an event and drag it over the Scheduler to perform drag and drop. | The view options are available in the popup at the top-right corner of the header bar. Choose the required view from there. |
| Drag and drop | Click an event and drag it over the Scheduler. | Tap and hold an event, then drag it over the Scheduler. |
| Event resizing | Hover over the edges of an event. When the mouse pointer changes to a resize handler, click and drag to the desired time range. | Touch the event edges and resize the event directly. |
| Tooltip | Hover the mouse pointer over events or the resource header to display the tooltip. | Tap and hold events to open the tooltip. |
| Open editor window  | Double-click cells or events to open the editor window. | Double-click cells or events to open the editor window. Single-tap a cell to display a `+` icon, then tap it again to open the new event editor. To open the editor for events, single-tap an event and then click the edit icon to open the editor in `Edit` mode. |
| Open quick info popup | Single-click a cell to open a quick popup for new event creation. Single-click an event to open a popup with event details and options to edit or delete it. | No quick info popup is available for single-tap on cells. Single-tap an event to open the popup with event details. |