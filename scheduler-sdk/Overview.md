---
layout: post
title: Syncfusion Scheduler SDK Overview
description: Learn about the Syncfusion Scheduler SDK to create and manage appointments with views, recurrence, and resources across multiple platforms.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://helpstaging.syncfusion.com/scheduler-sdk
---

# Welcome to Syncfusion® Scheduler SDK

The Essential Studio® Scheduler SDK provides a flexible, high-performance event calendar built for managing time-based data and resources. It is commonly used to build booking systems, appointment scheduling solutions, and resource planning applications where accuracy, usability, and scalability matter. Designed to handle complex scheduling scenarios, it helps teams deliver rich, user-friendly calendar experiences without extensive custom UI development. It supports both web and desktop platforms.

---

## Included Components

### 1. Scheduler

The Syncfusion Scheduler allows users to create, manage, and visualize appointments and events with features like multiple views, drag-and-drop editing, recurrence handling, and resource management.

**Key Features:**
* **Multiple Calendar Views** - Supports day, week, workweek, month, agenda, year, and timeline views with flexible configuration.
* **Data Binding** - Bind data from various sources including IEnumerable, ObservableCollection, DataTable, Web API, OData, and RESTful services with real-time updates and dynamic loading of appointments for better performance with large datasets.
* **Recurrence Support** - Supports creating and managing recurring events with daily, weekly, monthly, and yearly repeat patterns, along with options to edit or delete individual occurrences or the entire series.
* **Resource Scheduling** - Allows management of multiple resources like rooms, employees, and equipment with grouping support.
* **Drag-and-Drop & Resize** - Interactive scheduling with drag-and-drop and resizing capabilities for events.
* **Timezone** - Supports multiple time zones, allowing appointments to be created across different regions.
* **Advanced Event Management** - Includes a built-in editor, custom fields, multi-event selection, tooltips, and clipboard support.
* **Fully Customizable UI** - Supports custom themes, templates, CSS styling, and flexible layout customization.
* **Accessibility** - Provides full keyboard navigation, ARIA support for screen readers, and high contrast theme compatibility.
* **Responsive Design** - Adaptive rendering optimized for mobile, tablet, and desktop devices with touch gesture support.
* **Localization and Globalization** - Offers multi-language support with culture-specific date formatting, including right-to-left (RTL) layout support.

**Available Platforms:**

{% doccards %}

{% doccard text="React" link="/scheduler-sdk/react/schedule/getting-started" icon="/scheduler-sdk/images/React.svg" %}

{% doccard text="Angular" link="/scheduler-sdk/angular/schedule/getting-started" icon="/scheduler-sdk/images/Angular.svg" %}

{% doccard text="Blazor" link="/scheduler-sdk/blazor/schedule/getting-started-webapp" icon="/scheduler-sdk/images/Blazor.svg" %}

{% doccard text="JavaScript" link="/scheduler-sdk/javascript/schedule/getting-started"  icon="/scheduler-sdk/images/JavaScript.svg" %}

{% doccard text="TypeScript" link="/scheduler-sdk/typescript/schedule/getting-started"  icon="/scheduler-sdk/images/JavaScript.svg" %}

{% doccard text="Vue" link="/scheduler-sdk/vue/schedule/getting-started-vue-3" icon="/scheduler-sdk/images/Vue.svg" %}

{% doccard text="ASP.NET Core" link="/scheduler-sdk/asp-net-core/schedule/getting-started" icon="/scheduler-sdk/images/ASP.NET Core.png" %}

{% doccard text="ASP.NET MVC" link="/scheduler-sdk/asp-net-mvc/schedule/getting-started" icon="/scheduler-sdk/images/ASP.NET MVC.png" %}

{% doccard text=".NET MAUI" link="/scheduler-sdk/maui/schedule/getting-started" icon="/scheduler-sdk/images/dotnet_maui.svg" %}

{% doccard text="WPF" link="/scheduler-sdk/wpf/schedule/getting-started" icon="/scheduler-sdk/images/WPF.svg" %}

{% doccard text="Windows Forms" link="/scheduler-sdk/winforms/schedule/getting-started" icon="/scheduler-sdk/images/Windows Forms.svg" %}

{% doccard text="WinUI" link="/scheduler-sdk/winui/schedule/getting-started" icon="/scheduler-sdk/images/WinUI.svg" %}

{% doccard text="UWP" link="/scheduler-sdk/uwp/schedule/getting-started" icon="/scheduler-sdk/images/UWP.svg" %}

{% enddoccards %}

### 2. Calendar

The Syncfusion Calendar allows users to select a Single date, Multiple dates, or a Range of dates. It provides various view options such as a Month, Year, Decade, and Century, which allow users to quickly navigate to the desired date.

