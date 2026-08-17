---
layout: post
title: Style and Appearance in Vue Scheduler | Syncfusion
description: Learn how to style the Syncfusion Vue Scheduler by overriding default CSS classes and creating custom themes with Theme Studio.
control: Scheduler
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Style and Appearance in Vue Scheduler

The appearance of the Vue Schedule component can be customized by overriding its default CSS classes or by creating and applying a custom theme. Syncfusion provides **Theme Studio** to help generate custom themes visually, which can then be applied to the Schedule component.

- Theme Studio: https://ej2.syncfusion.com/themestudio/?theme=tailwind3  

This section lists commonly used CSS class selectors that can be overridden to customize different areas of the Scheduler UI.

---

## Styling work cells

Work cells represent the time slots or date cells where appointments are rendered.

| CSS selector | Description |
|-------|---------|
| .e-schedule .e-vertical-view .e-work-cells | Work cells in vertical views of Scheduler |
| .e-schedule .e-month-view .e-work-cells | Work cells in Month view of Scheduler |
| .e-schedule .e-month-view .e-other-month | Work cells of the other month in Month view of Scheduler |
| .e-schedule .e-timeline-view .e-work-cells | Work cells in Timeline views of Scheduler |
| .e-schedule .e-timeline-month-view .e-work-cells | Work cells in Timeline Month view of Scheduler |
| .e-schedule .e-timeline-year-view .e-work-cells | Work cells in Timeline Year view of Scheduler |
| .e-schedule .e-timeline-year-view .e-work-cells.e-other-month | Work cells of the other month in Timeline Year view of Scheduler |
| .e-schedule .e-month-agenda-view .e-work-cells | Work cells in Month Agenda view of Scheduler |
| .e-schedule .e-month-agenda-view .e-other-month | Work cells of the other month in Month Agenda view of Scheduler |
| .e-schedule .e-year-view .e-calendar-wrapper .e-month-calendar.e-calendar .e-other-month | Work cells of the other month in Year view of Scheduler |

---

## Styling working days and working hours

These selectors control visual differentiation for working and non‑working periods.

| CSS selector | Description |
|-------------|-------------|
| .e-schedule .e-vertical-view .e-all-day-cells | All-day cells in vertical views of Scheduler |
| .e-schedule .e-vertical-view .e-work-hours | Work-hour cells in vertical views of Scheduler |
| .e-schedule .e-month-view .e-work-days | Work-day cells in Month view of Scheduler |
| .e-schedule .e-month-agenda-view .e-work-days | Work-day cells in Month Agenda view of Scheduler |
| .e-schedule .e-timeline-view .e-work-hours | Work-hour cells in Timeline views of Scheduler |
| .e-schedule .e-timeline-month-view .e-work-days | Work-day cells in Timeline Month view of Scheduler |
| .e-schedule .e-timeline-year-view .e-work-cells.e-work-days | Work-day cells in Timeline Year view of Scheduler |

---

## Styling appointments

Appointments represent scheduled events and can be styled differently based on view type.

| CSS selector | Description |
|-------------|-------------|
| .e-schedule .e-vertical-view .e-day-wrapper .e-appointment | Appointment in vertical views of Scheduler |
| .e-schedule .e-vertical-view .e-all-day-appointment-wrapper .e-appointment | All-day appointment in vertical views of Scheduler |
| .e-schedule .e-month-view .e-appointment | Appointment in Month view of Scheduler |
| .e-schedule .e-timeline-view .e-appointment | Appointment in Timeline views of Scheduler |
| .e-schedule .e-timeline-month-view .e-appointment | Appointment in Timeline Month view of Scheduler |
| .e-schedule .e-timeline-year-view .e-event-table .e-appointment | Appointment in Timeline Year view of Scheduler |
| .e-schedule .e-year-view .e-calendar-wrapper .e-month-calendar.e-calendar .e-appointment | Appointment in Year view of Scheduler |
| .e-schedule .e-agenda-view .e-appointment | Appointment in Agenda view of Scheduler |
| .e-schedule .e-month-agenda-view .e-appointment-indicator | Appointment in Month Agenda view of Scheduler |

Additional state‑based styling options:

| CSS selector | Description |
|-------------|-------------|
| .e-schedule .e-block-appointment | Block appointment in Scheduler |
| .e-schedule .e-read-only | Read-only appointment in Scheduler |
| e-appointment-border | Appointment currently selected; use the appointment class hierarchy based on your views. |
| e-selected-cells | Work cells that are currently selected; use the work cell class hierarchy based on your views. |
| e-header-cells | Header cells of Scheduler; use the work cell class hierarchy based on your views. |

---

## Styling resource cells

Resource cells display resource information such as rooms, employees, or equipment.

| CSS selector | Description |
|-------------|-------------|
| .e-schedule .e-vertical-view .e-resource-cells | Resource cells in vertical views of Scheduler |
| .e-schedule .e-month-view .e-resource-cells | Resource cells in Month view of Scheduler |
| .e-schedule .e-timeline-view .e-resource-cells | Resource cells in Timeline views of Scheduler |
| .e-schedule .e-timeline-month-view .e-resource-cells | Resource cells in Timeline Month view of Scheduler |
| e-parent-node | Parent resource cells in Timeline views of Scheduler |
| e-child-node | Child resource cells in Timeline views of Scheduler |

> For a complete overview of Scheduler features, visit the [Vue Scheduler](https://www.syncfusion.com/vue-components/vue-scheduler) feature tour page. Explore live examples at [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/tailwind3/schedule/overview.html) to learn how to present and manipulate data.