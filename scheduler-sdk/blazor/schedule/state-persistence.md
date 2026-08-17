---
layout: post
title: State Persistence in Blazor Scheduler | Syncfusion
description: Learn how to enable state persistence in the Syncfusion Blazor Scheduler to retain current view, selected date, and scroll position.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---

# State Persistence in Blazor Scheduler

State persistence allows Scheduler to retain the [CurrentView](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Schedule.SfSchedule-1.html#Syncfusion_Blazor_Schedule_SfSchedule_1_CurrentView), [SelectedDate](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Schedule.SfSchedule-1.html#Syncfusion_Blazor_Schedule_SfSchedule_1_SelectedDate), and scroll position values in [localStorage](https://www.w3schools.com/html/html5_webstorage.asp). This helps preserve state even if the browser is refreshed or you move to another page within the browser. This behavior is controlled by the [EnablePersistence](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Schedule.SfSchedule-1.html#Syncfusion_Blazor_Schedule_SfSchedule_1_EnablePersistence) property, which is `false` by default. When it is set to `true`, the Scheduler retains `CurrentView`, `SelectedDate`, and scroll position values even after a page refresh.

N> The Scheduler ID is required for state persistence.

```cshtml

@using Syncfusion.Blazor.Schedule

<SfSchedule TValue="AppointmentData" Height="650px" ID="Schedule" EnablePersistence="true" @bind-SelectedDate="@SelectedDate" @bind-CurrentView="@CurrentView">
    <ScheduleEventSettings DataSource="@DataSource"></ScheduleEventSettings>
    <ScheduleViews>
        <ScheduleView Option="View.Day"></ScheduleView>
        <ScheduleView Option="View.Week"></ScheduleView>
        <ScheduleView Option="View.WorkWeek"></ScheduleView>
        <ScheduleView Option="View.Month"></ScheduleView>
        <ScheduleView Option="View.Agenda"></ScheduleView>
    </ScheduleViews>
</SfSchedule>

@code {
    public DateTime SelectedDate = new DateTime(2020, 1, 9);
    public View CurrentView = View.Week;
    List<AppointmentData> DataSource = new List<AppointmentData>
{
        new AppointmentData { Id = 1, Subject = "Meeting", StartTime = new DateTime(2020, 1, 6, 9, 30, 0) , EndTime = new DateTime(2020, 1, 6, 11, 0, 0),
        RecurrenceRule = "FREQ=DAILY;INTERVAL=1;COUNT=5", RecurrenceException = "20200107T043000Z,20200109T043000Z" }
    };
    public class AppointmentData
    {
        public int Id { get; set; }
        public string Subject { get; set; }
        public string Location { get; set; }
        public string Description { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public Nullable<bool> IsAllDay { get; set; }
        public string CategoryColor { get; set; }
        public bool IsReadonly { get; set; }
        public string RecurrenceRule { get; set; }
        public Nullable<int> RecurrenceID { get; set; }
        public string RecurrenceException { get; set; }
        public string StartTimezone { get; set; }
        public string EndTimezone { get; set; }
    }
}
```
