---
layout: post
title: Getting started with JavaScript Schedule Control | Syncfusion
description: Learn how to create and configure the JavaScript Scheduler control in your application, including setup, initialization, and basic customization.
platform: scheduler-sdk
control: Getting started 
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Getting started with JavaScript Schedule Control

This guide explains how to create a [**JavaScript Scheduler**](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) component and configure its core features in a JavaScript application.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/javascript/documentation/ai-coding-assistant/overview)

## Prerequisites

Before getting started, ensure the following requirements are met:

| Requirement | Notes |
|-------------|-------|
| Modern web browser | Chrome, Firefox, Edge, or Safari — latest version recommended |
| Code editor | Visual Studio Code is recommended |
| Local HTTP server | Required to serve the application. Opening HTML files directly via `file://` may block script loading in some browsers. VS Code Live Server extension is recommended |

## Dependencies

The Scheduler component requires the following dependencies:

```javascript
|-- @syncfusion/ej2-schedule
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-calendars
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-excel-export
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-navigations
```

## Setup for local environment

Follow these steps to set up your local development environment:

**Step 1:** Create a root folder `my-app` for your application.

**Step 2:** Create a `my-app/resources` folder to store local scripts and style files.

**Step 3:** Create `my-app/index.js` and `my-app/index.html` files for initializing the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Scheduler control.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> resources

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 Scheduler control can be initialized using either of the following methods:

* Using local scripts and styles.
* Using CDN links for scripts and styles.

### Using local scripts and styles

You can obtain global scripts and styles from the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installation location.

After installing the Essential<sup style="font-size:70%">&reg;</sup> JS 2 product build, copy the Scheduler and its dependency scripts and style files into the `resources/scripts` and `resources/styles` folders respectively.

Reference the Scheduler's script and style files from the following locations:

**Syntax:**

> Script: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/styles/bootstrap5.3.css`

**Example:**

> Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-schedule/dist/global/ej2-schedule.min.js`
>
> Styles: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-schedule/styles/bootstrap5.3.css`

After copying the files, reference the Scheduler's scripts and styles in the `index.html` file.
The following HTML code example shows the Scheduler's dependencies:

```html
<!DOCTYPE html>
  <html xmlns="https://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Scheduler</title>
            <!-- Essential JS 2 Scheduler's dependent material theme -->
            <link href="resources/base/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <link href="resources/buttons/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <link href="resources/calendars/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <link href="resources/dropdowns/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <link href="resources/inputs/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <link href="resources/splitbuttons/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <link href="resources/lists/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <link href="resources/popups/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <link href="resources/navigations/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <!-- Essential JS 2 Scheduler's material theme -->
            <link href="resources/schedule/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Scheduler's dependent scripts -->
            <script src="resources/scripts/ej2-base.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-inputs.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-calendars.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-file-utils.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-buttons.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-lists.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-data.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-navigations.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-popups.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-dropdowns.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-splitbuttons.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-compression.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-excel-export.min.js" type="text/javascript"></script>
            <!-- Essential JS 2 Scheduler's global script -->
            <script src="resources/scripts/ej2-schedule.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>
