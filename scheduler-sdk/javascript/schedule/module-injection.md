---
layout: post
title: Module injection in EJ2 JavaScript Schedule control | Syncfusion
description: Learn about module injection in the Syncfusion JavaScript Scheduler control (Essential JS 2), including required modules for views and features.
platform: scheduler-sdk
control: Module injection 
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Module injection in JavaScript Schedule control

A crucial step in creating a Scheduler with required views and features is to import and inject the necessary modules. The following modules are available in the Scheduler to enable specific functionalities:

* `Day` - Inject this module to enable the Day view.
* `Week` - Inject this module to enable the Week view.
* `WorkWeek` - Inject this module to enable the Work Week view.
* `Month` - Inject this module to enable the Month view.
* `Agenda` - Inject this module to enable the Agenda view.
* `MonthAgenda` - Inject this module to enable the Month Agenda view.
* `TimelineViews` - Inject this module to enable Timeline Day, Timeline Week, and Timeline Work Week views.
* `TimelineMonth` - Inject this module to enable the Timeline Month view.
* `TimelineYear` - Inject this module to enable the Timeline Year view.
* `Year` - Inject this module to enable the Year view.
* `DragAndDrop` - Inject this module to enable drag-and-drop functionality for appointments.
* `Resize` - Inject this module to enable resizing functionality for appointments.
* `ExcelExport` - Inject this module to export Scheduler events data as Excel file format.
* `ICalendarExport` - Inject this module to export Scheduler events data to an ICS file.
* `ICalendarImport` - Inject this module to import Scheduler events data from an ICS file.
* `Print` - Inject this module to enable print functionality for the Scheduler.

## Module injection

The required modules should be injected into the Scheduler using the `ej.schedule.Schedule.Inject` method within the `index.js` file as shown below. Only the injected module functionalities will be loaded and available for use in the Scheduler.

`[myapp/index.js]`

```js
ej.schedule.Schedule.Inject(ej.schedule.Day, ej.schedule.Week, ej.schedule.WorkWeek, ej.schedule.Month, ej.schedule.Agenda, ej.schedule.MonthAgenda);
```

## Loading specific features

To use advanced features such as drag-and-drop, resizing, or exporting, inject the corresponding modules along with the view modules:

```javascript
ej.schedule.Schedule.Inject(
    ej.schedule.Day, 
    ej.schedule.Week, 
    ej.schedule.Month,
    ej.schedule.DragAndDrop, 
    ej.schedule.Resize,
    ej.schedule.ExcelExport
);
```

This approach ensures that only the necessary functionality is loaded, optimizing the application bundle size and performance.

> **Note:** Module injection is not mandatory in plain JavaScript applications when using the complete `ej2.min.js` bundle, as all modules are included. However, when using individual module files or ES6 imports, explicit injection is required.

> Refer to the [JavaScript Scheduler feature tour](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) for an overview of capabilities, and explore the [JavaScript Scheduler example](https://ej2.syncfusion.com/javascript/demos/#/material/schedule/overview.html) to see how to present and manipulate data.