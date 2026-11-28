---
layout: post
title: Group Summary in TypeScript Scheduler | Syncfusion
description: Learn how to replace hierarchical resource parent rows with group summary bands in the Syncfusion TypeScript Scheduler.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Group Summary in TypeScript Scheduler

## Overview

A group summary converts the parent rows of selected resource levels in Timeline views into summary bands. It does not add extra rows. Each parent resource row displays summary cells for the complete group, including all descendant resources, while the child rows continue to display appointments normally.

Enable the `Summary` module and configure [`groupSummary`](https://ej2.syncfusion.com/documentation/api/schedule#groupsummary). The option requires hierarchical resource grouping.

## Basic setup

The following example enables group summaries for every resource level that has child levels. The resource header remains configurable through the existing resource header template.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/group-summary-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/group-summary-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/group-summary-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/group-summary-cs1" %}

## Configure a group summary

### Select resource levels

Use `resources` to select the resource names whose parent rows become summary bands. A name must match an entry in `group.resources`. Unknown names and the final leaf level are ignored.

```ts
groupSummary: {
    enable: true,
    resources: ['Buildings', 'Rooms'],
    cellUnit: 'Date'
}
```

When `resources` is omitted or empty, every grouped resource level that has child levels becomes a group summary level.

### Cell unit

Use `cellUnit` to define how much time each group summary cell covers. The available units match those used for summary rows:

| View | Allowed values | Default |
|---|---|---|
| Timeline Day | `Slot`, `Hour`, `Date` | `Hour` when the slot duration divides evenly into an hour; otherwise `Date` |
| Timeline Week | `Slot`, `Hour`, `Date`, `Week` | `Date` |
| Timeline Work Week | `Slot`, `Hour`, `Date`, `Week` | `Date` |
| Timeline Month | `Slot`, `Hour`, `Date`, `Week`, `Month` | `Date` |
| Timeline Year | `Month`, `Year` | `Month` |

An unsupported value falls back to the view default.

### Component and view-level configuration

Group summary can be configured for the whole Scheduler or overridden for an active Timeline view.

```ts
views: [{
    option: 'TimelineWeek',
    groupSummary: {
        enable: true,
        resources: ['Buildings'],
        cellUnit: 'Date'
    }
}]
```

## Working with summary cells

### Customize group summary cells

Use `template` to customize each group summary cell or calculate its value in `renderSummaryCell`.

```ts
groupSummary: {
    enable: true,
    resources: ['Buildings'],
    cellUnit: 'Date',
    template: '<strong>Group summary</strong>'
},
renderSummaryCell: (args: RenderSummaryCellEventArgs) => {
    if (args.renderType === 'GroupSummary') {
        args.text = `${args.eventData.length} events`;
    }
}
```

The group summary arguments reuse the existing summary event context and include the resource scope and time range. `eventData` contains the events belonging to the selected resource group.

### Handle group summary clicks

The existing `summaryCellClick` event also reports group summary cells.

```ts
summaryCellClick: (args: SummaryCellClickEventArgs) => {
    if (args.renderType === 'GroupSummary') {
        console.log(args.resourceData, args.startTime, args.endTime);
    }
}
```

## Customization

Customize group rows with the existing [`resourceHeaderTemplate`](https://ej2.syncfusion.com/documentation/api/schedule#resourceheadertemplate). It remains responsible for the parent resource header. The `template` in `groupSummary` customizes only the time-axis summary cells.

```ts
resourceHeaderTemplate: (data: any) => {
    return `<div class="group-name">${data.resource.text}</div>`;
}
```

The following preview combines a group summary with a summary row and summary column. It uses `groupSummary.template` to customize group summary cells.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/group-summary-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/group-summary-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/group-summary-cs2" %}

## Notes

* Group summary is available only in Timeline views with hierarchical resource grouping.
* The parent resource row hides the appointments belonging directly to that band.
* Group summary rows are excluded from summary row and grand-total calculations. The summary column cell for a group summary row is empty; other resource rows continue to display their summary cells and contribute their appointments to the applicable summary calculations.
* A resource name that is not present in `group.resources` or represents the final leaf level is ignored.
* When hierarchical grouping is absent, `groupSummary` is ignored without a warning.
* `groupSummary` requires the `Summary` module to be injected.

## API reference

* [`groupSummary`](https://ej2.syncfusion.com/documentation/api/schedule#groupsummary) - Configures hierarchical resource summary bands.
* [`renderSummaryCell`](https://ej2.syncfusion.com/documentation/api/schedule#rendersummarycell) - Provides group summary values and custom content.
* [`summaryCellClick`](https://ej2.syncfusion.com/documentation/api/schedule#summarycellclick) - Handles group summary cell clicks.
* [`refreshSummary`](https://ej2.syncfusion.com/documentation/api/schedule#refreshsummary) - Refreshes group and other summary values.
* [`getSummaryCellDetails`](https://ej2.syncfusion.com/documentation/api/schedule#getsummarycelldetails) - Returns details for a summary cell.
