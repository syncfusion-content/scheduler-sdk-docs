---
layout: post
title: Exporting in ASP.NET Core Scheduler | Syncfusion
description: Learn how to export and import events in the Syncfusion ASP.NET Core Scheduler to Excel and ICS files, and print appointments with custom options.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---


# Exporting in ASP.NET Core Scheduler

The Scheduler supports exporting appointments to Excel or ICS files on the client side. It provides different client-side methods to export appointments in Excel or iCal format. Let's look at how to implement exporting in Scheduler.

To get start quickly with ASP.NET Core Scheduler exporting, you can check on this video:

{% youtube
"youtube:https://www.youtube.com/watch?v=leP6CAluwiY"%}

## Excel Exporting

The Scheduler allows you to export all its events into an Excel format file by using the [`exportToExcel`] client-side method. By default, it exports all the default fields of Scheduler mapped through `<e-schedule-eventsettings>` property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/excel-export/default-exporting/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/excel-export/default-exporting/data.cs %}
{% endhighlight %}
{% endtabs %}



### Exporting with custom fields

By default, the Scheduler exports all default event fields mapped through the `<e-schedule-eventsettings>` property. To limit the number of fields in the exported Excel file, you can export only the custom fields from the event data. To export only those custom fields, define the required `fields` value and pass it as an argument to the `exportToExcel` method, as shown in the following example. For example: `['Id', 'Subject', 'StartTime', 'EndTime', 'Location']`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/excel-export/custom-fields/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/excel-export/custom-fields/data.cs %}
{% endhighlight %}
{% endtabs %}



### Exporting individual occurrences of a recurring series

By default, the Scheduler exports recurring events as a single record by exporting only the parent record into the Excel file. If you want to export each individual occurrence of a recurring series appointment as a separate record in an Excel file, set the `includeOccurrences` option to `true` and pass it as an argument to the `exportToExcel` method. By default, the `includeOccurrences` option is set to `false`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/excel-export/occurrence/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/excel-export/occurrence/data.cs %}
{% endhighlight %}
{% endtabs %}



### Exporting custom event data

By default, the entire event collection bound to the Scheduler is exported as an Excel file. To export only specific Scheduler events or a custom event collection, pass that custom data collection as a parameter to the `exportToExcel` method, as shown in the following example, through the `customData` option.

N> By default, the event data are taken from the Scheduler dataSource.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/excel-export/custom-data/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/excel-export/custom-data/data.cs %}
{% endhighlight %}
{% endtabs %}



### Export with custom file name

By default, the Scheduler downloads the exported Excel file as `Schedule.xlsx`. It also provides an option to export the Excel file with a custom file name by defining the desired `fileName` and passing it as an argument to the `exportToExcel` method.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/excel-export/filename/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/excel-export/filename/data.cs %}
{% endhighlight %}
{% endtabs %}



### Excel file formats

By default, the Scheduler exports event data to an Excel file in the `.xlsx` format. You can also export Scheduler data in either `.xlsx` or `csv` format by setting the `exportType` option to `csv` or `xlsx`. By default, the `exportType` is set to `xlsx`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/excel-export/format/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/excel-export/format/data.cs %}
{% endhighlight %}
{% endtabs %}



### Custom separator in CSV

The Scheduler exports event data to CSV format with `,` as the separator. You can change the separator by setting the `separator` property in `ExportOptions`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/excel-export/csv-format/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/excel-export/csv-format/data.cs %}
{% endhighlight %}
{% endtabs %}


### How to customize the excel sheet on before exporting

Customizing an Excel sheet before export is made easy with the `excelExport` event. This event provides users with robust flexibility to tailor the exported data, format it according to specific needs, and include additional elements for enhanced presentation.

With the `excelExport` event, you can:

- **Adjust the formatting:** Apply specific styles such as font type, size, color, and cell formatting to make the output visually appealing and consistent with your requirements.

- **Customize headers and footers:** Personalize the Excel sheet by modifying the header and footer content, offering more control over the exported document.

