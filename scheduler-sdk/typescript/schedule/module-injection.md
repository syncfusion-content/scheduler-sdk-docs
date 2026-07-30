---
layout: post
title: Module injection in TypeScript Scheduler | Syncfusion
description: Explore module injection in Syncfusion TypeScript Scheduler (Essential JS 2) with TypeScript, covering required modules for views and features.
platform: scheduler-sdk
control: Module injection 
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Module injection in TypeScript Schedule control

A crucial step in creating a Scheduler with required views and features is to import and inject the necessary modules. The following modules are available in the Scheduler to enable specific functionalities:

* `Day` - Inject this module to enable the Day view.
* `Week` - Inject this module to enable the Week view.
* `WorkWeek` - Inject this module to enable the Work Week view.
* `Month` - Inject this module to enable the Month view.
* `Year` - Inject this module to enable the Year view.
* `Agenda` - Inject this module to enable the Agenda view.
* `MonthAgenda` - Inject this module to enable the Month Agenda view.
* `TimelineViews` - Inject this module to enable Timeline Day, Timeline Week, and Timeline Work Week views.
* `TimelineMonth` - Inject this module to enable the Timeline Month view.
* `TimelineYear` - Inject this module to enable the Timeline Year view.
* `DragAndDrop` - Inject this module to enable drag-and-drop functionality for appointments.
* `Resize` - Inject this module to enable resizing functionality for appointments.
* `ExcelExport` - Inject this module to export Scheduler events data as Excel file format.
* `ICalendarExport` - Inject this module to export Scheduler events data to an ICS file.
* `ICalendarImport` - Inject this module to import Scheduler events data from an ICS file.
* `Print` - Inject this module to enable print functionality for the Scheduler.

## Module injection

The required modules should be injected into the Scheduler using the `Schedule.Inject` method within the `app.ts` file as shown below. Only the injected module functionalities will be loaded and available for use in the Scheduler.

`[src/app/app.ts]`

```typescript
import { Schedule, Day, Week, WorkWeek, Month, Agenda, MonthAgenda } from '@syncfusion/ej2-schedule';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda, MonthAgenda);
```

## Loading specific features

To use advanced features such as drag-and-drop, resizing, or exporting, inject the corresponding modules along with the view modules:

```typescript
import { Schedule, Day, Week, Month, DragAndDrop, Resize, ExcelExport } from '@syncfusion/ej2-schedule';

Schedule.Inject(Day, Week, Month, DragAndDrop, Resize, ExcelExport);
```

This approach ensures that only the necessary functionality is loaded, optimizing the application bundle size and performance.

## Important considerations

**Note:** If a Scheduler's `currentView` is set to any of the available views without injecting the respective view module, a script error will occur and the Scheduler will not render. Always ensure that the required view modules are injected before using them.

For example, if you set `currentView: 'TimelineWeek'`, you must inject the `TimelineViews` module:

```typescript
import { Schedule, TimelineViews } from '@syncfusion/ej2-schedule';

Schedule.Inject(TimelineViews);

let scheduleObj: Schedule = new Schedule({
    currentView: 'TimelineWeek'
});
scheduleObj.appendTo('#Schedule');
```

> Refer to the [JavaScript Scheduler feature tour](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) for an overview of capabilities, and explore the [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/material/schedule/overview.html) to see how to present and manipulate data.