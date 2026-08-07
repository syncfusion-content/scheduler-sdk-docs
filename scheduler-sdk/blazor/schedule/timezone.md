---
layout: post
title: Timezone in Blazor Scheduler | Syncfusion
description: Learn how to render appointments in different time zones in the Syncfusion Blazor Scheduler for global users and cross-region scheduling.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---

# Timezone in Blazor Scheduler

Scheduler renders events based on the current system time zone of the server in server-side applications. In WASM applications, events are rendered based on UTC time zone by default.

* You can change the scheduler time zone by setting the [Timezone](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Schedule.SfSchedule-1.html#Syncfusion_Blazor_Schedule_SfSchedule_1_Timezone) property. For more information, refer to the [section](#display-appointments-based-on-scheduler-time-zone).

* You can also set a time zone for each appointment through the [StartTimezone](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Schedule.FieldStartTimezone.html) and [EndTimezone](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Schedule.FieldEndTimezone.html) properties, which can be defined as separate fields in the event field collection. For more information, refer to the [section](#create-appointments-in-different-time-zones).

* You can also set the time zone for both the scheduler [Timezone](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Schedule.SfSchedule-1.html#Syncfusion_Blazor_Schedule_SfSchedule_1_Timezone) property and the event's [StartTimezone](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Schedule.FieldStartTimezone.html) and [EndTimezone](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Schedule.FieldEndTimezone.html) properties. For more information, refer to the [section](#display-appointments-based-on-clients-time-zone).


N> * The value provided for the Timezone property for both Scheduler and appointments should be in the [IANA](https://www.iana.org/time-zones) format. Windows time zone IDs are not supported.
<br/>* The WASM application has supported the limited [time zones](https://github.com/dotnet/runtime/issues/44840#issuecomment-764991667) in .Net5. But in .Net6, it supported all the [time zones](https://github.com/dotnet/runtime/pull/50650).

## Create appointments in different time zones

You can create appointments in different time zones by using the [StartTimezone](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Schedule.FieldStartTimezone.html) and [EndTimezone](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Schedule.FieldEndTimezone.html) properties. An appointment’s start and end times are calculated based on the supplied time zone information.

In the following code example, the appointment time zone is Europe Time (UTC+03:00), and the application is running in UTC time zone. In this scenario, the appointment is displayed at 6 AM.

```csharp
@using Syncfusion.Blazor.Schedule

<SfSchedule TValue="AppointmentData" Width="100%" Height="550px" @bind-SelectedDate="@CurrentDate">
    <ScheduleEventSettings DataSource="@DataSource"></ScheduleEventSettings>
    <ScheduleViews>
        <ScheduleView Option="View.Day"></ScheduleView>
        <ScheduleView Option="View.Week"></ScheduleView>
        <ScheduleView Option="View.WorkWeek"></ScheduleView>
        <ScheduleView Option="View.Month"></ScheduleView>
        <ScheduleView Option="View.Agenda"></ScheduleView>
    </ScheduleViews>
</SfSchedule>

@code{
    DateTime CurrentDate = new DateTime(2020, 3, 10);
    List<AppointmentData> DataSource = new List<AppointmentData>
    {
        new AppointmentData {
            Id = 1,
            Subject = "Meeting",
            StartTime = new DateTime(2020, 3, 9, 9, 0, 0) ,
            EndTime = new DateTime(2020, 3, 9, 11, 0, 0),
            StartTimezone = "Europe/Moscow",
            EndTimezone = "Europe/Moscow"
        }
    };
    public class AppointmentData
    {
        public int Id { get; set; }
        public string Subject { get; set; }
        public string Location { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string Description { get; set; }
        public bool IsAllDay { get; set; }
        public string RecurrenceRule { get; set; }
        public string RecurrenceException { get; set; }
        public Nullable<int> RecurrenceID { get; set; }
        public string StartTimezone { get; set; }
        public string EndTimezone { get; set; }
    }
}
```

N> * If a recurring appointment is converted to another time zone, the full series is recalculated using the new time zone information.
<br/>* If an all-day appointment is created, its start and end times are set to 12 A.M. by default, so time zone is not applicable.
<br/>* Scheduler supports daylight saving time.
<br/>* Time zone support is also applicable to custom appointments, so map the corresponding properties.
<br/>* Use [Timezone](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Schedule.SfSchedule-1.html#Syncfusion_Blazor_Schedule_SfSchedule_1_Timezone) for custom appointments by mapping the [StartTimezone](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Schedule.FieldStartTimezone.html) and [EndTimezone](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Schedule.FieldEndTimezone.html) custom properties.

## Display appointments based on Scheduler time zone

Set the scheduler time zone by using the [Timezone](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Schedule.SfSchedule-1.html#Syncfusion_Blazor_Schedule_SfSchedule_1_Timezone) property. In this scenario, appointments are displayed in UTC time when the [StartTimezone](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Schedule.FieldStartTimezone.html) and [EndTimezone](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Schedule.FieldEndTimezone.html) properties are set to null. The appointments are displayed in UTC time based on the configured scheduler time zone.

In the following code example, the Scheduler time zone is Europe Time (UTC+03:00), and the application is running in UTC time zone. In this scenario, the appointment is displayed at 12 PM.

```csharp
@using Syncfusion.Blazor.Schedule

<SfSchedule TValue="AppointmentData" Width="100%" Height="550px" @bind-SelectedDate="@CurrentDate" Timezone="Europe/Moscow">
    <ScheduleEventSettings DataSource="@DataSource"></ScheduleEventSettings>
    <ScheduleViews>
        <ScheduleView Option="View.Day"></ScheduleView>
        <ScheduleView Option="View.Week"></ScheduleView>
        <ScheduleView Option="View.WorkWeek"></ScheduleView>
        <ScheduleView Option="View.Month"></ScheduleView>
        <ScheduleView Option="View.Agenda"></ScheduleView>
    </ScheduleViews>
</SfSchedule>

@code{
    DateTime CurrentDate = new DateTime(2020, 3, 10);
    List<AppointmentData> DataSource = new List<AppointmentData>
    {
        new AppointmentData { Id = 1, Subject = "Meeting", StartTime = new DateTime(2020, 3, 9, 9, 0, 0) , EndTime = new DateTime(2020, 3, 9, 11, 0, 0) }
    };
    public class AppointmentData
    {
        public int Id { get; set; }
        public string Subject { get; set; }
        public string Location { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string Description { get; set; }
        public bool IsAllDay { get; set; }
        public string RecurrenceRule { get; set; }
        public string RecurrenceException { get; set; }
        public Nullable<int> RecurrenceID { get; set; }
        public string StartTimezone { get; set; }
        public string EndTimezone { get; set; }
    }
}
```

## Display Appointments based on client’s time zone

Display appointments based on the client’s local time zone in Scheduler. This can be achieved by getting the browser's time zone and setting its value for both the scheduler time zone and the appointment time zone.

For example, consider a scenario where you are in North Carolina (America/New_York) and you want to set up a meeting at 10 A.M. local time. You have colleagues in London and Chennai, and they also need to participate. The meeting time will be 3 P.M. (15:00) in London and 8:30 P.M. in Chennai. When each user views the Scheduler, the appointment should be displayed relative to their local time zone.

```csharp
@using Syncfusion.Blazor.Schedule
@inject IJSRuntime JSRuntime

<SfSchedule TValue="AppointmentData" Width="100%" Height="550px" @bind-SelectedDate="@CurrentDate" Timezone="@TimezoneValue">
    <ScheduleEventSettings DataSource="@DataSource"></ScheduleEventSettings>
    <ScheduleViews>
        <ScheduleView Option="View.Day"></ScheduleView>
        <ScheduleView Option="View.Week"></ScheduleView>
        <ScheduleView Option="View.WorkWeek"></ScheduleView>
        <ScheduleView Option="View.Month"></ScheduleView>
        <ScheduleView Option="View.Agenda"></ScheduleView>
    </ScheduleViews>
</SfSchedule>

@code{
    public DateTime CurrentDate { get; set; } = new DateTime(2021, 1, 10);
    string TimezoneValue;
    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            TimezoneValue = await JSRuntime.InvokeAsync<string>("eval", "(function(){try { return ''+ Intl.DateTimeFormat().resolvedOptions().timeZone; } catch(e) {} return 'UTC';}())");
            StateHasChanged();
        }
    }
    List<AppointmentData> DataSource = new List<AppointmentData>
    {
        new AppointmentData { Id = 1, Subject = "Meeting", StartTime = new DateTime(2021, 1, 11, 10, 0, 0) , EndTime = new DateTime(2021, 1 , 11, 11, 0, 0),StartTimezone = "America/New_York",
            EndTimezone = "America/New_York" }
    };
    public class AppointmentData
    {
        public int Id { get; set; }
        public string Subject { get; set; }
        public string Location { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string Description { get; set; }
        public bool IsAllDay { get; set; }
        public string RecurrenceRule { get; set; }
        public string RecurrenceException { get; set; }
        public Nullable<int> RecurrenceID { get; set; }
        public string StartTimezone { get; set; }
        public string EndTimezone { get; set; }
    }
}
```

## Display appointments at same time everywhere regardless of client’s time zone

Display appointments at the same time everywhere, regardless of client time zone, by setting the [Timezone](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Schedule.SfSchedule-1.html#Syncfusion_Blazor_Schedule_SfSchedule_1_Timezone) property of the scheduler and setting the [StartTimezone](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Schedule.FieldStartTimezone.html) and [EndTimezone](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Schedule.FieldEndTimezone.html) properties to null. Appointments are displayed based on the given [StartTime](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Schedule.FieldStartTime.html) and [EndTime](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Schedule.FieldEndTime.html) values without considering time zones.

## Updating StartTime and EndTime after drag and drop appointment based on time zone

After rescheduling an appointment by using drag and drop, the appointment’s start and end time values are updated based on the scheduler time zone and the appointment time zone.

For example, consider the local time zone as India Standard Time. If you drag an appointment from 9 AM and drop it at 1 PM, and the scheduler [Timezone](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Schedule.SfSchedule-1.html#Syncfusion_Blazor_Schedule_SfSchedule_1_Timezone) is not set while the appointment [StartTimezone](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Schedule.FieldStartTimezone.html) and [EndTimezone](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Schedule.FieldEndTimezone.html) are set to AUS Central Standard Time (Australia/Darwin), the appointment start and end times are converted from the local time zone to the appointment time zone. The appointment start time is saved at 5 PM.

If you set the scheduler [Timezone](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Schedule.SfSchedule-1.html#Syncfusion_Blazor_Schedule_SfSchedule_1_Timezone) to AUS Central Standard Time (Australia/Darwin) and the appointment [StartTimezone](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Schedule.FieldStartTimezone.html) and [EndTimezone](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Schedule.FieldEndTimezone.html) to Central Standard Time (America/Mexico_City), the appointment start and end times are converted from the scheduler time zone to the appointment time zone. The appointment start time is saved at 8:30 PM.

If you set the scheduler time zone to AUS Central Standard Time (Australia/Darwin) and do not set an appointment time zone, the appointment start and end times are converted from the scheduler time zone to UTC. The appointment start time is saved at 9 AM.
