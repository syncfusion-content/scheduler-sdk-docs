---
layout: post
title: Getting started | Syncfusion
description:  Checkout and learn about Es5 getting started with JavaScript Datetimepicker control of Syncfusion Essential JS 2 and more details.
platform: scheduler-sdk
control: Es5 getting started 
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Getting started in JavaScript Datetimepicker control

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Date time picker and demonstrate the basic usage of the Date time picker control in a JavaScript application.

## Dependencies

The list of dependencies required to use the Date time picker component in your application is given below:

```javascript
|-- @syncfusion/ej2-calendars
  |-- @syncfusion/ej2-base
  |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-splitbuttons
  |-- @syncfusion/ej2-lists
  |-- @syncfusion/ej2-data
  |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-buttons
```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Date time picker control.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> resources

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 Date time picker control can be initialized by using either of the following ways.

* Using local script and style.
* Using CDN link for script and style.

### Using local script and style references in a HTML page

**Step 1:** You can get the global scripts and styles from the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

**Step 2:** To render DateTimePicker component, need to add DateTimePicker and its dependent packages from below installed location.

#### Dependencies

* ej2-base

* ej2-buttons

* ej2-inputs

* ej2-popups

* ej2-lists

* ej2-calendars

**Syntax:**

> package: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME`

**Example:**

> Package: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-base`
>
> packages: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-buttons`
>
> packages: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-inputs`
>
> packages: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-popups`
>
> packages: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-lists`
>
> Package: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-calendars`
>

**Step 3:** Create a folder `myapp/resources` and copy/paste the global scripts and styles from the above installed location to `myapp/resources` location.

**Step 4:** Create a HTML page (index.html) in `myapp` location and add the Essential<sup style="font-size:70%">&reg;</sup> JS 2 script and style references.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Essential JS 2 DateTimePicker Component</title>
    <!-- Essential JS 2 DateTimePicker's dependent material theme -->
    <link href="//cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="//cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="//cdn.syncfusion.com/ej2/ej2-calendars/styles/material.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 all script -->
    <!-- <script src="https://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script> -->

    <!-- Essential JS 2 DateTimePicker's dependent scripts -->
    <script src="//cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
    <script src="//cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
    <script src="//cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
    <script src="//cdn.syncfusion.com/ej2/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
    <script src="//cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
    <script src="//cdn.syncfusion.com/ej2/ej2-calendars/dist/global/ej2-calendars.min.js" type="text/javascript"></script>
</head>
<body>
</body>

</html>
```

> If you want to refer the combined component styles, please make use of our [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

**Step 5:** Now, add the `input` element and initiate the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 DateTimePicker** component in the `index.html` by using following code

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 DateTimePicker Component</title>
    <!-- Essential JS 2 DateTimePicker's dependent material theme -->
    <link href="//cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="//cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="//cdn.syncfusion.com/ej2/ej2-calendars/styles/material.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 all script -->
    <!-- <script src="https://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script> -->

    <!-- Essential JS 2 DateTimePicker's dependent scripts -->
    <script src="//cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
    <script src="//cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
    <script src="//cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
    <script src="//cdn.syncfusion.com/ej2/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
    <script src="//cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
    <script src="//cdn.syncfusion.com/ej2/ej2-calendars/dist/global/ej2-calendars.min.js" type="text/javascript"></script>
</head>

<body>
    <!-- Add the HTML <input> element  -->
    <input id="element" />
    <script>
        // initialize DateTimePicker component
        var DateTimePicker = new ej.calendars.DateTimePicker();

        // Render initialized DateTimePicker.
        DateTimePicker.appendTo('#element')
    </script>
</body>

</html>
```

**Step 6:** Now, run the `index.html` in web browser, it will render the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 DateTimePicker** component.

### Using CDN link for script and style reference

**Step 1:** The Essential<sup style="font-size:70%">&reg;</sup> JS 2 components scripts and styles are already hosted in the below CDN link formats.

**Syntax:**
> Script: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Style: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Script: [`http://cdn.syncfusion.com/ej2/ej2-calendars/dist/global/ej2-calendars.min.js`](http://cdn.syncfusion.com/ej2/ej2-calendars/dist/global/ej2-calendars.min.js)
>
> Styles: [`http://cdn.syncfusion.com/ej2/ej2-calendars/styles/material.css`](http://cdn.syncfusion.com/ej2/ej2-calendars/styles/material.css)

**Step 2:** Add the `CDN` global script and styles for calendar and its dependent packages in `myapp/index.html` as shown below.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 Calendar Component</title>
    <!-- Essential JS 2 DateTimePicker's dependent material theme -->
    <link href="//cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="//cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css" />
    <link href="//cdn.syncfusion.com/ej2/ej2-calendars/styles/material.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 all script -->
    <!-- <script src="https://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script> -->

    <!-- Essential JS 2 DateTimePicker's dependent scripts -->
    <script src="//cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
    <script src="//cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
    <script src="//cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
    <script src="//cdn.syncfusion.com/ej2/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
    <script src="//cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
    <script src="//cdn.syncfusion.com/ej2/ej2-calendars/dist/global/ej2-calendars.min.js" type="text/javascript"></script>
</head>

<body>
    <!-- Add the HTML <input> element  -->
    <input id="element" />
    <script>
        // initialize button component
        var DatetimeObj = new ej.calendars.DateTimePicker();
        // Render initialized button.
        DatetimeObj.appendTo('#element')
    </script>
</body>

</html>
```

>When referencing CDN links in application, always ensure the network connection will be in enabled state.

## Setting the min and max

The minimum and maximum date time can be defined with the help of `min` and `max` property.
The following example demonstrates to set the `min` and `max` on initializing the
DateTimePicker.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/datetime-picker/getting-started-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/datetime-picker/getting-started-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/datetime-picker/getting-started-cs7" %}
> If the value of `min` or `max` properties
changed through code behind, then you have to
update the `value` property to set within the
range.

## See Also

* [Render DateTimePicker with specific culture](./globalization)
