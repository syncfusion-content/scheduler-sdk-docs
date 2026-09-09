---
layout: post
title: Properties of .NET MAUI Scheduler control | Syncfusion®
description: This section explains the properties, events and methods with Syncfusion® MAUI SfScheduler control.
platform: maui
control: SfScheduler
documentation: ug
---

# API Reference for .NET MAUI Scheduler

## Properties

<table>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_AgendaView" aria-label="View AgendaView property in API reference">AgendaView</a></td>
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SchedulerAgendaView.html" aria-label="View SchedulerAgendaView type in API reference">SchedulerAgendaView</a></td>
    <td>Configures the agenda panel that appears below the scheduler and lists appointments grouped by day, week, or month.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_AllowAppointmentDrag" aria-label="View AllowAppointmentDrag property in API reference">AllowAppointmentDrag</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.boolean" aria-label="View Boolean type in API reference">bool</a></td>
    <td>Lets users drag appointments to a new timeslot or resource to reschedule them. When disabled, appointments stay fixed in their original position.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_AllowAppointmentResize" aria-label="View AllowAppointmentResize property in API reference">AllowAppointmentResize</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.boolean" aria-label="View Boolean type in API reference">bool</a></td>
    <td>Lets users resize appointments by dragging their edges with the mouse to adjust the start or end time. Supported only on desktop platforms; resizing through touch is not available.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_AllowedViews" aria-label="View AllowedViews property in API reference">AllowedViews</a></td>
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SchedulerViews.html" aria-label="View SchedulerViews enum in API reference">SchedulerViews</a></td>
    <td>Chooses which built-in views (Day, Week, WorkWeek, Month, Timeline variants, Agenda) appear as quick-navigation options in the scheduler header. The active View is constrained to one of the values listed here.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_AllowViewNavigation" aria-label="View AllowViewNavigation property in API reference">AllowViewNavigation</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.boolean" aria-label="View Boolean type in API reference">bool</a></td>
    <td>When enabled, tapping a month cell or a date in the view header switches to the corresponding Day or TimelineDay view. Has no effect in the Day and TimelineDay views, and requires those views to be included in AllowedViews.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_AppointmentBorderStyle" aria-label="View AppointmentBorderStyle property in API reference">AppointmentBorderStyle</a></td>
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SchedulerAppointmentBorderStyle.html" aria-label="View SchedulerAppointmentBorderStyle type in API reference">SchedulerAppointmentBorderStyle</a></td>
    <td>Customizes the appointment border, including stroke color, stroke thickness, and corner radius. Not applied to appointments shown in the Agenda view on desktop.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_AppointmentContextMenu" aria-label="View AppointmentContextMenu property in API reference">AppointmentContextMenu</a></td>
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.MenuItemCollection.html" aria-label="View MenuItemCollection type in API reference">MenuItemCollection</a></td>
    <td>Defines the menu items shown when a user right-taps or long-presses an appointment. Built-in Add/Edit commands take effect only when AppointmentEditorMode is set to Add or Edit.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_AppointmentEditorMode" aria-label="View AppointmentEditorMode property in API reference">AppointmentEditorMode</a></td>
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.AppointmentEditorMode.html" aria-label="View AppointmentEditorMode enum in API reference">AppointmentEditorMode</a></td>
    <td>Controls whether the built-in appointment editor can create, edit, or delete appointments. Default is None, which disables editor actions.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_AppointmentMapping" aria-label="View AppointmentMapping property in API reference">AppointmentMapping</a></td>
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SchedulerAppointmentMapping.html" aria-label="View SchedulerAppointmentMapping type in API reference">SchedulerAppointmentMapping</a></td>
    <td>Maps properties of a custom appointment class to the scheduler fields. The mapped StartTime and EndTime fields are required; other mappings are optional.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_AppointmentResizeSettings" aria-label="View AppointmentResizeSettings property in API reference">AppointmentResizeSettings</a></td>
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.AppointmentResizeSettings.html" aria-label="View AppointmentResizeSettings type in API reference">AppointmentResizeSettings</a></td>
    <td>Customizes the resize border appearance, the time-indicator style, and the time-indicator text format shown while an appointment is being resized.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_AppointmentsSource" aria-label="View AppointmentsSource property in API reference">AppointmentsSource</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.object" aria-label="View Object type in API reference">object</a></td>
    <td>Binds the collection of appointments to display. Accepts a collection of SchedulerAppointment objects or custom objects configured through AppointmentMapping.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_AppointmentTextStyle" aria-label="View AppointmentTextStyle property in API reference">AppointmentTextStyle</a></td>
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SchedulerTextStyle.html" aria-label="View SchedulerTextStyle type in API reference">SchedulerTextStyle</a></td>
    <td>Customizes the text color, font family, font size, and font attributes of appointment labels across all views.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_AppointmentToolTipSettings" aria-label="View AppointmentToolTipSettings property in API reference">AppointmentToolTipSettings</a></td>
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.AppointmentToolTipSettings.html" aria-label="View AppointmentToolTipSettings type in API reference">AppointmentToolTipSettings</a></td>
    <td>Customizes the background, text style, and position of the tooltip that appears for appointments.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_AppointmentToolTipTemplate" aria-label="View AppointmentToolTipTemplate property in API reference">AppointmentToolTipTemplate</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/microsoft.maui.controls.datatemplate" aria-label="View DataTemplate type in API reference">DataTemplate</a></td>
    <td>Replaces the default appointment tooltip layout with a custom <code>DataTemplate</code>.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_BusyIndicatorTemplate" aria-label="View BusyIndicatorTemplate property in API reference">BusyIndicatorTemplate</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/microsoft.maui.controls.datatemplate" aria-label="View DataTemplate type in API reference">DataTemplate</a></td>
    <td>Replaces the default loading indicator with a custom template shown while appointments are being loaded.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_CalendarType" aria-label="View CalendarType property in API reference">CalendarType</a></td>
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.CalendarType.html" aria-label="View CalendarType enum in API reference">CalendarType</a></td>
    <td>Selects the calendar system used by the scheduler, such as Gregorian, Hebrew, or Hijri. Lunar-type calendars are not supported.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_CellBorderBrush" aria-label="View CellBorderBrush property in API reference">CellBorderBrush</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/microsoft.maui.controls.brush" aria-label="View Brush type in API reference">Brush</a></td>
    <td>Sets the border color of time-slot cells and month cells across all views.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_CellContextMenu" aria-label="View CellContextMenu property in API reference">CellContextMenu</a></td>
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.MenuItemCollection.html" aria-label="View MenuItemCollection type in API reference">MenuItemCollection</a></td>
    <td>Defines the menu items shown when a user right-taps or long-presses a timeslot cell, month cell, or all-day panel. Built-in Add/Edit commands take effect only when AppointmentEditorMode is set to Add or Edit.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_CellSelectionView" aria-label="View CellSelectionView property in API reference">CellSelectionView</a></td>
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SchedulerCellSelectionView.html" aria-label="View SchedulerCellSelectionView type in API reference">SchedulerCellSelectionView</a></td>
    <td>Customizes the appearance of the selection highlight on a cell, including stroke color, fill, corner radius, and an optional custom view.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_ContextMenuBackground" aria-label="View ContextMenuBackground property in API reference">ContextMenuBackground</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/microsoft.maui.controls.brush" aria-label="View Brush type in API reference">Brush</a></td>
    <td>Customizes the background color of the context menu shown over the scheduler.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_ContextMenuTextStyle" aria-label="View ContextMenuTextStyle property in API reference">ContextMenuTextStyle</a></td>
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SchedulerTextStyle.html" aria-label="View SchedulerTextStyle type in API reference">SchedulerTextStyle</a></td>
    <td>Customizes the text color, font family, font size, and font attributes of context menu items.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_DaysView" aria-label="View DaysView property in API reference">DaysView</a></td>
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SchedulerDaysView.html" aria-label="View SchedulerDaysView type in API reference">SchedulerDaysView</a></td>
    <td>Configures the appearance and behavior of the Day, Week, and WorkWeek views, including visible hour range, time-interval size, and time-ruler width.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_DisabledDateBackground" aria-label="View DisabledDateBackground property in API reference">DisabledDateBackground</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/microsoft.maui.controls.brush" aria-label="View Brush type in API reference">Brush</a></td>
    <td>Sets the background color of dates that fall outside the selectable range. Not applied to month cells or view-header cells.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_DisabledDateTextStyle" aria-label="View DisabledDateTextStyle property in API reference">DisabledDateTextStyle</a></td>
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SchedulerTextStyle.html" aria-label="View SchedulerTextStyle type in API reference">SchedulerTextStyle</a></td>
    <td>Customizes the text color, font family, font size, and font attributes of disabled dates across all views.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_DisplayDate" aria-label="View DisplayDate property in API reference">DisplayDate</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.datetime" aria-label="View DateTime type in API reference">DateTime</a></td>
    <td>Moves the scheduler to a specific date programmatically. Navigation is clamped to the MinimumDateTime and MaximumDateTime range.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_DoubleTappedCommand" aria-label="View DoubleTappedCommand property in API reference">DoubleTappedCommand</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.windows.input.icommand" aria-label="View ICommand type in API reference">ICommand</a></td>
    <td>Defines the command executed when a user double-taps a scheduler element. The SchedulerDoubleTappedEventArgs is passed as the command parameter.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_DragDropSettings" aria-label="View DragDropSettings property in API reference">DragDropSettings</a></td>
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.DragDropSettings.html" aria-label="View DragDropSettings type in API reference">DragDropSettings</a></td>
    <td>Customizes appointment drag-and-drop behavior, including whether auto-scrolling and navigation are allowed, and whether the time indicator is shown.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_EnableReminder" aria-label="View EnableReminder property in API reference">EnableReminder</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.boolean" aria-label="View Boolean type in API reference">bool</a></td>
    <td>Turns reminder alerts on or off for appointments. Must be enabled for the ReminderAlertOpening event to fire. Default is false.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_EnableSwipeNavigation" aria-label="View EnableSwipeNavigation property in API reference">EnableSwipeNavigation</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.boolean" aria-label="View Boolean type in API reference">bool</a></td>
    <td>Lets users switch between scheduler views using swipe gestures on touch devices or mouse-drag gestures on desktop.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_FirstDayOfWeek" aria-label="View FirstDayOfWeek property in API reference">FirstDayOfWeek</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.dayofweek" aria-label="View DayOfWeek enum in API reference">DayOfWeek</a></td>
    <td>Chooses the day treated as the first day of the week. Applies to the Week, WorkWeek, Month, TimelineWeek, TimelineWorkWeek, and TimelineMonth views.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_HeaderView" aria-label="View HeaderView property in API reference">HeaderView</a></td>
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SchedulerHeaderView.html" aria-label="View SchedulerHeaderView type in API reference">SchedulerHeaderView</a></td>
    <td>Customizes the scheduler header, including height, background, text format, and text style, across all views.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_IsAppointmentToolTipEnabled" aria-label="View IsAppointmentToolTipEnabled property in API reference">IsAppointmentToolTipEnabled</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.boolean" aria-label="View Boolean type in API reference">bool</a></td>
    <td>Shows or hides the appointment tooltip. On desktop the tooltip appears on hover; on mobile it appears on tap or long-press when appointment dragging is disabled.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_LongPressedCommand" aria-label="View LongPressedCommand property in API reference">LongPressedCommand</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.windows.input.icommand" aria-label="View ICommand type in API reference">ICommand</a></td>
    <td>Defines the command executed when a user performs a long press on a scheduler element. The SchedulerLongPressedEventArgs is passed as the command parameter.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_MaximumDateTime" aria-label="View MaximumDateTime property in API reference">MaximumDateTime</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.datetime" aria-label="View DateTime type in API reference">DateTime</a></td>
    <td>Sets the latest date the scheduler can display or navigate to. Dates beyond this value are disabled and cannot be selected.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_MinimumDateTime" aria-label="View MinimumDateTime property in API reference">MinimumDateTime</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.datetime" aria-label="View DateTime type in API reference">DateTime</a></td>
    <td>Sets the earliest date the scheduler can display or navigate to. Dates before this value are disabled and cannot be selected.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_MonthView" aria-label="View MonthView property in API reference">MonthView</a></td>
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SchedulerMonthView.html" aria-label="View SchedulerMonthView type in API reference">SchedulerMonthView</a></td>
    <td>Configures the appearance and behavior of the Month view, including appointment display mode, appointment count, and navigation direction.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_QueryAppointmentsCommand" aria-label="View QueryAppointmentsCommand property in API reference">QueryAppointmentsCommand</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.windows.input.icommand" aria-label="View ICommand type in API reference">ICommand</a></td>
    <td>Defines the command executed when the visible dates change, so appointments can be loaded on demand for the displayed range. The SchedulerQueryAppointmentsEventArgs is passed as the command parameter.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_ResourceView" aria-label="View ResourceView property in API reference">ResourceView</a></td>
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SchedulerResourceView.html" aria-label="View SchedulerResourceView type in API reference">SchedulerResourceView</a></td>
    <td>Configures resource grouping for the Timeline views. The Day, Week, WorkWeek, Month, and Agenda views display appointments without resource grouping.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_RightTappedCommand" aria-label="View RightTappedCommand property in API reference">RightTappedCommand</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.windows.input.icommand" aria-label="View ICommand type in API reference">ICommand</a></td>
    <td>Defines the command executed when a user right-taps a scheduler element on Windows or macOS. Not raised on Android or iOS.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_SelectableDayPredicate" aria-label="View SelectableDayPredicate property in API reference">SelectableDayPredicate</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.func-2" aria-label="View Func type in API reference">Func&lt;DateTime, bool&gt;</a></td>
    <td>Provides a function that decides which dates users can select. Applies to all views.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_SelectedAppointmentBackground" aria-label="View SelectedAppointmentBackground property in API reference">SelectedAppointmentBackground</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/microsoft.maui.controls.brush" aria-label="View Brush type in API reference">Brush</a></td>
    <td>Customizes the background color applied to a selected appointment.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_SelectedCellBackground" aria-label="View SelectedCellBackground property in API reference">SelectedCellBackground</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/microsoft.maui.controls.brush" aria-label="View Brush type in API reference">Brush</a></td>
    <td>Customizes the background color applied to a selected timeslot or month cell.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_SelectedDate" aria-label="View SelectedDate property in API reference">SelectedDate</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.datetime" aria-label="View DateTime type in API reference">DateTime?</a></td>
    <td>Selects a specific date or timeslot programmatically. Selection outside the MinimumDateTime–MaximumDateTime range is ignored.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_SelectionChangedCommand" aria-label="View SelectionChangedCommand property in API reference">SelectionChangedCommand</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.windows.input.icommand" aria-label="View ICommand type in API reference">ICommand</a></td>
    <td>Defines the command executed when the selected date, timeslot, or appointment changes. The SchedulerSelectionChangedEventArgs is passed as the command parameter.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_ShowAllowedViews" aria-label="View ShowAllowedViews property in API reference">ShowAllowedViews</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.boolean" aria-label="View Boolean type in API reference">bool</a></td>
    <td>Shows or hides the view selector in the scheduler header. Effective only when AllowedViews is configured.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_ShowBusyIndicator" aria-label="View ShowBusyIndicator property in API reference">ShowBusyIndicator</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.boolean" aria-label="View Boolean type in API reference">bool</a></td>
    <td>Shows or hides the loading indicator displayed while appointments are being loaded through QueryAppointments.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_ShowDatePickerButton" aria-label="View ShowDatePickerButton property in API reference">ShowDatePickerButton</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.boolean" aria-label="View Boolean type in API reference">bool</a></td>
    <td>Shows or hides the calendar popup arrow in the scheduler header. The arrow is not shown in the Agenda view because dates scroll inline.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_ShowNavigationArrows" aria-label="View ShowNavigationArrows property in API reference">ShowNavigationArrows</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.boolean" aria-label="View Boolean type in API reference">bool</a></td>
    <td>Shows or hides the previous and next navigation arrows in the scheduler header. The arrows are not shown in the Agenda view because dates scroll inline.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_ShowTodayButton" aria-label="View ShowTodayButton property in API reference">ShowTodayButton</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.boolean" aria-label="View Boolean type in API reference">bool</a></td>
    <td>Shows or hides the Today button in the scheduler header that jumps the scheduler to the current date.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_ShowWeekNumber" aria-label="View ShowWeekNumber property in API reference">ShowWeekNumber</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.boolean" aria-label="View Boolean type in API reference">bool</a></td>
    <td>Shows or hides the week number of the year. Not supported in the TimelineMonth view.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_TappedCommand" aria-label="View TappedCommand property in API reference">TappedCommand</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.windows.input.icommand" aria-label="View ICommand type in API reference">ICommand</a></td>
    <td>Defines the command executed when a user taps a scheduler element. The SchedulerTappedEventArgs is passed as the command parameter.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_TimelineView" aria-label="View TimelineView property in API reference">TimelineView</a></td>
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SchedulerTimelineView.html" aria-label="View SchedulerTimelineView type in API reference">SchedulerTimelineView</a></td>
    <td>Configures the appearance and behavior of the TimelineDay, TimelineWeek, TimelineWorkWeek, and TimelineMonth views, including visible hour range and time-interval size.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_TimeZone" aria-label="View TimeZone property in API reference">TimeZone</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.timezoneinfo" aria-label="View TimeZoneInfo type in API reference">TimeZoneInfo</a></td>
    <td>Sets the time zone used to create and display appointments. Useful for showing appointments in the client's local time or a fixed scheduling time zone. Not applied to all-day appointments.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_TodayHighlightBrush" aria-label="View TodayHighlightBrush property in API reference">TodayHighlightBrush</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/microsoft.maui.controls.brush" aria-label="View Brush type in API reference">Brush</a></td>
    <td>Customizes the highlight color used to indicate the current date in the scheduler.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_TodayTextStyle" aria-label="View TodayTextStyle property in API reference">TodayTextStyle</a></td>
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SchedulerTextStyle.html" aria-label="View SchedulerTextStyle type in API reference">SchedulerTextStyle</a></td>
    <td>Customizes the text appearance of the current date, including color, font, size, and attributes.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_View" aria-label="View View property in API reference">View</a></td>
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SchedulerView.html" aria-label="View SchedulerView enum in API reference">SchedulerView</a></td>
    <td>Selects the built-in scheduler view to display, such as Day, Week, WorkWeek, Month, or Timeline variants. Default is Day.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_ViewChangedCommand" aria-label="View ViewChangedCommand property in API reference">ViewChangedCommand</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.windows.input.icommand" aria-label="View ICommand type in API reference">ICommand</a></td>
    <td>Defines the command executed when the active view or the visible date range changes. The SchedulerViewChangedEventArgs is passed as the command parameter.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_WeekNumberStyle" aria-label="View WeekNumberStyle property in API reference">WeekNumberStyle</a></td>
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SchedulerWeekNumberStyle.html" aria-label="View SchedulerWeekNumberStyle type in API reference">SchedulerWeekNumberStyle</a></td>
    <td>Customizes the background, text color, font family, font size, and font attributes of the week number. Applied only when ShowWeekNumber is enabled, and not supported in the TimelineMonth view.</td>