**Key Features:**

* **Multiple calendar view modes**: Allow switching between Month, Year, Decade, and Century views for easy navigation.
* **Quick navigation**: Enables moving across different date levels efficiently using hierarchical calendar views.
* **Date selection**:  Support selecting single, multiple, range, or multiple range of dates programmatically or through user interaction.
* **Limit date selection**: Allows limiting selectable dates using minimum and maximum range values.
* **Change first day of week**: Allows setting the starting day of the week based on regional or application requirements.
* **Fully Customizable UI** - Supports custom themes, templates, CSS styling, and flexible layout customization.
* **Localization and Globalization**: Offers multi-language support with culture-specific date formatting, including right-to-left (RTL) layout support.

**Available Platforms:**

{% doccards %}

{% doccard text="React" link="/scheduler-sdk/react/calendar/getting-started" icon="/scheduler-sdk/images/React.svg" %}

{% doccard text="Angular" link="/scheduler-sdk/angular/calendar/getting-started" icon="/scheduler-sdk/images/Angular.svg" %}

{% doccard text="Blazor" link="/scheduler-sdk/blazor/calendar/getting-started-with-web-app" icon="/scheduler-sdk/images/Blazor.svg" %}

{% doccard text="JavaScript" link="/scheduler-sdk/javascript/calendar/es5-getting-started"  icon="/scheduler-sdk/images/JavaScript.svg" %}

{% doccard text="TypeScript" link="/scheduler-sdk/typescript/calendar/getting-started"  icon="/scheduler-sdk/images/JavaScript.svg" %}

{% doccard text="Vue" link="/scheduler-sdk/vue/calendar/getting-started" icon="/scheduler-sdk/images/Vue.svg" %}

{% doccard text="ASP.NET Core" link="/scheduler-sdk/asp-net-core/calendar/getting-started" icon="/scheduler-sdk/images/ASP.NET Core.png" %}

{% doccard text="ASP.NET MVC" link="/scheduler-sdk/asp-net-mvc/calendar/getting-started" icon="/scheduler-sdk/images/ASP.NET MVC.png" %}

{% doccard text=".NET MAUI" link="/scheduler-sdk/maui/calendar/getting-started" icon="/scheduler-sdk/images/dotnet_maui.svg" %}

{% doccard text="WPF" link="/scheduler-sdk/wpf/calendar/getting-started" icon="/scheduler-sdk/images/WPF.svg" %}

{% doccard text="Windows Forms" link="/scheduler-sdk/winforms/calendar/getting-started" icon="/scheduler-sdk/images/Windows Forms.svg" %}

{% doccard text="WinUI" link="/scheduler-sdk/winui/calendar/getting-started" icon="/scheduler-sdk/images/WinUI.svg" %}

{% doccard text="UWP" link="/scheduler-sdk/uwp/calendar/getting-started" icon="/scheduler-sdk/images/UWP.svg" %}

{% doccard text="Flutter" link="/scheduler-sdk/flutter/calendar/getting-started" icon="/scheduler-sdk/images/Flutter.svg" %}

{% enddoccards %}

### 3. Smart Scheduler

The Syncfusion® Smart Scheduler combines the power of the Scheduler with AI-driven intent understanding. Users can create, update, delete, and explore appointments using plain language, reducing clicks and turning scheduling into a conversation. It respects current view context, resources, and availability, and can detect conflicts, find free time, and summarize schedules.

**Key Features:**
- **Natural language CRUD** - Allows creating, updating, and deleting appointments using simple text input.
- **Resource-aware booking** - Allows scheduling based on availability of resources and suggests alternative slots when needed.
- **Conflict detection** - Allows identifying overlapping appointments and proposing resolution options.
- **Smart summarization** - Allows generating quick summaries of schedules or upcoming events.

**Available Platforms:**

{% doccards %}

{% doccard text=".NET MAUI" link="/scheduler-sdk/maui/smart-scheduler/getting-started" icon="/scheduler-sdk/images/dotnet_maui.svg" %}

{% enddoccards %}

### 4. Date Picker

The Syncfusion® Date Picker allows you to select a date and visualize its items inside a popup or a drop-down UI element. The Date Picker also enables you to set date ranges and formats and customize its dialog appearance by configuring its header, footer, and more.

**Key Features**
- **Formatting** - Allows displays the selected Date value in a various formats.
- **Date Selector** - The drop-down portion used for selecting the date can be customized.

**Available Platforms:**

{% doccards %}

{% doccard text="React" link="/scheduler-sdk/react/date-picker/getting-started" icon="/scheduler-sdk/images/React.svg" %}

