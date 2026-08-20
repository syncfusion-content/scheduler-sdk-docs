---
layout: post
title: Module Injection in JavaScript Scheduler | Syncfusion
description: Learn how to import and inject modules in the Syncfusion JavaScript Scheduler to enable specific views, features, and editor options.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Module Injection in JavaScript Scheduler

Import and inject the modules required to enable specific Scheduler views and features. Injecting only the modules you need can reduce bundle size and improve performance.

Available modules include:

- `Day` — enables Day view
- `Week` — enables Week view
- `WorkWeek` — enables Work Week view
- `Month` — enables Month view
- `Agenda` — enables Agenda view
- `MonthAgenda` — enables Month Agenda view
- `TimelineViews` — enables Timeline Day/Week/WorkWeek views
- `TimelineMonth` — enables Timeline Month view
- `TimelineYear` — enables Timeline Year view
- `Year` — enables Year view
- `DragAndDrop` — enables drag-and-drop for appointments
- `Resize` — enables resizing of appointments
- `ExcelExport` — enables exporting events to Excel
- `ICalendarExport` — enables exporting events to ICS
- `ICalendarImport` — enables importing events from ICS
- `Print` — enables print functionality

## Module injection

Inject required modules into the Scheduler. Only injected modules are loaded when using individual module files or ES module imports.

Example (legacy global usage):

```js
ej.schedule.Schedule.Inject(
    ej.schedule.Day,
    ej.schedule.Week,
    ej.schedule.WorkWeek,
    ej.schedule.Month,
    ej.schedule.Agenda,
    ej.schedule.MonthAgenda
);
```

## Loading specific features

Include feature modules with view modules to enable advanced capabilities:

```js
ej.schedule.Schedule.Inject(
    ej.schedule.Day,
    ej.schedule.Week,
    ej.schedule.Month,
    ej.schedule.DragAndDrop,
    ej.schedule.Resize,
    ej.schedule.ExcelExport
);
```

Note: Module injection is not required when using the full `ej2.min.js` bundle because it includes all modules. When using ES imports or separate module files, explicit injection is needed.

> Refer to the [JavaScript Scheduler](https://www.syncfusion.com/scheduler-sdk/javascript-scheduler) feature tour for an overview, and see the [Scheduler demo](https://ej2.syncfusion.com/demos/#/material/schedule/overview.html) for practical examples.