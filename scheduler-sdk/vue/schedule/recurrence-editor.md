---
layout: post
title: Recurrence Editor in Vue Scheduler | Syncfusion
description: Learn how to use the Recurrence Editor in the Syncfusion Vue Scheduler to configure daily, weekly, monthly, and yearly recurrence rules.
control: Scheduler
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Recurrence Editor in Vue Scheduler

The **Recurrence Editor** is a built-in component integrated into the Scheduler editor window. It enables the creation and management of recurring events by generating recurrence rule strings. The Recurrence Editor can also be used as a standalone component to handle recurrence-related operations independently.

> All valid recurrence rule strings mentioned in the [`iCalendar`](https://tools.ietf.org/html/rfc5545#section-3.3.10) specifications are applicable to the recurrence editor.

## Customizing the repeat type options in the editor

By default, the Recurrence Editor provides the following repeat options:

* Never
* Daily
* Weekly
* Monthly
* Yearly

It is possible to customize the recurrence editor to display only specific repeat options, such as `Daily` and `Weekly`, by setting the appropriate [`frequencies`](https://ej2.syncfusion.com/vue/documentation/api/recurrence-editor#frequencies) option.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/recurrence-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/recurrence-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/recurrence-cs1" %}

The other properties available in the recurrence editor are tabulated below.

| Properties | Type | Description |
|------------|------|-------------|
| firstDayOfWeek | number | Sets the first day of the week in the recurrence editor. |
| startDate | Date | Sets the start date from which the recurrence event begins. |
| dateFormat | string | Sets the specific date format in the recurrence editor. |
| locale | string | Sets the locale to apply to the recurrence editor. |
| cssClass | string | Allows styling to be applied to the recurrence editor with custom class names. |
| enableRtl | boolean | Allows the recurrence editor to render in RTL mode. |
| minDate | Date | Sets the minimum date in the recurrence editor. |
| maxDate | Date | Sets the maximum date in the recurrence editor. |
| value | string | Sets the recurrence rule value in the recurrence editor. |
| selectedType | number | Sets the specific repeat type in the recurrence editor. |

## Customizing the End Type Option in Editor

By default, the Recurrence Editor supports three end options:

* Never
* Until
* Count

It is possible to customize the recurrence editor to display only specific end options, such as the `Until` and `Count` options, by setting the appropriate [`endTypes`](https://ej2.syncfusion.com/vue/documentation/api/recurrence-editor#endtypes) option.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/recurrence-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/recurrence-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/recurrence-cs2" %}

## Accessing the recurrence rule string

The recurrence rule is usually generated based on the options selected in the recurrence editor, and it follows the [`iCalendar`](https://tools.ietf.org/html/rfc5545#section-3.3.10) specifications. The generated recurrence rule string is valid for use with the Scheduler event’s recurrence rule field.

There is a `change` event available in the recurrence editor that triggers whenever the fields change. Within this event argument, you can access the generated recurrence value through the `value` option as shown in the following code example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/recur-editor-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/recur-editor-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/recur-editor-cs1" %}

## Set specific value on recurrence editor

The Recurrence Editor can be initialized with a predefined recurrence rule. When a rule string is passed using the `setRecurrenceRule` method, all related editor fields are updated automatically to reflect the corresponding configuration.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/recur-editor-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/recur-editor-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/recur-editor-cs2" %}

## Recurrence date generation

You can parse the `recurrenceRule` of an event to generate the date instances on which that event occurs, using the `getRecurrenceDates` method. It generates dates based on the `recurrenceRule` provided. The parameters for the `getRecurrenceDates` method are as follows.

| Field name | Type | Description |
|------------|------|-------------|
| `startDate` | Date | Appointment start date. |
| `rule` | String | Recurrence rule present in an event object. |
| `excludeDate` | String | Date collection (in ISO format) to be excluded. It is **optional**. |
| `maximumCount` | Number | Number of date count to be generated. It is **optional**. |
| `viewDate` | Date | Current view range's first date. It is **optional**. |

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/recur-editor-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/recur-editor-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/recur-editor-cs3" %}

> The above example generates two dates—**January 7, 2018** and **January 9, 2018**—while excluding **January 8, 2018** and **January 10, 2018** using the exclusion list. The generated dates can then be used to create appointments.

## Recurrence date generation in server-side

It is also possible to generate recurrence date instances on the server side by referring to the `RecurrenceHelper` class, which is specifically written for this date-generation process.

> Refer [here](https://www.syncfusion.com/kb/10009/how-to-parse-the-recurrencerule-at-server-side) for the step-by-step procedure to generate dates on the server side.

## Restrict date generation with specific count

If the rule is in the "NEVER ENDS" category, you can specify the maximum count when you want to stop date generation starting from the provided start date. To do so, provide the appropriate `maximumCount` value within the `getRecurrenceDates` method as shown in the following code example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/recur-editor-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/recur-editor-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/recur-editor-cs4" %}

> For a complete overview of Scheduler capabilities, visit the [Vue Scheduler](https://www.syncfusion.com/vue-components/vue-scheduler) feature tour. Explore live examples at [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/tailwind3/schedule/overview.html) to learn how to present and manipulate data.