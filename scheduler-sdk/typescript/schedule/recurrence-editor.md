---
layout: post
title: Recurrence Editor in TypeScript Scheduler | Syncfusion
description: Learn how to use the Recurrence Editor in the Syncfusion TypeScript Scheduler to configure daily, weekly, monthly, and yearly recurrence rules.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Recurrence Editor in TypeScript Scheduler

The Recurrence Editor is integrated into the Scheduler's editor window by default to generate recurrence rules for events. It can also be used as a standalone component for recurrence-related workflows.

> All valid recurrence rule strings mentioned in the [iCalendar](https://tools.ietf.org/html/rfc5545#section-3.3.10) specification apply to the Recurrence Editor.

## Customizing the repeat type option in editor

By default, there are 5 types of repeat options available in the Recurrence editor:

* Never
* Daily
* Weekly
* Monthly
* Yearly

The Recurrence editor can be customized to display only the specific repeat options such as `Daily` and `Weekly` options alone by setting the appropriate [`frequencies`](https://ej2.syncfusion.com/documentation/api/recurrence-editor#frequencies) option.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/recurrence-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/recurrence-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/recurrence-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/recurrence-cs1" %}

Other recurrence editor properties are listed below:

| Properties | Type | Description |
|------------|------|-------------|
| firstDayOfWeek | number | Sets the first day of the week for the recurrence editor. |
| startDate | Date | Sets the start date for recurrence calculations. |
| dateFormat | string | Sets the date format used in the recurrence editor. |
| locale | string | Sets the locale for the recurrence editor. |
| cssClass | string | Applies custom CSS classes to the recurrence editor. |
| enableRtl | boolean | Renders the recurrence editor in RTL mode when true. |
| minDate | Date | Sets the minimum selectable date. |
| maxDate | Date | Sets the maximum selectable date. |
| value | string | Gets or sets the recurrence rule string value. |
| selectedType | number | Sets the currently selected repeat type. |

## Customizing the End Type Option in Editor

By default, there are 3 types of end options available in the Recurrence editor:

* Never
* Until
* Count

The Recurrence editor can be customized to display only the specific end options, such as the `Until` and `Count` options alone, by setting the appropriate [`endTypes`](https://ej2.syncfusion.com/documentation/api/recurrence-editor#endtypes) option.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/recurrence-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/recurrence-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/recurrence-cs2" %}

## Accessing the recurrence rule string

The Recurrence Editor generates a recurrence rule from the selected options. The generated rule follows the [`iCalendar`](https://tools.ietf.org/html/rfc5545#section-3.3.10) specification and can be used as the Scheduler event's `recurrenceRule` value.

Use the Recurrence Editor's [`change`](https://ej2.syncfusion.com/documentation/api/recurrence-editor#change) event to read the generated rule; the rule value is available via the event argument's `value` option.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/recur-editor-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/recur-editor-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/recur-editor-cs1" %}

## Set a specific value on the recurrence editor

You can initialize the Recurrence Editor with a specific rule string. Call `setRecurrenceRule` to populate the editor fields according to the provided recurrence rule.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/recur-editor-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/recur-editor-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/recur-editor-cs2" %}

## Recurrence date generation

Use `getRecurrenceDates` to parse an event's `recurrenceRule` and generate the occurrence dates. The method generates dates based on the provided recurrence rule. The `getRecurrenceDates` parameters are:

| Field name | Type | Description |
|------------|------|-------------|
| `startDate` | Date| Appointment start date. |
| `rule` | String| Recurrence rule present in an event object. |
| `excludeDate` | String | Date collection (in ISO format) to be excluded. It is **optional**. |
| `maximumCount` | Number | Number of date count to be generated. It is **optional**. |
| `viewDate` | Date | Current view range's first date. It is **optional**. |

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/recur-editor-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/recur-editor-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/recur-editor-cs3" %}

## Generate recurrence dates on server-side

You can also generate recurrence dates server-side by using the `RecurrenceHelper` class (or a similar server-side implementation). This allows you to reproduce the recurrence logic outside the browser.

> See this KB article for a server-side parsing example: https://www.syncfusion.com/kb/10009/how-to-parse-the-recurrencerule-at-server-side

## Restrict date generation with a specific count

If a rule is in the "NEVER ENDS" category, specify `maximumCount` in `getRecurrenceDates` to limit the number of generated dates starting from the provided `startDate`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/recur-editor-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/recur-editor-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/recur-editor-cs4" %}

> Refer to the [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour page for its groundbreaking feature representations. Also explore [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/tailwind3/schedule/overview.html) to learn how to present and manipulate data.
