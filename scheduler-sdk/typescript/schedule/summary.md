---
layout: post
title: Summary in TypeScript Scheduler | Syncfusion
description: Learn how to configure summary rows, summary columns, and hierarchical resource group summaries in the Syncfusion TypeScript Scheduler.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Summary in TypeScript Scheduler

The Scheduler provides summary rows and columns in Timeline and vertical views, with or without resource grouping. Use them to display values for time ranges and, when resources are grouped, resource rows. Group summaries turn parent resource rows into summary bands in Timeline views with hierarchical resource grouping.

Supply summary values through the `renderSummaryCell` event or the `template` option in the corresponding `summaryRow`, `summaryColumn`, or `groupSummary` configuration.

## Summary topics

* [Summary row and column](./summary/summary-row-and-column) - Display summary values at the bottom and trailing edge of supported Timeline and vertical views, with or without resource grouping.
* [Group summary](./summary/group-summary) - Display summary values in parent resource rows in supported Timeline views with hierarchical resource grouping.

## API overview

| API | Purpose |
|---|---|
| `summaryRow` | Enables and configures summary cells at the bottom of the content area. |
| `summaryColumn` | Enables and configures summary cells at the trailing edge of resource rows. |
| `groupSummary` | Enables summary bands for hierarchical resource parent rows. |
| `renderSummaryCell` | Supplies calculated values or custom content for summary cells. |
| `summaryCellClick` | Handles summary cell interactions. |
| `refreshSummary` | Refreshes summary values after application data changes. |
| `getSummaryCellDetails` | Retrieves details for a summary cell. |
