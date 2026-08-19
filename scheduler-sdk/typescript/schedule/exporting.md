---
layout: post
title: Exporting in TypeScript Scheduler | Syncfusion
description: Learn how to export and import events in the Syncfusion TypeScript Scheduler to Excel and ICS files, and print appointments with custom options.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Exporting in TypeScript Scheduler

Scheduler supports exporting appointments to either `Excel` or `ICS` files on the client side. It provides client-side methods to export appointment data in Excel or iCal format. Let's explore how to implement exporting functionality in Scheduler.

## Excel Exporting

Use the [`exportToExcel`](https://ej2.syncfusion.com/documentation/api/schedule#exporttoexcel) client-side method to export all Scheduler events to an Excel file. By default, it exports the fields mapped through the [`eventSettings`](https://ej2.syncfusion.com/documentation/api/schedule/eventSettings) property.

> To use Excel export, import and inject the `ExcelExport` module from the `@syncfusion/ej2-schedule` package using the `Schedule.Inject` method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs1" %}
{% endif %}

### Exporting with custom fields

By default, Scheduler exports all default event fields mapped through the `eventSettings` property. To limit the number of fields in the exported Excel file, you can export only custom fields of the event data. Define the required `fields` through the [`eventSettings`](https://ej2.syncfusion.com/documentation/api/schedule/eventSettings) interface and pass it as an argument to the [`exportToExcel`](https://ej2.syncfusion.com/documentation/api/schedule#exporttoexcel) method. For example: `['Id', 'Subject', 'StartTime', 'EndTime', 'Location']`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs2/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs2/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs2/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs2/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs2" %}
{% endif %}

### Exporting individual occurrences of a recurring series

By default, the Scheduler exports recurring events as a single data by exporting only its parent record into the excel file. If you want to export each individual occurrences of a recurring series appointment as separate records in an Excel file, define the [`includeOccurrences`](https://ej2.syncfusion.com/documentation/api/schedule/exportOptions#includeoccurrences) option as `true` through the [`ExportOptions`](https://ej2.syncfusion.com/documentation/api/schedule/exportOptions) interface and pass it as argument to the [`exportToExcel`](https://ej2.syncfusion.com/documentation/api/schedule#exporttoexcel) method. By default, the [`includeOccurrences`](https://ej2.syncfusion.com/documentation/api/schedule/exportOptions#includeoccurrences) option is set to `false`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs3" %}
{% endif %}

### Exporting custom event data

By default, the entire event collection bound to the Scheduler is exported as an Excel file. To export only specific events or a custom event collection, pass the custom data collection using the [`customData`](https://ej2.syncfusion.com/documentation/api/schedule/exportOptions#customdata) option of the [`ExportOptions`](https://ej2.syncfusion.com/documentation/api/schedule/exportOptions) interface to the [`exportToExcel`](https://ej2.syncfusion.com/documentation/api/schedule/index-default#exporttoexcel) method.

> By default, event data is taken from the Scheduler dataSource.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs4/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs4/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs4/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs4/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs4" %}
{% endif %}

### Customizing column header with custom fields exporting

To customize the header of custom fields during export, use the [`fieldsInfo`](https://ej2.syncfusion.com/documentation/api/schedule/exportOptions#fieldsinfo) option through the [`ExportFieldInfo`](https://ej2.syncfusion.com/documentation/api/schedule/exportFieldInfo) interface and pass it as an argument to the [`exportToExcel`](https://ej2.syncfusion.com/documentation/api/schedule#exporttoexcel) method.


{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs5" %}
{% endif %}

### Export with custom file name

By default, the Scheduler downloads the exported Excel file with the name `Schedule.xlsx`. To export the Excel file with a custom file name, define the desired `fileName` through the [`ExportOptions`](https://ej2.syncfusion.com/documentation/api/schedule/exportOptions) interface and pass it as an argument to the [`exportToExcel`](https://ej2.syncfusion.com/documentation/api/schedule#exporttoexcel) method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs6/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs6/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs6/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs6/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs6" %}
{% endif %}

### Excel file formats

By default, the Scheduler exports event data to an Excel file in the `.xlsx` format. You can also export the Scheduler data in either `.xlsx` or `.csv` formats by defining the `exportType` option as either `csv` or `xlsx` through the [`ExportOptions`](https://ej2.syncfusion.com/documentation/api/schedule/exportOptions) interface. The default `exportType` is `xlsx`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs7/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs7/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs7/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs7/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs7" %}
{% endif %}

### Custom separator in CSV

The Scheduler exports event data to CSV format using a comma separator by default. You can change the separator by setting the [`separator`](../api/schedule/exportOptions#separator) property in [`ExportOptions`](../api/schedule/exportOptions#exporttype).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs8" %}
{% endif %}

### How to customize the excel sheet on before exporting

You can customize an Excel sheet before export using the [`excelExport`](https://ej2.syncfusion.com/documentation/api/schedule#excelExport) event. This event lets you tailor exported data, apply formatting, and include additional content for better presentation.

Using the [`excelExport`](https://ej2.syncfusion.com/documentation/api/schedule#excelExport) event, you can:

- **Adjust the formatting:** Apply specific styles such as font type, size, color, and cell formatting to make the output visually appealing and consistent with your requirements.

- **Customize headers and footers:** Personalize the Excel sheet by modifying the header and footer content, offering more control over the exported document.

- **Cancel the export:** The event supports cancellation of the export process by setting the `cancel` property to `true`. This feature ensures you can prevent export based on specific conditions, offering you full control over the Excel export workflow.

Here’s an example of how you can add a custom header and footer to an Excel sheet before exporting using the [`excelExport`](https://ej2.syncfusion.com/documentation/api/schedule#excelExport) event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs9" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/excel-export-cs9" %}
{% endif %}

## Exporting calendar events as ICS file

You can export Scheduler events to a calendar (.ics) file, compatible with calendars such as Google Calendar and Outlook. To export to ICS, import the `ICalendarExport` module from `@syncfusion/ej2-schedule` and inject it with `Schedule.Inject(ICalendarExport)`.

The following code example shows how the Scheduler events are exported to a calendar (.ics) file by making use of the [`exportToICalendar`](https://ej2.syncfusion.com/documentation/api/schedule#exporttoicalendar) public method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/calendar-export-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/calendar-export-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/calendar-export-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/calendar-export-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/calendar-export-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/calendar-export-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/calendar-export-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/calendar-export-cs1" %}
{% endif %}

### Exporting calendar with custom file name

By default, the calendar exports as `Calendar.ics`. To use a custom file name, pass it as the `fileName` option to the export method.

The following example downloads the iCal file with a name `ScheduleEvents.ics`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/calendar-export-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/calendar-export-cs2/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/calendar-export-cs2/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/calendar-export-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/calendar-export-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/calendar-export-cs2/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/calendar-export-cs2/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/calendar-export-cs2" %}
{% endif %}

## Import events from other calendars

Events from external calendars (ICS files) can be imported into Scheduler using the [`importICalendar`](https://ej2.syncfusion.com/documentation/api/schedule#importicalendar) method. This method requires a Blob object representing the .ics file.

> To import an ICS file containing events into Scheduler, first import the `ICalendarImport` module from the `@syncfusion/ej2-schedule` package and then inject it using the `Schedule.Inject(ICalendarImport)` method.

The following example shows how to import an ICS file into Scheduler, using the [`importICalendar`](https://ej2.syncfusion.com/documentation/api/schedule#importicalendar) method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/calendar-import-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/calendar-import-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/calendar-import-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/calendar-import-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/calendar-import-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/calendar-import-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/calendar-import-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/calendar-import-cs1" %}
{% endif %}

## How to print the Scheduler element

Scheduler supports printing via the `print` client-side method. It can be used without options or with custom print options.

* Using the print method without options.
* Using the print method with options.

> To print the Schedule, you need to import the `Print` module from the `@syncfusion/ej2-schedule` package and then inject it using the `Schedule.Inject(Print)` method.

### Using print method without options

You can print the Schedule element with the current view by using the [`print`](https://ej2.syncfusion.com/documentation/api/schedule#print) method without passing the options. The following example shows how to print the Scheduler using the `print` method without passing options.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/print-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/print-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/print-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/print-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/print-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/print-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/print-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/print-cs1" %}
{% endif %}

### Using a print method with options

You can print the Schedule element based on your needs using the [`print`](https://ej2.syncfusion.com/documentation/api/schedule#print) method by passing the print options used in this example with its values. The following example shows how to print the Scheduler using the [`print`](https://ej2.syncfusion.com/documentation/api/schedule#print) method by passing the options.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/print-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/print-cs2/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/print-cs2/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/print-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/print-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/print-cs2/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/print-cs2/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/print-cs2" %}
{% endif %}

### How to customize the print layout

The [`beforePrint`](https://ej2.syncfusion.com/documentation/api/schedule#beforePrint) event enables users to customize the print layout of the Scheduler control without altering the actual schedule layout or data. This event returns the HTML element used for printing, which can be tailored based on specific requirements before the print operation is triggered. Additionally, users can prevent the print action by setting the `cancel` property to `true`, giving them full control over when and how the print operation takes place.

Key customization options include:

- **Customizing the header and footer:** Add custom header and footer content of the print layout to include additional information.
- **Controlling print output:** Fine-tune the layout to ensure that only the necessary details are printed, ensuring a clean and structured printout.

Here’s an example of how you can add a custom header and footer to the print layout using the [`beforePrint`](https://ej2.syncfusion.com/documentation/api/schedule#beforePrint) event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/before-print/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/before-print/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/before-print/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/before-print" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/before-print/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/before-print/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/before-print/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/before-print" %}
{% endif %}

> You can refer to our [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/tailwind3/schedule/overview.html) to learn how to present and manipulate data.
