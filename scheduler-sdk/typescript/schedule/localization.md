---
layout: post
title: Localization in TypeScript Scheduler control | Syncfusion
description: Learn about localization, globalization, date/time formatting, and RTL mode in the Syncfusion TypeScript Scheduler control (Essential JS 2) with TypeScript.
platform: scheduler-sdk
control: Localization 
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Localization in TypeScript Scheduler control

The Scheduler supports different date-time formats and cultures, enabling it to function globally and meet the diverse needs of various regions.

You can adapt the Scheduler to different languages by parsing and formatting dates and numbers ([`Internationalization`](https://ej2.syncfusion.com/documentation/common/internationalization)), and by adding culture-specific customization and translation for text ([`Localization`](https://ej2.syncfusion.com/documentation/common/localization)).

## Globalization

The Internationalization library provides support for formatting and parsing numbers, dates, and times using official [`Unicode CLDR`](http://cldr.unicode.org/) JSON data. It also provides the `loadCldr` method to load culture-specific CLDR JSON data.

By default, the Scheduler follows English culture ('en-US'). To use a different culture, follow these steps:

* Install the `ej2-cldr-data` package using the Syncfusion<sup style="font-size:70%">&reg;</sup> npm package with the following command:

  ```
  npm install @syncfusion/ej2-cldr-data
  ```

Once installed, you can find culture-specific JSON data under `\node_modules\@syncfusion\ej2-cldr-data`.

* Import the required culture files from the installed location into your `app.ts` file:

    1. numberingSystems.json
    2. ca-gregorian.json
    3. numbers.json
    4. timeZoneNames.json

```typescript
//import the loadCldr from ej2-base
import { loadCldr } from '@syncfusion/ej2-base';
import frNumberData from '@syncfusion/ej2-cldr-data/main/fr-CH/numbers.json';
import frtimeZoneData from '@syncfusion/ej2-cldr-data/main/fr-CH/timeZoneNames.json';
import frGregorian from '@syncfusion/ej2-cldr-data/main/fr-CH/ca-gregorian.json';
import frNumberingSystem from '@syncfusion/ej2-cldr-data/supplemental/numberingSystems.json';

loadCldr(frNumberData, frtimeZoneData, frGregorian, frNumberingSystem);
```

* Set the culture for the Scheduler using the `locale` property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/localization-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/localization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/localization-cs1" %}

> Refer to the [common internationalization documentation](https://ej2.syncfusion.com/documentation/common/internationalization) for additional information about globalization.

## Localizing static Scheduler text

The [`Localization`](https://ej2.syncfusion.com/documentation/common/localization) library allows you to display all static text, date content, and time mode of the Scheduler in a localized language. To achieve this, set the `locale` property of the Scheduler and define translation text for static words through the `load` method.

For example, the following code defines French translations for all static words used in the Scheduler:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/localization-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/localization-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/localization-cs2" %}

The localized words for static text used in the Scheduler and Recurrence Editor can be found in the following code. Access static text for all cultures from the [`Syncfusion locale repository`](https://github.com/syncfusion/ej2-locale).

```typescript
L10n.load({
    "en": {
        "schedule": {
            "day": "Day",
            "week": "Week",
            "workWeek": "Work Week",
            "month": "Month",
            "year": "Year",
            "agenda": "Agenda",
            "weekAgenda": "Week Agenda",
            "workWeekAgenda": "Work Week Agenda",
            "monthAgenda": "Month Agenda",
            "today": "Today",
            "noEvents": "No events",
            "emptyContainer": "There are no events scheduled on this day.",
            "allDay": "All day",
            "start": "Start",
            "end": "End",
            "more": "more",
            "close": "Close",
            "cancel": "Cancel",
            "noTitle": "(No Title)",
            "delete": "Delete",
            "deleteEvent": "Delete Event",
            "deleteMultipleEvent": "Delete Multiple Events",
            "selectedItems": "Items selected",
            "deleteSeries": "Delete Series",
            "edit": "Edit",
            "editSeries": "Edit Series",
            "editEvent": "Edit Event",
            "createEvent": "Create",
            "subject": "Subject",
            "addTitle": "Add title",
            "moreDetails": "More Details",
            "moreEvents": "More Events",
            "save": "Save",
            "editContent": "Do you want to edit only this event or entire series?",
            "deleteRecurrenceContent": "Do you want to delete only this event or entire series?",
            "deleteContent": "Are you sure you want to delete this event?",
            "deleteMultipleContent": "Are you sure you want to delete the selected events?",
            "newEvent": "New Event",
            "title": "Title",
            "location": "Location",
            "description": "Description",
            "timezone": "Timezone",
            "startTimezone": "Start Timezone",
            "endTimezone": "End Timezone",
            "repeat": "Repeat",
            "saveButton": "Save",
            "cancelButton": "Cancel",
            "deleteButton": "Delete",
            "recurrence": "Recurrence",
            "wrongPattern": "The recurrence pattern is not valid.",
            "seriesChangeAlert": "The changes made to specific instances of this series will be cancelled and those events will match the series again.",
            "createError": "The duration of the event must be shorter than how frequently it occurs. Shorten the duration, or change the recurrence pattern in the recurrence event editor.",
            "recurrenceDateValidation": "Some months have fewer than the selected date. For these months, the occurrence will fall on the last date of the month.",
            "sameDayAlert": "Two occurrences of the same event cannot occur on the same day.",
            "occurenceAlert": "Cannot reschedule an occurrence of the recurring appointment if it skips over a later occurrence of the same appointment.",
            "editRecurrence": "Edit Recurrence",
            "repeats": "Repeats",
            "alert": "Alert",
            "startEndError": "The selected end date occurs before the start date.",
            "invalidDateError": "The entered date value is invalid.",
            "blockAlert": "Events cannot be scheduled within the blocked time range.",
            "ok": "Ok",
            "yes": "Yes",
            "no": "No",
            "occurrence": "Occurrence",
            "series": "Series",
            "previous": "Previous",
            "next": "Next",
            "timelineDay": "Timeline Day",
            "timelineWeek": "Timeline Week",
            "timelineWorkWeek": "Timeline Work Week",
            "timelineMonth": "Timeline Month",
            "expandAllDaySection": "Expand",
            "collapseAllDaySection": "Collapse",
            "timelineYear": "Timeline Year",
            "editFollowingEvent": "Following Events",
            "deleteTitle": "Delete Event",
            "editTitle": "Edit Event",
            "beginFrom": "Begin From",
            "endAt": "End At",
            "searchTimezone": "Search Timezone",
            "noRecords": "No records found",
            "of": "of"
        },
        "recurrenceeditor": {
            "none": "None",
            "daily": "Daily",
            "weekly": "Weekly",
            "monthly": "Monthly",
            "month": "Month",
            "yearly": "Yearly",
            "never": "Never",
            "until": "Until",
            "count": "Count",
            "first": "First",
            "second": "Second",
            "third": "Third",
            "fourth": "Fourth",
            "last": "Last",
            "repeat": "Repeat",
            "repeatEvery": "Repeat Every",
            "on": "Repeat On",
            "end": "End",
            "onDay": "Day",
            "days": "Day(s)",
            "weeks": "Week(s)",
            "months": "Month(s)",
            "years": "Year(s)",
            "every": "every",
            "summaryTimes": "time(s)",
            "summaryOn": "on",
            "summaryUntil": "until",
            "summaryRepeat": "Repeats",
            "summaryDay": "day(s)",
            "summaryWeek": "week(s)",
            "summaryMonth": "month(s)",
            "summaryYear": "year(s)"
        }
    }
});
```

## Setting date format

The Scheduler supports all valid date formats and uses the universal format "MM/dd/yyyy" by default. If the [`dateFormat`](https://ej2.syncfusion.com/documentation/api/schedule#dateformat) property is not specified, the Scheduler will use the format based on the assigned locale. Since the default locale is "en-US", it follows the "MM/dd/yyyy" pattern automatically.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/localization-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/localization-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/localization-cs3" %}

## Setting time format

Time formats control how time values are displayed as strings in the Scheduler. By default, the Scheduler's time mode is either 12-hour or 24-hour format based on the [`locale`](https://ej2.syncfusion.com/documentation/api/schedule#locale) setting. Since the default locale value is "en-US", the time mode is automatically set to 12-hour format. You can customize this using the [`timeFormat`](https://ej2.syncfusion.com/documentation/api/schedule#timeformat) property. For more information about time format standards, refer to the [`Date and Time Format`](https://ej2.syncfusion.com/documentation/common/internationalization#custom-formats) section.

The following example demonstrates the Scheduler control in 24-hour format:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/localization-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/localization-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/localization-cs4" %}

> Note: The `timeFormat` property only accepts valid time format strings.

## Displaying Scheduler in RTL mode

The Scheduler layout and behavior can be changed to follow RTL (Right-to-Left) conventions by setting [`enableRtl`](https://ej2.syncfusion.com/documentation/api/schedule#enablertl) to `true`. This displays the Scheduler layout from right to left. The default value is `false`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/localization-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/localization-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/localization-cs5" %}

> Refer to the [JavaScript Scheduler feature tour](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) for an overview of capabilities, and explore the [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/material/schedule/overview.html) to see how to present and manipulate data.

## See Also

* [How to change first day of the week in the Scheduler](./working-days#setting-start-day-of-the-week)