---
layout: post
title: Globalization in JavaScript Daterangepicker control | Syncfusion
description: Learn here all about Globalization in Syncfusion JavaScript Daterangepicker control of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Globalization 
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Globalization in JavaScript Daterangepicker control

Globalization is the combination of internalization and localization. You can adapt the component to various languages by parsing and formatting the date or number (Internationalization), and also add culture specific customization and translation to the text (Localization).

By default, DateRangePicker date format, week, and month names are specific to the English culture. It utilizes the [Essential<sup style="font-size:70%">&reg;</sup> JavaScript 2 Internationalization](https://ej2.syncfusion.com/documentation/common/internationalization) package to parse and format the date object based on the culture by using the official [`UNICODE CLDR`](http://cldr.unicode.org/) JSON data. It allows to load culture specific CLDR JSON data by using `loadCldr` method.

To use a different culture other than `English`, follow the below steps:

* Install the `CLDR-Data` package by using the below command (Installs the CLDR JSON data). To know more about CLDR-Data refer to the [`CLDR-Data`](https://cldr.unicode.org/index/cldr-spec/cldr-json-bindings) link.

```
npm install cldr-data --save
```

 Once the package is installed, you can find the culture specific JSON data under the location `/node_modules/cldr-data`.

* Import the installed CLDR JSON data into the `app.ts` file. To import JSON data, install the JSON plugin loader. Here, The SystemJS JSON plugin loader is used.

```
npm install systemjs-plugin-json --save-dev
```

* After installation, configure the `system.config.js` configuration settings as given below to map the `systemjs-plugin-json` loader.

```ts
System.config({
    paths: {
        'npm:': './node_modules/',
        'syncfusion:': 'npm:@syncfusion/'

    },
    map: {
        app: 'app',

        //Syncfusion packages mapping
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
        "@syncfusion/ej2-calendars": "syncfusion:ej2-calendars/dist/ej2-calendars.umd.min.js",
        "cldr-data": 'npm:cldr-data',
        "plugin-json": "npm:systemjs-plugin-json/json.js"
    },
    meta: {
        '*.json': { loader: 'plugin-json' }
    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' },
        'cldr-data': { main: 'index.js', defaultExtension: 'js' }
    }
});

System.import('app');

```

* Use the `loadCldr` method to load the culture specific CLDR JSON data from the installed location to `app.ts` file.

* DateRangePicker displayed `Sunday` as the first day of week based on default culture ("en-US"). If you want to display the DateRangePicker with loaded culture's first day of week, you need to import `weekdata.json` file from the `cldr-data/suppemental` as given in the code example.

```ts
declare var require: any;

loadCldr(
    require('cldr-data/main/de/numbers.json'),
    require('cldr-data/main/de/ca-gregorian.json'),
    require('cldr-data/main/de/numbers.json'),
    require('cldr-data/main/de/timeZoneNames.json'),
    require('cldr-data/supplemental/weekdata.json') // To load the culture based first day of week
);
```

> The `Localization` library allows you to localize default text content of the DateRangePicker. The DateRangePicker component has static text for  **today** feature that can be changed to other cultures (Arabic, Deutsch, French, etc.) by defining the [`locale`](../api/daterangepicker#locale) value and translation object.

Locale keywords |Text
-----|-----
placeholder | Hint to describe expected value in input element.
startLabel | Label to represent the start date.
endLabel | Label to represent the end date.
applyText | Text present in the apply button.
cancelText | Text present in the cancel button.
selectedDays | Text to represent selected days.
days | Text represents days.
customRange | Text present in the custom range button in presets container.

* Before changing to a culture other than `English`, ensure that locale text for the concerned culture is loaded through `load` method of
[L10n](../api/base/l10n#load) class.

```ts

//Load the L10n, loadCldr from ej2-base
import { loadCldr, L10n } from '@syncfusion/ej2-base';

//load the locale object to set the localized placeholder value
L10n.load({
    'de': {
        'daterangepicker': { placeholder: 'Wählen Sie ein Datum aus' }
    }
});
```

* Set the culture by using the [`locale`](../api/daterangepicker#locale) property. In the following code example, the DateRangePicker is initialized in `German` culture with corresponding localized text.

The following example demonstrates the DateRangePicker in `German` culture.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/daterange-picker/globalization-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/daterange-picker/globalization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/daterange-picker/globalization-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/daterange-picker/globalization-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/daterange-picker/globalization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/daterange-picker/globalization-cs1" %}
{% endif %}

## Right-To-Left

The DateRangePicker supports RTL (right-to-left) functionality for languages like Arabic and Hebrew to displays the text in the right-to-left direction. Use [`enableRtl`](../api/daterangepicker#enablertl) property to set the RTL direction. The following code example initialize the DateRangePicker component in `Hebrew` culture and also explains how to set the localized text to the placeholder using `load` method of
[L10n](../api/base/l10n#load) class.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/daterange-picker/rtl-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/daterange-picker/rtl-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/daterange-picker/rtl-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/daterange-picker/rtl-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/daterange-picker/rtl-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/daterange-picker/rtl-cs1" %}
{% endif %}

## Customize the date format

Representation of start and end date strings can be customized to required format by using [`format`](../api/daterangepicker#format) property. By default, the format is based on the culture. To know more about the date format standards, refer to the Internationalization Date Format section. In the following sample, the date strings are formatted to `yyyy-MM-dd` and in between the string "to" is set as a [`separator`](../api/daterangepicker#separator).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/daterange-picker/getting-started-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/daterange-picker/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/daterange-picker/getting-started-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/daterange-picker/getting-started-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/daterange-picker/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/daterange-picker/getting-started-cs5" %}
{% endif %}