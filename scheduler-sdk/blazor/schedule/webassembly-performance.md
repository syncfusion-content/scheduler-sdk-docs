---
layout: post
title: WebAssembly Performance in Blazor Scheduler | Syncfusion
description: Learn how to improve performance in Blazor WebAssembly apps with the Syncfusion Scheduler using rendering best practices.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---
 
# WebAssembly Performance in Blazor Scheduler

This section provides performance guidelines for using the Blazor Scheduler component efficiently in a Blazor WebAssembly application. Best practices for general Blazor WebAssembly performance can be found [here](https://learn.microsoft.com/en-us/aspnet/core/blazor/performance?view=aspnetcore-7.0).

N> Refer to the Getting Started guides for the [Blazor Server-Side Scheduler](https://blazor.syncfusion.com/documentation/getting-started/blazor-server-side-visual-studio) and [Blazor WebAssembly Scheduler](./how-to/blazor-web-assembly-scheduler) for configuration details.

## Avoid unnecessary component renders

During the Blazor diffing algorithm, every view of the Scheduler component and its child components is checked for re-rendering. For instance, having **EventCallBack** in the application or Scheduler checks every child component after the event callback completes.

You can have fine-grained control over Scheduler rendering. The **PreventRender** method helps avoid unnecessary re-rendering of the Scheduler component. This method internally overrides the **ShouldRender** method of Scheduler to prevent rendering.

In the following example:

* The **PreventRender** method is called in the **IncrementCount** method, which is a click callback.
* Scheduler is excluded from the rendering triggered by the click event, and only **currentCount** is updated.

```cshtml
@using Syncfusion.Blazor.Schedule

<p>Current count: @currentCount</p>

<button class="btn btn-primary" @onclick="IncrementCount">Click me</button>

<SfSchedule @ref="ScheduleRef" TValue=AppointmentData>
    <ScheduleViews>
        <ScheduleView Option="View.Day"></ScheduleView>
        <ScheduleView Option="View.Week"></ScheduleView>
        <ScheduleView Option="View.WorkWeek"></ScheduleView>
        <ScheduleView Option="View.Month"></ScheduleView>
        <ScheduleView Option="View.Agenda"></ScheduleView>
    </ScheduleViews>
</SfSchedule>
@code {
    SfSchedule<AppointmentData> ScheduleRef;
    private int currentCount = 0;
    private void IncrementCount()
    {
        ScheduleRef.PreventRender();
        currentCount++;
    }
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

N> * **PreventRender** method accepts boolean argument that accepts true or false to disable or enable rendering respectively.
<br/> * **PreventRender** can be used only after the Scheduler component completes its initial rendering. Calling it during initial rendering has no effect.

## Avoid unnecessary component renders after Scheduler events

When a callback method is assigned to Scheduler events, **StateHasChanged** is called automatically in the parent component after the event completes.

You can prevent this re-rendering of the Scheduler component by calling **PreventRender**.

In the following example:

* The **OnCellClick** event is bound to a callback method, so when the cell click event completes, **StateHasChanged** is invoked for the parent component.

```cshtml
@using Syncfusion.Blazor.Schedule

<p style="color:green; font-size:20px">@Status</p>
<SfSchedule @ref="ScheduleRef" TValue="AppointmentData" Width="100%" Height="550px" @bind-SelectedDate="@CurrentDate">
    <ScheduleEvents TValue="AppointmentData" OnCellClick="OnCellClick" ActionCompleted="OnActionCompleted"></ScheduleEvents>
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
    SfSchedule<AppointmentData> ScheduleRef;
    string Status = string.Empty;
    DateTime CurrentDate = new DateTime(2020, 3, 10);
    public void OnCellClick(CellClickEventArgs args)
    {
        ScheduleRef.PreventRender();
    }
    public void OnActionCompleted(ActionEventArgs<AppointmentData> args)
    {
        ScheduleRef.PreventRender();
        if (args.ActionType == ActionType.EventCreate || args.ActionType == ActionType.EventChange)
        {
            Status = "Success";   // Status becomes success on event creation and update.
        }
    }
    List<AppointmentData> DataSource = new List<AppointmentData>
    {
    new AppointmentData { Id = 1, Subject = "Meeting", StartTime = new DateTime(2020, 3, 10, 9, 30, 0) , EndTime = new DateTime(2020, 3, 10, 12, 0, 0) }
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
    }
}
```

N> * **PreventRender** method internally overrides the **ShouldRender** method of the Scheduler to prevent rendering.
<br/> * It is recommended to use **PreventRender** for user-interactive events such as OnCellClick and OnEventClick for better performance.
<br/> * For events without arguments, such as **DataBound**, you can use **PreventRender** to disable rendering.