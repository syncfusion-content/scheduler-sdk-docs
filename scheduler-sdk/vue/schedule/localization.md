---
layout: post
title: Localization in Vue Scheduler | Syncfusion
description: Learn how to localize the Syncfusion Vue Scheduler to adapt to different languages, cultures, time formats, and RTL mode.
control: Scheduler
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Globalization and Localization in Vue Scheduler

The Vue Schedule component supports globalization and localization features that allow it to adapt to different cultures, languages, date formats, and time formats. These capabilities enable applications to deliver a consistent and region‑specific scheduling experience for users across the globe.

You can adapt the Scheduler to various languages by parsing and formatting dates or numbers using [`Internationalization`](https://ej2.syncfusion.com/documentation/common/internationalization), and by adding culture-specific customization and text translation using [`Localization`](https://ej2.syncfusion.com/documentation/common/localization).

## Globalization

The Internationalization library provides support for formatting and parsing the number, date, and time by using the official [`Unicode CLDR`](https://cldr.unicode.org) JSON data and also provides the `loadCldr` method to load the culture specific CLDR JSON data.

By default, Scheduler is set to follow the English culture (`en-US`). If you want to use a culture other than English, follow the steps below.

* Install the `ej2-cldr-data` package by running the following command:

  ```
  npm install @syncfusion/ej2-cldr-data
  ```

Once the package is installed, you can find the culture specific JSON data under the location `\node_modules\@syncfusion\ej2-cldr-data`.

* Import the required culture files from the installed location into the `App.vue` file as shown in the following code example.

    1. numberingSystems.json
    2. ca-Gregorian.json
    3. numbers.json
    4. timeZoneNames.json

     ```ts
     // import loadCldr from ej2-base
     import { loadCldr } from '@syncfusion/ej2-base';

    import { loadCldr} from '@syncfusion/ej2-base';
    import frNumberData from '@syncfusion/ej2-cldr-data/main/fr-CH/numbers.json';
    import frtimeZoneData from '@syncfusion/ej2-cldr-data/main/fr-CH/timeZoneNames.json';
    import frGregorian from '@syncfusion/ej2-cldr-data/main/fr-CH/ca-gregorian.json';
    import frNumberingSystem from '@syncfusion/ej2-cldr-data/supplemental/numberingSystems.json';

    loadCldr(frNumberData, frtimeZoneData, frGregorian, frNumberingSystem);
  ```

* Set the culture to Scheduler by using the `locale` property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/localization-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/localization-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/localization-cs1" %}

> Refer [here](https://ej2.syncfusion.com/vue/documentation/common/internationalization) for more information about globalization.

## Localizing the static Scheduler text

The [`Localization`](https://ej2.syncfusion.com/documentation/common/localization) library allows you to display all the static text, date content, and time mode of the Scheduler in the localized language. To achieve this, set the `locale` property of Scheduler and define the translation text for the static words through the `load` method.

For example, the following code example lets you define the French translation words for all static words used in Scheduler. You can access the static text for all cultures [here](https://github.com/syncfusion/ej2-locale).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/localization-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/localization-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/localization-cs2" %}

The localized words for static text used in Scheduler and Recurrence Editor can be referred from the following code.

```ts
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

Scheduler can be used with all valid date formats, and by default it follows the universal date format `MM/dd/yyyy`. If the [`dateFormat`](https://ej2.syncfusion.com/vue/documentation/api/schedule#dateformat) property is not specified, it uses the locale assigned to the Scheduler. Because the default locale is `en-US`, this results in the `MM/dd/yyyy` pattern.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/localization-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/localization-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/localization-cs3" %}

## Setting the Time Format

Time format is a way of representing time values in different string formats in the Scheduler. By default, the Scheduler time mode can be either 12-hour or 24-hour format, depending on the `locale` set for the Scheduler. Since the default `locale` value is `en-US`, the time mode is automatically set to 12-hour format. You can also customize the format by using the [`timeFormat`](https://ej2.syncfusion.com/vue/documentation/api/schedule#timeformat) property. To know more about time format standards, refer to the [Date and Time Format](https://ej2.syncfusion.com/vue/documentation/common/internationalization#custom-formats) section.

The following example demonstrates the Scheduler component in 24 hours format.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/localization-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/localization-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/localization-cs4" %}

> Note: The [`timeFormat`](https://ej2.syncfusion.com/vue/documentation/api/schedule#timeformat) property accepts only valid time formats.

## Displaying Scheduler in RTL mode

The Scheduler layout and behavior can be changed according to RTL (Right to Left) conventions by setting [`enableRtl`](../api/schedule#enablertl) to `true`. By doing so, the Scheduler displays its layout from right to left. Its default value is `false`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/localization-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/localization-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/localization-cs5" %}

> Visit the [Vue Scheduler](https://www.syncfusion.com/vue-components/vue-scheduler) feature tour page for a complete overview. Explore live examples at [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/tailwind3/schedule/overview.html) to learn how to present and manipulate data.

## See Also

* [How to change first day of the week in the Scheduler](./working-days#setting-start-day-of-the-week)