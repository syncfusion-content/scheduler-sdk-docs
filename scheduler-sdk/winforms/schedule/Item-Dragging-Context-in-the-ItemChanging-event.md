---
layout: post
title: Item Dragging Context in Windows Forms Scheduler | Syncfusion
description: Learn about item dragging context in the ItemChanging event to detect dragging and cancel items in Windows Forms Scheduler.
platform: scheduler-sdk
control: Schedule
documentation: ug
appliesto: UI Component Suite, Scheduler SDK
---

# Item Dragging Context in Windows Forms Scheduler

The ItemDragHitContext feature enables you to determine where an appointment is dropped during a drag-and-drop operation in the ScheduleControl. By handling the ItemChanging event, you can identify whether the appointment is dropped in the Schedule area or Calendar area and perform custom actions based on the drop location. This feature also allows you to cancel drag-and-drop operations when required.

## Use case scenario

Use the ItemDragHitContext property when you need to:

- Determine the target area of a dragged appointment.
- Restrict appointments from being dropped in specific areas.
- Implement custom validation during drag-and-drop operations.
- Perform different actions based on the drop location.

## ItemDragHitContext Property

The ItemDragHitContext property identifies the area over which an appointment is being dragged or dropped. This information is available through the ItemChanging event during drag-and-drop operations.

### Property

<table>
<tr>
<th>
Property </th><th>
Description </th><th>
Data Type </th></tr>
<tr>
<td>
ItemDragHitContext</td><td>
Specifies the area where an appointment is currently being dragged or dropped within the Schedule control.</td><td>
enum</td></tr>
</table>

## ItemChanging Event

The ItemChanging event occurs when an appointment is being modified, including drag-and-drop operations. You can use this event to inspect the drag context and cancel the operation if necessary.

### Event

<table>
<tr>
<th>
Event</th><th>
Parameters</th><th>
Description</th></tr>
<tr>
<td>
ItemChanging</td><td>
object sender, ScheduleAppointmentCancelEventArgs e</td><td>
Occurs when an IScheduleAppointment is being modified. This event provides access to drag-and-drop context information and supports cancellation of the operation.</td></tr>
</table>

### Sample link

You can get the schedule sample from the following online location:

[http://samples.syncfusion.com/windowsforms](http://samples.syncfusion.com/windowsforms)

## Detecting the Drag-and-Drop Target Area

Follow these steps to determine where an appointment is dropped in the Schedule control.

**Step 1**: Create a Schedule Application

Create a Windows Forms application and add a ScheduleControl to the form. Then add one or more appointments to the schedule.

**Step 2**: Subscribe to the ItemChanging Event

Register the `ItemChanging` event for the Schedule control.

{% capture codesnippet1 %}​
{% tabs %}
{% highlight c# %}
using Syncfusion.Windows.Forms.Schedule;

this.scheduleControl1.ItemChanging += new ScheduleAppointmentChangingEventHandler(scheduleControl1_ItemChanging);
{% endhighlight %}
{% highlight vb %}
Imports Syncfusion.Windows.Forms.Schedule

AddHandler scheduleControl1.ItemChanging, AddressOf scheduleControl1_ItemChanging
{% endhighlight %}
{% endtabs %}
{% endcapture %}
{{ codesnippet1 | OrderList_Indent_Level_1 }}

**Step 3**: Retrieve the Drag Context

In the event handler, check the `ItemDragHitContext` property to determine the location where the appointment was dropped.

{% tabs %}
{% highlight c# %}
void scheduleControl1_ItemChanging(object sender, ScheduleAppointmentCancelEventArgs e)
{

    if (e.Action == ItemAction.ItemDrag)
    {
         Console.WriteLine("Dropped Area :" + e.ItemDragHitContext);
    }
}
{% endhighlight %}
{% highlight vb %}
Private Sub scheduleControl1_ItemChanging(ByVal sender As Object, ByVal e As ScheduleAppointmentCancelEventArgs)

     If e.Action = ItemAction.ItemDrag Then
         Console.WriteLine("Dropped Area :" + e.ItemDragHitContext.ToString())
     End If
End Sub
{% endhighlight %}
{% endtabs %}

When an appointment is dropped, the ItemDragHitContext property returns the corresponding target area, enabling you to implement custom logic based on the drop location.

## Preventing Appointments from Being Dropped in Specific Areas

You can cancel a drag-and-drop operation by checking the value of the `ItemDragHitContext` property and setting the `Cancel` property to `true`.

The following example prevents appointments from being dropped in the Calendar area:

{% tabs %}
{% highlight c# %}
void scheduleControl1_ItemChanging(object sender, ScheduleAppointmentCancelEventArgs e)
{

   if (e.ItemDragHitContext == ItemDragHitContext.Calendar)
        e.Cancel = true;
}
{% endhighlight %}
{% highlight vb %}
Private Sub scheduleControl1_ItemChanging(ByVal sender As Object, ByVal e As ScheduleAppointmentCancelEventArgs)

    If e.ItemDragHitContext = ItemDragHitContext.Calendar Then
        e.Cancel = True
    End If
End Sub
{% endhighlight %}
{% endtabs %}

In this example, whenever a user attempts to drop an appointment into the Calendar area, the operation is canceled automatically.
