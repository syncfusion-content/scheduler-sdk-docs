---
layout: post
title: Event Buffer in .NET MAUI Scheduler | Syncfusion
description: Learn how to add buffer time before and after appointments in the Syncfusion .NET MAUI Scheduler, customize the buffer appearance, and prevent conflicts.
platform: maui
control: SfScheduler
documentation: ug
keywords : .net maui scheduler, .net maui scheduler event buffer, .net maui scheduler buffer time, .net maui scheduler travel time, .net maui scheduler preparation time, .net maui scheduler appointment buffer.
---

# Event Buffer in .NET MAUI SfScheduler

The [.NET MAUI Scheduler](https://www.syncfusion.com/maui-controls/maui-scheduler) (SfScheduler) allows each appointment to have a buffer time before and after it, such as travel, preparation, or clean-up time. The buffer is displayed as a band beside the appointment, and it is considered when the scheduler detects overlapping appointments.

## Enable event buffer

Set the `EnableBuffer` property to `true` to display the buffers. The default value is `false`. When it is `false`, the buffer values are preserved in the data but have no effect.

Specify the buffer length in minutes using the `BufferBefore` and `BufferAfter`properties of the [SchedulerAppointment](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SchedulerAppointment.html). The default value of both is `0`.

{% tabs %}
{% highlight xaml tabtitle="MainPage.xaml" hl_lines="2" %}

<scheduler:SfScheduler x:Name="Scheduler"
                       View="Week"
                       EnableBuffer="True" />

{% endhighlight %}
{% highlight c# tabtitle="MainPage.xaml.cs" hl_lines="3 11 12" %}

SfScheduler scheduler = new SfScheduler();
scheduler.View = SchedulerView.Week;
scheduler.EnableBuffer = true;

var appointments = new ObservableCollection<SchedulerAppointment>();
appointments.Add(new SchedulerAppointment()
{
    Subject = "Surgery",
    StartTime = new DateTime(2026, 11, 5, 10, 0, 0),
    EndTime = new DateTime(2026, 11, 5, 11, 0, 0),
    BufferBefore = 15,
    BufferAfter = 30,
});
scheduler.AppointmentsSource = appointments;
this.Content = scheduler;

{% endhighlight %}
{% endtabs %}

N> The buffer is displayed in the `Day`, `Week`, `WorkWeek`, `TimelineDay`, `TimelineWeek`, and `TimelineWorkWeek` views, when the time scale is enabled. In other views, such as `Month` and `Agenda`, the buffer is not drawn but is still considered for overlap detection. All-day appointments do not have a buffer.

N> Negative values, or values greater than `1440` minutes (24 hours), are treated as `0`.

## Map buffer fields from a custom business object

When the appointments are created from a custom business object, map its fields using the `BufferBefore` and `BufferAfter` properties of the [SchedulerAppointmentMapping](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SchedulerAppointmentMapping.html). The mapped fields must be of type `int`.

{% tabs %}
{% highlight xaml tabtitle="MainPage.xaml" hl_lines="4 5" %}

<scheduler:SfScheduler View="Week"
                       EnableBuffer="True">
    <scheduler:SfScheduler.AppointmentMapping>
        <scheduler:SchedulerAppointmentMapping
            Subject="EventName"
            StartTime="From"
            EndTime="To"
            BufferBefore="TravelBefore"
            BufferAfter="TravelAfter" />
    </scheduler:SfScheduler.AppointmentMapping>
</scheduler:SfScheduler>

{% endhighlight %}
{% highlight c# tabtitle="MainPage.xaml.cs" hl_lines="7 8" %}

scheduler.AppointmentMapping = new SchedulerAppointmentMapping()
{
    Subject = "EventName",
    StartTime = "From",
    EndTime = "To",
    BufferBefore = "TravelBefore",
    BufferAfter = "TravelAfter",
};

{% endhighlight %}
{% highlight c# tabtitle="Meeting.cs" %}

public class Meeting
{
    public string EventName { get; set; }
    public DateTime From { get; set; }
    public DateTime To { get; set; }
    public int TravelBefore { get; set; }
    public int TravelAfter { get; set; }
}

{% endhighlight %}
{% endtabs %}

## Overlap detection with buffers

When `AllowOverlap` is `false`, the scheduler compares appointments including their buffers. Two appointments conflict if their appointment times or buffers overlap. Appointments that are back-to-back, where one ends exactly when the next buffered range starts, do not conflict.

This is applied when the appointment is added or edited in the appointment editor, dragged and dropped, or resized. In the Day and Timeline views, appointments whose buffered ranges overlap are also arranged side by side.

## Drag and drop and resizing

When an appointment is dragged, the buffer bands move along with it, and the drop is validated using the buffered range. Only the start and end time of the appointment are updated on drop, so the buffer is retained automatically.

When an appointment is resized, only the dragged edge moves, and the buffer on that side moves with it.

## Recurring appointments

The occurrences of a recurring appointment inherit the buffer of the series. An exception occurrence can have its own buffer values, including `0`.

## Appointment editor

When `EnableBuffer` is `true`, the built-in appointment editor shows **Buffer before (min)** and **Buffer after (min)** numeric fields for timed appointments. The value range is `0` to `1440` minutes. The quick view also shows a summary of the buffer when either value is non-zero. The labels are localized, as described in the [localization](https://help.syncfusion.com/maui/scheduler/localization) section.

## Customize the buffer appearance

By default, each buffer band is displayed as a lighter tone of the appointment background, next to the appointment. Use the `BufferTemplate` property to customize the content of the buffer bands, for example, to show an icon and the duration. The same template is used for both the before and after buffers.

The binding context of the template is `SchedulerBufferInfo`, which has the following properties.

| Property | Description |
|---|---|
| `Appointment` | The appointment that owns the buffer. |
| `Position` | Whether the buffer is `Before` or `After` the appointment `SchedulerBufferPosition`. |
| `Duration` | The full length of the buffer. |
| `StartTime` | The start time of the buffer. |
| `EndTime` | The end time of the buffer. |
| `Resource` | The resource of the lane in which the buffer is drawn in resource views; otherwise `null`. |

{% tabs %}
{% highlight xaml tabtitle="MainPage.xaml" hl_lines="3 4 5 6 7 8 9 10 11" %}

<scheduler:SfScheduler View="Week"
                       EnableBuffer="True">
    <scheduler:SfScheduler.BufferTemplate>
        <DataTemplate>
            <Label Text="{Binding Duration.TotalMinutes, StringFormat='{0} min'}"
                   FontSize="10"
                   TextColor="Gray"
                   HorizontalOptions="Center"
                   VerticalOptions="Center" />
        </DataTemplate>
    </scheduler:SfScheduler.BufferTemplate>
</scheduler:SfScheduler>

{% endhighlight %}
{% endtabs %}

N> The template is created for each visible band segment and clipped to the band. If the template cannot be created, the default band is displayed.

## Restrict the drop based on a resource

To restrict dropping an appointment to specific resources, set `Cancel` to `true` in the `AppointmentDrop` event, based on `Appointment`, `SourceResource`, and `TargetResource`. The drop is rejected when the appointment is dropped, and no indication is shown while dragging.

## ICS import and export

When `EnableBuffer` is `true`, the buffers are exported as the `X-BUFFER-BEFORE` and `X-BUFFER-AFTER` properties, for example, `PT15M`, and only when their values are not `0`. The start and end times of the appointment are not changed. Files without these properties are imported with the buffer set to `0`.
