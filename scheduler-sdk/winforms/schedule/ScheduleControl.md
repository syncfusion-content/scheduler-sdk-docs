---
layout: post
title: ScheduleControl in Windows Forms Scheduler | Syncfusion
description: Learn about ScheduleControl user control that provides basic scheduling functionality in Windows Forms Scheduler.
platform: scheduler-sdk
control: Schedule
documentation: ug
appliesto: UI Component Suite, Scheduler SDK
---

# ScheduleControl in Windows Forms Scheduler

## Overview

The `ScheduleControl` is a powerful user control that brings comprehensive scheduling functionality to your Windows Forms applications. It provides an intuitive interface for managing appointments and events with support for multiple view types (daily, weekly, and monthly), appointment management capabilities, and rich customization options.

The control consists of several integrated components:
- **Schedule Grid**: Displays appointments in various views
- **Navigation Calendar**: Allows date selection and navigation
- **Caption Panel**: Provides navigation controls and context
- **Navigation Panel**: Hosts additional custom controls

## Getting Started

The `ScheduleControl` can be easily integrated into your Windows Forms application by adding it to your form and configuring its basic properties:

```csharp
// Create and configure the ScheduleControl
ScheduleControl schedule = new ScheduleControl();
schedule.ScheduleType = ScheduleViewType.WeekView;
schedule.DataSource = appointmentList;
this.Controls.Add(schedule);
```

## Understanding the Control Layout

The `ScheduleControl` consists of several distinct areas that work together to provide a complete scheduling experience:

### Caption Panel

The **Caption Panel** appears at the top of the ScheduleControl and serves as the primary navigation interface. It displays the current date range or schedule information and features two navigation buttons:
- **Forward Button**: Advances the schedule to the next period (day, week, or month based on the current view)
- **Backward Button**: Moves the schedule to the previous period

This panel helps users quickly navigate through time and provides context for the displayed schedule.

### Navigation Panel

The **Navigation Panel** is a flexible container area positioned adjacent to the main schedule display. This panel allows you to extend the control's functionality by adding custom controls such as:
- Status indicators
- Quick action buttons
- Additional filters or search controls
- Custom tools and utilities

Use the `AddControlToNavigationPanel` method to dynamically add controls to this area.

### Navigation Calendar

The **Navigation Calendar** is a GridControl-derived component that displays one or more month calendars. This interactive calendar enables users to:
- View multiple months simultaneously
- Select specific dates or date ranges
- Jump directly to any date in the schedule
- Display week numbers for better planning

The calendar synchronizes with the main schedule view, allowing seamless navigation between the two components.

## Core Properties

The `ScheduleControl` exposes several key properties that control its behavior and appearance:

### Display and Layout

**`ScheduleType`**
- Controls which view mode the schedule displays: daily, weekly, or monthly
- Determines how appointments are organized and presented
- Can be changed programmatically to provide flexible viewing options
- Example: `schedule.ScheduleType = ScheduleViewType.MonthView;`

**`Appearance`**
- Manages the visual styling of the ScheduleControl
- Accessed as a `ScheduleAppearance` object containing all appearance-related settings
- Allows customization of colors, fonts, and visual elements
- Affects how the control is rendered across all view types

### Data Management

**`DataSource`**
- Specifies the collection of appointments to be displayed
- Accepts any bindable data source containing appointment information
- Updates the schedule display whenever the data source changes
- Example: `schedule.DataSource = new List<Appointment> { /* appointments */ };`

### Component Access

**`Calendar`**
- Provides access to the navigation calendar component
- Allows direct manipulation of calendar settings and behavior
- Read-only property that returns the associated `NavigationCalendar` object
- Useful for programmatically controlling date selection

**`CaptionPanel`**
- Provides access to the caption panel component
- Enables customization of the header area
- Allows modification of caption-related settings
- Useful for adding additional header information or controls

**`NavigationPanel`**
- Provides access to the navigation panel container
- Enables dynamic addition or removal of custom controls
- Allows styling and layout customization of the panel area
- Reference point for the `AddControlToNavigationPanel` method

### Alerts and Notifications

**`EnableAlerts`**
- Controls whether appointment alerts are active
- When enabled, notifications appear as appointment times approach
- Useful for applications requiring reminder functionality
- Example: `schedule.EnableAlerts = true;`

## Working with Appointments

### Adding Appointments

**`PerformNewItemClick`**
- Displays a user-friendly dialog box for creating new appointments
- Provides a consistent interface for appointment entry
- Automatically validates and adds the appointment to the schedule
- Can be called programmatically to initiate the add dialog:

```csharp
// Display the new appointment dialog
schedule.PerformNewItemClick();
```

**`AddSpanAppointment`**
- Specialized method for creating multi-day appointments
- Useful for events that span multiple days (conferences, vacations, etc.)
- Automatically handles spanning logic and display
- Example:

```csharp
// Add a multi-day appointment
schedule.AddSpanAppointment(startDate, endDate, "Conference");
```

### Modifying Appointments

**`PerformEditItemClick`**
- Opens the appointment editing dialog
- Allows users to modify an existing appointment's details
- Ensures data consistency through validated input
- Triggered when users double-click an appointment or call this method:

