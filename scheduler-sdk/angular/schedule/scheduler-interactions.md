---
layout: post
title: Scheduler Interactions in Angular Scheduler | Syncfusion
description: Learn about mouse and touch interactions in the Syncfusion Angular Scheduler, including cell selection, event selection, and date navigation.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Interactions in Angular Scheduler

The following table outlines common Scheduler actions, detailing how each action is performed using mouse and touch interactions.

|   Actions   | Mouse interaction | Touch interaction |
|-------------|-------------------|-------------------|
| Single click or tap on cells |  Single click on a cell to select a cell. | A single tap on a cell will display a `+` icon on the cell. Tapping on it again will open the new event editor window. |
| Multiple cell selection | Single click on a cell and drag the selection to other cells to enable multiple cell selection. |  No multiple cell selection is allowed using touch gestures. |
| Event selection | Single click on an event to select it. | Tap and hold an event to open a small popup at the top with options to edit or delete. The popup also displays the selected event's subject. |
| Multiple event selection and deletion | Pressing the `Ctrl` key and single clicking multiple events one after the other enables multiple event selection. Pressing the `Delete` key after event selection will delete all selected events. | Tap and hold an event to select it, which opens a small popup at the top with options to edit or delete. Single tap other events to add them to the selection. The popup remains open and shows the count of selected events. Press the `Delete` option from the popup to delete all selected events. |
| Date navigation | Clicking the previous or next date navigation icons in the header bar allows you to navigate between dates. | Swiping the Scheduler viewport left or right allows you to navigate between dates on touch devices. NOTE: Swiping does not work when a horizontal scroller is present in the Scheduler. Use the previous and next navigation icons in the header bar to navigate. |
| View navigation | Use the view selection options in the header to switch Scheduler views. | The view options are available within the popup options at the top right of the header bar, and you can choose the view from there. |
| Drag and drop | Click on an event and move it within the Scheduler to enable drag and drop. | Tap and hold the event, then move it within the Scheduler to enable drag and drop. |
| Event resizing | Hover the mouse over the extremities or edges of Scheduler events until the pointer changes to a resize handler, then click and drag to resize an event to the desired time range. | Touch the event extremities and drag to resize the events directly. |
| Tooltip | Hover the mouse pointer over events or the resource header to display the tooltip. | Tap and hold events to open the tooltip. |
| Open editor window  | Double click on cells or events to open the editor window. | Double tap cells or events to open the editor window. Single tap cells to display a `+` icon, then tap it again to open the new event editor window. To open the editor for an event, single tap it and then tap the edit icon to open the editor window in `Edit` mode. |
| Open quick info popup | Single clicking on a cell opens a quick popup prompting new event creation. Single clicking on an event opens a popup displaying event information along with options to edit and delete it. | Single tapping cells does not display a quick info popup. Single tapping events opens a popup showing event information. |

> You can refer to our [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Scheduler example](https://ej2.syncfusion.com/angular/demos/#/material/schedule/overview) to knows how to present and manipulate data.