{% doccard text="Angular" link="/scheduler-sdk/angular/date-picker/getting-started" icon="/scheduler-sdk/images/Angular.svg" %}

{% doccard text="Blazor" link="/scheduler-sdk/blazor/date-picker/getting-started-with-web-app" icon="/scheduler-sdk/images/Blazor.svg" %}

{% doccard text="JavaScript" link="/scheduler-sdk/javascript/date-picker/es5-getting-started"  icon="/scheduler-sdk/images/JavaScript.svg" %}

{% doccard text="TypeScript" link="/scheduler-sdk/typescript/date-picker/getting-started"  icon="/scheduler-sdk/images/JavaScript.svg" %}

{% doccard text="Vue" link="/scheduler-sdk/vue/date-picker/getting-started" icon="/scheduler-sdk/images/Vue.svg" %}

{% doccard text="ASP.NET Core" link="/scheduler-sdk/asp-net-core/date-picker/getting-started" icon="/scheduler-sdk/images/ASP.NET Core.png" %}

{% doccard text="ASP.NET MVC" link="/scheduler-sdk/asp-net-mvc/date-picker/getting-started" icon="/scheduler-sdk/images/ASP.NET MVC.png" %}

{% doccard text=".NET MAUI" link="/scheduler-sdk/maui/date-picker/getting-started" icon="/scheduler-sdk/images/dotnet_maui.svg" %}

{% doccard text="WPF" link="/scheduler-sdk/wpf/date-picker/getting-started" icon="/scheduler-sdk/images/WPF.svg" %}

{% doccard text="WinUI" link="/scheduler-sdk/winui/date-picker/getting-started" icon="/scheduler-sdk/images/WinUI.svg" %}

{% doccard text="UWP" link="/scheduler-sdk/uwp/date-picker/getting-started" icon="/scheduler-sdk/images/UWP.svg" %}

{% enddoccards %}

### 5. Time Picker

The Syncfusion® Time Picker allows you to select the time and visualize its items inside a popup or a drop-down UI element. The Time Picker also enables you to set time formats and customize its dialog appearance by configuring its header, footer, and more.

**Key Features**
- **Time format** - Allows presenting values in predefined formats for better readability.
- **Interval** - Allows defining custom intervals for hours, minutes, and seconds.
- **Localization and Globalization**: Offers multi-language support with culture-specific date formatting, including right-to-left (RTL) layout support.

**Available Platforms:**

{% doccards %}

{% doccard text="React" link="/scheduler-sdk/react/time-picker/getting-started" icon="/scheduler-sdk/images/React.svg" %}

{% doccard text="Angular" link="/scheduler-sdk/angular/time-picker/getting-started" icon="/scheduler-sdk/images/Angular.svg" %}

{% doccard text="Blazor" link="/scheduler-sdk/blazor/time-picker/getting-started-webapp" icon="/scheduler-sdk/images/Blazor.svg" %}

{% doccard text="JavaScript" link="/scheduler-sdk/javascript/time-picker/es5-getting-started"  icon="/scheduler-sdk/images/JavaScript.svg" %}

{% doccard text="TypeScript" link="/scheduler-sdk/typescript/time-picker/getting-started"  icon="/scheduler-sdk/images/JavaScript.svg" %}

{% doccard text="Vue" link="/scheduler-sdk/vue/time-picker/vue3-getting-started" icon="/scheduler-sdk/images/Vue.svg" %}

{% doccard text="ASP.NET Core" link="/scheduler-sdk/asp-net-core/time-picker/getting-started" icon="/scheduler-sdk/images/ASP.NET Core.png" %}

{% doccard text="ASP.NET MVC" link="/scheduler-sdk/asp-net-mvc/time-picker/getting-started" icon="/scheduler-sdk/images/ASP.NET MVC.png" %}

{% doccard text=".NET MAUI" link="/scheduler-sdk/maui/time-picker/getting-started" icon="/scheduler-sdk/images/dotnet_maui.svg" %}

{% doccard text="WPF" link="/scheduler-sdk/wpf/time-picker/getting-started" icon="/scheduler-sdk/images/WPF.svg" %}

{% doccard text="WinUI" link="/scheduler-sdk/winui/time-picker/getting-started" icon="/scheduler-sdk/images/WinUI.svg" %}

{% doccard text="UWP" link="/scheduler-sdk/uwp/time-picker/getting-started" icon="/scheduler-sdk/images/UWP.svg" %}

{% enddoccards %}

### 6. DateTime Picker

The Syncfusion® Date Time Picker provides a way to pick a date, time, or date and time. The Date Time Picker also enables you to set date ranges and date and time formats and to customize its dialog appearance by configuring its header, footer, and more.