```csharp
// Display the edit appointment dialog
schedule.PerformEditItemClick();
```

### Deleting Appointments

**`PerformDeleteItemClick`**
- Displays a confirmation dialog before removing an appointment
- Prevents accidental data loss with user confirmation
- Removes the appointment from the data source upon confirmation
- Example usage:

```csharp
// Display the delete appointment dialog
schedule.PerformDeleteItemClick();
```

### Changing View Types

**`PerformSwitchToScheduleViewTypeClick`**
- Dynamically switches the schedule display between view types
- Provides a programmatic way to change the `ScheduleType`
- Useful for implementing view-switching buttons or shortcuts
- Example:

```csharp
// Switch to monthly view
schedule.PerformSwitchToScheduleViewTypeClick(ScheduleViewType.MonthView);

// Switch to weekly view
schedule.PerformSwitchToScheduleViewTypeClick(ScheduleViewType.WeekView);
```

## Customizing the Navigation Panel

You can extend the `ScheduleControl` by adding custom controls to the navigation panel. This is useful for implementing specialized features or tools alongside your schedule.

### Adding Custom Controls

Use the `AddControlToNavigationPanel` method to insert additional controls:

```csharp
// Create a custom control
Label statusLabel = new Label() { Text = "Schedule Status" };

// Add it to the navigation panel
schedule.AddControlToNavigationPanel(statusLabel);
```

Multiple controls can be stacked vertically in the navigation panel, allowing you to build a comprehensive control interface.

## Responding to Schedule Events

The `ScheduleControl` provides several events that notify you of user interactions and data changes:

### Item Management Events

**`ItemChanged`**
- Raised when an appointment is modified
- Allows you to perform actions in response to appointment updates
- Enables logging, validation, or synchronization with external systems
- Example:

```csharp
schedule.ItemChanged += (sender, e) => 
{
    MessageBox.Show("Appointment was modified");
};
```

**`ScheduleAppointmentClick`**
- Raised when a user clicks or double-clicks an appointment
- Provides access to the selected appointment
- Useful for implementing custom actions or navigation
- Can be used to distinguish between single and double-clicks:

```csharp
schedule.ScheduleAppointmentClick += (sender, e) => 
{
    // Perform custom actions based on the clicked appointment
    ProcessAppointment(e.Appointment);
};
```

### Grid Creation Events

**`ScheduleGridCreated`**
- Raised when the internal schedule grid is created or recreated
- Allows access to the underlying `ScheduleGridControl` component
- Enables subscription to grid-specific events and customization
- Useful for advanced scenarios requiring direct grid manipulation:

```csharp
schedule.ScheduleGridCreated += (sender, e) => 
{
    // Access the schedule grid for customization
    ScheduleGridControl grid = e.ScheduleGrid;
    // Customize grid properties or subscribe to grid events
};
```

## Working with the Navigation Calendar

The navigation calendar component provides specialized properties and methods for calendar-specific functionality:

### Navigation Calendar Properties

**`DateValue`**
- Gets or sets the current date being displayed in the navigation calendar
- Synchronizes the calendar view with the main schedule
- Automatically updates the schedule when changed
- Example: `calendar.DateValue = DateTime.Now.AddDays(7);`

**`SelectedDates`**
- Returns the collection of dates currently selected in the calendar
- Read-only collection that reflects user selections
- Useful for understanding which dates the user has chosen
- Can be used to filter schedule data for selected dates

**`Today`**
- Gets or sets the "today" reference date for the calendar
- Used to highlight the current day in the calendar display
- Defaults to `DateTime.Today` but can be set to a different value
- Useful for testing or time-shifted applications

**`ShowWeekNumbers`**
- Controls whether week numbers are displayed in the calendar
- Useful for applications requiring ISO week numbering
- Helps users identify and discuss specific weeks
- Example: `calendar.ShowWeekNumbers = true;`

**`CalendarGrid`**
- Provides access to the underlying grid control rendering the calendars
- Enables advanced customization of the calendar display
- Read-only property returning the GridControl instance
- Used for styling or event subscription on the calendar grid

### Navigation Calendar Methods

**`FirstDayOfMonth`**
- Returns the first day of the month for a given date
- Useful for date calculations and period determination
- Example: `DateTime firstDay = calendar.FirstDayOfMonth(selectedDate);`

**`MondayBeforeDate`**
- Returns the most recent Monday before or on the given date
- Used for weekly view calculations and date alignment
- Helpful for implementing week-based scheduling logic

**`SundayAfterDate`**
- Returns the first Sunday on or after the given date
- Complements `MondayBeforeDate` for week boundary calculations
- Useful for determining week ending dates

### Navigation Calendar Events

**`DateValueChanged`**
- Raised when the `DateValue` property changes
- Allows you to respond to calendar navigation
- Enables synchronization between calendar and other UI elements
- Example:

```csharp
schedule.Calendar.DateValueChanged += (sender, e) => 
{
    // Update other UI elements based on the new date
    RefreshScheduleDisplay();
};
```
