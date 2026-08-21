---
layout: post
title: Exporting in ASP.NET MVC Scheduler | Syncfusion
description: Learn how to export and import events in the Syncfusion ASP.NET MVC Scheduler to Excel and ICS files, and print appointments with custom options.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---


# Exporting in ASP.NET MVC Scheduler

The Scheduler supports exporting all its appointments both to an Excel or ICS extension file at client-side. It offers different client-side methods to export its appointments in an Excel or ICal format file. Let's look at how to implement the exporting functionality in the Scheduler.

## Excel Exporting

The Scheduler allows you to export all its events into an Excel format file by using the [`exportToExcel`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_ExportToExcel) client-side method. By default, it exports all the default fields of Scheduler mapped through [`EventSettings`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_EventSettings) property.

N> Before you start with excel exporting functionality, you need to import and inject the `ExcelExport` module from the `'@syncfusion/ej2-schedule'` package using the `Inject` method of Scheduler.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/excel-export/default-exporting/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/excel-export/default-exporting/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/excel-export/default-exporting/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/excel-export/default-exporting/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



### Exporting with custom fields

By default, the Scheduler exports the event fields that are mapped to it through the [`EventSettings`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_EventSettings) property. To limit the number of fields in the exported Excel file, you can export only the custom fields of the event data. To export such custom fields alone, define the required `fields` and pass it as an argument to the `exportToExcel` method as shown in the following example. For example: `['Id', 'Subject', 'StartTime', 'EndTime', 'Location']`.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/excel-export/custom-fields/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/excel-export/custom-fields/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/excel-export/custom-fields/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/excel-export/custom-fields/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



### Exporting individual occurrences of a recurring series

By default, the Scheduler exports recurring events as a single record by exporting only the parent record into the Excel file. If you want to export each individual occurrence of a recurring series appointment as separate records in an Excel file, define the `includeOccurrences` option as `true` and pass it as an argument to the `exportToExcel` method. By default, the `includeOccurrences` option is set to `false`.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/excel-export/occurrence/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/excel-export/occurrence/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/excel-export/occurrence/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/excel-export/occurrence/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



### Exporting custom event data

By default, the whole event collection bound to the Scheduler gets exported as an Excel file. To export only specific events of the Scheduler or some custom event collection, pass that custom data collection as a parameter to the `exportToExcel` method through the `customData` option, as shown in the following example.

N> By default, the event data are taken from Scheduler dataSource.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/excel-export/custom-data/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/excel-export/custom-data/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/excel-export/custom-data/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/excel-export/custom-data/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



### Export with custom file name

By default, the Scheduler downloads the exported Excel file with the name `Schedule.xlsx`. To export the Excel file with a custom file name, define the desired `fileName` and pass it as an argument to the `exportToExcel` method.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/excel-export/filename/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/excel-export/filename/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/excel-export/filename/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/excel-export/filename/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



### Excel file formats

By default, the Scheduler exports event data to an Excel file in the `.xlsx` format. You can also export the Scheduler data as either `.xlsx` or `.csv` by defining the `exportType` option as either `csv` or `xlsx`. By default, the `exportType` is set to `xlsx`.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/excel-export/format/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/excel-export/format/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/excel-export/format/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/excel-export/format/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



### Custom separator in CSV

The Scheduler exports the event data to CSV format with `,` as the separator. You can change the separator by setting the `separator` property in `ExportOptions`.



{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/excel-export/csv-format/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/excel-export/csv-format/data.cs %}
{% endhighlight %}
{% endtabs %}

### How to customize the excel sheet on before exporting

Customizing an Excel sheet before export is made easy with the `excelExport` API. This API provides users with robust flexibility to tailor the exported data, format it according to specific needs, and include additional elements for enhanced presentation.

With the `excelExport` API, you can:

- **Adjust the formatting:** Apply specific styles such as font type, size, color, and cell formatting to make the output visually appealing and consistent with your requirements.

