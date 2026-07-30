---
layout: post
title: Getting started with TypeScript Schedule control | Syncfusion
description: Learn how to create and configure the TypeScript Scheduler control in TypeScript using the Essential JS 2 quickstart seed repository.
platform: scheduler-sdk
control: Getting started 
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Getting started in TypeScript Schedule control

This section explains how to create the [**JavaScript Scheduler**](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) component and configure its available functionalities in a TypeScript environment.

## Prerequisites

Before getting started, ensure the following tools are installed on your machine:

| Tool | Version / Notes |
|------|----------------|
| Node.js | v14.15.0 or higher |
| npm | Bundled with Node.js |

You can verify your Node.js and npm versions by running:

```
node -v
npm -v
```

## Installation and configuration

To build a high-performance TypeScript application with a smooth development workflow, Vite is the recommended tool. Unlike traditional setups, Vite is designed for speed and simplicity, providing near-instant startup and fast updates during development. For detailed steps, refer to the Vite [installation instructions](https://vite.dev/guide/)

Run the following command to set up a TypeScript application.

```bash
npm create vite@latest my-app -- --template vanilla-ts
```

After running the above commands, the project will be created and all required dependencies will be installed automatically.

## Adding Syncfusion<sup style="font-size:70%">®</sup> Schedule package

All the available Essential<sup style="font-size:70%">®</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.  
To install the JavaScript Scheduler component in your TypeScript application, use the following command:

```bash
cd my-app
npm install @syncfusion/ej2-schedule --save
```

## Adding CSS reference

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> Schedule component can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) documentation.

Install the **Tailwind 3** theme package using the following command:
 
{% tabs %}
{% highlight bash tabtitle="npm" %}
 
npm install @syncfusion/ej2-tailwind3-theme --save
 
{% endhighlight %}
{% endtabs %}
 
Then add the following CSS reference to the **src/styles/styles.css** file:
 
{% tabs %}
{% highlight css tabtitle="style.css" %}
 
@import "../../node_modules/@syncfusion/ej2-tailwind3-theme/styles/schedule/index.css";
 
{% endhighlight %}
{% endtabs %}

>To refer `style.css` in the application then import it in the `src/main.ts` file.

## Module injection

Each view type available in the Scheduler is maintained as an individual module. To work with specific views, inject the required modules. The following modules are available:

* **Day** - Inject this module to work with the Day view.
* **Week** - Inject this module to work with the Week view.
* **WorkWeek** - Inject this module to work with the Work Week view.
* **Month** - Inject this module to work with the Month view.
* **Agenda** - Inject this module to work with the Agenda view.

Inject all required modules into the Scheduler using the `Schedule.Inject` method within the `main.ts` file:

{% tabs %}
{% highlight ts tabtitle="main.ts" %}

import './style.css';
import { Schedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);

{% endhighlight %}
{% endtabs %}

## Initialize the Schedule

Add an HTML `div` element with an `id` attribute in your `index.html` file, where the Scheduler will be rendered:

`[src/index.html]`

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Syncfusion Typescript Schedule</title>
  </head>
  <body>
    <div id="Schedule"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>

{% endhighlight %}
{% endtabs %}

Import the Scheduler component in your `main.ts` file and initialize it to the element with id `Schedule` defined in the `index.html` file:

{% tabs %}
{% highlight ts tabtitle="main.ts" %}
import './style.css';
import { Schedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);

let scheduleObj: Schedule = new Schedule();
scheduleObj.appendTo('#Schedule');
{% endhighlight %}
{% endtabs %}

Run the following command in the terminal to start the development server. This compiles the project, launches a local server, and allowing you to view changes in real time during development.

```bash
npm run dev
```
> Above demo will display the empty scheduler.

## Populating appointments

To populate the Scheduler with appointments, you can use either a local JSON array or a remote data service. Assign the data to the `dataSource` property, which is part of the `eventSettings` configuration.

The `StartTime` and `EndTime` fields are mandatory for each appointment. The following example uses default fields like `Id`, `Subject`, `StartTime`, and `EndTime`.

{% tabs %}
{% highlight ts tabtitle="main.ts" %}
import { Schedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';
import './style.css'

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);

let data: Object[] = [
    {
        Id: 1,
        Subject: 'Meeting - 1',
        StartTime: new Date(new Date().setHours(9,0,0)),
        EndTime: new Date(new Date().setHours(10,0,0)),
    }
];

let scheduleObj: Schedule = new Schedule({
    eventSettings: { dataSource: data }
});

scheduleObj.appendTo('#Schedule');
{% endhighlight %}
{% endtabs %}

## Setting date

Scheduler usually displays the system date as its current date. To change the current date of the Scheduler to a specific date, define the `selectedDate` property.

{% tabs %}
{% highlight ts tabtitle="main.ts" %}
import { Schedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';
import './style.css'

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);

let scheduleObj: Schedule = new Schedule({
    selectedDate: new Date(2026, 4, 18)
});

scheduleObj.appendTo('#Schedule');
{% endhighlight %}
{% endtabs %}

## Setting view

Scheduler displays the `Week` view by default. To change the current view, define the applicable view name to the `currentView` property. The default applicable view names are:

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

You can configure only the required views as needed, and include additional views based on your application requirements.

{% tabs %}
{% highlight ts tabtitle="main.ts" %}
import { Schedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';
import './style.css'

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);

let scheduleObj: Schedule = new Schedule({
    currentView: 'Month'
});

scheduleObj.appendTo('#Schedule');
{% endhighlight %}
{% endtabs %}

## See also
 
* [Explore available views and their customization options](../views.md)
* [Explore appointments and event data handling](../appointments.md)
 