**Key Feature**
- **Date format** - Allows representing date values using predefined formats.
- **Time format** - Allows configuring time values using predefined formats.
- **Localization and Globalization**: Offers multi-language support with culture-specific date formatting, including right-to-left (RTL) layout support.

**Available Platforms:**

{% doccards %}

{% doccard text="React" link="/scheduler-sdk/react/datetime-picker/getting-started" icon="/scheduler-sdk/images/React.svg" %}

{% doccard text="Angular" link="/scheduler-sdk/angular/datetime-picker/getting-started" icon="/scheduler-sdk/images/Angular.svg" %}

{% doccard text="Blazor" link="/scheduler-sdk/blazor/datetime-picker/getting-started-with-web-app" icon="/scheduler-sdk/images/Blazor.svg" %}

{% doccard text="JavaScript" link="/scheduler-sdk/javascript/datetime-picker/es5-getting-started"  icon="/scheduler-sdk/images/JavaScript.svg" %}

{% doccard text="TypeScript" link="/scheduler-sdk/typescript/datetime-picker/getting-started"  icon="/scheduler-sdk/images/JavaScript.svg" %}

{% doccard text="Vue" link="/scheduler-sdk/vue/datetime-picker/vue3-getting-started" icon="/scheduler-sdk/images/Vue.svg" %}

{% doccard text="ASP.NET Core" link="/scheduler-sdk/asp-net-core/datetime-picker/getting-started" icon="/scheduler-sdk/images/ASP.NET Core.png" %}

{% doccard text="ASP.NET MVC" link="/scheduler-sdk/asp-net-mvc/datetime-picker/getting-started" icon="/scheduler-sdk/images/ASP.NET MVC.png" %}

{% doccard text=".NET MAUI" link="/scheduler-sdk/maui/datetime-picker/getting-started" icon="/scheduler-sdk/images/dotnet_maui.svg" %}

{% doccard text="WPF" link="/scheduler-sdk/wpf/datetime-picker/getting-started" icon="/scheduler-sdk/images/WPF.svg" %}

{% doccard text="Windows Forms" link="/scheduler-sdk/winforms/datetime-picker/getting-started" icon="/scheduler-sdk/images/Windows Forms.svg" %}

{% doccard text="UWP" link="/scheduler-sdk/uwp/datetime-picker/getting-started" icon="/scheduler-sdk/images/UWP.svg" %}

{% enddoccards %}

### 7. DateRange Picker

The Syncfusion® Date Range Picker allows users to easily select a single date, multiple dates, or a range of dates. It provides month, year, decade, and century view options to quickly navigate to the desired date. It supports minimum, maximum, and disabled dates to restrict date selection.

**Key Feature**
- **Multiple picker views** - Display month, year, decade, and century views that allow users to easily select and navigate between built-in views. Supports programmatic navigation.
- **Multi-date picker view** - Display two Date Range Pickers side by side, allowing you to select ranges of dates within two separate months easily.
- **Limit the date selection range** - Select only a date range with a specific minimum and maximum number of days (span of days) by setting the minimum and maximum days options.
- **Accessibility** - Easy access of the date range picker by screen readers.
- **Localization and Globalization**: Offers multi-language support with culture-specific date formatting, including right-to-left (RTL) layout support.

**Available Platforms:**

{% doccards %}

{% doccard text="React" link="/scheduler-sdk/react/daterange-picker/getting-started" icon="/scheduler-sdk/images/React.svg" %}

{% doccard text="Angular" link="/scheduler-sdk/angular/daterange-picker/getting-started" icon="/scheduler-sdk/images/Angular.svg" %}

{% doccard text="Blazor" link="/scheduler-sdk/blazor/daterange-picker/getting-started-with-web-app" icon="/scheduler-sdk/images/Blazor.svg" %}

{% doccard text="JavaScript" link="/scheduler-sdk/javascript/daterange-picker/es5-getting-started"  icon="/scheduler-sdk/images/JavaScript.svg" %}

{% doccard text="TypeScript" link="/scheduler-sdk/typescript/daterange-picker/getting-started"  icon="/scheduler-sdk/images/JavaScript.svg" %}

{% doccard text="Vue" link="/scheduler-sdk/vue/daterange-picker/vue3-getting-started" icon="/scheduler-sdk/images/Vue.svg" %}

{% doccard text="ASP.NET Core" link="/scheduler-sdk/asp-net-core/daterange-picker/getting-started" icon="/scheduler-sdk/images/ASP.NET Core.png" %}

{% doccard text="ASP.NET MVC" link="/scheduler-sdk/asp-net-mvc/daterange-picker/getting-started" icon="/scheduler-sdk/images/ASP.NET MVC.png" %}

{% enddoccards %}