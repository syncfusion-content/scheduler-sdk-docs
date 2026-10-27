---
layout: post
title: Getting Started with Windows Forms Scheduler | Syncfusion
canonical_url: "https://www.syncfusion.com/scheduler-sdk/winforms-scheduler"
description: Learn how to get started with the Syncfusion Windows Forms Scheduler control. Explore setup, features, examples, and customization options.
platform: scheduler-sdk
control: Schedule
documentation: ug
appliesto: UI Component Suite, Scheduler SDK
---

# Getting Started with Windows Forms Scheduler

This topic explains how to create a basic Windows Forms application that uses [ScheduleControl](https://www.syncfusion.com/scheduler-sdk/winforms-scheduler) to display and manage appointments.

## Assembly deployment

Before using the control in a Windows Forms application, add the required assemblies. You can refer to the [control dependencies](https://help.syncfusion.com/windowsforms/control-dependencies#schedule) section for the list of assemblies, or use the [NuGet package](https://help.syncfusion.com/windowsforms/installation/install-nuget-packages) to add the references automatically.

## Building a basic scheduler application

This walkthrough demonstrates how to build a basic WinForms application that uses the [Windows Forms Scheduler](https://www.syncfusion.com/scheduler-sdk/winforms-scheduler) control to display and manage appointments.

### Creating the project

Create a new Windows Forms project in Visual Studio.

### Adding the control through the designer

1. Drag the Schedule control from the Toolbox onto the designer surface. Visual Studio automatically adds the required assembly references to the project.

   ![Adding WinForms Scheduler through designer](Getting-Started_images/Getting-Started_img9.jpeg)

    The ScheduleControl appears on the design surface. Use the Appearance property in the Properties window to customize the visual settings of the control.

   ![Adding WinForms Scheduler through designer](Getting-Started_images/Getting-Started_img10.png)
	
### Adding the control programmatically

To add the Scheduler control programmatically, follow these steps.

1. Add the following required assembly references to the project:

    * Syncfusion.Grid.Base.
    * Syncfusion.Grid.Windows.
    * Syncfusion.Schedule.Base.
    * Syncfusion.Schedule.Windows.
    * Syncfusion.Shared.Base.
    * Syncfusion.Tools.Windows.

2. Create the ScheduleControl instance in the application form constructor.

{% capture codesnippet1 %}
{% tabs %}
{% highlight  c# %}
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
            scheduleControl.Location = new Point(82, 12);
            scheduleControl.Size = new Size(350, 360);
            this.Controls.Add(scheduleControl);
        }
    }
}
{% endhighlight %}

{% highlight vb %}
Imports Syncfusion.Windows.Forms.Schedule

Namespace WindowsFormsApplication1
    Public Partial Class Form1
        Private ReadOnly scheduleControl As ScheduleControl
        Public Sub New()
            InitializeComponent()
            scheduleControl = New ScheduleControl()
            scheduleControl.Location = New Point(82, 12)
            scheduleControl.Size = New Size(350, 360)
            Me.Controls.Add(scheduleControl)
        End Sub
    End Class
End Namespace
{% endhighlight %}
{% endtabs %}
{% endcapture %}
{{ codesnippet1 | OrderList_Indent_Level_1 }}

### Binding data to the ScheduleControl

The ScheduleControl displays appointment data through a data provider. To load appointment data, assign a provider to the DataSource property.

### Connecting sample data with SimpleScheduleDataProvider

The sample provider included with the Scheduler sample provides a quick way to load appointments. Use the following steps to connect it to the control.

1. Add the SimpleScheduleDataProvider.cs file to your project, or add SimpleScheduleDataProvider.vb if you are using VB.NET.

This file contains the classes that implement the ScheduleControl data interfaces and manage the appointment data displayed in the Scheduler. These interfaces are discussed later in this User Guide.

Use the implementation provided in the `SimpleScheduleDataProvider.cs` file. It ships with the [WinForms Scheduler sample](https://github.com/syncfusion/winforms-demos/tree/master/schedulecontrol/Scheduler%20Demo/CS). Add it to your project from Solution Explorer.

![Adding appointment in Winforms Scheduler](Getting-Started_images/Getting-Started_img12.jpeg)

2. You can also find the `SimpleScheduleDataProvider.cs` file in the [Syncfusion_build_installed_location]\Syncfusion\Essential Studio\&lt;Product_version&gt;\Windows\Schedule.Windows\Samples\&lt;Framework_version&gt;\ScheduleSample\CS_ folder. Copy the file into your project from there.

![Adding appointment in Winforms Scheduler](Getting-Started_images/Getting-Started_img13.jpeg)

3. After adding the `SimpleScheduleDataProvider.cs` file, update Form.cs to bind the provider to the ScheduleControl.

Add a using statement so that you can refer to the class names in `SimpleScheduleDataProvider.cs` without repeating the namespace. In `Form_Load`, create the provider, initialize the MasterList, set the file name, choose the initial ScheduleViewType, and assign the provider to DataSource. Copy this code to Form1.cs.

{% tabs %}
{% highlight c# %}
using Syncfusion.Windows.Forms.Schedule;

namespace GridScheduleSample
{
    public partial class Form1 : Form
    {
        private readonly ScheduleControl scheduleControl = new();

	 	public Form1()
	 	{
			InitializeComponent();
            scheduleControl = new ScheduleControl();
            this.Controls.Add(scheduleControl);
            Load += Form1_Load;
		}

		private void Form1_Load(object sender, EventArgs e)
		{
			SimpleScheduleDataProvider data = new SimpleScheduleDataProvider();
			data.MasterList = new SimpleScheduleAppointmentList();
			data.FileName = "default.schedule";
			this.scheduleControl.ScheduleType = ScheduleViewType.Month;
			this.scheduleControl.DataSource = data;
		}
	 }
}
{% endhighlight %}
{% highlight vb %}
Imports Syncfusion.Windows.Forms.Schedule

Namespace GridScheduleSample

    Public Partial Class Form1

        Private ReadOnly scheduleControl As ScheduleControl

        Public Sub New()
            InitializeComponent()
            scheduleControl = New ScheduleControl()
            Me.Controls.Add(scheduleControl)
            AddHandler Load, AddressOf Form1_Load
        End Sub

        Private Sub Form1_Load(ByVal sender As Object, ByVal e As EventArgs)
            Dim data As SimpleScheduleDataProvider = New SimpleScheduleDataProvider()
            data.MasterList = New SimpleScheduleAppointmentList()
            data.FileName = "default.schedule"
            Me.scheduleControl.ScheduleType = ScheduleViewType.Month
            Me.scheduleControl.DataSource = data
        End Sub
    End Class
End Namespace
{% endhighlight %}
{% endtabs %}

4. Press `F5` to build and run the project.

![Adding appointment in WinForms Scheduler](Getting-Started_images/Getting-Started_img14.jpeg)
 
## Changing views

The WinForms Scheduler supports the following schedule view types:

* Month
* Day
* Week
* WorkWeek
* CustomWeek

To switch from Month view to Day view, right-click the ScheduleGrid area and select a day from the context menu.

![Changing view in WinForms Scheduler](Getting-Started_images/Getting-Started_img15.jpeg)
	
You can use the same context menu to switch to any of the other available schedule views.

![Changing view in WinForms Scheduler](Getting-Started_images/Getting-Started_img16.jpeg)