- **Cancel the export:** The event supports cancellation of the export process by setting the `cancel` property to `true`. This feature ensures you can prevent export based on specific conditions, offering you full control over the Excel export workflow.

Here’s an example of how you can add a custom header and footer to an Excel sheet before exporting using the `excelExport` event.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/excel-export/excel-customize/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/excel-export/excel-customize/data.cs %}
{% endhighlight %}
{% endtabs %}


## Exporting calendar events as ICS file

You can export the Scheduler events to a calendar (.ics) file format, and open it on any of the other default calendars such as Google or Outlook.

The following code example shows how the Scheduler events are exported to a calendar (.ics) file by making use of the `exportToICalendar` public method.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/calendar-export/default-export/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/calendar-export/default-export/data.cs %}
{% endhighlight %}
{% endtabs %}



### Customizing column header with custom fields exporting

Using fields property, we can only export the defined fields into excel without customizing the header. Now we can provide the alternate support to customize the header of custom fields exporting using the `fieldsInfo` option through the `ExportFieldInfo` interface and pass it as an argument to the `exportToExcel` method as shown in the following example.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/calendar-export/custom-column-header/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/calendar-export/custom-column-header/data.cs %}
{% endhighlight %}
{% endtabs %}



### Exporting calendar with custom file name

By default, the calendar is exported with a file name `Calendar.ics`. To change this file name on export, pass the custom string value as `fileName` to the method argument so as to get the file downloaded with this provided name.

The following example downloads the iCal file with a name `ScheduleEvents.ics`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/calendar-export/custom-filename/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/calendar-export/custom-filename/data.cs %}
{% endhighlight %}
{% endtabs %}



## Import events from other calendars

The events from external calendars (ICS files) can be imported into Scheduler by using the `importICalendar` method. This method accepts the `blob object` of an .ics file to be imported, as a mandatory argument.

The following example shows how to import an ICS file into Scheduler, using the `importICalendar` method.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/calendar-export/calendar-import/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/calendar-export/calendar-import/data.cs %}
{% endhighlight %}
{% endtabs %}



## How to print the Scheduler element

The Scheduler allows you to print the Scheduler element by using the `print` client-side method. The print method works in two ways. You can find it below.

* Using print method without options.
* Using a print method with options.

### Using print method without options

You can print the Schedule element with the current view by using the `print` method without passing the options. The following example shows how to print the Scheduler using the `print` method without passing options.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/calendar-export/default-print/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/calendar-export/default-print/data.cs %}
{% endhighlight %}
{% endtabs %}



### Using a print method with options

You can print the Schedule element based on your needs using the `print` method by passing the print options used in this example with its values. The following example shows how to print the Scheduler using the `print` method by passing the options.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/calendar-export/print-options/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/calendar-export/print-options/data.cs %}
{% endhighlight %}
{% endtabs %}

### How to customize the print layout

The `beforePrint` event enables users to customize the print layout of the Scheduler control without altering the actual schedule layout or data. This event returns the HTML element used for printing, which can be tailored based on specific requirements before the print operation is triggered. Additionally, users can prevent the print action by setting the `cancel` property to `true`, giving them full control over when and how the print operation takes place.

Key customization options include:

- **Customizing the header and footer:** Add custom header and footer content of the print layout to include additional information.
- **Controlling print output:** Fine-tune the layout to ensure that only the necessary details are printed, ensuring a clean and structured printout.

Here’s an example of how you can add a custom header and footer to the print layout using the `beforePrint` event.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/calendar-export/custom-print/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/calendar-export/custom-print/data.cs %}
{% endhighlight %}
{% endtabs %}

N> You can refer to our [ASP.NET Core Scheduler](https://www.syncfusion.com/aspnet-core-ui-controls/scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [ASP.NET Core Scheduler example](https://ej2.syncfusion.com/aspnetcore/Schedule/Overview#/material) to knows how to present and manipulate data.
