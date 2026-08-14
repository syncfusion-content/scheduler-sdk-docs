---
layout: post
title: Module Injection in TypeScript Scheduler | Syncfusion
description: Learn how to import and inject modules in the Syncfusion TypeScript Scheduler to enable specific views, features, and editor options.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Module Injection in TypeScript Scheduler

Import and inject the required modules to enable specific Scheduler views and features. The following modules are available:

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

Inject required modules into the Scheduler using `Schedule.Inject` (for example, in `app.ts`). Only injected modules are loaded and available at runtime.

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

This approach ensures only necessary functionality is loaded, which helps optimize bundle size and performance.

## Important considerations

**Note:** If `currentView` references a view whose module is not injected, the Scheduler will throw a script error and may fail to render. Always inject the view modules you use.

For example, if `currentView` is `TimelineWeek`, inject `TimelineViews`:

```typescript
import { Schedule, TimelineViews } from '@syncfusion/ej2-schedule';

Schedule.Inject(TimelineViews);

let scheduleObj: Schedule = new Schedule({
    currentView: 'TimelineWeek'
});
scheduleObj.appendTo('#Schedule');
```

> Refer to the [JavaScript Scheduler feature tour](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) for an overview of capabilities, and explore the [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/material/schedule/overview.html) for practical demos.