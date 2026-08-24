---
layout: post
title: Exporting in JavaScript Scheduler | Syncfusion
description: Learn how to export and import events in the Syncfusion JavaScript Scheduler to Excel and ICS files, and print appointments with custom options.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Exporting in JavaScript Scheduler

The Scheduler supports exporting appointments to Excel (.xlsx or .csv) and ICS files on the client. This topic explains how to implement exporting and importing features.

## Excel Exporting

Use the [`exportToExcel`](https://ej2.syncfusion.com/documentation/api/schedule#exporttoexcel) method to export Scheduler events to an Excel file. By default, it exports the fields specified in the Scheduler's [`eventSettings`](https://ej2.syncfusion.com/documentation/api/schedule/eventSettings).

> Before using the Excel exporting functionality, you need to import and inject the `ExcelExport` module from the `@syncfusion/ej2-schedule` package using the `Inject` method of Scheduler.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/excel-export-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/excel-export-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/excel-export-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/excel-export-cs1" %}

### Exporting with custom fields

By default, Scheduler exports all default event fields mapped through the `eventSettings` property. To limit the number of fields in the exported Excel file, you can export only custom fields of the event data. Define the required `fields` through the [`eventSettings`](https://ej2.syncfusion.com/documentation/api/schedule/eventSettings) interface and pass it as an argument to the [`exportToExcel`](https://ej2.syncfusion.com/documentation/api/schedule#exporttoexcel) method. For example: `['Id', 'Subject', 'StartTime', 'EndTime', 'Location']`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/excel-export-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/excel-export-cs2/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/excel-export-cs2/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/excel-export-cs2" %}

### Exporting individual occurrences of a recurring series

By default, the Scheduler exports recurring events as a single record by exporting only the parent recurrence into the Excel file. To export each individual occurrence of a recurring series as separate records, set the [`includeOccurrences`](https://ej2.syncfusion.com/documentation/api/schedule/exportOptions#includeoccurrences) option to `true` in the [`ExportOptions`](https://ej2.syncfusion.com/documentation/api/schedule/exportOptions) and pass it to [`exportToExcel`](https://ej2.syncfusion.com/documentation/api/schedule#exporttoexcel). The default value for `includeOccurrences` is `false`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/excel-export-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/excel-export-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/excel-export-cs3" %}

### Exporting custom event data

By default, the entire event collection bound to the Scheduler is exported as an Excel file. To export only specific events or a custom event collection, pass the custom data collection as a parameter to the [`exportToExcel`](https://ej2.syncfusion.com/documentation/api/schedule#exporttoexcel) method through the [`customData`](https://ej2.syncfusion.com/documentation/api/schedule/exportOptions#customdata) option of the [`ExportOptions`](https://ej2.syncfusion.com/documentation/api/schedule/exportOptions) interface.

> By default, the event data is taken from the Scheduler dataSource.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/excel-export-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/excel-export-cs4/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/excel-export-cs4/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/excel-export-cs4" %}

### Customizing column header with custom fields exporting

To customize the header of custom fields during export, use the [`fieldsInfo`](https://ej2.syncfusion.com/documentation/api/schedule/exportOptions#fieldsinfo) option through the [`ExportFieldInfo`](https://ej2.syncfusion.com/documentation/api/schedule/exportFieldInfo) interface and pass it as an argument to the [`exportToExcel`](https://ej2.syncfusion.com/documentation/api/schedule#exporttoexcel) method.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/excel-export-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/excel-export-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/excel-export-cs5" %}

### Export with custom file name

By default, the Scheduler downloads the exported Excel file with the name `Schedule.xlsx`. To export the Excel file with a custom file name, define the desired `fileName` through the [`ExportOptions`](https://ej2.syncfusion.com/documentation/api/schedule/exportOptions) interface and pass it as an argument to the [`exportToExcel`](https://ej2.syncfusion.com/documentation/api/schedule#exporttoexcel) method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/excel-export-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/excel-export-cs6/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/excel-export-cs6/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/excel-export-cs6" %}

### Excel file formats

By default, the Scheduler exports event data to an Excel file in the `.xlsx` format. You can also export the Scheduler data in either `.xlsx` or `.csv` formats by defining the `exportType` option as either `csv` or `xlsx` through the [`ExportOptions`](https://ej2.syncfusion.com/documentation/api/schedule/exportOptions) interface. The default `exportType` is `xlsx`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/excel-export-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/excel-export-cs7/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/excel-export-cs7/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/excel-export-cs7" %}

### Custom separator in CSV

The Scheduler exports the event data to CSV format with `,` as separator. You can change separator by setting [separator](../api/schedule/exportOptions#separator) property in [ExportOptions](../api/schedule/exportOptions#exporttype).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/excel-export-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/excel-export-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/excel-export-cs8" %}

### How to customize the Excel sheet before exporting

Use the [`excelExport`](https://ej2.syncfusion.com/documentation/api/schedule#excelExport) event to customize the exported workbook and formatting before export.

With the `excelExport` event you can:

- **Adjust the formatting:** Apply styles such as font, size, color, and cell formatting.
- **Customize headers and footers:** Modify header and footer content for the exported sheet.
- **Cancel the export:** Cancel the export by setting the `cancel` property to `true`.

Here’s an example of adding a custom header and footer to an Excel sheet using the `excelExport` event.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/excel-export-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/excel-export-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/excel-export-cs9" %}

## Exporting calendar events as ICS file

You can export Scheduler events to a calendar (.ics) file format, which can be opened in other default calendars such as Google or Outlook. To export Scheduler events to an ICS file, first import the `ICalendarExport` module from the `@syncfusion/ej2-schedule` package and then inject it using the `Schedule.Inject(ICalendarExport)` method.

The following code example shows how the Scheduler events are exported to a calendar (.ics) file by making use of the [`exportToICalendar`](https://ej2.syncfusion.com/documentation/api/schedule#exporttoicalendar) public method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/calendar-export-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/calendar-export-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/calendar-export-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/calendar-export-cs1" %}

### Exporting calendar with custom file name

By default, the calendar is exported with a file name `Calendar.ics`. To change this file name on export, pass the custom string value as `fileName` to the method argument so as to get the file downloaded with this provided name.

The following example downloads the iCal file with a name `ScheduleEvents.ics`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/calendar-export-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/calendar-export-cs2/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/calendar-export-cs2/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/calendar-export-cs2" %}

## Import events from other calendars

Events from external calendars (ICS files) can be imported into Scheduler using the [`importICalendar`](https://ej2.syncfusion.com/documentation/api/schedule#importicalendar) method. This method accepts the `blob object` of an .ics file to be imported as a mandatory argument.

> To import an ICS file containing events into Scheduler, first import the `ICalendarImport` module from the `@syncfusion/ej2-schedule` package and then inject it using the `Schedule.Inject(ICalendarImport)` method.

The following example shows how to import an ICS file into Scheduler, using the [`importICalendar`](https://ej2.syncfusion.com/documentation/api/schedule#importicalendar) method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/calendar-import-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/calendar-import-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/calendar-import-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/calendar-import-cs1" %}

## How to print the Scheduler element

Use the `print` client-side method to print the Scheduler element. The method can be used without options or with a set of print options.

To print the Scheduler, import the `Print` module from `@syncfusion/ej2-schedule` and inject it using `Schedule.Inject(Print)`.

### Using print method without options

Use the [`print`](https://ej2.syncfusion.com/documentation/api/schedule#print) method without options to print the current view. The following example shows how to print the Scheduler using `print` without options.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/print-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/print-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/print-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/print-cs1" %}

### Using a print method with options

You can print the Scheduler using the [`print`](https://ej2.syncfusion.com/documentation/api/schedule#print) method by passing print options. The following example shows how to print the Scheduler with options.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/print-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/print-cs2/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/print-cs2/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/print-cs2" %}

### How to customize the print layout

The [`beforePrint`](https://ej2.syncfusion.com/documentation/api/schedule#beforePrint) event lets you customize the print layout without altering the Scheduler's data. It provides the HTML element used for printing and lets you cancel the print by setting `cancel` to `true`.

Key customization examples:

- **Custom header and footer:** Add header/footer content to the print layout.
- **Control print output:** Fine-tune which elements appear in the printed output.

Here’s an example of adding a custom header and footer to the print layout using `beforePrint`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/before-print/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/before-print/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/before-print/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/before-print" %}

> Refer to our [JavaScript Scheduler](https://www.syncfusion.com/scheduler-sdk/javascript-scheduler) feature tour page for comprehensive feature demonstrations. You can also explore the [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/tailwind3/schedule/overview.html) to learn how to present and manipulate data.
