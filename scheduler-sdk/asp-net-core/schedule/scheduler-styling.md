---
layout: post
title: Style and Appearance in ASP.NET Core Scheduler | Syncfusion
description: Learn how to style the Syncfusion ASP.NET Core Scheduler by overriding default CSS classes and creating custom themes with Theme Studio.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---


# Style and Appearance in ASP.NET Core Scheduler

To modify the Scheduler appearance, you need to override the default CSS of the Scheduler. You can also create your own custom theme using our [`Theme Studio`](https://ej2.syncfusion.com/themestudio/?theme=material). Find the list of CSS classes used in the Scheduler below.

| Css class | Purpose |
|-------|---------|
| .e-schedule .e-vertical-view .e-work-cells | Work cells in vertical views of scheduler |
| .e-schedule .e-month-view .e-work-cells | Work cells in month view of scheduler |
| .e-schedule .e-month-view .e-other-month | Work cells of other month in month view of scheduler |
| .e-schedule .e-timeline-view .e-work-cells | Work cells in timeline views of scheduler |
| .e-schedule .e-timeline-month-view .e-work-cells | Work cells in timeline month view of scheduler |
| .e-schedule .e-timeline-year-view .e-work-cells | Work cells in timeline year view of scheduler |
| .e-schedule .e-timeline-year-view .e-work-cells.e-other-month | Work cells of other month in timeline year view of scheduler |
| .e-schedule .e-month-agenda-view .e-work-cells | Work cells in month agenda view of scheduler |
| .e-schedule .e-month-agenda-view .e-other-month | Work cells of other month in month agenda view of scheduler |
| .e-schedule .e-year-view .e-calendar-wrapper .e-month-calendar.e-calendar .e-other-month | Work cells of other month in year view of scheduler |
| .e-schedule .e-vertical-view .e-all-day-cells | All day cells in vertical views of scheduler |
| .e-schedule .e-vertical-view .e-work-hours | Work hour cells in vertical views of scheduler |
| .e-schedule .e-month-view .e-work-days | Work day cells in month view of scheduler |
| .e-schedule .e-month-agenda-view .e-work-days | Work day cells in month agenda view of scheduler |
| .e-schedule .e-timeline-view .e-work-hours | Work hour cells in timeline views of scheduler |
| .e-schedule .e-timeline-month-view .e-work-days | Work day cells in timeline month view of scheduler |
| .e-schedule .e-timeline-year-view .e-work-cells.e-work-days | Work day cells in timeline year view of scheduler |
| .e-schedule .e-vertical-view .e-day-wrapper .e-appointment | Appointment in vertical views of scheduler |
| .e-schedule .e-vertical-view .e-all-day-appointment-wrapper .e-appointment | All day Appointment in vertical views of scheduler |
| .e-schedule .e-month-view .e-appointment | Appointment in month view of scheduler |
| .e-schedule .e-timeline-view .e-appointment | Appointment in timeline views of scheduler |
| .e-schedule .e-timeline-month-view .e-appointment | Appointment in timeline month view of scheduler |
| .e-schedule .e-timeline-year-view .e-event-table .e-appointment | Appointment in timeline year view of scheduler |
| .e-schedule .e-year-view .e-calendar-wrapper .e-month-calendar.e-calendar .e-appointment | Appointment in year view of scheduler |
| .e-schedule .e-agenda-view .e-appointment | Appointment in agenda view of scheduler |
| .e-schedule .e-month-agenda-view .e-appointment-indicator | Appointment in month agenda view of scheduler |
| .e-schedule .e-block-appointment | Block appointment in scheduler |
| .e-schedule .e-read-only | Read only appointment in scheduler. |
| .e-appointment-border | Appointment which is currently selected; use the appointment class hierarchy based on your view. |
| .e-selected-cells | Work cells which are currently selected; use the work cell class hierarchy based on your view. |
| .e-header-cells | Header cells of the scheduler; use the work cell class hierarchy based on your view. |
| .e-schedule .e-vertical-view .e-resource-cells| Resource cells in vertical views of scheduler. |
| .e-schedule .e-month-view .e-resource-cells| Resource cells in month view of scheduler. |
| .e-schedule .e-timeline-view .e-resource-cells | Resource cells in timeline views of scheduler. |
| .e-schedule .e-timeline-month-view .e-resource-cells| Resource cells in timeline month view of scheduler. |
| .e-parent-node | Parent resource cells in timeline views of the scheduler. |
| .e-child-node | Child resource cells in timeline views of the scheduler. |

N> You can refer to our [ASP.NET Core Scheduler](https://www.syncfusion.com/aspnet-core-ui-controls/scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [ASP.NET Core Scheduler example](https://ej2.syncfusion.com/aspnetcore/Schedule/Overview#/material) to know how to present and manipulate data.
