---
layout: post
title: Customizing Appearance in Windows Forms Scheduler | Syncfusion
description: Learn how to customize appearance in Windows Forms Scheduler by modifying appearance attributes of different control regions.
platform: scheduler-sdk
control: Schedule
documentation: ug
appliesto: UI Component Suite, Scheduler SDK
---

# Customizing Appearance in Windows Forms Scheduler

The [Winforms Scheduler](https://www.syncfusion.com/scheduler-sdk/winforms-scheduler) control provides extensive appearance customization options through the [Appearance](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Schedule.ScheduleControl.html#Syncfusion_Windows_Forms_Schedule_ScheduleControl_Appearance) property. The [ScheduleAppearance](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Schedule.ScheduleAppearance.html) object exposes settings that allow you to customize colors, display formats, headers, navigation elements, time slots, visual styles, and various scheduler-specific UI elements.

This section explains how to customize the appearance of different Scheduler regions.

## Customize Scheduler Colors

The Scheduler allows you to customize colors used for borders, text, grid lines, and other visual elements.

### Customize the Selected Appointment Border

When an appointment is selected, the Scheduler displays a border around the item to indicate its selection state. The [ClickItemBorderColor](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Schedule.ScheduleAppearance.html#Syncfusion_Windows_Forms_Schedule_ScheduleAppearance_ClickItemBorderColor) property defines the color of this border, making the selected appointment visually distinct from other appointments in the Scheduler.

{% tabs %}
{% highlight  c# hl_lines="13" %}
using Syncfusion.Windows.Forms.Schedule;

namespace WindowsFormsApplication1
{
    public partial class Form1 : Form
    {
        private readonly ScheduleControl scheduleControl;

        public Form1()
        {
            InitializeComponent();
            scheduleControl = new ScheduleControl();
            scheduleControl.Appearance.ClickItemBorderColor = Color.Blue;
            this.Controls.Add(scheduleControl);
        }
    }
}
{% endhighlight %}

{% highlight vb hl_lines="9" %}
Imports Syncfusion.Windows.Forms.Schedule

Namespace WindowsFormsApplication1
    Public Partial Class Form1
        Private ReadOnly scheduleControl As ScheduleControl
        Public Sub New()
            InitializeComponent()
            scheduleControl = New ScheduleControl()
            scheduleControl.Appearance.ClickItemBorderColor = Color.Blue
            Me.Controls.Add(scheduleControl)
        End Sub
    End Class
End Namespace
{% endhighlight %}
{% endtabs %}

### Customize Drag-and-Drop Indicators

When an appointment is dragged, the Scheduler displays a visual indicator. The [DragColor](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Schedule.ScheduleAppearance.html#Syncfusion_Windows_Forms_Schedule_ScheduleAppearance_DragColor) property specifies the color of this indicator during the drag-and-drop operation.

{% tabs %}
{% highlight  c# hl_lines="13" %}
using Syncfusion.Windows.Forms.Schedule;

namespace WindowsFormsApplication1
{
    public partial class Form1 : Form
    {
        private readonly ScheduleControl scheduleControl;

        public Form1()
        {
            InitializeComponent();
            scheduleControl = new ScheduleControl();
            scheduleControl.Appearance.DragColor = Color.Green;
            this.Controls.Add(scheduleControl);
        }
    }
}
{% endhighlight %}

{% highlight vb hl_lines="9" %}
Imports Syncfusion.Windows.Forms.Schedule

Namespace WindowsFormsApplication1
    Public Partial Class Form1
        Private ReadOnly scheduleControl As ScheduleControl
        Public Sub New()
            InitializeComponent()
            scheduleControl = New ScheduleControl()
            scheduleControl.Appearance.DragColor = Color.Green
            Me.Controls.Add(scheduleControl)
        End Sub
    End Class
End Namespace
{% endhighlight %}
{% endtabs %}

### Customize Grid Line Colors

The [SolidBorderColor](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Schedule.ScheduleAppearance.html#Syncfusion_Windows_Forms_Schedule_ScheduleAppearance_SolidBorderColor) property specifies the color of the grid lines displayed in the calendar within the navigation panel.

{% tabs %}
{% highlight  c# hl_lines="13" %}
using Syncfusion.Windows.Forms.Schedule;

namespace WindowsFormsApplication1
{
    public partial class Form1 : Form
    {
        private readonly ScheduleControl scheduleControl;

        public Form1()
        {
            InitializeComponent();
            scheduleControl = new ScheduleControl();
            scheduleControl.Appearance.SolidBorderColor = Color.Green;
            this.Controls.Add(scheduleControl);
        }
    }
}
{% endhighlight %}

{% highlight vb hl_lines="9" %}
Imports Syncfusion.Windows.Forms.Schedule

Namespace WindowsFormsApplication1
    Public Partial Class Form1
        Private ReadOnly scheduleControl As ScheduleControl
        Public Sub New()
            InitializeComponent()
            scheduleControl = New ScheduleControl()
            scheduleControl.Appearance.SolidBorderColor = Color.Green
            Me.Controls.Add(scheduleControl)
        End Sub
    End Class
End Namespace
{% endhighlight %}
{% endtabs %}

## Customize the Caption Area

The Scheduler displays a caption bar at the top for navigation and date display.

## Change the Caption Background Color

Use the [CaptionBackColor](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Schedule.ScheduleAppearance.html#Syncfusion_Windows_Forms_Schedule_ScheduleAppearance_CaptionBackColor) property to customize the caption panel background.

{% tabs %}
{% highlight  c# hl_lines="13" %}
using Syncfusion.Windows.Forms.Schedule;

namespace WindowsFormsApplication1
{
    public partial class Form1 : Form
    {
        private readonly ScheduleControl scheduleControl;

        public Form1()
        {
            InitializeComponent();
            scheduleControl = new ScheduleControl();
            scheduleControl.Appearance.CaptionBackColor = Color.Yellow;
            this.Controls.Add(scheduleControl);
        }
    }
}
{% endhighlight %}

{% highlight vb hl_lines="9" %}
Imports Syncfusion.Windows.Forms.Schedule

Namespace WindowsFormsApplication1
    Public Partial Class Form1
        Private ReadOnly scheduleControl As ScheduleControl
        Public Sub New()
            InitializeComponent()
            scheduleControl = New ScheduleControl()
            scheduleControl.Appearance.CaptionBackColor = Color.Yellow
            Me.Controls.Add(scheduleControl)
        End Sub
    End Class
End Namespace
{% endhighlight %}
{% endtabs %}

## Show or Hide the Caption Bar

You can control caption visibility using the [ShowCaption](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Schedule.ScheduleAppearance.html#Syncfusion_Windows_Forms_Schedule_ScheduleAppearance_ShowCaption) property.

{% tabs %}
{% highlight  c# hl_lines="13" %}
using Syncfusion.Windows.Forms.Schedule;

namespace WindowsFormsApplication1
{
    public partial class Form1 : Form
    {
        private readonly ScheduleControl scheduleControl;

        public Form1()
        {
            InitializeComponent();
            scheduleControl = new ScheduleControl();
            scheduleControl.Appearance.ShowCaption = false;
            this.Controls.Add(scheduleControl);
        }
    }
}
{% endhighlight %}

{% highlight vb hl_lines="9" %}
Imports Syncfusion.Windows.Forms.Schedule

Namespace WindowsFormsApplication1
    Public Partial Class Form1
        Private ReadOnly scheduleControl As ScheduleControl
        Public Sub New()
            InitializeComponent()
            scheduleControl = New ScheduleControl()
            scheduleControl.Appearance.ShowCaption = False
            Me.Controls.Add(scheduleControl)
        End Sub
    End Class
End Namespace
{% endhighlight %}
{% endtabs %}

## Show or Hide Navigation Buttons

Use the [ShowCaptionButtons](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Schedule.ScheduleAppearance.html#Syncfusion_Windows_Forms_Schedule_ScheduleAppearance_ShowCaptionButtons) property to control the visibility of previous and next navigation buttons.

{% tabs %}
{% highlight  c# hl_lines="13" %}
using Syncfusion.Windows.Forms.Schedule;

namespace WindowsFormsApplication1
{
    public partial class Form1 : Form
    {
        private readonly ScheduleControl scheduleControl;

        public Form1()
        {
            InitializeComponent();
            scheduleControl = new ScheduleControl();
            scheduleControl.Appearance.ShowCaptionButtons = false;
            this.Controls.Add(scheduleControl);
        }
    }
}
{% endhighlight %}

{% highlight vb hl_lines="9" %}
Imports Syncfusion.Windows.Forms.Schedule

Namespace WindowsFormsApplication1
    Public Partial Class Form1
        Private ReadOnly scheduleControl As ScheduleControl
        Public Sub New()
            InitializeComponent()
            scheduleControl = New ScheduleControl()
            scheduleControl.Appearance.ShowCaptionButtons = False
            Me.Controls.Add(scheduleControl)
        End Sub
    End Class
End Namespace
{% endhighlight %}
{% endtabs %}

N> When `ShowCaption` is set to `false`, the entire caption panel including navigation buttons is hidden.

## Customize Header Appearance

The Scheduler displays date headers to identify the dates associated with the visible schedule. Header colors can be customized to improve readability and match the application's theme.

### Customize Week and Month Headers

Use the [MonthWeekHeaderBackColor](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Schedule.ScheduleAppearance.html#Syncfusion_Windows_Forms_Schedule_ScheduleAppearance_MonthWeekHeaderBackColor) and [MonthWeekHeaderForeColor](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Schedule.ScheduleAppearance.html#Syncfusion_Windows_Forms_Schedule_ScheduleAppearance_MonthWeekHeaderForeColor) properties to customize the background and text colors of headers displayed in `Week` and `Month` views.

{% tabs %}
{% highlight  c# %}
    scheduleControl.Appearance.MonthWeekHeaderBackColor = Color.LightSteelBlue;
    scheduleControl.Appearance.MonthWeekHeaderForeColor = Color.DarkBlue;
{% endhighlight %}

{% highlight vb %}
    scheduleControl.Appearance.MonthWeekHeaderBackColor = Color.LightSteelBlue
    scheduleControl.Appearance.MonthWeekHeaderForeColor = Color.DarkBlue
{% endhighlight %}
{% endtabs %}

### Customize WorkWeek Headers

Use the [WorkWeekHeaderBackColor](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Schedule.ScheduleAppearance.html#Syncfusion_Windows_Forms_Schedule_ScheduleAppearance_WorkWeekHeaderBackColor) and [WorkWeekHeaderForeColor](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Schedule.ScheduleAppearance.html#Syncfusion_Windows_Forms_Schedule_ScheduleAppearance_WorkWeekHeaderForeColor) properties to customize the appearance of headers in the `WorkWeek` view.

{% tabs %}
{% highlight  c# %}
    scheduleControl.Appearance.WorkWeekHeaderBackColor = Color.Gainsboro;
    scheduleControl.Appearance.WorkWeekHeaderForeColor = Color.Black;
{% endhighlight %}

{% highlight vb %}
    scheduleControl.Appearance.WorkWeekHeaderBackColor = Color.Gainsboro
    scheduleControl.Appearance.WorkWeekHeaderForeColor = Color.Black
{% endhighlight %}
{% endtabs %}

### Customize the All-Day Row

The Scheduler includes a dedicated row for displaying all-day appointments. Use the [AllDayBackColor](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Schedule.ScheduleAppearance.html#Syncfusion_Windows_Forms_Schedule_ScheduleAppearance_AllDayBackColor) property to customize the background color of this row.

{% tabs %}
{% highlight  c# %}
    scheduleControl.Appearance.AllDayBackColor = Color.Beige;
{% endhighlight %}

{% highlight vb %}
    scheduleControl.Appearance.AllDayBackColor = Color.Beige
{% endhighlight %}
{% endtabs %}

## Customize Navigation Calendar Appearance

The navigation calendar provides a compact monthly view that can be used to browse and navigate dates within the Scheduler. Its appearance can be customized to match the application's visual style.

### Customize Calendar Colors

The following properties customize the overall appearance of the navigation calendar:

* [NavigationCalendarBackColor](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Schedule.ScheduleAppearance.html#Syncfusion_Windows_Forms_Schedu) - Specifies the background color of the navigation calendar.
* [NavigationCalendarHeaderColor](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Schedule.ScheduleAppearance.html#Syncfusion_Windows_Forms_Schedule_ScheduleAppearance_NavigationCalendarHeaderColor) - Specifies the color of the header that displays the current month and year.
* [NavigationCalendarTextColor](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Schedule.ScheduleAppearance.html#Syncfusion_Windows_Forms_Schedule_ScheduleAppearance_NavigationCalendarTextColor) - Specifies the color of date text displayed in the navigation calendar.

{% tabs %}
{% highlight  c# %}
    scheduleControl.Appearance.NavigationCalendarBackColor = Color.White;
    scheduleControl.Appearance.NavigationCalendarHeaderColor = Color.SteelBlue;
    scheduleControl.Appearance.NavigationCalendarTextColor = Color.Black;
{% endhighlight %}

{% highlight vb %}
    scheduleControl.Appearance.NavigationCalendarBackColor = Color.White
    scheduleControl.Appearance.NavigationCalendarHeaderColor = Color.SteelBlue
    scheduleControl.Appearance.NavigationCalendarTextColor = Color.Black
{% endhighlight %}
{% endtabs %}

### Customize Date Highlighting

The navigation calendar provides dedicated appearance settings for selected dates, the current date, and disabled dates. Customizing these elements helps distinguish important dates and improves the overall navigation experience.

* [NavigationCalendarSelectionColor](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Schedule.ScheduleAppearance.html#Syncfusion_Windows_Forms_Schedule_ScheduleAppearance_NavigationCalendarSelectionColor) - Specifies the color used for the selected date in the navigation calendar.
* [NavigationCalendarTodayColor](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Schedule.ScheduleAppearance.html#Syncfusion_Windows_Forms_Schedule_ScheduleAppearance_NavigationCalendarTextColor) - Specifies the text color used for the current date.
* [NavigationCalendarTodayBackColor](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Schedule.ScheduleAppearance.html#Syncfusion_Windows_Forms_Schedule_ScheduleAppearance_NavigationCalendarTodayBackColor) - Specifies the background color of the current date.
* [NavigationCalendarDisabledTextColor](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Schedule.ScheduleAppearance.html#Syncfusion_Windows_Forms_Schedule_ScheduleAppearance_NavigationCalendarDisabledTextColor) - Specifies the text color of dates that are unavailable or displayed in a disabled state.

{% tabs %}
{% highlight  c# %}
    scheduleControl.Appearance.NavigationCalendarSelectionColor = Color.CornflowerBlue;
    scheduleControl.Appearance.NavigationCalendarTodayColor = Color.Red;
    scheduleControl.Appearance.NavigationCalendarTodayBackColor = Color.LightYellow;
    scheduleControl.Appearance.NavigationCalendarDisabledTextColor = Color.Gray;
{% endhighlight %}

{% highlight vb %}
    scheduleControl.Appearance.NavigationCalendarSelectionColor = Color.CornflowerBlue
    scheduleControl.Appearance.NavigationCalendarTodayColor = Color.Red
    scheduleControl.Appearance.NavigationCalendarTodayBackColor = Color.LightYellow
    scheduleControl.Appearance.NavigationCalendarDisabledTextColor = Color.Gray
{% endhighlight %}
{% endtabs %}

### Customize Navigation Elements

The navigation calendar includes month navigation controls and week numbers that can be customized independently.

* [NavigationCalendarArrowColor](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Schedule.ScheduleAppearance.html#Syncfusion_Windows_Forms_Schedule_ScheduleAppearance_NavigationCalendarArrowColor) - Specifies the color of the navigation arrows used to move between months.
* [NavigationCalendarWeekNumberColor](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Schedule.ScheduleAppearance.html#Syncfusion_Windows_Forms_Schedule_ScheduleAppearance_NavigationCalendarWeekNumberColor) - Specifies the color of week numbers displayed in the navigation calendar.
* [NavigationCalendarStartDayOfWeek](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Schedule.ScheduleAppearance.html#Syncfusion_Windows_Forms_Schedule_ScheduleAppearance_NavigationCalendarStartDayOfWeek) - Specifies which day appears as the first day of the week in the navigation calendar.

{% tabs %}
{% highlight  c# %}
    scheduleControl.Appearance.NavigationCalendarArrowColor = Color.SteelBlue;
    scheduleControl.Appearance.NavigationCalendarWeekNumberColor = Color.DarkGray;
    scheduleControl.Appearance.NavigationCalendarStartDayOfWeek = DayOfWeek.Monday;
{% endhighlight %}

{% highlight vb %}
    scheduleControl.Appearance.NavigationCalendarArrowColor = Color.SteelBlue
    scheduleControl.Appearance.NavigationCalendarWeekNumberColor = Color.DarkGray
    scheduleControl.Appearance.NavigationCalendarStartDayOfWeek = DayOfWeek.Monday
{% endhighlight %}
{% endtabs %}


## Customize Appointment Text Format

The Scheduler allows you to control the information displayed within appointment cells by using customizable format strings. Format strings can contain predefined tokens that are replaced with values from the corresponding appointment at runtime.

These format strings can be used to display appointment details such as the subject, location, owner, dates, times, and reminder information. The same set of tokens can be used when formatting standard appointments and multi-day appointments.

### Supported Format Tokens 

Supported Format Tokens

The following tokens can be used in appointment format strings:

* [subject] - Displays the appointment subject.
* [content] - Displays the appointment content or description.
* [location] - Displays the appointment location.
* [owner] - Displays the appointment owner.
* [label] - Displays the appointment label value.
* [marker] - Displays the appointment marker value.
* [reminder] - Displays the appointment reminder information.
* [allday] - Indicates whether the appointment is an all-day appointment.
* [start] - Displays the appointment start date and time.
* [end] - Displays the appointment end date and time.
* [startdate] - Displays the appointment start date.
* [enddate] - Displays the appointment end date.
* [starttime] - Displays the appointment start time.
* [endtime] - Displays the appointment end time.

### Customize Date and Time Token Formatting

Date- and time-related tokens can be formatted using standard .NET format strings. These formatting settings are applied whenever the corresponding tokens are displayed in appointment text.

* [DateFormat](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Schedule.ScheduleAppearance.html#Syncfusion_Windows_Forms_Schedule_ScheduleAppearance_DateFormat) - Specifies the format used for date-only tokens such as [startdate] and [enddate].
* [TimeFormat](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Schedule.ScheduleAppearance.html#Syncfusion_Windows_Forms_Schedule_ScheduleAppearance_TimeFormat) - Specifies the format used for time-only tokens such as [starttime] and [endtime].
* [DateTimeFormat](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Schedule.ScheduleAppearance.html#Syncfusion_Windows_Forms_Schedule_ScheduleAppearance_DateTimeFormat) - Specifies the format used for date and time tokens such as [start] and [end].

{% tabs %}
{% highlight  c# %}
    scheduleControl.Appearance.DateFormat = "dd/MM/yyyy";
    scheduleControl.Appearance.TimeFormat = "HH:mm";
    scheduleControl.Appearance.DateTimeFormat = "dd/MM/yyyy HH:mm";
{% endhighlight %}

{% highlight vb %}
    scheduleControl.Appearance.DateFormat = "dd/MM/yyyy"
    scheduleControl.Appearance.TimeFormat = "HH:mm"
    scheduleControl.Appearance.DateTimeFormat = "dd/MM/yyyy HH:mm"
{% endhighlight %}
{% endtabs %}

### Customize Appointment Display Formats

The Scheduler provides separate formatting properties for appointments displayed in different views. These properties determine how appointment information is rendered within appointment cells.

* [DayItemFormat](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Schedule.ScheduleAppearance.html#Syncfusion_Windows_Forms_Schedule_ScheduleAppearance_DayItemFormat) - Specifies the display format of appointments shown in Day and WorkWeek views.
* [WeekMonthItemFormat](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Schedule.ScheduleAppearance.html#Syncfusion_Windows_Forms_Schedule_ScheduleAppearance_WeekMonthItemFormat) - Specifies the display format of appointments shown in Week and Month views.
* [AllDayItemFormat](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Schedule.ScheduleAppearance.html#Syncfusion_Windows_Forms_Schedule_ScheduleAppearance_AllDayItemFormat) - Specifies the display format of all-day appointments.

{% tabs %}
{% highlight  c# %}
    scheduleControl.Appearance.DayItemFormat = "[subject] from [starttime] to [endtime]";
    scheduleControl.Appearance.WeekMonthItemFormat = "[subject] from [starttime] to [endtime]";
    scheduleControl.Appearance.AllDayItemFormat = "[subject] from [starttime] to [endtime]";
{% endhighlight %}

{% highlight vb %}
    scheduleControl.Appearance.DayItemFormat = "[subject] from [starttime] to [endtime]"
    scheduleControl.Appearance.WeekMonthItemFormat = "[subject] from [starttime] to [endtime]"
    scheduleControl.Appearance.AllDayItemFormat = "[subject] from [starttime] to [endtime]"
{% endhighlight %}
{% endtabs %}

The preceding example displays the appointment subject followed by its start and end times.

#### Customize Multi-Day Appointment Text

Appointments that span multiple days are rendered differently from standard appointments. The Scheduler provides separate formatting properties for different portions of a multi-day appointment span.

The following properties define the text displayed across different sections of a multi-day appointment:

* [SpanItemFormatLeftText](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Schedule.ScheduleAppearance.html#Syncfusion_Windows_Forms_Schedule_ScheduleAppearance_SpanItemFormatLeftText) - Specifies the text displayed on the interior left side of a multi-day span.
* [SpanItemFormatMiddleText](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Schedule.ScheduleAppearance.html#Syncfusion_Windows_Forms_Schedule_ScheduleAppearance_SpanItemFormatMiddleText) - Specifies the text displayed in the middle of a multi-day span.
* [SpanItemFormatRightText](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Schedule.ScheduleAppearance.html#Syncfusion_Windows_Forms_Schedule_ScheduleAppearance_SpanItemFormatRightText) - Specifies the text displayed on the interior right side of a multi-day span.
* [SpanItemFormatTerminalLeftText](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Schedule.ScheduleAppearance.html#Syncfusion_Windows_Forms_Schedule_ScheduleAppearance_SpanItemFormatTerminalLeftText) - Specifies the text displayed on the open left side of a multi-day span.
* [SpanItemFormatTerminalRightText](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Schedule.ScheduleAppearance.html#Syncfusion_Windows_Forms_Schedule_ScheduleAppearance_SpanItemFormatTerminalRightText) - Specifies the text displayed on the open right side of a multi-day span.

{% tabs %}
{% highlight  c# %}
    scheduleControl.Appearance.SpanItemFormatLeftText = "[subject]";
    scheduleControl.Appearance.SpanItemFormatMiddleText = "[subject]";
    scheduleControl.Appearance.SpanItemFormatRightText = "[subject]";
    scheduleControl.Appearance.SpanItemFormatTerminalLeftText = "[subject]";
    scheduleControl.Appearance.SpanItemFormatTerminalRightText = "[subject]";
{% endhighlight %}

{% highlight vb %}
    scheduleControl.Appearance.SpanItemFormatLeftText = "[subject]"
    scheduleControl.Appearance.SpanItemFormatMiddleText = "[subject]"
    scheduleControl.Appearance.SpanItemFormatRightText = "[subject]"
    scheduleControl.Appearance.SpanItemFormatTerminalLeftText = "[subject]"
    scheduleControl.Appearance.SpanItemFormatTerminalRightText = "[subject]"
{% endhighlight %}
{% endtabs %}

These properties use the same format tokens supported by standard appointment formats and enable different text to be displayed for various sections of a multi-day appointment span.

N> 

- Format strings can contain both static text and tokens. Any text outside the token delimiters ([ and ]) is displayed as-is. For example, the format string "[subject] from [starttime] to [endtime]" renders the words from and to together with the appointment values.

- To display a literal opening or closing bracket in a format string, use double brackets:

    - [[ displays [
    - ]] displays ]

## Customize Header Formats

The Scheduler displays date headers in Day, Week, and WorkWeek views to identify the dates associated with the visible schedule. Header text can be customized using standard .NET date format strings to display either detailed or compact date information depending on the active view and available space.

The following properties control how dates are displayed in Scheduler headers:

* LongHeaderFormat - Specifies the header format used in Day view. The default value is "dddd, d MMMM yyyy".
* FullWeekHeaderFormat - Specifies the header format used in Week view. The default value is "D" (long date pattern).
* WeekHeaderFormat - Specifies the header label format used in WorkWeek view. The default value is "MMM d".
* WorkWeekHeaderFormat - Specifies the header format used in WorkWeek view. The default value is "MM/dd/yyyy".

{% tabs %}
{% highlight  c# %}
    scheduleControl.Appearance.LongHeaderFormat = "dddd, MMMM dd yyyy";
    scheduleControl.Appearance.FullWeekHeaderFormat = "D";
    scheduleControl.Appearance.WeekHeaderFormat = "MMM dd";
    scheduleControl.Appearance.WorkWeekHeaderFormat = "ddd dd";
{% endhighlight %}

{% highlight vb %}
    scheduleControl.Appearance.LongHeaderFormat = "dddd, MMMM dd yyyy"
    scheduleControl.Appearance.FullWeekHeaderFormat = "D"
    scheduleControl.Appearance.WeekHeaderFormat = "MMM dd"
    scheduleControl.Appearance.WorkWeekHeaderFormat = "ddd dd"
{% endhighlight %}
{% endtabs %}
