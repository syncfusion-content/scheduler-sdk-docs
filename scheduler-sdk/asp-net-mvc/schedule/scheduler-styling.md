---
layout: post
title: Style and Appearance in ASP.NET MVC Scheduler | Syncfusion
description: Learn how to style the Syncfusion ASP.NET MVC Scheduler by overriding default CSS classes and creating custom themes with Theme Studio.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---


# Style and Appearance in ASP.NET MVC Scheduler

To modify the Scheduler appearance, override the default CSS of the Scheduler. You can also create your own custom theme using our [`Theme Studio`](https://ej2.syncfusion.com/themestudio/?theme=material). The following table lists the CSS classes available in the Scheduler.

| Css class | Purpose |
|-------|---------|
| `.e-schedule .e-vertical-view .e-work-cells` | Work cells in the vertical views of the Scheduler. |
| `.e-schedule .e-month-view .e-work-cells` | Work cells in the month view of the Scheduler. |
| `.e-schedule .e-month-view .e-other-month` | Work cells of other months in the month view of the Scheduler. |
| `.e-schedule .e-timeline-view .e-work-cells` | Work cells in the timeline views of the Scheduler. |
| `.e-schedule .e-timeline-month-view .e-work-cells` | Work cells in the timeline month view of the Scheduler. |
| `.e-schedule .e-timeline-year-view .e-work-cells` | Work cells in the timeline year view of the Scheduler. |
| `.e-schedule .e-timeline-year-view .e-work-cells.e-other-month` | Work cells of other months in the timeline year view of the Scheduler. |
| `.e-schedule .e-month-agenda-view .e-work-cells` | Work cells in the month agenda view of the Scheduler. |
| `.e-schedule .e-month-agenda-view .e-other-month` | Work cells of other months in the month agenda view of the Scheduler. |
| `.e-schedule .e-year-view .e-calendar-wrapper .e-month-calendar.e-calendar .e-other-month` | Work cells of other months in the year view of the Scheduler. |
| `.e-schedule .e-vertical-view .e-all-day-cells` | All-day cells in the vertical views of the Scheduler. |
| `.e-schedule .e-vertical-view .e-work-hours` | Work hour cells in the vertical views of the Scheduler. |
| `.e-schedule .e-month-view .e-work-days` | Work day cells in the month view of the Scheduler. |
| `.e-schedule .e-month-agenda-view .e-work-days` | Work day cells in the month agenda view of the Scheduler. |
| `.e-schedule .e-timeline-view .e-work-hours` | Work hour cells in the timeline views of the Scheduler. |
| `.e-schedule .e-timeline-month-view .e-work-days` | Work day cells in the timeline month view of the Scheduler. |
| `.e-schedule .e-timeline-year-view .e-work-cells.e-work-days` | Work day cells in the timeline year view of the Scheduler. |
| `.e-schedule .e-vertical-view .e-day-wrapper .e-appointment` | Appointment in the vertical views of the Scheduler. |
| `.e-schedule .e-vertical-view .e-all-day-appointment-wrapper .e-appointment` | All-day appointment in the vertical views of the Scheduler. |
| `.e-schedule .e-month-view .e-appointment` | Appointment in the month view of the Scheduler. |
| `.e-schedule .e-timeline-view .e-appointment` | Appointment in the timeline views of the Scheduler. |
| `.e-schedule .e-timeline-month-view .e-appointment` | Appointment in the timeline month view of the Scheduler. |
| `.e-schedule .e-timeline-year-view .e-event-table .e-appointment` | Appointment in the timeline year view of the Scheduler. |
| `.e-schedule .e-year-view .e-calendar-wrapper .e-month-calendar.e-calendar .e-appointment` | Appointment in the year view of the Scheduler. |
| `.e-schedule .e-agenda-view .e-appointment` | Appointment in the agenda view of the Scheduler. |
| `.e-schedule .e-month-agenda-view .e-appointment-indicator` | Appointment indicator in the month agenda view of the Scheduler. |
| `.e-schedule .e-block-appointment` | Block appointment in the Scheduler. |
| `.e-schedule .e-read-only` | Read-only appointment in the Scheduler. |
| `.e-appointment-border` | Border applied to appointments that are currently selected. Use the appointment class hierarchy based on your views. |
| `.e-selected-cells` | Work cells that are currently selected. Use the work cell class hierarchy based on your views. |
| `.e-header-cells` | Header cells of the Scheduler. Use the work cell hierarchy based on your views. |
| `.e-schedule .e-vertical-view .e-resource-cells` | Resource cells in the vertical views of the Scheduler. |
| `.e-schedule .e-month-view .e-resource-cells` | Resource cells in the month view of the Scheduler. |
| `.e-schedule .e-timeline-view .e-resource-cells` | Resource cells in the timeline views of the Scheduler. |
| `.e-schedule .e-timeline-month-view .e-resource-cells` | Resource cells in the timeline month view of the Scheduler. |
| `.e-parent-node` | Parent resource cells in the timeline views of the Scheduler. |
| `.e-child-node` | Child resource cells in the timeline views of the Scheduler. |

N> You can refer to our [ASP.NET MVC Scheduler](https://www.syncfusion.com/scheduler-sdk/aspnet-mvc-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [ASP.NET MVC Scheduler](https://ej2.syncfusion.com/aspnetmvc/schedule/overview#/fluent2) example to know how to present and manipulate data.
