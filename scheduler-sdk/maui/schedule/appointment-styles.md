---
layout: post
title: Appointment Styles in .NET MAUI Scheduler | Syncfusion
description: Learn how to change the appearance of appointments in the Syncfusion .NET MAUI Scheduler using predefined appointment styles such as Filled, Tonal, Outlined, and more.
platform: maui
control: SfScheduler
documentation: ug
keywords : .net maui scheduler, .net maui scheduler appointment styles, .net maui scheduler event styles, .net maui scheduler appointment appearance, .net maui scheduler appointment customization.
---

# Appointment Styles in .NET MAUI SfScheduler

The [.NET MAUI Scheduler](https://www.syncfusion.com/maui-controls/maui-scheduler) (SfScheduler) provides predefined appointment styles that change how appointments are painted in the scheduler views. Use the `AppointmentStyle` property to apply a style to all appointments with a single setting, without using templates.

The style changes only how the appointment color is painted. The color, size, position, and tap area of the appointments do not change. The default value is `Default`, which keeps the appearance of earlier releases.

## Apply an appointment style

Set the `AppointmentStyle` property to a value of the `SchedulerAppointmentStyle` enum.

{% tabs %}
{% highlight xaml tabtitle="MainPage.xaml" hl_lines="2" %}

<scheduler:SfScheduler View="Week"
                       AppointmentStyle="Tonal" />

{% endhighlight %}
{% highlight c# tabtitle="MainPage.xaml.cs" hl_lines="3" %}

SfScheduler scheduler = new SfScheduler();
scheduler.View = SchedulerView.Week;
scheduler.AppointmentStyle = SchedulerAppointmentStyle.Tonal;
this.Content = scheduler;

{% endhighlight %}
{% endtabs %}

## Available styles

| Style | Appearance |
|---|---|
| `Default` | Unchanged rendering. |
| `Filled` | Solid fill of the appointment color. |
| `Tonal` | Light tint of the appointment color with bold text in a darker shade, rounded corners, and no border. |
| `Bordered` | Solid fill with a thin border in a darker shade. |
| `Outlined` | Transparent body with an outline in the appointment color. |
| `Traced` | Very light tint with a thin border in a darker shade. |
| `Indented` | Light tint with a thick bar at the leading edge. |
| `Dashed` | Light tint with a dashed border around the whole appointment and rounded corners. |
| `Rounded` | Light tint with fully rounded (pill) corners. |

## Text appearance

Styled appointments draw the subject vertically centered, with 8 px of padding at the start and end. If the `AppointmentTextStyle.FontSize` is not set, the text size is 14 (12 in appointments that are too short for it). An explicit font size is always used as set.

The text color follows the selected style. To use a different color, set the `TextColor` of the [SchedulerAppointment](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SchedulerAppointment.html), which takes precedence over the style.

## Drag and drop and resizing

The appointment preview shown while dragging or resizing an appointment is drawn in the same style as the appointment.

## Supported views

The style applies to timed and all-day appointments in the following views:

* Day, Week, and WorkWeek
* Month
* TimelineDay, TimelineWeek, TimelineWorkWeek, and TimelineMonth

N> The following always use the `Default` appearance:
* The Agenda view and the month inline panel.
* Appointments that use an appointment template.
* Appointments that have a `BufferBefore` or `BufferAfter` while `EnableBuffer` is `true`. This keeps the appointment and its buffer bands as one continuous block.

N> When `AppointmentStyle` is not `Default`, it overrides the [AppointmentBorderStyle](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SchedulerAppointmentBorderStyle.html) and the `Stroke` of each appointment. An undefined value is treated as `Default`.
