---
layout: post
platform: winui
title: Import and Export iCalendar (.ICS) Files in WinUI Scheduler | Syncfusion®
description: Learn how to import and export appointments using the RFC 5545-compliant iCalendar (.ics) format in the Syncfusion Scheduler for WinUI. Exchange scheduler data with Outlook, Google Calendar, Apple Calendar, and other calendar applications.
control: SfScheduler
documentation: ug
keywords: winui scheduler, winui scheduler ics export, winui scheduler ics import, iCalendar support winui, export appointments to ics, import appointments from ics, winui scheduler calendar integration, scheduler iCalendar format, winui scheduler outlook integration, winui scheduler google calendar integration, winui scheduler apple calendar integration, sfscheduler ics file
---

# Import and Export iCalendar (.ICS) Files in WinUI Scheduler

The WPF Scheduler supports importing and exporting appointments using the industry-standard iCalendar (.ics) format. This feature enables smooth data exchange between Syncfusion Scheduler and popular calendar applications such as Microsoft Outlook, Google Calendar, Apple Calendar, and Thunderbird. Appointment information remains intact when exported to an ICS file and imported back into the Scheduler.

## Exporting Appointments to an ICS File

Use the `ExportToICalendar` method to export all appointments in the scheduler to an iCalendar (.ics) file. The method accepts an optional fileName parameter that specifies the name of the exported file. If no file name is provided, a default file name is used.  

When exporting appointments, a `FileSavePicker` dialog is displayed, allowing users to choose the save location and file name for the ICS file.

### Export with a Custom File Name

{% tabs %}
{% highlight c# tabtitle="C#" hl_lines="5" %}
using Syncfusion.UI.Xaml.Scheduler;

...

await scheduler.ExportToICalendar("MyAppointments");

{% endhighlight %}
{% endtabs %}

This creates an ICS file named `MyAppointments.ics`.

### Export with the Default File Name

{% tabs %}
{% highlight c# tabtitle="C#" hl_lines="5" %}
using Syncfusion.UI.Xaml.Scheduler;

...

await scheduler.ExportToICalendar();

{% endhighlight %}
{% endtabs %}

This exports the appointments using the default file name.

## Importing Appointments from an ICS File

Use the `ImportICalendar` method to select and import appointments from an existing `.ics` file. The `ImportICalendar` method opens a `FileOpenPicker` dialog that allows users to browse and select an ICS file. After a valid file is selected, the appointments are automatically added to the scheduler.

{% tabs %}
{% highlight c# tabtitle="C#" hl_lines="5" %}
using Syncfusion.UI.Xaml.Scheduler;

...

await scheduler.ImportICalendar();

{% endhighlight %}
{% endtabs %}


## Supported Appointment Properties

The following appointment properties are preserved during ICS import and export:

<table border="1">
    <tr>
        <th>SchedulerAppointment<br/>
            <br/></th>        
        <th>ICS Property<br/>
            <br/></th>
    </tr>
   <tr>
      <td>Id</td>
      <td>UID</td>
    </tr>
    <tr>
      <td>Subject</td>
      <td>SUMMARY</td>
    </tr>
    <tr>
      <td>Notes</td>
      <td>DESCRIPTION</td>
    </tr>
    <tr>
      <td>Location</td>
      <td>LOCATION</td>
    </tr>
    <tr>
      <td>StartTime</td>
      <td>DTSTART</td>
    </tr>
    <tr>
      <td>EndTime</td>
      <td>DTEND</td>
    </tr>
    <tr>
      <td>StartTimeZone</td>
      <td>DTSTART;TZID</td>
    </tr>
    <tr>
      <td>EndTimeZone</td>
      <td>DTEND;TZID</td>
    </tr>
    <tr>
      <td>IsAllDay</td>
      <td>VALUE=DATE</td>
    </tr>
    <tr>
      <td>RecurrenceRule</td>
      <td>RRULE</td>
    </tr>
    <tr>
      <td>RecurrenceExceptionDates</td>
      <td>EXDATE</td>
    </tr>
    <tr>
      <td>RecurrenceId</td>
      <td>RECURRENCE-ID</td>
    </tr>
</table>

The following example exports scheduler appointments to an ICS file and imports appointments from an existing ICS file:

{% tabs %}
{% highlight c# tabtitle="C#" hl_lines="5" %}
using Syncfusion.UI.Xaml.Scheduler;

...

private async void OnExportClicked(object sender, RoutedEventArgs e)
{
    await scheduler.ExportToICalendar("SchedulerBackup");
}

private async void OnImportClicked(object sender, RoutedEventArgs e)
{
    await scheduler.ImportICalendar();
}

{% endhighlight %}
{% endtabs %}




