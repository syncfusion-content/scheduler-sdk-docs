---
layout: post
platform: scheduler-sdk
title: Import and Export iCalendar (.ICS) Files in .NET MAUI Scheduler | Syncfusion®
description: Learn how to import and export appointments using the iCalendar (.ics) format in the .NET MAUI Scheduler. Exchange scheduler data with Outlook, Google Calendar, Apple Calendar, Thunderbird, and other calendar applications.
control: SfScheduler
documentation: ug
keywords: .net maui scheduler, .net maui scheduler ics export, .net maui scheduler ics import, iCalendar support .net maui, export appointments to ics, import appointments from ics, .net maui scheduler calendar integration, scheduler iCalendar format, .net maui scheduler outlook integration, .net maui scheduler google calendar integration, .net maui scheduler apple calendar integration, sfscheduler ics file
---

# Import and Export iCalendar (.ICS) Files in .NET MAUI Scheduler

The .NET MAUI Scheduler supports importing and exporting appointments using the industry-standard iCalendar (.ics) format. This feature enables smooth data exchange between Syncfusion Scheduler and popular calendar applications such as Microsoft Outlook, Google Calendar, Apple Calendar, and Thunderbird. Appointment information remains intact when exported to an ICS file and imported back into the Scheduler.

## Platform Configuration

Before using ICS import and export functionality, configure the required permissions for your target platform.

### iOS

Add the following entries to `Info.plist`:

```
<key>ICSFileUsageDescription</key>
<string>Pick ICS file</string>
<key>UIFileSharingEnabled</key>
<true/>
<key>LSSupportsOpeningDocumentsInPlace</key>
<true/>
```

### macOS (Mac Catalyst)

Add the following entry to `Info.plist`:

```
<key>ICSFileUsageDescription</key>
<string>Pick ICS file</string>
```

Add the following permissions to `Entitlements.plist`:

```
<dict>
     <key>com.apple.security.app-sandbox</key>
     <true/>
     <!-- When App Sandbox is enabled, this value is required to open outgoing network connections. -->
     <key>com.apple.security.network.client</key>
     <true/>
     <key>com.apple.security.files.user-selected.read-write</key>
     <true/>
     <key>com.apple.security.files.downloads.read-write</key>
     <true/>
 </dict>
```

### Android

Add the following permissions to `AndroidManifest.xml`:

```
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
```
## Exporting Appointments to an ICS File

Use the `ExportToICalendar` method to export all appointments in the scheduler to an iCalendar (.ics) file. The method accepts an optional fileName parameter that specifies the name of the exported file. If no file name is provided, a default file name is used. The exported file is saved to the platform's Downloads folder.

### Export with a Custom File Name

{% tabs %}
{% highlight c# tabtitle="C#" hl_lines="5" %}
using Syncfusion.Maui.Scheduler;

...

await scheduler.ExportToICalendar("MyAppointments");

{% endhighlight %}
{% endtabs %}

This creates an ICS file named `MyAppointments.ics` in the Downloads folder.

### Export with the Default File Name

{% tabs %}
{% highlight c# tabtitle="C#" hl_lines="5" %}
using Syncfusion.Maui.Scheduler;

...

await scheduler.ExportToICalendar();

{% endhighlight %}
{% endtabs %}

This exports the appointments using the default file name and saves the file to the Downloads folder.


### Export Location by Platform

<table border="1">
    <tr>
        <th>Platform<br/>
            <br/></th>        
        <th>Export Location<br/>
            <br/></th>
    </tr>
   <tr>
      <td>Windows</td>
      <td>Downloads folder</td>
    </tr>
    <tr>
      <td>Android</td>
      <td>Public Downloads folder</td>
    </tr>
    <tr>
      <td>macOS</td>
      <td>Downloads folder</td>
    </tr>
    <tr>
      <td>iOS</td>
      <td>Application Documents folder and share sheet</td>
    </tr>
</table>

On iOS, the exported ICS file is presented through a native share sheet, enabling saving or sharing through Files, Mail, AirDrop, and other supported apps.


## Importing Appointments from an ICS File

Use the `ImportICalendar` method to select and import appointments from an existing `.ics` file.

{% tabs %}
{% highlight c# tabtitle="C#" hl_lines="5" %}
using Syncfusion.Maui.Scheduler;

...

await scheduler.ImportICalendar();

{% endhighlight %}
{% endtabs %}

The `ImportICalendar` method opens the platform file picker for selecting an ICS file. Upon import, the appointments are automatically added to the scheduler data source.

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

The following example exports all appointments from the Scheduler and later imports appointments from an ICS file:

{% tabs %}
{% highlight c# tabtitle="C#" hl_lines="5" %}
using Syncfusion.Maui.Scheduler;

...

private async void OnExportClicked(object sender, EventArgs e)
{
    await scheduler.ExportToICalendar("SchedulerBackup");
}

private async void OnImportClicked(object sender, EventArgs e)
{
    await scheduler.ImportICalendar();
}

{% endhighlight %}
{% endtabs %}




