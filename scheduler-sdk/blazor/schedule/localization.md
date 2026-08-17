---
layout: post
title: Globalization in Blazor Scheduler | Syncfusion
description: Learn how to localize the Syncfusion Blazor Scheduler to adapt to different languages, cultures, time formats, and RTL mode.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---

# Globalization and Localization in Blazor Scheduler

[Blazor Scheduler](https://www.syncfusion.com/scheduler-sdk/blazor-scheduler) can be localized. Refer to the [Blazor Localization](https://blazor.syncfusion.com/documentation/common/localization) topic for more details on localizing Blazor components.

## Setting date format

Scheduler supports all valid date formats and, by default, uses the universal date format "MM/dd/yyyy". If the [`DateFormat`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Schedule.SfSchedule-1.html#Syncfusion_Blazor_Schedule_SfSchedule_1_DateFormat) property is not specified, the Scheduler uses the system culture. Because the default system culture is "en-US", the date format follows the "MM/dd/yyyy" pattern.

```cshtml
@using Syncfusion.Blazor.Schedule

<SfSchedule TValue="AppointmentData" Height="650px" DateFormat="yyyy/MM/dd">
    <ScheduleViews>
        <ScheduleView Option="View.Day"></ScheduleView>
        <ScheduleView Option="View.Week"></ScheduleView>
        <ScheduleView Option="View.WorkWeek"></ScheduleView>
        <ScheduleView Option="View.Month"></ScheduleView>
        <ScheduleView Option="View.Agenda"></ScheduleView>
    </ScheduleViews>
</SfSchedule>
@code{
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
    }
}
```

![Date Format in Blazor Scheduler](images/blazor-scheduler-dateformat.webp)

## Time mode

The Scheduler time format can be either 12-hour or 24-hour based on the system culture. You can also customize the time format by using the [`TimeFormat`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Schedule.SfSchedule-1.html#Syncfusion_Blazor_Schedule_SfSchedule_1_TimeFormat) property.

```cshtml
@using Syncfusion.Blazor.Schedule

<SfSchedule TValue="AppointmentData" Height="650px" TimeFormat="T">
    <ScheduleViews>
        <ScheduleView Option="View.Day"></ScheduleView>
        <ScheduleView Option="View.Week"></ScheduleView>
        <ScheduleView Option="View.WorkWeek"></ScheduleView>
        <ScheduleView Option="View.Month"></ScheduleView>
        <ScheduleView Option="View.Agenda"></ScheduleView>
    </ScheduleViews>
</SfSchedule>

@code{
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
    }
}
```

![Time Format in Blazor Scheduler](images/blazor-scheduler-timeformat.webp)

## Displaying Scheduler in RTL mode

You can change the Scheduler layout and behavior to follow RTL (Right-to-Left) conventions by setting [`EnableRtl`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Schedule.SfSchedule-1.html#Syncfusion_Blazor_Schedule_SfSchedule_1_EnableRtl) to `true`. This displays the Scheduler layout from right to left. Its default value is `false`.

```cshtml
@using Syncfusion.Blazor.Schedule

<SfSchedule TValue="AppointmentData" Height="650px" EnableRtl="true">
    <ScheduleViews>
        <ScheduleView Option="View.Day"></ScheduleView>
        <ScheduleView Option="View.Week"></ScheduleView>
        <ScheduleView Option="View.WorkWeek"></ScheduleView>
        <ScheduleView Option="View.Month"></ScheduleView>
        <ScheduleView Option="View.Agenda"></ScheduleView>
    </ScheduleViews>
</SfSchedule>

@code {
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
    }
}
```

![RTL Mode in Blazor Scheduler](images/blazor-scheduler-rtl.webp)

## See also

* [How to change the first day of the week in the Scheduler](./working-hours#setting-start-day-of-the-week)