</tr>
</table>

## Methods

<table>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_Backward" aria-label="View Backward method in API reference">Backward()</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Moves the scheduler to the previous set of dates. Has no effect in the Agenda view, where dates scroll inline.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_Forward" aria-label="View Forward method in API reference">Forward()</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Moves the scheduler to the next set of dates. Has no effect in the Agenda view, where dates scroll inline.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_ResumeAppointmentViewUpdate" aria-label="View ResumeAppointmentViewUpdate method in API reference">ResumeAppointmentViewUpdate()</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Restarts appointment rendering after SuspendAppointmentViewUpdate has paused it, applying all pending collection changes at once.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_SuspendAppointmentViewUpdate" aria-label="View SuspendAppointmentViewUpdate method in API reference">SuspendAppointmentViewUpdate()</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.void" aria-label="View Void type in API reference">void</a></td>
    <td>Pauses appointment rendering while the appointment collection is being updated in bulk. Use <code>ResumeAppointmentViewUpdate</code> to resume rendering and apply the changes.</td>
</tr>
</table>

## Events

<table>
<tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_AppointmentDragOver" aria-label="View AppointmentDragOver event in API reference">AppointmentDragOver</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" aria-label="View EventHandler type in API reference">EventHandler&lt;<a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.AppointmentDragOverEventArgs.html" aria-label="View AppointmentDragOverEventArgs type in API reference">AppointmentDragOverEventArgs&gt;</a></a></td>
    <td>Raised continuously while a user drags an appointment, providing the current drag time and target resource.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_AppointmentDragStarting" aria-label="View AppointmentDragStarting event in API reference">AppointmentDragStarting</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" aria-label="View EventHandler type in API reference">EventHandler&lt;<a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.AppointmentDragStartingEventArgs.html" aria-label="View AppointmentDragStartingEventArgs type in API reference">AppointmentDragStartingEventArgs&gt;</a></a></td>
    <td>Raised when a user starts dragging an appointment, providing the appointment and its original resource.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_AppointmentDrop" aria-label="View AppointmentDrop event in API reference">AppointmentDrop</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" aria-label="View EventHandler type in API reference">EventHandler&lt;<a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.AppointmentDropEventArgs.html" aria-label="View AppointmentDropEventArgs type in API reference">AppointmentDropEventArgs&gt;</a></a></td>
    <td>Raised when a user releases a dragged appointment onto a new timeslot or resource, providing the drop time and target resource.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_AppointmentEditorClosing" aria-label="View AppointmentEditorClosing event in API reference">AppointmentEditorClosing</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" aria-label="View EventHandler type in API reference">EventHandler&lt;<a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.AppointmentEditorClosingEventArgs.html" aria-label="View AppointmentEditorClosingEventArgs type in API reference">AppointmentEditorClosingEventArgs&gt;</a></a></td>
    <td>Raised before the appointment editor closes after a save, delete, or cancel action. The action can be canceled, or handling can be bypassed so custom logic saves the changes.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_AppointmentEditorOpening" aria-label="View AppointmentEditorOpening event in API reference">AppointmentEditorOpening</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" aria-label="View EventHandler type in API reference">EventHandler&lt;<a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.AppointmentEditorOpeningEventArgs.html" aria-label="View AppointmentEditorOpeningEventArgs type in API reference">AppointmentEditorOpeningEventArgs&gt;</a></a></td>
    <td>Raised before the appointment editor opens when a user double-taps an appointment or an empty timeslot. The editor can be canceled so a custom editor can be shown instead.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_AppointmentResizeEnd" aria-label="View AppointmentResizeEnd event in API reference">AppointmentResizeEnd</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" aria-label="View EventHandler type in API reference">EventHandler&lt;<a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.AppointmentResizeEndEventArgs.html" aria-label="View AppointmentResizeEndEventArgs type in API reference">AppointmentResizeEndEventArgs&gt;</a></a></td>
    <td>Raised when a user finishes resizing an appointment, providing the resized time and the resized edge.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_AppointmentResizeStart" aria-label="View AppointmentResizeStart event in API reference">AppointmentResizeStart</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" aria-label="View EventHandler type in API reference">EventHandler&lt;<a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.AppointmentResizeStartEventArgs.html" aria-label="View AppointmentResizeStartEventArgs type in API reference">AppointmentResizeStartEventArgs&gt;</a></a></td>
    <td>Raised when a user begins resizing an appointment, providing the appointment, resource, and the edge being dragged.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_AppointmentResizing" aria-label="View AppointmentResizing event in API reference">AppointmentResizing</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" aria-label="View EventHandler type in API reference">EventHandler&lt;<a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.AppointmentResizingEventArgs.html" aria-label="View AppointmentResizingEventArgs type in API reference">AppointmentResizingEventArgs&gt;</a></a></td>
    <td>Raised continuously while a user resizes an appointment. The resize action can be canceled.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_ContextMenuOpening" aria-label="View ContextMenuOpening event in API reference">ContextMenuOpening</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" aria-label="View EventHandler type in API reference">EventHandler&lt;<a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SchedulerContextMenuOpeningEventArgs.html" aria-label="View SchedulerContextMenuOpeningEventArgs type in API reference">SchedulerContextMenuOpeningEventArgs&gt;</a></a></td>
    <td>Raised when the appointment or cell context menu is about to open, providing context information about the tapped element.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_DoubleTapped" aria-label="View DoubleTapped event in API reference">DoubleTapped</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" aria-label="View EventHandler type in API reference">EventHandler&lt;<a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SchedulerDoubleTappedEventArgs.html" aria-label="View SchedulerDoubleTappedEventArgs type in API reference">SchedulerDoubleTappedEventArgs&gt;</a></a></td>
    <td>Raised when a user double-taps a scheduler element, providing the appointment, date, and scheduler element that was tapped.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_LongPressed" aria-label="View LongPressed event in API reference">LongPressed</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" aria-label="View EventHandler type in API reference">EventHandler&lt;<a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SchedulerLongPressedEventArgs.html" aria-label="View SchedulerLongPressedEventArgs type in API reference">SchedulerLongPressedEventArgs&gt;</a></a></td>
    <td>Raised when a user performs a long press on a scheduler element, providing the appointment, date, and scheduler element that was pressed.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_MonthInlineAppointmentTapped" aria-label="View MonthInlineAppointmentTapped event in API reference">MonthInlineAppointmentTapped</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" aria-label="View EventHandler type in API reference">EventHandler&lt;<a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.MonthInlineAppointmentTappedEventArgs.html" aria-label="View MonthInlineAppointmentTappedEventArgs type in API reference">MonthInlineAppointmentTappedEventArgs&gt;</a></a></td>
    <td>Raised when a user taps an appointment displayed in the inline expansion area of a month cell.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_QueryAppointments" aria-label="View QueryAppointments event in API reference">QueryAppointments</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" aria-label="View EventHandler type in API reference">EventHandler&lt;<a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SchedulerQueryAppointmentsEventArgs.html" aria-label="View SchedulerQueryAppointmentsEventArgs type in API reference">SchedulerQueryAppointmentsEventArgs&gt;</a></a></td>
    <td>Raised when the visible dates or the active view changes, so appointments can be loaded on demand for the displayed range. Not raised for add, delete, or update operations within the already-loaded range.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_RecurringAppointmentBeginningEdit" aria-label="View RecurringAppointmentBeginningEdit event in API reference">RecurringAppointmentBeginningEdit</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" aria-label="View EventHandler type in API reference">EventHandler&lt;<a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.RecurringAppointmentBeginningEditEventArgs.html" aria-label="View RecurringAppointmentBeginningEditEventArgs type in API reference">RecurringAppointmentBeginningEditEventArgs&gt;</a></a></td>
    <td>Raised when a user double-taps or presses Delete on a recurring appointment, allowing the edit mode (single occurrence or series) to be chosen.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_ReminderAlertOpening" aria-label="View ReminderAlertOpening event in API reference">ReminderAlertOpening</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" aria-label="View EventHandler type in API reference">EventHandler&lt;<a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.ReminderAlertOpeningEventArgs.html" aria-label="View ReminderAlertOpeningEventArgs type in API reference">ReminderAlertOpeningEventArgs&gt;</a></a></td>
    <td>Raised before a reminder alert is shown for an appointment, allowing the alert to be customized or dismissed. Requires EnableReminder to be true.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_RightTapped" aria-label="View RightTapped event in API reference">RightTapped</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" aria-label="View EventHandler type in API reference">EventHandler&lt;<a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SchedulerRightTappedEventArgs.html" aria-label="View SchedulerRightTappedEventArgs type in API reference">SchedulerRightTappedEventArgs&gt;</a></a></td>
    <td>Raised when a user right-taps a scheduler element on Windows or macOS. Not raised on Android or iOS.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_SelectionChanged" aria-label="View SelectionChanged event in API reference">SelectionChanged</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" aria-label="View EventHandler type in API reference">EventHandler&lt;<a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SchedulerSelectionChangedEventArgs.html" aria-label="View SchedulerSelectionChangedEventArgs type in API reference">SchedulerSelectionChangedEventArgs&gt;</a></a></td>
    <td>Raised when the selected date, timeslot, or appointment changes, providing the previous and new selected values.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_Tapped" aria-label="View Tapped event in API reference">Tapped</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" aria-label="View EventHandler type in API reference">EventHandler&lt;<a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SchedulerTappedEventArgs.html" aria-label="View SchedulerTappedEventArgs type in API reference">SchedulerTappedEventArgs&gt;</a></a></td>
    <td>Raised when a user taps a scheduler element, providing the appointment, date, and scheduler element that was tapped.</td>
</tr>

<tr valign="top">
    <td><a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SfScheduler.html#Syncfusion_Maui_Scheduler_SfScheduler_ViewChanged" aria-label="View ViewChanged event in API reference">ViewChanged</a></td>
    <td><a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" aria-label="View EventHandler type in API reference">EventHandler&lt;<a href="https://help.syncfusion.com/cr/maui/Syncfusion.Maui.Scheduler.SchedulerViewChangedEventArgs.html" aria-label="View SchedulerViewChangedEventArgs type in API reference">SchedulerViewChangedEventArgs&gt;</a></a></td>
    <td>Raised whenever the active view or the visible date range changes, providing the previous and new views and visible dates.</td>
</tr>
</table>