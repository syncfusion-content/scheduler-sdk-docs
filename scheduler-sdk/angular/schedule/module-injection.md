---
layout: post
title: Module Injection in Angular Scheduler | Syncfusion
description: Learn how to import and inject modules in the Syncfusion Angular Scheduler to enable specific views, features, and editor options.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Module Injection in Angular Scheduler

To customize the Scheduler with specific views and features, you must import and inject the required modules. The Scheduler provides the following modules to enable its features.

* `DayService` - Inject this module for day view.
* `WeekService` - Inject this module for week view.
* `WorkWeekService` - Inject this module for work week view.
* `MonthService` - Inject this module for month view.
* `YearService` - Inject this module for year view.
* `AgendaService` - Inject this module for agenda view.
* `MonthAgendaService` - Inject this module for month agenda view.
* `TimelineViewsService` - Inject this module for timeline day, timeline week, and timeline work week views.
* `TimelineMonthService` - Inject this module for timeline month view.
* `TimelineYearService` - Inject this module for timeline year view.
* `DragAndDropService` - Inject this module to enable drag-and-drop of appointments in the Scheduler.
* `ResizeService` - Inject this module to enable appointment resizing in the Scheduler.
* `ExcelExportService` - Inject this module to export Scheduler event data as Excel file format.
* `ICalendarExportService` - Inject this module to export Scheduler event data to an ICS file.
* `ICalendarImportService` - Inject this module to import Scheduler event data from an ICS file.

## Module injection

The required modules should be injected into the Scheduler using the `@NgModule.providers` section within the `app.component.ts` file as shown below. By doing so, only the injected module features will be loaded and can be used with the Scheduler.

`[src/app/app.component.ts]`

```typescript
@NgModule({
    providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService]
})
```

**Note:** If the Scheduler's [`currentView`](https://ej2.syncfusion.com/angular/documentation/api/schedule#currentview) property is set to a view for which the corresponding module has not been injected, a script error will occur and the Scheduler will fail to render.

> You can refer to our [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Scheduler example](https://ej2.syncfusion.com/angular/demos/#/material/schedule/overview) to know how to present and manipulate data.
