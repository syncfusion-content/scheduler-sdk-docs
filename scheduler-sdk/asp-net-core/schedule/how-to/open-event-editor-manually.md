---
layout: post
title: Open Editor Window Manually in ASP.NET Core Scheduler | Syncfusion
description: Learn how to open the event editor manually in the Syncfusion ASP.NET Core Scheduler on cell or event click, including on a single click.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---

# Open Editor Window Programmatically in ASP.NET Core Scheduler

## Open Editor Window externally

The Scheduler allows you to programmatically open the event editor for a specific time range or for a specific event by using the `openEditor` method. To open the editor for a specific time range, pass the cell details as the first argument and the action `Add` as the second argument. To open the editor for an existing event, pass the event data as the first argument and the action `Save` as the second argument. In the following example, clicking the respective button opens the corresponding editor window.

The `openEditor` method accepts the following arguments:

| Argument | Type | Description |
| --- | --- | --- |
| `data` | `Record` | It can be either cell data or event data. |
| `action` | `CurrentAction` | Defines the action for which the editor needs to be opened such as either for new event creation or for editing of existing events. The applicable action names that can be used here are Add, Save, EditOccurrenceand EditSeries. |

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/event-editor/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/event-editor/data.cs %}
{% endhighlight %}
{% endtabs %}

## Open editor window on single click

By default, the Scheduler editor window opens when you double-click a cell or an appointment. You can also open the editor window on a single click by calling the `openEditor` method in the `eventClick` and `cellClick` events of the Scheduler, and by setting `showQuickInfo` to `false`. The following example shows how to open the editor window on a single click of cells and appointments.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/single-click-editor/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/how-to/single-click-editor/data.cs %}
{% endhighlight %}
{% endtabs %}

