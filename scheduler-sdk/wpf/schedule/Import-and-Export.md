---
layout: post
platform: scheduler-sdk
title: Import and Export iCalendar (.ICS) Files in WPF Scheduler | Syncfusion®
description: Learn how to import and export appointments using the iCalendar (.ics) format in the WPF. Exchange scheduler data with Outlook, Google Calendar, Apple Calendar, Thunderbird, and other calendar applications.
control: SfScheduler
documentation: ug
keywords: wpf scheduler, wpf scheduler ics export, wpf scheduler ics import, iCalendar support wpf, export appointments to ics, import appointments from ics, wpf scheduler calendar integration, scheduler iCalendar format, wpf scheduler outlook integration, wpf scheduler google calendar integration, wpf scheduler apple calendar integration, sfscheduler ics file
---

# Import and Export iCalendar (.ICS) Files in WPF Scheduler

The WPF Scheduler supports importing and exporting appointments using the industry-standard iCalendar (.ics) format. This feature enables smooth data exchange between Syncfusion Scheduler and popular calendar applications such as Microsoft Outlook, Google Calendar, Apple Calendar, and Thunderbird. Appointment information remains intact when exported to an ICS file and imported back into the Scheduler.

## Exporting Appointments to an ICS File

Use the `ExportToICalendar` method to export all appointments in the scheduler to an iCalendar (.ics) file. The method accepts an optional fileName parameter that specifies the name of the exported file. If no file name is provided, a default file name is used. The exported ICS file is saved to the user's **Downloads** folder. 

When exporting appointments, a `SaveFileDialog` is displayed, allowing users to specify the file name and save location for the ICS file. By default, the dialog opens in the user's Downloads folder.

### Export with a Custom File Name

{% tabs %}
{% highlight c# tabtitle="C#" hl_lines="5" %}
using Syncfusion.UI.Xaml.Scheduler;

...

await scheduler.ExportToICalendar("MyAppointments");

{% endhighlight %}
{% endtabs %}

This creates an ICS file named `MyAppointments.ics` in the Downloads folder.

### Export with the Default File Name

{% tabs %}
{% highlight c# tabtitle="C#" hl_lines="5" %}
using Syncfusion.UI.Xaml.Scheduler;

...

await scheduler.ExportToICalendar();

{% endhighlight %}
{% endtabs %}

This exports the appointments using the default file name and saves the file to the Downloads folder.

## Importing Appointments from an ICS File

Use the `ImportICalendar` method to select and import appointments from an existing `.ics` file. The `ImportICalendar` method opens an `OpenFileDialog` that allows users to select an ICS file. After a valid file is selected, the appointments are automatically added to the scheduler.

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




