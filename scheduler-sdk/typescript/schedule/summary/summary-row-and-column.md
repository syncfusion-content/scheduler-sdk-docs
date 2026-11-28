---
layout: post
title: Summary Row and Column in TypeScript Scheduler | Syncfusion
description: Learn how to display summary rows and columns in the Syncfusion TypeScript Scheduler Timeline and vertical views.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Summary Row and Column in TypeScript Scheduler

## Overview

A summary row and summary column add cells to the Scheduler content for displaying application-defined values. The summary row appears at the bottom of the content area, and the summary column appears at its trailing edge, aligned with the corresponding content rows or time slots. Both features work in Timeline and vertical Day, Week, Work Week, and Month views, whether resources are configured or not and whether they are grouped or not.

Provide values through the [`renderSummaryCell`](https://ej2.syncfusion.com/documentation/api/schedule#rendersummarycell) event or set a `template` in the corresponding `summaryRow` or `summaryColumn` configuration. Enable the `Summary` module and configure [`summaryRow`](https://ej2.syncfusion.com/documentation/api/schedule#summaryrow) or [`summaryColumn`](https://ej2.syncfusion.com/documentation/api/schedule#summarycolumn). Both options are disabled by default.

## Basic setup

The following example enables both summaries in the vertical Week and Timeline Week views without configuring resources. The sample opens on the current week with events generated from today's date. Switch views to see the summary layout in both orientations. The `renderSummaryCell` event displays the appointment count for each cell.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/summary-row-and-column-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/summary-row-and-column-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/summary-row-and-column-cs1" %}

## Summary row

The summary row contains cells at the bottom of the content area. In vertical Day, Week, and Work Week views, a cell aligns with each displayed date column; in vertical Month view, a cell represents each weekday column. In Timeline views, `cellUnit` controls the time range represented by each cell.

The following `cellUnit` values are supported in Timeline views:

| Timeline view | Allowed values | Default |
|---|---|---|
| Timeline Day | `Slot`, `Hour`, `Date` | `Hour` when the slot duration divides evenly into an hour; otherwise `Date` |
| Timeline Week | `Slot`, `Hour`, `Date`, `Week` | `Date` |
| Timeline Work Week | `Slot`, `Hour`, `Date`, `Week` | `Date` |
| Timeline Month | `Slot`, `Hour`, `Date`, `Week`, `Month` | `Date` |
| Timeline Year with resources as rows | `Month`, `Year` | `Month` |

An unsupported value falls back to the view default.

## Summary column

The summary column appears at the trailing edge of the content and aligns with the corresponding content rows or time slots. It works when no resources are configured, when resources are configured without grouping, and when resources are grouped. In RTL layout, it appears on the left.

In vertical Day, Week, and Work Week views, `cellUnit` accepts `Slot` or `MajorSlot`. A `Slot` cell represents one time slot, while a `MajorSlot` cell spans a major time slot. The summary column also includes a cell aligned with the all-day row. In vertical Month view, each summary cell aligns with a week row. Timeline and Month views determine the column cell size from their layout.

## Component and view-level configuration

Configure summary options at the Scheduler level or override them for an individual view.

```ts
const scheduleObj: Schedule = new Schedule({
    summaryRow: { enable: true },
    summaryColumn: { enable: true, cellUnit: 'Slot' },
    views: [
        { option: 'Week', summaryRow: { enable: true } },
        { option: 'TimelineWeek', summaryRow: { enable: true, cellUnit: 'Date' } }
    ]
});
```

## Using summary events

### Handle rendered and clicked summary cells

Use `renderSummaryCell` to calculate values and `summaryCellClick` to respond to a click.

```ts
renderSummaryCell: (args: RenderSummaryCellEventArgs) => {
    if (args.mode === 'Initial') {
        args.text = 'Loading';
        return;
    }

    const duration: number = args.eventData.reduce((total: number, event: any) => {
        return total + (event.EndTime.getTime() - event.StartTime.getTime());
    }, 0);

    args.text = `${Math.round(duration / 3600000)} hours`;
},
summaryCellClick: (args: SummaryCellClickEventArgs) => {
    console.log(args.renderType, args.startTime, args.endTime);
}
```

`eventData` contains raw event records after recurrence expansion, timezone processing, and filtering. It is empty during `Initial` mode.

### Refresh and inspect summary cells

Use `refreshSummary` after application data changes that need to update summary values. Use `getSummaryCellDetails` to retrieve details for an existing summary cell.

```ts
scheduleObj.refreshSummary();

const details: any = scheduleObj.getSummaryCellDetails(element);
console.log(details);
```

### Event arguments

The following `renderSummaryCell` arguments are most often used:

| Argument | Description |
|---|---|
| `mode` | `Initial` when the layout is rendered and the cell is blank. `Refresh` after events render, when the value can be calculated. |
| `renderType` | `SummaryRow`, `SummaryColumn`, `SummaryTotal`, `SummaryRowLabel`, `SummaryColumnLabel`, or `GroupSummary`. |
| `text` | The text to display in the cell. Set it to change the cell content. |
| `element` | The summary cell element. |
| `startTime`, `endTime` | The time range the cell covers. |
| `eventData` | The events in the cell's time range and resource scope. |
| `resourceData`, `groupIndex` | The resource the cell belongs to, when resources are configured. |

The label cells also trigger `renderSummaryCell`. Check `renderType` before setting `args.text` so that a calculated value does not replace a label.

The summary layout refreshes automatically after appointment CRUD actions and Scheduler navigation.

## Customization

Use `template` to customize summary cells, `labelTemplate` to customize the summary row or column label, and `totalTemplate` to customize the grand total at the corner where the row and column meet. The following preview demonstrates these templates in both vertical Week and Timeline Week views.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/summary-row-and-column-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/summary-row-and-column-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/summary-row-and-column-cs2" %}

## Notes

* Summary row and column are supported in Timeline Day, Week, Work Week, Month, and resource-oriented Timeline Year views, and vertical Day, Week, Work Week, and Month views.
* In Timeline Year, summaries are supported when the orientation is `Vertical` and resources are displayed as rows.
* Adaptive or mobile layout is not supported.
* The `Summary` module must be injected to render summaries.
* The summary row is pinned at the bottom of the content area.
