---
layout: post
title: Blazor Scheduler Overview and Features | Syncfusion
description: Learn how to use Blazor Scheduler for appointment scheduling with day, week, month, and timeline views, recurring events, resources, time zones, and CRUD actions.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---

# Overview in Blazor Scheduler

## Introduction to Syncfusion Blazor Scheduler

The [Blazor Scheduler](https://www.syncfusion.com/scheduler-sdk/blazor-scheduler) is a powerful and feature-rich event calendar component designed for creating and managing appointments and time based data with high performance and flexibility. It offers a comprehensive set of enterprise-grade capabilities, including built-in views from day to timeline year, recurrence handling, resource grouping with up to two levels, and timezone-aware event display. Built for scalability, it enables developers to create responsive scheduling applications for scenarios such as appointment booking, resource planning, and calendar-centric workflows.

## Common use cases

The Blazor Scheduler is ideal for a wide range of business scenarios:

| Use Case | Description | Key Features |
|----------|-------------|--------------|
| **Appointment Booking** | Book and manage customer appointments with confirmation workflows | CRUD Actions, Editor Template, Recurring Events |
| **Resource Planning** | Allocate rooms, staff, and equipment with group-level availability | Resources, Resource Grouping, Timeline Views |
| **Personal Calendars** | Track personal events, reminders, and daily routines | Views, Appointments, Notifications/Tooltips |
| **Corporate Scheduling** | Coordinate meetings across teams, regions, and time zones | Timezone, Working Hours, Shared Events |
| **Healthcare & Services** | Manage doctor, therapist, and service-provider schedules | Timeline Views, Block Events, Resource Grouping |
| **Event Management** | Plan conferences, shifts, and multi-day programs | Header Rows, Spanned and All-day Events, Export |

## Data connectivity

The Blazor Scheduler enables multiple data binding approaches, offering flexibility in choosing the right strategy for different application architectures. The Scheduler can work with in-memory collections, connect to remote services, or leverage databases and ORM frameworks for seamless integration.

**Data Binding Approaches**

- **[List binding](./data-binding#list-binding)** — Bind the Scheduler to local collections and lists for fast data access without external dependencies. Ideal for small to medium datasets and rapid prototyping.
- **[ObservableCollection](./data-binding#observablecollection)** — Automatically reflect added and removed appointments without manual refresh.
- **[Remote data](./data-binding#remote-data)** — Connect to **web services, REST APIs**, OData, and Web API endpoints for scalable applications.
- **[Load on demand](./data-binding#load-on-demand)** — Fetch appointments lazily as the user navigates between dates for large datasets.
- **[Custom binding](./data-binding#custom-binding)** — Handle data operations manually when services require custom processing.

**Database & Service Integration**

| Feature | Key Benefit | Best For |
|---------|---------------|----------|
| **[SQL Server data binding](./data-binding#sql-server-data-bindingsql-client)** | Direct SqlClient-based binding | Enterprise applications, relational data |
| **[CRUD using Entity Framework](./data-binding#performing-crud-using-entity-framework)** | ORM-based database operations | ASP.NET backends, Entity Framework models |
| **[Web API adaptor](./data-binding#web-api-adaptor)** | RESTful endpoint integration | Remote services, microservices |
| **[Url adaptor](./data-binding#url-adaptor)** | Simple HTTP endpoint binding | Quick integrations |
| **[GraphQL Adaptor](./graphql-adptor)** | Query modern APIs with optimized payloads | Modern APIs |
| **[PostgreSQL](./postgresql)** | Direct PostgreSQL database binding | Cross-platform data layers |
| **[Minimal API](./minimalapi)** | Lightweight .NET endpoint binding | .NET-native service APIs |

## Views

The Scheduler includes a wide variety of view modes, each with its own configuration options:

| View | Description | Best For |
|------|-------------|----------|
| **[Day, Week, Work Week](./views)** | Vertical time slots for one day or a week of events | Detailed daily planning |
| **[Month](./views)** | Calendar-style month cells with event indicators | Overview of the month |
| **[Agenda and Month Agenda](./views)** | Grouped list of upcoming events | Compact listing scenarios |
| **[Timeline Day/Week/Work Week/Month/Year](./views)** | Horizontal event lanes with time flowing left to right | Resource and staff planning |
| **[View-specific configuration](./views#view-specific-configuration)** | Apply per-view settings such as start hour and date format | Fine-grained view control |
| **[Extending view intervals](./views#extending-view-intervals)** | Display custom intervals such as bi-weekly or two-month views | Non-standard interval spans |

## Appointments & events

The Scheduler provides comprehensive event management capabilities that support every aspect of creating, displaying, and manipulating appointments:

**Event Types**

| Feature | Purpose | Key Benefit |
|---------|---------|-------------|
| **[Normal events](./appointments#normal-events)** | Standard start/end appointments | Core scheduling |
| **[All-day events](./appointments#all-day-events)** | Events spanning the whole day | Holidays, occurrences |
| **[Spanned events](./appointments#spanned-events)** | Multi-day events | Travel, conferences |
| **[Block Date and Time](./appointments#block-date-and-time)** | Reserve slots to prevent booking | Lunch breaks, maintenance |
| **[Recurring events](./recurring-events)** | Daily, weekly, monthly, and yearly repeat patterns with exception handling | Repeating schedules |

**Event Interaction**

| Feature | Purpose | Key Benefit |
|---------|---------|-------------|
| **[Event Drag and Drop](./appointment-drag-and-drop)** | Reschedule by dragging to a new slot | Quick rescheduling |
| **[Event Resizing](./appointment-resizing)** | Extend or shorten event duration by dragging handlers | Fast duration changes |
| **[Event editor](./editor-template#event-editor)** | Built-in editor with default fields | Quick event creation |
| **[Custom editor template](./editor-template#customizing-event-editor-using-template)** | Reuse custom Blazor forms for editing | Custom data entry |
| **[Appointment customization](./appointment-customization)** | Template-driven event appearance | Branded event visuals |
| **[Customizing the order of the overlapping events](./appointments#customizing-the-order-of-the-overlapping-events)** | Control the overlap order of simultaneous events | Readable overlapping events |

**CRUD Actions**

| Feature | Purpose | Key Benefit |
|---------|---------|-------------|
| **[Add](./crud-actions#add)** | Create new events from UI or code | User-driven creation |
| **[Edit](./crud-actions#edit)** | Update event details inline or via editor | Error correction workflows |
| **[Delete](./crud-actions#delete)** | Remove single or multiple appointments with confirmation | Clean data management |

## Resources

The Scheduler supports assigning appointments to one or more resources such as rooms, staff, or equipment, with flexible grouping options:

| Feature | Purpose | Key Benefit |
|---------|---------|-------------|
| **[Resource fields](./resources#resource-fields)** | Map resource data to event fields | Data-driven allocation |
| **[Scheduler with multiple resources](./resources#scheduler-with-multiple-resources)** | Group events by two resource levels | Team and room scenarios |
| **[Resource grouping](./resources#resource-grouping)** | Split views by date or resource | Comparative availability views |
| **[Working with shared events](./resources#working-with-shared-events)** | Assign one event to multiple resources | Group meetings |
| **[Simple resource header customization](./resources#simple-resource-header-customization)** | Template support for resource headers | Custom presentation |
| **[Expand and collapse resource fields](./resources#expand-and-collapse-resource-fields)** | Collapse resource trees for a compact view | Navigable large resource sets |
| **[Different working days and hours for resources](./resources#setting-different-working-days-and-hours-for-resources)** | Per-resource availability patterns | Shift-based planning |

## Timezone & time configuration

The Scheduler provides native timezone support so appointments display accurately for users in any region:

| Feature | Purpose | Key Benefit |
|---------|---------|-------------|
| **[Create appointments in different time zones](./timezone#create-appointments-in-different-time-zones)** | Per-event timezone capture | Accurate cross-region data |
| **[Display appointments based on Scheduler time zone](./timezone#display-appointments-based-on-scheduler-time-zone)** | Render events in a fixed application timezone | Centralized scheduling |
| **[Display Appointments based on client’s time zone](./timezone#display-appointments-based-on-clients-time-zone)** | Adapt to each user's local timezone | Global user bases |
| **[Set working days](./working-hours#set-working-days)** | Configure the business week | Region-specific work weeks |
| **[Hiding weekend days](./working-hours#hiding-weekend-days)** | Remove weekends from view | Work-only calendars |
| **[Setting different time slot duration](./timescale#setting-different-time-slot-duration)** | Control slot granularity (15/30/60 minutes) | Industry-specific precision |

## User experience & interaction

The Scheduler provides a comprehensive, accessible user experience with extensive customization options, flexible interaction modes, and accessibility standards compliance:

| Feature | Purpose | Key Benefit |
|---------|---------|-------------|
| **[Header bar](./header-bar)** | Navigate dates and views with a customizable toolbar | Familiar navigation |
| **[Context Menu](./context-menu)** | Right-click access to scheduler actions | Desktop-feel productivity |
| **[Clipboard](./clipboard)** | Copy and paste appointments within and across schedulers | Quick duplication |
| **[Cell customization](./cell-customization)** | Style and template the work cells | Branded calendar surfaces |
| **[Header rows](./header-rows)** | Add year, month, and week rows to timeline views | Multi-level date context |
| **[Row auto height](./row-auto-height)** | Expand rows to fit overlapping events naturally | Readable dense calendars |
| **[Dimensions](./dimensions)** | Control width, height, and auto-sizing behavior | Predictable layout integration |
| **[Interaction settings](./scheduler-interactions)** | Configure navigation, resize, and drag behaviors | Fine-grained UX control |

## Performance

The Scheduler is engineered for exceptional performance, enabling smooth operation with large datasets and long date ranges:

| Feature | Purpose | Key Benefit |
|---------|---------|-------------|
| **[Virtual Scrolling](./virtual-scrolling)** | Render only visible appointments as the user scrolls | Smooth scrolling through years of data |
| **[Virtual scrolling with templates](./virtual-scrolling#virtual-scrolling-with-templates)** | Combine virtualization with custom cell templates | Visual richness at scale |
| **[Enabling lazy loading for appointments](./virtual-scrolling#enabling-lazy-loading-for-appointments)** | Fetch appointments on demand | Reduced initial load time |
| **[WebAssembly Performance](./webassembly-performance)** | Rendering optimization guidance for WASM apps | Optimized WASM responsiveness |

## Export & data exchange

The Scheduler provides comprehensive output and interoperability capabilities:

| Feature | Purpose | Key Benefit |
|---------|---------|-------------|
| **[Excel Exporting](./exporting#excel-exporting)** | Export events to Excel for analysis and sharing | Spreadsheet-based reporting |
| **[Exporting calendar events as ICS file](./exporting#exporting-calendar-events-as-ics-file)** | Standard calendar format export | Interoperability with Outlook, Google |
| **[Importing events from other calendars](./exporting#importing-events-from-other-calendars)** | Load events from external ICS calendars | Migration and sync workflows |

## Globalization & accessibility

The Blazor Scheduler is fully accessible and compliant with Web Content Accessibility Guidelines (WCAG) standards:

- **[WAI-ARIA attributes](./accessibility#wai-aria-attributes)** — Accessible roles and attributes for the Scheduler UI
- **[Keyboard interaction](./accessibility#keyboard-interaction)** — Complete scheduler operation via keyboard
  - Tab / Shift+Tab — Navigate between focusable areas
  - Arrow keys — Navigate between cells and events
  - Enter — Open the editor on a selected cell or event
  - Delete — Remove the selected event
- **[Ensuring accessibility](./accessibility#ensuring-accessibility)** — Validation guidance for accessible schedulers
- **[Setting date format](./localization#setting-date-format)** and **[Time mode](./localization#time-mode)** — Culture-aware formats and 12/24-hour display
- **[Displaying Scheduler in RTL mode](./localization#displaying-scheduler-in-rtl-mode)** — Right-to-left rendering for RTL languages

## Advanced features

The Scheduler includes sophisticated capabilities designed for complex enterprise scheduling scenarios:

| Feature | Purpose | Use Case | Key Benefit |
|---------|---------|----------|-------------|
| **[State Persistence](./state-persistence)** | Save and restore scheduler state across sessions | Scroll position, date, and view retention | Personalized experience |
| **[Events](./events)** | Handle lifecycle, action, and rendering events | Custom workflows and integrations | Deep integration points |
| **[Style and Appearance](./scheduler-styling)** | Customize every element with CSS | Work cells, event bars, header, and popups | Complete visual control |

## System requirements

The Blazor Scheduler works with:

- **Blazor Version**: .NET 8.0 or higher
- **Hosting Models**: Blazor Server, Blazor WebAssembly, Blazor Web App
- **Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile**: iOS Safari, Android Chrome

## Quick links

**Getting Started:**
- [Blazor Web App Guide](./getting-started-webapp)
- [Blazor WebAssembly Guide](./getting-started)
- [Blazor Server App Guide](./getting-started-with-server-app)
- [Blazor Hybrid MAUI App Guide](./getting-started-with-maui-app)

**Popular Features:**
- [Views](./views) — 11 built-in calendar views
- [Recurring Events](./recurring-events) — Repeat patterns with exceptions
- [Resources](./resources) — Grouping by staff, rooms, and equipment
- [Appointments](./appointments) — All-day, spanned, and block events
- [Timezone](./timezone) — Timezone-aware event display
- [Exporting](./exporting) — Excel and ICS calendar output

## Support & Resources

- **Questions?** Visit the [Syncfusion Support Portal](https://www.syncfusion.com/support)
- **Code Examples?** Browse [Blazor Scheduler Demos](https://www.syncfusion.com/scheduler-sdk/blazor-scheduler) and samples
- **API Details?** See [Scheduler API Reference](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Schedule.SfSchedule-1.html)
- **Community?** Join the [Syncfusion Community Forum](https://www.syncfusion.com/forums/blazor-components)
- **What's New?** Check [Release Notes](https://help.syncfusion.com/scheduler-sdk/release-notes)