- **Customize headers and footers:** Personalize the Excel sheet by modifying the header and footer content, offering more control over the exported document.

- **Cancel the export:** The API supports cancellation of the export process by setting the `cancel` property to `true`. This feature ensures you can prevent export based on specific conditions, offering you full control over the Excel export workflow.

Here’s an example of how you can add a custom header and footer to an Excel sheet before exporting using the `excelExport` API:

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/excel-export/excel-customize/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/excel-export/excel-customize/data.cs %}
{% endhighlight %}
{% endtabs %}


## Exporting calendar events as ICS file

You can export the Scheduler events to a calendar (.ics) file format and open it on any of the other default calendars such as Google Calendar or Microsoft Outlook.

The following code example shows how the Scheduler events are exported to a calendar (.ics) file by making use of the `exportToICalendar` public method.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/calendar-export/default-export/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/calendar-export/default-export/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/calendar-export/default-export/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/calendar-export/default-export/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



### Customizing column header with custom fields exporting

Using the `fields` property, you can export only the defined fields into Excel without customizing the header. You can also customize the header of custom fields while exporting by using the `fieldsInfo` option through the `ExportFieldInfo` interface and pass it as an argument to the `exportToExcel` method, as shown in the following example.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/calendar-export/custom-column-header/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/calendar-export/custom-column-header/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/calendar-export/custom-column-header/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/calendar-export/custom-column-header/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



### Exporting calendar with custom file name

By default, the calendar is exported with a file name `Calendar.ics`. To change this file name on export, pass the custom string value as `fileName` to the method argument so as to get the file downloaded with this provided name.

The following example downloads the iCal file with a name `ScheduleEvents.ics`.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/calendar-export/custom-filename/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/calendar-export/custom-filename/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/calendar-export/custom-filename/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/calendar-export/custom-filename/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



## Import events from other calendars

Events from external calendars (ICS files) can be imported into the Scheduler by using the `importICalendar` method. This method accepts the `Blob` object of an `.ics` file to be imported as a mandatory argument.

The following example shows how to import an ICS file into Scheduler, using the `importICalendar` method.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/calendar-export/calendar-import/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/calendar-export/calendar-import/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/calendar-export/calendar-import/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/calendar-export/calendar-import/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



## How to print the Scheduler element

The Scheduler allows you to print the Scheduler element by using the `print` client-side method. The `print` method works in two ways:

* Using the `print` method without options.
* Using the `print` method with options.

### Using the print method without options

You can print the Schedule element with the current view by using the `print` method without passing any options, as shown in the following example.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/calendar-export/default-print/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/calendar-export/default-print/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/calendar-export/default-print/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/calendar-export/default-print/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



### Using a print method with options

You can print the Schedule element based on your requirements by using the `print` method and passing print options, as shown in the following example.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/calendar-export/print-options/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/calendar-export/print-options/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/calendar-export/print-options/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/calendar-export/print-options/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

### How to customize the print layout

The `beforePrint` event enables users to customize the print layout of the Scheduler control without altering the actual schedule layout or data. This event returns the HTML element used for printing, which can be tailored based on specific requirements before the print operation is triggered. Additionally, users can prevent the print action by setting the `cancel` property to `true`, which gives them full control over when and how the print operation takes place.

Key customization options include:

- **Customizing the header and footer:** Add custom header and footer content of the print layout to include additional information.
- **Controlling print output:** Fine-tune the layout to ensure that only the necessary details are printed, ensuring a clean and structured printout.

Here’s an example of how you can add a custom header and footer to the print layout using the `beforePrint` event :

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/calendar-export/custom-print/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/calendar-export/custom-print/data.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/calendar-export/custom-print/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/calendar-export/custom-print/data.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

N> You can refer to our [ASP.NET MVC Scheduler](https://www.syncfusion.com/scheduler-sdk/aspnet-mvc-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [ASP.NET MVC Scheduler](https://ej2.syncfusion.com/aspnetmvc/schedule/overview#/fluent2) example to know how to present and manipulate data.
