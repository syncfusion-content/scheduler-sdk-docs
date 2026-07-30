---
layout: post
title: Getting started with TypeScript Calendar control | Syncfusion
description:  Checkout and learn about Getting started with TypeScript Calendar control of Syncfusion Essential JS 2 and more details.
platform: scheduler-sdk
control: Getting started 
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Getting started in TypeScript Calendar control

This section explains how to create a simple Calendar, and configure its available functionalities in TypeScript, using Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

The list of dependencies required to use the Calendar component in your application is given below:

```javascript
|-- @syncfusion/ej2-calendars
  |-- @syncfusion/ej2-base
  |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-splitbuttons
  |-- @syncfusion/ej2-lists
  |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-buttons
```

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart

{% endhighlight %}
{% endtabs %}

After cloning the application in the `ej2-quickstart` folder, run the following command line to navigate to the `ej2-quickstart` folder.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-quickstart

{% endhighlight %}
{% endtabs %}

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript packages

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Import the Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls come with [built-in themes](https://ej2.syncfusion.com/documentation/appearance/theme), which are available in the installed packages. It's easy to adapt the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls to match the style of your application by referring to one of the built-in themes.

The quickstart application is preconfigured to use the **Material** theme in the **~/src/styles/styles.css** file, as shown below: 

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-calendars/styles/material.css";

{% endhighlight %}
{% endtabs %}

> You can check out the [themes](https://ej2.syncfusion.com/documentation/appearance/theme) section to know more about built-in themes and CSS reference for individual controls.

## Add Calendar to the application

Add the HTML div tag with an ID attribute as the `element` to your `index.html` file.

`[src/index.html]`

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 Calendar component</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body>
    <div style="margin: 50px;">
        <!--Element which is going to render the Calendar-->
        <div id="element"></div>
    </div>

</body>

</html>

{% endhighlight %}
{% endtabs %}

Then, import the Calendar component to your `app.ts` file, and initialize it with the `#element`
`[src/app/app.ts]`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Calendar } from '@syncfusion/ej2-calendars';
//Initialize calendar component.
let calendarObject: Calendar = new Calendar();
//Render initialized calendar.
calendarObject.appendTo('#element');

{% endhighlight %}
{% endtabs %}

## Run the application

Now, run the application by using the command below.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run start

{% endhighlight %}
{% endtabs %}

The following example shows a basic Calendar component.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/calendar/getting-started-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/calendar/getting-started-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/calendar/getting-started-cs11" %}

## Setting the value, min and max dates

After rendering a simple Calendar component by following the above steps, configure the Calendar to set a value within a specific range using its value, min, and max properties.

Here the Calendar allows you to select a date within the range from 9th to 15th.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/calendar/getting-started-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/calendar/getting-started-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/calendar/getting-started-cs12" %}

## See Also

* [Select multiple dates in the Calendar](./multi-select)
* [Render Calendar with specific culture](./globalization)
* [How to change the initial view of the Calendar](./calendar-views)
* [Render Calendar with week numbers](./how-to/render-the-calendar-with-week-numbers)
* [Show other month dates](./how-to/show-dates-of-other-months)
