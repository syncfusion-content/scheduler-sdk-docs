---
layout: post
title: Appointments in JavaScript Scheduler control | Syncfusion
description: Learn here all about Appointments in Syncfusion JavaScript Scheduler control of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Appointments 
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Appointments in JavaScript Scheduler control

Appointments in the Scheduler represent events scheduled for specific time periods. Each appointment can be configured for various time ranges and categorized based on its duration and recurrence pattern. The Scheduler supports the following appointment types:

* Normal events
* Spanned events
* All-day events
* Recurring events

## Normal events

Normal events are appointments scheduled within a specific time interval on a single day.

### Creating a normal event

Here's an example of how to create a normal event in the Scheduler using simple JSON data:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs1" %}
{% endif %}

## Spanned events

Spanned events are appointments that extend beyond 24 hours. By default, these events display in the all-day row. This category also includes events spanning multiple days but lasting less than 24 hours, which appear appropriately on both days.

> For example, an appointment scheduled from November 25, 2018, at 11:00 PM to November 26, 2018, at 2:00 AM (spanning less than 24 hours) will be split and displayed across both days.

### Customize the rendering of the spanned events

By default, the Scheduler renders spanned events (appointments lasting more than 24 hours) in the all-day row. To display these events within work cells instead, set the [`spannedEventPlacement`](../api/schedule/eventSettings#spannedeventplacement) option to `TimeSlot` within the [`eventSettings`](../api/schedule/eventSettings) property. The following example demonstrates this customization:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs3" %}
{% endif %}


## All-day events

All-day events are appointments that occupy an entire day, such as holidays or full-day conferences. These events typically display in a separate all-day row below the date header section. In Timeline views, all-day appointments appear within the main content area since these views do not include a separate all-day row.

> To designate a normal appointment as an all-day event, set the [`isAllDay`](../api/schedule/field#isallday) field to true.

### Hide all-day row events

The all-day row appointments can be hidden from the Scheduler UI using CSS customization:

```ts
    <style>
        .e-schedule .e-date-header-wrap .e-schedule-table thead {
           display: none;
        }
    </style>
```

> The all-day row supports scrolling functionality. For more information, refer to the [enable scroll option on all-day section](./how-to/enable-scroll-option-on-all-day-section) documentation.


## Expand all day appointments view on initial load

When numerous appointments exist in the all-day view, the [`dataBound`](../api/schedule#databound) event can be utilized to automatically display all all-day events on initial load, eliminating the need for users to manually click the expand toggle.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs2" %}
{% endif %}

## Recurring events

Recurring events are appointments that repeat at regular intervals according to a defined recurrence rule. These events can recur daily, weekly, monthly, or yearly, and are typically indicated by a repeat marker icon at the bottom-right corner of the appointment.

### Creating a recurring event

The following example demonstrates how to create a recurring event in the Scheduler with a specific [`recurrenceRule`](../api/schedule/field#recurrencerule). In this example, an event recurs daily and ends after 5 occurrences:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs4" %}
{% endif %}

### Adding exceptions

Specific dates can be excluded from a recurrence series by adding them to the [`recurrenceException`](../api/schedule/field#recurrenceexception) field. Exception dates must be provided in ISO date-time format without hyphens (-) separating date elements.

> For example, February 22, 2018, should be represented as "20180222". The time component in UTC format requires a "Z" suffix without spaces. For instance, "07:30:00 UTC" becomes "073000Z".

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs5" %}
{% endif %}

### Editing an occurrence from a series

To edit a particular occurrence from an event series and display it on the initial Scheduler load, add the edited occurrence as a new event to the dataSource collection. Include an additional [`recurrenceID`](../api/schedule/field/recurrenceid) field that references the ID value of the parent event.


In the following example, a recurring instance appearing on January 30, 2018, is modified with alternative timings. This date is removed from the parent repeating event (running from January 28 to February 4, 2018) by populating the [`recurrenceException`](../api/schedule/field#recurrenceexception) field on the parent event with the excluded date value. The edited occurrence, created as a new event, includes a [`recurrenceID`](../api/schedule/field#recurrenceid) field that references the parent event's [`Id`](../api/schedule/field#id) value.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs6" %}
{% endif %}

### Edit only the current and following events

To edit only the current and following events in a recurring series, enable the [`editFollowingEvents`](../api/schedule/eventSettings#editfollowingevents) property within [`eventSettings`](../api/schedule/eventSettings). Add the edited occurrence as a new event to the dataSource collection with an additional [`followingID`](../api/schedule/field#followingid) field that references the ID value of the immediate parent event.

In the following example, a recurring instance appearing on January 30, 2018, and all following dates are modified with a different subject. These dates are removed from the parent repeating event (repeating from January 28 to February 4, 2018) by modifying the [`recurrenceRule`](../api/schedule/field#recurrencerule) field on the parent event with an until date value. The updated events, created as new events, include a [`followingID`](../api/schedule/field#followingid) field that references the immediate parent event's `Id` value.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs7" %}
{% endif %}

### Recurrence options and rules

Events can repeat on daily, weekly, monthly, or yearly bases using recurrence rules. The following details must be assigned to the [`recurrenceRule`](../api/schedule/field#recurrencerule) property to generate recurring instances:

- Repeat type (daily/weekly/monthly/yearly)
- Repetition frequency
- Interval duration
- Time period for rendering the appointment

Four repeat types are available:

* **Daily** - Creates recurring instances on a daily basis.
* **Weekly** - Creates recurring instances on a weekly basis for selected days.
* **Monthly** - Creates recurring instances on a monthly basis for selected months and other specified recurrence criteria.
* **Yearly** - Creates recurring instances on a yearly basis.

### Recurrence properties

 The following table describes the properties used to create recurrence appointments with their respective time periods. Valid rule strings can be referenced from [iCalendar](https://tools.ietf.org/html/rfc5545#section-3.3.10) specifications.

 > Refer to [iCalendar](https://tools.ietf.org/html/rfc5545#section-3.3.10) specifications for valid recurrence rule string formats.

| Property | Purpose | Example |
|-------|---------| --------- |
| FREQ | Maintains the repeat type (Daily, Weekly, Monthly, Yearly) value of the appointment. | FREQ=DAILY;INTERVAL=1|
| INTERVAL | Maintains the interval value of the appointments. When you create the daily appointment at an interval of 2, the appointments are rendered on the days Monday, Wednesday and Friday (Creates an appointment on all days by leaving the interval of one day gap). | FREQ=DAILY;INTERVAL=2|
| COUNT | It holds the appointment's count value. When the COUNT value is 10, then 10 instances of appointments are created in the recurrence series. | FREQ=DAILY;INTERVAL=1;COUNT=10|
| UNTIL | This property holds the end date value (in ISO format) denoting when the recurrence actually ends. | FREQ=DAILY;INTERVAL=1;UNTIL=20180530T041343Z;|
| BYDAY | It holds the day value(s), representing on which the appointments actually renders. Create the weekly appointment, and select the day(s) from the day options (Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday). When Monday is selected, the first two letters of the selected day "MO" is saved in the BYDAY property. When multiple days are selected, the values are separated by commas. | FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,WE;COUNT=10|
| BYMONTHDAY | This property is used to store the date value of the Month, while creating the Month recurrence appointment. When you create a Monthly recurrence appointment for every 3rd day of the month, then BYMONTHDAY holds the value 3 and creates the appointment on 3rd day of every month. | FREQ=MONTHLY;BYMONTHDAY=3;INTERVAL=1;COUNT=10|
| BYMONTH | This property is used to store the index value of the selected Month while creating the yearly appointments. When you create the yearly appointment on June month, the index value of June month 6 will get stored in the BYMONTH field. The appointment is created on every 6th month of a year. | FREQ=YEARLY;BYMONTHDAY=16;BYMONTH=6;INTERVAL=1;COUNT=10|
| BYSETPOS | This property is used to store the index value of the week. When you create the monthly appointment in second week of a month, the index value of the second week (2) is stored in BYSETPOS. | FREQ=MONTHLY;BYDAY=MO;BYSETPOS=2;COUNT=10|

> The default recurrence validation for appointments follows Outlook-style validation. This validation occurs during the creation, editing, dragging, dropping, or resizing of recurrence appointments, and when any single occurrence is modified.

### Daily Frequency

| Description | Example |
|-------------|---------|
| Daily recurring event that never ends | FREQ=DAILY;INTERVAL=1 |
| Daily recurring event that ends after 5 occurrences | FREQ=DAILY;INTERVAL=1;COUNT=5 |
| Daily recurring event that ends exactly on 12/12/2018 | FREQ=DAILY;INTERVAL=1;UNTIL=20181212T041343Z |
| Daily event that recurs on alternative days and repeats for 10 occurrences | FREQ=DAILY;INTERVAL=2;COUNT=10 |

### Weekly Frequency

| Description | Example |
|-------------|---------|
| Weekly recurring event that repeats on every Monday, Wednesday and Friday and never ends | FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,WE,FR |
| Repeats every week Thursday and ends after 10 occurrences | FREQ=WEEKLY;INTERVAL=1;BYDAY=TH; COUNT=10 |
| Repeats every week Monday and ends on 12/12/2018 | FREQ=WEEKLY;INTERVAL=1;BYDAY=MO; UNTIL=20181212T041343Z |
| Repeats on Monday, Wednesday and Friday of alternative weeks and ends after 10 occurrences | FREQ=WEEKLY;INTERVAL=2;BYDAY=MO,WE,FR;COUNT=10 |

### Monthly Frequency

| Description | Example |
|-------------|---------|
| Monthly recurring event that repeats on every 15th day of a month and never ends | FREQ=MONTHLY; BYMONTHDAY=15;INTERVAL=1 |
| Monthly recurring event that repeats on every 16th day of a month and ends after 10 occurrences | FREQ=MONTHLY;BYMONTHDAY=16;INTERVAL=1;COUNT=10 |
| Repeats every 17th day of a month and ends on 12/12/2018 | FREQ=MONTHLY;BYMONTHDAY=17; INTERVAL=1;UNTIL=20181212T041343Z |
| Repeats every 2nd Friday of a month and never ends | FREQ=MONTHLY;BYDAY=FR;BYSETPOS=2; INTERVAL=1 |
| Repeats every 4th Wednesday of a month and ends after 10 occurrences | FREQ=MONTHLY;BYDAY=WE; BYSETPOS=4;INTERVAL=1;COUNT=10 |
| Repeats every 4th Friday of a month and ends on 12/12/2018 | FREQ=MONTHLY;BYDAY=FR;BYSETPOS=4; INTERVAL=1;UNTIL=20181212T041343Z; |

### Yearly Frequency

| Description | Example |
|-------------|---------|
| Yearly event that repeats on every 15th day of December month and never ends | FREQ=YEARLY; BYMONTHDAY=15;BYMONTH=12;INTERVAL=1 |
| Event that repeats on every 10th day of December month and ends after 10 occurrences | FREQ=YEARLY; BYMONTHDAY=10;BYMONTH=12;INTERVAL=1;COUNT=10 |
| Repeats on every 12th day of December month and ends on 12/12/2025 | FREQ=YEARLY;BYMONTHDAY=12; BYMONTH=12;INTERVAL=1;UNTIL=20251212T041343Z |
| Repeats on every 3rd Friday of December month and never ends | FREQ=YEARLY;BYDAY=FR;BYMONTH=12; BYSETPOS=3;INTERVAL=1 |
| Repeats on every 3rd Tuesday of December month and ends after 10 occurrences | FREQ=YEARLY; BYDAY=TU;BYMONTH=12;BYSETPOS=3;INTERVAL=1;COUNT=10 |
| Repeats on every 4th Wednesday of December month and ends on 12/12/2028 | FREQ=YEARLY;BYDAY=WE; BYMONTH=12;BYSETPOS=4;INTERVAL=1;UNTIL=20281212T041343Z |

### Recurrence Validation

Built-in validation support is enabled by default for recurring appointments during creation, editing, drag and drop, and resize actions. The following validation alerts may display in the Scheduler when creating or editing recurring events:

| Validation messages | Description |
|-------|---------|
| The recurrence pattern is not valid. | This alert will raise, when the selected recurrence rule value is not a valid one. For example, when you try to select the end date value (using `Until` option) for a recurring event, which occurs before the start date, an alert will popup out saying that the chosen pattern is invalid. |
| The changes made to specific instances of this series will be cancelled and those events will match the series again. | This alert will raise, when you try to edit the whole series, whose occurrence might have been already edited. For example, If there are five occurrences and one of the occurrence is already edited. Now, when you try to edit the entire series, you will get this validation alert. |
| The duration of the event must be shorter than how frequently it occurs. Shorten the duration, or change the recurrence pattern in the recurrence event editor. | This validation will occur, if the event duration is longer than the selected frequency. For example, if you create a recurring appointment with two days duration in `Daily` frequency with no intervals set to it, you may get this alert. |
| Some months have fewer than the selected date. For these months, the occurrence will fall on the last date of the month. | When you try to create a recurring appointment on 31st of every month, where few months won't have 31 days and in this scenario, you will get this alert. |
| Two occurrences of the same event cannot occur on the same day. | This validation will occur, when you try to edit or move any single occurrence to some other date, where another occurrence of the same event is already present. |

## Event fields

The Scheduler dataSource contains event instances, where each instance includes a collection of appropriate [`fields`](../api/schedule/field). When binding remote data, these fields must be mapped to their equivalent database fields. For local JSON data, the field names defined within instances must be correctly mapped with the Scheduler event fields.

> To create an event in the Scheduler, defining `startTime` and `endTime` is sufficient. The `id` field becomes mandatory for processing CRUD actions on appropriate events.

### Built-in fields

The built-in [`fields`](../api/schedule/field) available on Scheduler event objects are as follows:

| Field name | Description |
|-------|---------|
| id | The `id` field needs to be defined as mandatory and this field usually assigns a unique ID value to each of the events.|
| subject | The `subject` field is optional, and usually assigns the summary text to each of the events.|
| startTime | The `startTime` field defines the start time of an event and it is mandatory to provide it for any of the valid event objects.|
| endTime | The `endTime` field defines the end time of an event and it is mandatory to provide the end time for any of the valid event objects.|
| startTimezone | It maps the `startTimezone` field from the dataSource and usually accepts the valid IANA timezone names. It is assumed that the value provided for this field is taken into consideration while processing the `startTime` field. When this field is not mapped with any timezone names, then the events will be processed based on the timezone assigned to the Scheduler.|
| endTimezone | It maps the `endTimezone` field from the dataSource and usually accepts the valid IANA timezone names. It is assumed that the value provided for this field is taken into consideration while processing the `endTime` field. When this field is not mapped with any timezone names, then the events will be processed based on the timezone assigned to the Scheduler.|
| location | It maps the `location` field from the dataSource and the location text value will be displayed over the events.|
| description | It maps the `description` field from the dataSource and denotes the event description which is optional.|
| isAllDay | The `isAllDay` field is mapped from the dataSource and is used to denote whether an event is created for an entire day or for specific time alone. Usually, an event with `isAllDay` field set to true will be considered as an all-day event. |
| recurrenceID | It maps the `recurrenceID` field from dataSource and usually holds the ID value of the parent recurrence event. This field is applicable only for the edited occurrence events.|
| recurrenceRule | It maps the `recurrenceRule` field from dataSource and holds the recurrence rule value in a string format. Also, it uniquely identifies whether the event belongs to a recurring type or normal ones. |
| recurrenceException | It maps the `recurrenceException` field from dataSource and is used to hold the collection of exception dates, on which the recurring occurrences needs to be excluded. The `recurrenceException` should be specified in UTC format. |
| isReadonly | It maps the `isReadonly` field from dataSource. It is mainly used to make specific appointments as readonly when set to `true`. |
| isBlock | It maps the `isBlock` field from dataSource. It is used to block the particular time ranges in the Scheduler and prevents the event creation on those time slots. |

### Binding different field names

When event instances have default mapping names, manual mapping is unnecessary. However, if the Scheduler's dataSource contains events with different field names, mapping them to their equivalent field names within the [`eventSettings`](../api/schedule/eventSettings) property becomes necessary.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs8" %}
{% endif %}

> The mapper field `id` is of string type with no additional validation options, whereas all other fields are of `Object` type with additional options available.

### Event field settings

Each Scheduler event field includes additional settings, such as options to set default values, map to appropriate dataSource fields, validate each event field, and provide label values for the event window.

| Options | Description |
| ------- | ----------- |
| default | Accepts the default value to the applicable fields (Subject, Location and Description), when no values are provided to them from dataSource. |
| name | Accepts the field name to be mapped from the dataSource fields. |
| title | Accepts the label values to be displayed for the fields of event editor. |
| validation | Defines the validation rules to be applied on the event fields within the event editor. |

In the following example, the Subject field in the event editor displays the label **Summary**. If no subject value is provided when saving an event, the appointment is saved with the default subject value **Add Summary**.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs9" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs9" %}
{% endif %}

## Adding Custom fields

In addition to default Scheduler fields, any number of custom fields can be included for appointments. The following code example demonstrates how to incorporate two custom fields, **Status** and **Priority**, within the event collection. Binding custom fields within [`eventSettings`](../api/schedule/eventSettings) is optional; however, these additional fields can be easily accessed for internal processing and from the application end.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs10" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs10" %}
{% endif %}

## Customize the order of the overlapping events

By default, the Scheduler renders overlapping events based on their start and end times. The order of overlapping events can be customized using the [`sortComparer`](../api/schedule/eventSettings#sortcomparer) property within the [`eventSettings`](../api/schedule/eventSettings) property. The following code example demonstrates how to sort appointments based on a custom field:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs11" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs11" %}
{% endif %}

## Preventing Overlapping Events

By default, the Scheduler displays overlapping events according to their start and end times. To prevent overlapping, set the [`allowOverlap`](../api/schedule#allowoverlap) property to `false`.

When this property is set to `false`, any new or updated events overlapping with existing ones will trigger an overlap alert. Overlapping events are collected in the [`overlapEvents`](../api/schedule/popupOpenEventArgs#overlapevents) property within the [`PopupOpenEventArgs`](../api/schedule/popupOpenEventArgs).

When [`allowOverlap`](../api/schedule#allowoverlap) is set to `false`, the Scheduler behaves as follows:

**Initial Load Behavior:** Upon initial loading, the Scheduler prioritizes non-overlapping events based on duration and all-day status. Events with longer durations and all-day designations receive higher priority to ensure no overlaps.

**Recurring Appointments:** If conflicts exist within a recurring appointment series during initial load, the Scheduler displays all occurrences except the conflicting instance.

**Event Modifications:** When users edit, save, or remove appointments, the Scheduler checks for potential overlaps. If a conflict is detected, the action is blocked, and a conflict alert is displayed to the user.

**Dynamic Recurrence Series Creation or Editing:** When users create or edit a recurrence series dynamically, the Scheduler prevents any occurrences from being added if a conflict is found within the series.

The following code example demonstrates how to enable the [`allowOverlap`](../api/schedule#allowoverlap) property:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs40/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs40/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs40" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs40/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs40/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs40" %}
{% endif %}

**Limitations**

The [`allowOverlap`](../api/schedule#allowoverlap) property checks for event overlaps only within the currently visible date range. Events scheduled outside the rendered date range are not included in the overlap check by default.

To check for overlaps with events outside the visible date range, leverage the [`promise`](../api/schedule/actionEventArgs#promise) field within the [`actionBegin`](../api/schedule#actionbegin) event to validate all events before proceeding. By implementing a custom validation method inside the [`actionBegin`](../api/schedule#actionbegin) event, the result (a boolean) can be assigned to the [`promise`](../api/schedule/actionEventArgs#promise) field. If the result is `true`, the action (e.g., adding or saving the event) proceeds; if `false`, the action is blocked.

Additionally, the public method [`openOverlapAlert`](../api/schedule#openoverlapalert) can be used to display an alert popup whenever an overlap occurs and the result is `false`.

The following code example demonstrates how to check for overlaps when adding an event. If an overlap is found, the event is not added, and an alert is displayed:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs41/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs41/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs41" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs41/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs41/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs41" %}
{% endif %}

## Drag and drop appointments

Appointments can be rescheduled to any time by dragging and dropping them to the desired location. To use drag-and-drop functionality, inject the `DragAndDrop` module and ensure [`allowDragAndDrop`](../api/schedule#allowdraganddrop) is set to true (the default value). In mobile mode, tap and hold an event, then drop it at the desired location.

> By default, drag-and-drop is available in all Scheduler views except `Agenda`, `Month-Agenda`, and `Year` views.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs12/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs12/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs12" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs12/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs12/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs12" %}
{% endif %}

### Drag and drop multiple appointments

Multiple appointments can be dragged and dropped by enabling the [`allowMultiDrag`](../api/schedule#allowmultidrag) property. Select multiple appointments by holding the CTRL key, then release it and begin dragging the events.

Multiple events can also be dragged from one resource to another. If all selected events belong to different resources, they will all be moved to the single resource associated with the target event.

> **Note:** Dragging and dropping multiple events is not supported on mobile devices.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs13/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs13/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs13" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs13/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs13/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs13" %}
{% endif %}

### Disable the drag action

By default, events can be dragged and dropped within any applicable Scheduler view. To disable this functionality, set the [`allowDragAndDrop`](../api/schedule#allowdraganddrop) property to `false`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs14/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs14/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs14" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs14/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs14/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs14" %}
{% endif %}

### Preventing drag and drop on specific targets

Drag actions on specific targets can be prevented by specifying the target to exclude in the [`excludeSelectors`](../api/schedule/dragEventArgs#excludeselectors) option within the [`dragStart`](../api/schedule#dragstart) event. In the following example, drag actions are prevented on the all-day row:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs15/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs15/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs15" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs15/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs15/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs15/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs15" %}
{% endif %}

### Disable scrolling on drag action

By default, when dragging an appointment to the edges (top or bottom in vertical Scheduler, or left or right in timeline Scheduler), automatic scrolling occurs. To prevent this scrolling action, set the [`scroll`](../api/schedule/dragEventArgs#scroll) value to `false` within the [`dragStart`](../api/schedule#dragstart) event arguments.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs16/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs16/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs16" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs16/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs16/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs16/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs16" %}
{% endif %}

### Controlling scroll speed while dragging an event

The scrolling speed while dragging an appointment to the Scheduler edges can be controlled within the [`dragStart`](../api/schedule#dragstart) event by setting desired values for [`scrollBy`](../api/schedule/scrollOptions#scrollby) and [`timeDelay`](../api/schedule/scrollOptions#timedelay) options. Default values are 30 minutes for `scrollBy` and 100 ms for `timeDelay`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs17/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs17/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs17/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs17" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs17/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs17/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs17/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs17" %}
{% endif %}

### Auto navigation of date ranges on dragging an event

When an event is dragged to either the left or right extreme edges of the Scheduler and held for a few seconds without dropping, auto-navigation of date ranges can be enabled. This allows the Scheduler to navigate back and forth between the current date range. By default, this action is set to `false`. To enable it, set [`navigation`](../api/schedule/dragEventArgs#navigation) to `true` within the [`dragStart`](../api/schedule#dragstart) event.

By default, the navigation delay is set to 2000 ms, determining how long a user must drag and hold appointments at the extremities. A custom delay value can be set using the [`timeDelay`](../api/schedule/scrollOptions#timedelay) option within the [`dragStart`](../api/schedule#dragstart) event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs18/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs18/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs18/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs18" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs18/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs18/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs18/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs18" %}
{% endif %}

### Setting drag time interval

By default, when dragging an appointment, it moves in 30-minute intervals. To change the dragging time interval, pass appropriate values to the [`interval`](../api/schedule/dragEventArgs#interval) option within the [`dragStart`](../api/schedule#dragstart) event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs19/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs19/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs19/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs19" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs19/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs19/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs19/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs19" %}
{% endif %}

### Drag and drop items from external source

It is possible to drag and drop unplanned items from any external source into the scheduler by manually saving the dropped items as new appointment data using the [`addEvent`](../api/schedule#addevent) method of the scheduler.

In the following example, the tree view control serves as the external source, with child nodes dragged and dropped onto the Scheduler. The [`nodeDragStop`] event of the TreeView component is utilized to create an event object and save it using the [`addEvent`](../api/schedule#addevent) method.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/external-drag-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/external-drag-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/external-drag-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/external-drag-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/external-drag-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/external-drag-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/external-drag-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/external-drag-cs1" %}
{% endif %}

### Opening the editor window on drag stop

In scenarios where opening the editor filled with data at a newly dropped location is desired, proceeding to save only when the `Save` button is clicked, and reverting changes when `Cancel` is clicked, use the [`dragStop`](../api/schedule#dragstop) event of the Scheduler.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs20/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs20/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs20/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs20" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs20/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs20/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs20/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs20" %}
{% endif %}

## Inline Appointment

The Scheduler provides inline Add/Edit support for managing appointment subjects directly. This feature enables users to quickly manage appointments without opening a separate dialog.

To add an appointment inline:

1. Single-click on any Scheduler cell or press enter on selected cells.
2. A text box appears within the clicked cell with a blinking cursor.
3. Enter the appointment subject.
4. Press enter to save the appointment.

To edit an appointment inline:

1. Single-click on an existing appointment's subject.
2. The subject becomes editable.
3. Make changes.
4. Press enter to update the appointment.

Enable or disable this feature using the [`allowInline`](../api/schedule#allowinline) property, which is set to false by default.

Important notes:
- When [`allowInline`](../api/schedule#allowinline) is enabled, [`showQuickInfo`](../api/schedule#showquickinfo) is turned off.
- The quick popup does not appear when clicking on a work cell or appointment if [`allowInline`](../api/schedule#allowinline) is set to `true`.
- In work cells, multiple cells can be selected using the keyboard, then press enter to create an appointment wrapper.
- Be aware of potential overlapping scenarios when creating inline events.

### Normal Event

For editing appointments, single-click the appointment subject. The `editable` option is enabled in the UI with cursor focus at the text end. Inline editing is available for all possible views.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs21/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs21/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs21" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs21/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs21/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs21" %}
{% endif %}

### Recurrence Event

When editing an occurrence from a recurrence series, only a `single occurrence` can be edited, not the entire series.

## Appointment Resizing

Another way to reschedule appointments is by resizing them. To use resizing functionality, inject the `Resize` module and ensure the [`allowResizing`](../api/schedule#allowresizing) property is set to true (the default value).

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs22/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs22/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs22/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs22" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs22/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs22/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs22/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs22" %}
{% endif %}

### Disable the resize action

By default, resizing events is allowed on all Scheduler views except Agenda and Month-Agenda view. To disable event resizing, set [`allowResizing`](../api/schedule#allowresizing) to `false`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs23/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs23/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs23/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs23" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs23/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs23/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs23/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs23" %}
{% endif %}

### Disable scrolling on resize action

By default, when resizing an appointment and its handler reaches the edge of the Scheduler, scrolling occurs along with event resizing. To prevent this scrolling action, set the [`scroll`](../api/schedule/resizeEventArgs#scroll) value to `false` within the [`resizeStart`](../api/schedule#resizestart) event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs24/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs24/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs24/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs24" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs24/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs24/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs24/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs24" %}
{% endif %}

### Controlling scroll speed while resizing an event

The scrolling speed when resizing an appointment to the Scheduler edges can be controlled by setting the desired value for the [`scrollBy`](../api/schedule/scrollOptions#scrollby) option within the [`resizeStart`](../api/schedule#resizestart) event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs25/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs25/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs25/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs25" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs25/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs25/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs25/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs25" %}
{% endif %}

### Setting resize time interval

By default, when resizing an appointment, it extends or shrinks at 30-minute intervals. To change this default resize interval, set appropriate values to the [`interval`](../api/schedule/resizeEventArgs#interval) option within the [`resizeStart`](../api/schedule#resizestart) event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs26/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs26/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs26/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs26" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs26/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs26/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs26/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs26" %}
{% endif %}

## Appointment customization

The Scheduler provides multiple approaches to customize the appearance of appointments. Use the most appropriate method based on requirements:

* [Customize appointments using templates](#using-template)
* [Customize appointments using using eventRendered event](#using-eventrendered-event)
* [Customize appointments using CSS classes](#using-custom-css-class)

### Using template

Add text, images, and links to customize the appearance of events. Use the [`template`](../api/schedule/eventSettings#template) option within the [`eventSettings`](../api/schedule/eventSettings) property to format and change the default appearance of events. The following example customizes the appointment's default color and time format:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-template-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-template-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-template-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-template-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-template-cs1" %}
{% endif %}

> All built-in fields mapped to appropriate field properties within [`eventSettings`](../api/schedule/eventSettings), as well as custom mapped fields from the Scheduler dataSource, can be accessed within the template code.

### Customize appointments using eventRendered event

The [`eventRendered`](https://ej2.syncfusion.com/documentation/api/schedule#eventrendered) event triggers before an appointment is rendered on the Scheduler. Use this client-side event to customize the appearance of appointments based on specific criteria before rendering them.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs27/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs27/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs27/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs27" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs27/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs27/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs27/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs27" %}
{% endif %}

### Customize appointments using CSS classes

You can also customize event appearance using the [`cssClass`](../api/schedule#cssclass) property of the Scheduler. The following example changes the background of appointments using cssClass:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs28/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs28/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs28/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs28" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs28/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs28/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs28/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs28" %}
{% endif %}

## Setting minimum height

You can set a minimal height for appointments on the Scheduler using the [`eventRendered`](../api/schedule#eventrendered) event when the start and end time duration is less than the default duration of a single slot.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs29/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs29/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs29" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs29/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs29/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs29" %}
{% endif %}

## Block Dates and Times

Block a set of dates or specific time ranges on the Scheduler by defining an appointment object within [`eventSettings`](../api/schedule/eventSettings) with the required time range and setting the [`isBlock`](../api/schedule/field#isblock) field to true. Appointments with the isBlock field set to true will prevent users from creating new appointments, dragging existing appointments, or resizing appointments within the specified time ranges defined by  [`startTime`](../api/schedule/field#starttime) and [`endTime`](../api/schedule/field#endtime) fields.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs30/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs30/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs30/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs30" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs30/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs30/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs30/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs30" %}
{% endif %}

Block appointments can also be defined to repeat on several days as shown in the following code example.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs31/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs31/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs31" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs31/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs31/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs31" %}
{% endif %}

## Readonly

Enable or disable interaction with Scheduler appointments using the [`readonly`](../api/schedule#readonly) property. When enabled, navigation between Scheduler dates and views is allowed, and appointment details can be viewed in the quick info window. However, CRUD actions cannot be performed on the Scheduler. By default, this property is set to `false`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs32/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs32/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs32/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs32" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs32/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs32/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs32/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs32" %}
{% endif %}

## Make specific events readonly

In some scenarios, CRUD actions on specific appointments may need to be restricted based on certain conditions. For example, past appointments can be made readonly. This can be achieved by setting the [`isReadonly`](../api/schedule/field#isreadonly) field of readonly appointments to `true`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs33/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs33/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs33/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs33" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs33/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs33/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs33/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs33" %}
{% endif %}

> By default, the event editor is prevented from opening on readonly events when the [`isReadonly`](../api/schedule/field#isreadonly) field is set to `true`.

## Restricting appointment creation on specific time slots

Restrict users from creating and updating more than one appointment on specific time slots using the Scheduler's public method [`isSlotAvailable`](../api/schedule#isslotavailable). CRUD actions also be disabled on occupied time slots using the Scheduler's public method [`isSlotAvailable`](../api/schedule#isslotavailable).

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs1" %}
{% endif %}

> The **isSlotAvailable** method focuses on verifies appointments within the current view's date range. It does not evaluate availability for recurrence occurrences outside this particular date range.

## Differentiate the past time appointments

Differentiate the appearance of appointments based on specific criteria, such as displaying past hour appointments with different colors on the Scheduler, using the [`eventRendered`](../api/schedule#eventrendered) event. This event triggers before an appointment renders on the Scheduler.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs34/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs34/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs34/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs34" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs34/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs34/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs34/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs34" %}
{% endif %}

## Appointments occupying entire cell

The Scheduler allows appointments to occupy the full height of the cell without its header part by setting `true` for the [`enableMaxHeight`](../api/schedule/eventSettings#enablemaxheight) property.

When multiple appointments are available in the same cell, an indicator can be displayed by setting `true` to the [`enableIndicator`](../api/schedule/eventSettings#enableindicator) property. Its default value is `false`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs35/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs35/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs35/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs35" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs35/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs35/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs35/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs35" %}
{% endif %}

## Limiting maximum number of events displayed

In the Scheduler, you can limit the number of concurrent events displayed in each time slot to improve the quality of the presentation and prevent visual overcrowding. This can be accomplished using the following properties based on the view type:

### Limiting events in month and timeline views

In the Scheduler, the default behavior is to display concurrent events based on cell height, with each new event represented as 
`+n more` characters. However, you may want to improve the quality of the presentation by limiting the number of concurrent events. This can be accomplished by using the [maxEventsPerRow](https://ej2.syncfusion.com/documentation/api/schedule/views#maxeventsperrow) property, which is defaulted to the [views](https://ej2.syncfusion.com/documentation/api/schedule/views) property.

The [maxEventsPerRow](https://ej2.syncfusion.com/documentation/api/schedule/views#maxeventsperrow) property is specific to the month, timeline month, and timeline year views, allowing you to view events visually in these rows. Below is a code example that demonstrates how to use this constraint and the events displayed in a cell have been created:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/max-events-per-row-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/max-events-per-row-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/max-events-per-row-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/max-events-per-row-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/max-events-per-row-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/max-events-per-row-cs1" %}
{% endif %}

> The property [maxEventsPerRow](https://ej2.syncfusion.com/documentation/api/schedule/views#maxeventsperrow) will be applicable only when [rowAutoHeight](https://ej2.syncfusion.com/documentation/api/schedule#rowautoheight) feature is disabled in the Scheduler.

### Limiting events in vertical views

The `maxEventStack` property on the [views](https://ej2.syncfusion.com/documentation/api/schedule/views) allows you to limit the number of overlapping events displayed in each time slot. This feature prevents visual overcrowding when multiple events overlap in the same time slot. When the number of overlapping events exceeds the specified limit, a `+N` indicator appears, indicating how many additional events exist. Users can click this indicator to view all remaining events in a popup window. By default, the Scheduler shows all overlapping events without any restrictions. The default value of `maxEventStack` is `0`.

Below is a code example that demonstrates how to use this constraint:

```ts
let eventsData: Record<string, any>[] = [
    { Id: 1, Subject: "Board Meeting", StartTime: new Date(2026, 5, 15, 9, 30, 0), EndTime: new Date(2026, 5, 15, 11, 0, 0) },
    { Id: 2, Subject: "Annual Conference", StartTime: new Date(2026, 5, 15, 10, 0, 0), EndTime: new Date(2026, 5, 15, 11, 0, 0) },
    { Id: 3, Subject: "Tech Symposium", StartTime: new Date(2026, 5, 15, 10, 30, 0), EndTime: new Date(2026, 5, 15, 11, 30, 0) },
    { Id: 4, Subject: "Client Meeting", StartTime: new Date(2026, 5, 15, 12, 0, 0), EndTime: new Date(2026, 5, 15, 14, 0, 0) },
    { Id: 5, Subject: "Project Review", StartTime: new Date(2026, 5, 15, 13, 0, 0), EndTime: new Date(2026, 5, 15, 15, 0, 0) }
];

Schedule.Inject(Day, Week, WorkWeek);
let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2026, 5, 15),
    currentView: 'Week',
    eventSettings: {
        dataSource: eventsData
    },
    views: [
        { option: 'Day', maxEventStack: 2 },
        { option: 'Week', maxEventStack: 2 },
        { option: 'WorkWeek', maxEventStack: 2 }
    ]
});
scheduleObj.appendTo('#Schedule');
```

**How it works:** In this example, `maxEventStack` is set to `2` for all three views. When you have three or more overlapping events in the same time slot:

* The Scheduler displays only the first two events
* A "+N" indicator appears to show how many additional events exist (for example, "+1" if there are 3 total events)
* Users can click the indicator to open a popup displaying all remaining events for that time slot

![Scheduler with MaxEventStack](./images/scheduler-max-event-stack.png)

> The `maxEventStack` property is applicable only with **Day**, **Week**, and **WorkWeek** views when the [`timeScale`](https://ej2.syncfusion.com/documentation/api/schedule#timescale) option is enabled.

## Display tooltip for appointments

Tooltips provide additional information about appointments in a formatted style. Here's how to work with tooltips:

### Show or hide built-in tooltip

Display tooltips for appointments by setting `true` to the [`enableTooltip`](../api/schedule/eventSettings#enabletooltip) option within the [`eventSettings`](../api/schedule/eventSettings) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs36/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs36/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs36/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs36" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs36/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs36/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-cs36/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-cs36" %}
{% endif %}

### Customize tooltip content using templates

Customize the content and appearance of tooltips using templates. To implement this:

1. Enable the default tooltip.
2. Use the [`tooltipTemplate`](../api/schedule/eventSettings#tooltiptemplate) option within the [`eventSettings`](../api/schedule/eventSettings) property to define a custom template.

The following example demonstrates tooltip customization:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/tooltip-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/tooltip-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/tooltip-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/tooltip-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/tooltip-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/tooltip-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/tooltip-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/tooltip-cs1" %}
{% endif %}

> Note: All field names mapped from the Scheduler dataSource can be accessed within the template, including `subject`, `description`, `location`, `startTime`, and `endTime`.

### Prevent tooltips for specific appointments

Selectively control when tooltips appear based on appointment data or other custom conditions using the [`tooltipOpen`](https://ej2.syncfusion.com/documentation/api/schedule/eventSettingsModel#tooltipOpen) event.

To prevent a tooltip from appearing for certain events, set the `cancel` property to `true` within the `tooltipOpen` event. This ensures that tooltips are only displayed for the relevant appointments, improving user experience by minimizing unnecessary distractions.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/before-tooltip-open/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/before-tooltip-open/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/before-tooltip-open/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/before-tooltip-open" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/before-tooltip-open/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/before-tooltip-open/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/before-tooltip-open/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/before-tooltip-open" %}
{% endif %}

## Appointment filtering

Filter appointments based on specific criteria using the [`query`](../api/schedule/eventSettings#query) option in [`eventSettings`](../api/schedule/eventSettings). 

The following example demonstrates filtering to render only selected appointments:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-filter-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-filter-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-filter-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-filter-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-filter-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-filter-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/event-filter-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/event-filter-cs1" %}
{% endif %}

## Appointment selection

Select appointments using mouse or keyboard actions. Selected appointments are visually distinguished with a box shadow effect.

| Action | Description |
|-------|---------|
| Mouse click or Single tap on appointments | Selects a single appointment. |
| Ctrl + [Mouse click] or Ctrl + [Single tap] on appointments | Selects multiple appointments.|

## Deleting multiple appointments

After selecting multiple appointments, you can delete them all at once by pressing the `delete` key. 

Note: When deleting multiple selected occurrences of a recurring event series, only the selected occurrences will be deleted, not the entire series.

## Retrieve appointment details from UI elements

Access information about an appointment's fields directly from its UI element using the public method [`getEventDetails`](../api/schedule#geteventdetails). Pass the appointment element as an argument to this method.

The following example displays the subject of a clicked appointment:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/events-public-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/events-public-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/events-public-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/events-public-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/events-public-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/events-public-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/events-public-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/events-public-cs1" %}
{% endif %}

## Get current view appointments

To retrieve the appointments visible in the current Scheduler view using the [`getCurrentViewEvents`](../api/schedule#getcurrentviewevents) public method. In the following example, the count of current view appointment collection rendered has been traced in [`dataBound`](../api/schedule#databound) event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/events-public-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/events-public-cs2/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/events-public-cs2/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/events-public-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/events-public-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/events-public-cs2/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/events-public-cs2/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/events-public-cs2" %}
{% endif %}

## Get all appointments

To access all appointments rendered on the Scheduler, regardless of the current view, use the [`getEvents`](../api/schedule#getevents) public method. In the following example, the count of entire appointment collection rendered on the Scheduler has been traced in [`dataBound`](../api/schedule#databound) event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/events-public-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/events-public-cs3/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/events-public-cs3/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/events-public-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/events-public-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/events-public-cs3/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/events-public-cs3/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/events-public-cs3" %}
{% endif %}

## Refresh appointments

Update only the appointments without refreshing the entire Scheduler using the  [`refreshEvents`](../api/schedule#refreshevents) public method.

```ts
scheduleObj.refreshEvents();
```

This method is useful when changes have been made to the appointment data and those changes need to be reflected in the UI without a full Scheduler refresh.

> You can refer to our [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/tailwind3/schedule/overview.html) to knows how to present and manipulate data.
