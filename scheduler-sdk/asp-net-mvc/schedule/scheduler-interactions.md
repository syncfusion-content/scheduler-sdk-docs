---
layout: post
title: Scheduler Interactions in ASP.NET MVC Scheduler | Syncfusion
description: Learn about mouse and touch interactions in the Syncfusion ASP.NET MVC Scheduler, including cell selection, event selection, and date navigation.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---


# Interactions in ASP.NET MVC Scheduler

The following table describes the Scheduler actions and illustrates how those actions are carried out through mouse and touch interactions on the Scheduler.

| Actions | Mouse interaction | Touch interaction |
|-------|---------| --------------- |
| Single click or tap on cells |  Single click on a cell to select it. | Single tapping on cells displays a `+` icon on the cell. Tapping it again opens the new event editor window. |
| Multiple cell selection | Single click on a cell and drag the selection to other cells to enable multiple cell selection. |  Multiple cell selection is not allowed using touch gestures. |
| Event selection | Single click on an event to select it. | Tap and hold an event to select it; this opens a small popup at the top with options to edit or delete. The popup also displays the selected event's subject. |
| Multiple event selection and deletion | Press the `Ctrl` key and single-click on multiple events one after the other to enable multiple event selection. Press `Delete` after event selection to delete all selected events. |  Tap and hold an event to select it; this opens a small popup at the top with options to edit or delete. To continue, keep single-tapping on other events to enable multiple event selection. The popup at the top remains visible and shows the count of selected events. Press `Delete` from the popup to delete all selected events. |
| Date navigation | Click on the previous or next date navigation icons in the header bar to navigate between dates. |  Swipe the Scheduler view port to the left or right to navigate between dates on touch devices. You can prevent the swiping action by disabling the [`AllowSwiping`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_AllowSwiping) property. **Note**: Swiping does not work when a horizontal scroller is present in the Scheduler. You can also use the previous and next navigation icons in the header bar to navigate. |
| View navigation | Click the view option in the header bar to change the active view. |  The view options are available within the popup at the top-right end of the header bar, from which you can choose the view. |
| Drag and drop | Click on an event and try moving it over the Scheduler to enable the drag and drop action. |  Tap and hold the event and try moving it over the Scheduler to enable the drag and drop action. |
| Event resizing | Hover the mouse across the extremities or edges of the Scheduler events. When the mouse pointer changes into the resize handler, click and start resizing the event to the desired time range. |  Touch the event extremities and start resizing the event directly. |
| Tooltip | Hover the mouse pointer over the events or resource header to display the tooltip. |  Tap and hold an event to open the tooltip on the event. |
| Open editor window  | Double-click on cells or events to open the editor window. |  Double-click on cells or events to open the editor window. Single-tap on a cell displays a `+` icon. Tap on it again to open the new event editor window. To open the editor on an event, single-tap on it and click the edit icon to open the editor window in `Edit` mode. |
| Open quick info popup | Single-clicking on a cell opens a quick popup prompting for new event creation. Single-clicking on an event opens a popup displaying event information along with options to edit and delete it. |  No quick info popup is available when single-tapping on cells. Single-tapping on events opens the popup showing event information. |
