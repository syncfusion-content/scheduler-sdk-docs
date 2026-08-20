---
layout: post
title: Module Injection in Vue Scheduler | Syncfusion
description: Learn how to import and inject modules in the Syncfusion Vue Scheduler to enable specific views, features, and editor options.
control: Scheduler
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Module Injection in Vue Scheduler

The crucial step in creating a Scheduler with the required views is to import and inject the necessary modules. The modules available in Scheduler for related functionality are as follows.

* `Day` - Inject this module to work with day view.
* `Week` - Inject this module to work with week view.
* `WorkWeek` - Inject this module to work with work week view.
* `Month` - Inject this module to work with month view.
* `Year` - Inject this module to work with year view.
* `Agenda` - Inject this module to work with agenda view.
* `MonthAgenda` - Inject this module to work with month agenda view.
* `TimelineViews` - Inject this module to work with timeline day, timeline week, and timeline work week views.
* `TimelineMonth` - Inject this module to work with timeline month view.
* `TimelineYear` - Inject this module to work with timeline year view.
* `DragAndDrop` - Inject this module to allow drag and drop of appointments on Scheduler.
* `Resize` - Inject this module for enabling the resize functionality of appointments on Scheduler.
* `ExcelExport` - Inject this module for exporting the Scheduler events data as excel file format.
* `ICalendarExport` - Inject this module for exporting the Scheduler events data to an ICS file.
* `ICalendarImport` - Inject this module for importing the Scheduler events data from an ICS file.

## Module injection

The required modules should be injected into the Scheduler using the `provide` method within the `App.vue` file as shown below. When you do this, only the injected module functionality will be loaded and available in the Scheduler.

`[src/App.vue]`

```html
  provide: {
    schedule: [Day, Week, WorkWeek, Month, Agenda, MonthAgenda]
  },
```

**Note:** If a Scheduler [`currentView`](https://ej2.syncfusion.com/vue/documentation/api/schedule#currentview) is set to one of the available views without injecting the corresponding view module, a script error will occur and the Scheduler will not render.

> Visit the [Vue Scheduler](https://www.syncfusion.com/scheduler-sdk/vue-scheduler) feature tour page for a complete overview. Explore live examples at [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/tailwind3/schedule/overview.html) to learn how to present and manipulate data.