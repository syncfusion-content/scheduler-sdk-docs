---
layout: post
title: Getting Started with ASP.NET Core Scheduler Control| Syncfusion
description: Check out and learn about getting started with ASP.NET Core Scheduler control of Syncfusion Essential JS 2 and more details.
platform: scheduler-sdk
control: Getting Started
publishingplatform: scheduler-sdk
documentation: ug
---


# Getting Started with the ASP.NET Core Scheduler Control

This section briefly explains how to include the [ASP.NET Core Scheduler](https://www.syncfusion.com/scheduler-sdk/aspnet-core-scheduler) control in your ASP.NET Core Web App using [Visual Studio](https://visualstudio.microsoft.com/vs/) and [Visual Studio Code](https://code.visualstudio.com/).

> **Ready to streamline your ASP.NET Core development?** Discover the full potential of ASP.NET Core controls with AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like Visual Studio, Visual Studio Code, Cursor, CodeStudio and more. [Explore AI Coding Assistant](https://ej2.syncfusion.com/aspnetcore/documentation/ai-coding-assistant/overview)

To get started quickly with ASP.NET Core Scheduler control, you can check out this video:

{% youtube
"youtube:https://www.youtube.com/watch?v=1YVOmjid1Ow"%}

## Create an ASP.NET Core web App with Razor Pages

{% tabcontents %}

{% tabcontent Visual Studio %}

Create an **ASP.NET Core Web App** using Visual Studio via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/tutorials/razor-pages/razor-pages-start?view=aspnetcore-10.0&tabs=visual-studio#create-a-razor-pages-web-app) or the [ASP.NET Core Extension](https://ej2.syncfusion.com/aspnetcore/documentation/visual-studio-integration/create-project).

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

Run the following command to create a new ASP.NET Core Web App.

{% tabs %}
{% highlight C# tabtitle="Terminal" %}

dotnet new webapp -o SchedulerSample
code -r SchedulerSample

{% endhighlight %}
{% endtabs %}

Alternatively, create an ASP.NET Core Web App using Visual Studio Code via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/tutorials/razor-pages/razor-pages-start?view=aspnetcore-10.0&tabs=visual-studio-code#create-a-razor-pages-web-app) or the [ASP.NET Core Extension](https://ej2.syncfusion.com/aspnetcore/documentation/visual-studio-code-integration/create-project), or the [C# Dev Kit](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit) extension.

{% endtabcontent %}

{% endtabcontents %}

## Install the required ASP.NET Core packages

Install the [Syncfusion.AspNetCore.Schedule](https://www.nuget.org/packages/Syncfusion.AspNetCore.Schedule) and [Syncfusion.AspNetCore.Themes](https://www.nuget.org/packages/Syncfusion.AspNetCore.Themes) NuGet packages. All Syncfusion ASP.NET Core packages are available on [nuget.org](https://www.nuget.org/packages?q=Syncfusion.EJ2). See the [NuGet packages](https://ej2.syncfusion.com/aspnetcore/documentation/nuget-packages) topic for details.

{% tabcontents %}

{% tabcontent Visual Studio %}

1. Go to *Tools → NuGet Package Manager → Manage NuGet Packages for Solution*.
2. Search the required NuGet packages (`Syncfusion.AspNetCore.Schedule` and `Syncfusion.AspNetCore.Themes`) and install them.

Alternatively, you can install the same packages using the Package Manager Console with the following commands.

{% tabs %}
{% highlight C# tabtitle="Package Manager Console" %}

Install-Package Syncfusion.AspNetCore.Schedule -Version {{ site.releaseversion }}
Install-Package Syncfusion.AspNetCore.Themes -Version {{ site.releaseversion }}

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

Open the terminal and run the following commands.

{% tabs %}
{% highlight C# tabtitle="Terminal" %}

dotnet add package Syncfusion.AspNetCore.Schedule --version {{ site.releaseversion }}
dotnet add package Syncfusion.AspNetCore.Themes --version {{ site.releaseversion }}

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% endtabcontents %}

## Add ASP.NET Core tag helpers

After the packages are installed, open the **~/Pages/_ViewImports.cshtml** file and import the `Syncfusion.AspNetCore.Schedule` and `Syncfusion.AspNetCore.Base` tag helpers.

{% tabs %}
{% highlight C# tabtitle="_ViewImports.cshtml" %}

@addTagHelper *, Syncfusion.AspNetCore.Schedule
@addTagHelper *, Syncfusion.AspNetCore.Base

{% endhighlight %}
{% endtabs %}

## Add stylesheet and script resources

The theme stylesheet and script can be referenced from NuGet through [Static Web Assets](https://ej2.syncfusion.com/aspnetcore/documentation/appearance/theme#static-web-assets). Include the [stylesheet](https://ej2.syncfusion.com/aspnetcore/documentation/appearance/theme) and [script references](https://ej2.syncfusion.com/aspnetcore/documentation/common/adding-script-references) inside the `<head>` of **~/Pages/Shared/_Layout.cshtml** file.

{% tabs %}
{% highlight cshtml tabtitle="_Layout.cshtml" %}

<head>
    ...
    ...
    <link rel="stylesheet" href="_content/Syncfusion.AspNetCore.Themes/styles/fluent2.css" />
    <script src="_content/Syncfusion.AspNetCore.Schedule/scripts/sf-schedule.min.js"></script>
</head>

{% endhighlight %}
{% endtabs %}

## Register the script manager

Open the **~/Pages/Shared/_Layout.cshtml** file and register the script manager (`<ejs-scripts>`) at the end of the `<body>` element as shown below.

{% tabs %}
{% highlight cshtml tabtitle="_Layout.cshtml" %}

<body>
    ...
    <!-- Syncfusion ASP.NET Core Script Manager -->
    <ejs-scripts></ejs-scripts>
</body>

{% endhighlight %}
{% endtabs %}

## Add the ASP.NET Core Scheduler control

Add the [ASP.NET Core Scheduler](https://www.syncfusion.com/scheduler-sdk/aspnet-core-scheduler) control in the **~/Pages/Index.cshtml** file.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/default/data/tagHelper %}
{% endhighlight %}
{% endtabs %}

## Run the application

{% tabcontents %}

{% tabcontent Visual Studio %}

Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> (Windows) or <kbd>⌘</kbd>+<kbd>F5</kbd> (macOS) to launch the application. The [ASP.NET Core Scheduler](https://www.syncfusion.com/scheduler-sdk/aspnet-core-scheduler) control will render in your default web browser.

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

Open the terminal and run the following command.

{% tabs %}
{% highlight C# tabtitle="Terminal" %}

dotnet run

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% endtabcontents %}

![ASP.NET Core Scheduler Control](images/scheduler-control.webp)

## Populating appointments

To populate an empty Scheduler with appointments, bind the event data to it by assigning the [DataSource](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Schedule.ScheduleEventSettings.html#Syncfusion_EJ2_Schedule_ScheduleEventSettings_DataSource) property under `e-schedule-eventsettings` tag Helper.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/getting-started/data/tagHelper %}
{% endhighlight %}
{% highlight C# tabtitle="Index.cshtml.cs" %}
public class AppointmentData
{
    public int Id { get; set; }
    public string Subject { get; set; }
    public DateTime StartTime { get; set; }
    public DateTime EndTime { get; set; }
}
{% endhighlight %}
{% endtabs %}

![ASP.NET Core Scheduler with Appointments](images/appointments.webp)

## Setting date

By default, the Scheduler displays the system date as its current date. To change the current date of the scheduler to a specific date, use the [`selectedDate`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_SelectedDate) property.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/getting-started/data/tagHelper %}
{% endhighlight %}
{% highlight C# tabtitle="Index.cshtml.cs" %}
public class AppointmentData
{
    public int Id { get; set; }
    public string Subject { get; set; }
    public DateTime StartTime { get; set; }
    public DateTime EndTime { get; set; }
}
{% endhighlight %}
{% endtabs %}

## Specific view

Scheduler displays `Week` view by default. To change the current view, define the applicable view name to the [`currentView`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_CurrentView) property. The applicable view names are;

* Day
* Week
* WorkWeek
* Month
* Year
* Agenda
* MonthAgenda
* TimelineDay
* TimelineWeek
* TimelineWorkWeek
* TimelineMonth
* TimelineYear

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/views/specific-views/tagHelper %}
{% endhighlight %}
{% endtabs %}

![ASP.NET Core Scheduler with Specific View](images/schedule-with-specific-view.webp)

## Individual view customization

Each individual scheduler view can be customized with its own options such as setting different start and end hours on Week and Work Week views, while hiding weekend days only in Month view. Set the `views` property to a collection of [ScheduleView](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Schedule.ScheduleView.html) objects, where each object defines the customization for an individual view."

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}
{% include code-snippet/scheduler-sdk/asp-net-core/schedule/views/individual-views/tagHelper %}
{% endhighlight %}
{% endtabs %}

![ASP.NET Core Scheduler with Custom Views](images/schedule-with-custom-views.webp)

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/ASP-NET-Core-Getting-Started-Examples/tree/main/Schedule/ASP.NET%20Core%20Tag%20Helper%20Examples).

## See also

1. [Getting Started with ASP.NET Core in Visual Studio Code](https://ej2.syncfusion.com/aspnetcore/documentation/getting-started/vscode)
2. [Getting Started with ASP.NET Core MVC using Tag Helper](https://ej2.syncfusion.com/aspnetcore/documentation/getting-started/aspnet-core-mvc-taghelper)
3. [Getting Started with ASP.NET Core in Visual Studio Mac](https://ej2.syncfusion.com/aspnetcore/documentation/getting-started/visual-studio-mac)
