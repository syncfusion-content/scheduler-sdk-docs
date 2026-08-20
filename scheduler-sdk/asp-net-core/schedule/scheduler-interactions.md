---
layout: post
title: Scheduler Interactions in ASP.NET Core Scheduler | Syncfusion
description: Learn about mouse and touch interactions in the Syncfusion ASP.NET Core Scheduler, including cell selection, event selection, and date navigation.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---


# Interactions in ASP.NET Core Scheduler

The following table describes the Scheduler actions and also illustrates how those actions are carried out through mouse and touch interactions on the Scheduler.

| Actions | Mouse interaction | Touch interaction |
|-------|---------| --------------- |
| Single click or tap on cells |  Single click on a cell to select a cell. | Single tapping on a cell will display a `+` icon on the cell. Tapping on it again will open the new event editor window. |
| Multiple cell selection | Single click on a cell and drag the selection to other cells to enable multiple cell selection. |  No multiple cell selection is allowed using touch gestures. |
| Event selection | Single click on an event to select it. | Tap and hold on an event to select it, which opens a small popup at the top with the options to edit or delete. The popup also displays the selected event's subject. |
| Multiple event selection and deletion | Press the `Ctrl` key while single-clicking on multiple events one after the other to enable multiple event selection. Pressing the `Delete` key after event selection will delete all the selected events. |  Tap and hold an event to select it, which opens a small popup at the top with the options to edit or delete. As a continuation of this action, keep single-tapping on other events to enable multiple event selection. The popup displayed at the top remains open, showing the count of selected events. Pressing the `Delete` option from the popup will delete all the selected events. |
| Date navigation | Click the previous or next date navigation icons in the header bar to navigate between dates. |  Swipe the scheduler view port to the left or right to navigate between dates on touch devices. You can prevent the swiping action by disabling the [`allowSwiping`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_AllowSwiping) property. NOTE: Swiping does not work when a horizontal scroller is present in the Scheduler. You can also use the previous and next navigation icons in the header bar to navigate. |
| View navigation | Click the view options in the header bar to switch between available views. |  The view options are available within the popup options at the top right extreme end of the header bar, and you can choose the view from it. |
| Drag and drop | Click on an event and drag it over the Scheduler to enable the drag and drop action. |  Tap and hold the event and drag it over the Scheduler to enable the drag and drop action. |
| Event resizing | Hover the mouse over the extremities or edges of the Scheduler events. When the mouse pointer changes to the resize handler, click and start resizing the event to the desired time range. |  Touch the event extremities and start resizing the events directly. |
| Tooltip | Hover the mouse pointer over the events or resource header to display the tooltip. |  Tap and hold the events to open the tooltip on events. |
| Open editor window  | Double-click on cells or events to open the editor window. |  Double-click on cells or events to open the editor window. Single tap on a cell displays a `+` icon on the cell. Now, tap on it again to open the new event editor window. To open the editor on events, single tap on the event and then click the edit icon to open the editor window in `Edit` mode. |
| Open quick info popup | Single-clicking on a cell will open a quick popup prompting for new event creation. Single-clicking on an event will open a popup displaying event information along with the option to edit and delete it. |  No quick info popup is available when single-tapping on cells. Single-tapping on events opens the popup showing event information. |