```

### Using CDN links for scripts and styles

Using CDN links, you can directly reference the Scheduler's script and styles in the `index.html` file.

Reference the Scheduler's CDN links as shown below:

**Syntax:**

> Script: `https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/{PACKAGE_NAME}/styles/bootstrap5.3.css`

**Example:**

> Script: [`https://cdn.syncfusion.com/ej2/32.1.19/ej2-schedule/dist/global/ej2-schedule.min.js`](https://cdn.syncfusion.com/ej2/ej2-schedule/dist/global/ej2-schedule.min.js)
>
> Styles: [`https://cdn.syncfusion.com/ej2/32.1.19/ej2-schedule/styles/bootstrap5.3.css`](https://cdn.syncfusion.com/ej2/ej2-schedule/styles/bootstrap5.3.css)

The following HTML code example shows the Scheduler dependencies using `ej2-schedule.min.js`:

```html
<!DOCTYPE html>
  <html xmlns="https://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Scheduler</title>
            <!-- Essential JS 2 Scheduler's dependent material theme -->
            <link href="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-base/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-buttons/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-calendars/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-dropdowns/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-inputs/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-splitbuttons/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-lists/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-popups/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-navigations/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <!-- Essential JS 2 Scheduler's material theme -->
            <link href="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-schedule/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Scheduler's dependent script -->
            <script src="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-calendars/dist/global/ej2-calendars.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-file-utils/dist/global/ej2-file-utils.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-dropdowns/dist/global/ej2-dropdowns.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-compression/dist/global/ej2-compression.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-excel-export/dist/global/ej2-excel-export.min.js" type="text/javascript"></script>
            <!-- Essential JS 2 Scheduler's global script -->
            <script src="https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/ej2-schedule/dist/global/ej2-schedule.min.js" type="text/javascript"></script>
       </head>
       <body>
           <!-- Add the HTML <div> element for scheduler  -->
             <div id="Schedule"></div>
             <script src="index.js" type="text/javascript"></script>
       </body>
  </html>
```

Place the following Scheduler code in the `index.js` file:

```javascript
ej.schedule.Schedule.Inject(ej.schedule.Day, ej.schedule.Week, ej.schedule.WorkWeek, ej.schedule.Month, ej.schedule.Agenda);
var scheduleObj = new ej.schedule.Schedule();
scheduleObj.appendTo('#Schedule');
```

## Initialize the Scheduler

Add a `div` element for the Scheduler control in `index.html` and reference the `index.js` file.

In this example, `ej2.min.js` is used, which includes all Essential<sup style="font-size:70%">&reg;</sup> JS 2 components and their dependencies.

```html
<!DOCTYPE html>
  <html xmlns="https://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Scheduler</title>
            <!-- Essential JS 2 Scheduler's dependent material theme -->
            <link href="https://cdn.syncfusion.com/ej2/ej2-base/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-buttons/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-calendars/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-dropdowns/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-inputs/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-splitbuttons/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-lists/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-popups/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-navigations/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <!-- Essential JS 2 Scheduler's material theme -->
            <link href="https://cdn.syncfusion.com/ej2/ej2-schedule/styles/bootstrap5.3.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 all script -->
            <script src="https://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script>
       </head>
       <body>
           <!-- Add the HTML <div> element for scheduler  -->
             <div id="Schedule"></div>
             <script src="index.js" type="text/javascript"></script>
       </body>
  </html>
```

Place the following Scheduler code in the `index.js` file:

```javascript
var scheduleObj = new ej.schedule.Schedule();
scheduleObj.appendTo('#Schedule');
```

## Populating appointments

To populate the empty Scheduler with appointments, define local JSON data or remote data through the `dataSource` property within the `eventSettings` option. The start and end time fields are mandatory for appointments. The following example demonstrates an appointment defined with default fields: Id, Subject, StartTime, and EndTime.

```javascript
var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: {
        dataSource: [{
            Id: 1,
            Subject: 'Meeting',
            StartTime: new Date(2018, 1, 15, 10, 0),
            EndTime: new Date(2018, 1, 15, 12, 30)
        }]
    }
});
scheduleObj.appendTo('#Schedule');
```

You can also use custom field names by mapping them appropriately within the `fields` property:

```javascript
var data = [{
    Id: 2,
    EventName: 'Meeting',
    StartTime: new Date(2018, 1, 15, 10, 0),
    EndTime: new Date(2018, 1, 15, 12, 30),
    IsAllDay: false,
    Status: 'Completed',
    Priority: 'High'
}];
var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: {
        dataSource: data,
        fields: {
            id: 'Id',
            subject: { name: 'EventName' },
            isAllDay: { name: 'IsAllDay' },
            startTime: { name: 'StartTime' },
            endTime: { name: 'EndTime' }
        }
    }
});
scheduleObj.appendTo('#Schedule');
```

The other fields available in Scheduler can be referred from [here](./appointments#event-fields).

## Setting date

By default, the Scheduler displays the current system date. To change the Scheduler's current date, set the `selectedDate` property to a specific date.

```ts
var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15)
});
scheduleObj.appendTo('#Schedule');
```

## Setting view

The Scheduler displays the `Week` view by default. To change the current view, set the `currentView` property to one of the following view names:

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

```ts
var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    currentView: 'Month'
});
scheduleObj.appendTo('#Schedule');
```

## Individual view customization

Each Scheduler view can be customized individually with its own options, such as setting different start and end hours for Week and Work Week views or hiding weekend days in the Month view only. This is achieved by defining the `views` property as an array of objects, where each object represents the customization for an individual view.

Now, run the application in the browser using the following command:

```
npm start
```

The output will display the Scheduler with the specified view configuration.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/views-model-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/views-model-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/views-model-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/views-model-cs1" %}

> You can also explore the [JavaScript Scheduler example](https://ej2.syncfusion.com/javascript/demos/#/material/schedule/overview.html) to see how toolbar buttons interact with Scheduler functionalities.