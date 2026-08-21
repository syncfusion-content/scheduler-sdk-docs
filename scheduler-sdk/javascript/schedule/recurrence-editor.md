---
layout: post
title: Recurrence Editor in JavaScript Scheduler | Syncfusion
description: Learn how to use the Recurrence Editor in the Syncfusion JavaScript Scheduler to configure daily, weekly, monthly, and yearly recurrence rules.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Recurrence Editor in JavaScript Scheduler

The Recurrence Editor is integrated into the Scheduler editor by default to generate recurrence rule strings for events. It can also be used as a standalone component.

> All valid recurrence rule strings defined by the [iCalendar specification](https://tools.ietf.org/html/rfc5545#section-3.3.10) are supported by the Recurrence Editor.

## Customizing the repeat type option in editor

By default, there are 5 types of repeat options available in the Recurrence editor:

* Never
* Daily
* Weekly
* Monthly
* Yearly

The Recurrence editor can be customized to display only the specific repeat options such as `Daily` and `Weekly` options alone by setting the appropriate [`frequencies`](https://ej2.syncfusion.com/documentation/api/recurrence-editor#frequencies) option.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/recurrence-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/recurrence-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/recurrence-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/recurrence-cs1" %}

Other recurrence editor properties are listed below:

| Properties | Type | Description |
|------------|------|-------------|
| firstDayOfWeek | number | Sets the first day of the week on recurrence editor.|
| startDate | Date | Sets the start date from which date the recurrence event starts. |
| dateFormat | string | Sets the specific date format on recurrence editor.|
| locale | string | Sets the locale to be applied on recurrence editor.|
| cssClass | string | Allows styling to be applied on recurrence editor with custom class names.|
| enableRtl | boolean | Allows recurrence editor to render in RTL mode.|
| minDate | Date | Sets the minimum date on recurrence editor.|
| maxDate | Date | Sets the maximum date on recurrence editor.|
| value | string | Sets the recurrence rule value on recurrence editor. |
| selectedType | number | Sets the specific repeat type on the recurrence editor.|

## Customizing the End Type Option in Editor

By default, there are 3 types of end options available in the Recurrence editor:

* Never
* Until
* Count

The Recurrence editor can be customized to display only the specific end options, such as the `Until` and `Count` options alone, by setting the appropriate [`endTypes`](https://ej2.syncfusion.com/documentation/api/recurrence-editor#endtypes) option.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/recurrence-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/recurrence-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/recurrence-cs2" %}

## Accessing the recurrence rule string

The recurrence rule is generated from the selected editor options and follows the [iCalendar](https://tools.ietf.org/html/rfc5545#section-3.3.10) specification. You can access the generated rule via the Recurrence Editor's [`change`](https://ej2.syncfusion.com/documentation/api/recurrence-editor#change) event; the value is available in the event argument's `value` property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/recur-editor-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/recur-editor-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/recur-editor-cs1" %}

## Set specific value on recurrence editor

The Recurrence editor can be displayed with specific options loaded initially based on a provided rule string. The fields of the recurrence editor will change their values accordingly when you provide a particular rule through the `setRecurrenceRule` method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/recur-editor-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/recur-editor-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/recur-editor-cs2" %}

## Recurrence date generation

The `recurrenceRule` of an event can be parsed to generate the date instances on which that particular event will occur, using the `getRecurrenceDates` method. It generates the dates based on the `recurrenceRule` that we provide. The parameters to be provided for `getRecurrenceDates` method are as follows.

| Field name | Type | Description |
|------------|------|-------------|
| `startDate` | Date| Appointment start date. |
| `rule` | String| Recurrence rule present in an event object. |
| `excludeDate` | String | Date collection (in ISO format) to be excluded. It is **optional**. |
| `maximumCount` | Number | Number of date count to be generated. It is **optional**. |
| `viewDate` | Date | Current view range's first date. It is **optional**. |

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/recur-editor-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/recur-editor-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/recur-editor-cs3" %}

## Recurrence date generation in server-side

You can generate recurrence dates on the server by using the `RecurrenceHelper` class or equivalent server-side logic.

> See the KB article for a step-by-step procedure: https://www.syncfusion.com/kb/10009/how-to-parse-the-recurrencerule-at-server-side

## Restrict date generation with specific count

If the rule is given in the "NEVER ENDS" category, the maximum count can be specified to stop the date generation starting from the provided start date. To do so, provide the appropriate `maximumCount` value within the `getRecurrenceDates` method as shown in the following code example.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/recur-editor-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/recur-editor-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/recur-editor-cs4" %}

> Refer to the [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour for an overview, and explore the [Scheduler demo](https://ej2.syncfusion.com/demos/#/tailwind3/schedule/overview.html) for practical examples.
