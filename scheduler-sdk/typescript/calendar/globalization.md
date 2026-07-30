---
layout: post
title: Globalization in TypeScript Calendar control | Syncfusion
description: Learn here all about Globalization in Syncfusion TypeScript Calendar control of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Globalization 
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Globalization in TypeScript Calendar control

Globalization is the combination of  adapting the component to various languages by means of parsing and formatting the date or number [`Internationalization`](../common/internationalization/) and also by adding cultural specific customizations and translating the text [`localization`](../common/localization/)

By default, the Calendar date format, week, and month names are specific to American English culture. It uses the [Essential<sup style="font-size:70%">&reg;</sup> JavaScript 2 Internationalization](https://ej2.syncfusion.com/documentation/common/internationalization/) package to parse and format date object based on the culture using the official [`UNICODE CLDR`](http://cldr.unicode.org/) JSON data. It provides the [`loadCldr`](https://ej2.syncfusion.com/documentation/common/internationalization/#loading-culture-data) method to load the culture-specific CLDR JSON data.

All the Essential<sup style="font-size:70%">&reg;</sup> JS 2  component are specific to English culture ('en-US'). If you want to go with the different culture other than `English`, follow the below steps.

* Install the `CLDR-Data` package by using the below command (installs the CLDR JSON data). To know more about CLDR data, refer to the [`CLDR-Data`](https://cldr.unicode.org/index/cldr-spec/cldr-json-bindings) link.

```
npm install cldr-data --save
```

 Once the package is installed, the culture-specific JSON data will be available in `/node_modules/cldr-data`.

* Now, import the installed CLDR JSON data to the `app.ts` file. To import JSON data, install the JSON plugin loader. In the example, SystemJS JSON plugin loader is used.

```
npm install systemjs-plugin-json --save-dev
```

* After it is installed, configure the `system.config.js`  settings as given below to map the `systemjs-plugin-json` loader.

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
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
        "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-calendars": "syncfusion:ej2-calendars/dist/ej2-calendars.umd.min.js",
        "cldr-data": 'npm:cldr-data',
        //systemjs-plugin-json loader package mapping
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

* Now, use the [`loadCldr`](https://ej2.syncfusion.com/documentation/common/internationalization/#cldr-data-dependencies) method to load the culture-specific CLDR JSON data from the installed location to `app.ts` file.

* Calendar displayed `Sunday` as the first day of week based on default culture ("en-US"). If you want to display the Calendar with loaded culture's first day of week, you need to import `weekdata.json` file from the `cldr-data/suppemental` as given in the code example.

```ts
//import the loadCldr from ej2-base
import { loadCldr } from '@syncfusion/ej2-base';

declare var require: any;

loadCldr(
    require('cldr-data/supplemental/numberingSystems.json'),
    require('cldr-data/main/de/ca-gregorian.json'),
    require('cldr-data/main/de/numbers.json'),
    require('cldr-data/main/de/timeZoneNames.json'),
    require('cldr-data/supplemental/weekdata.json')); // To load the culture based first day of week
```

> The [`Localization`](../api/base/l10n) library allows you to localize default text content of the Calendar. The Calendar component has static text for  **today** feature that can be changed to other cultures (Arabic, Deutsch, French, etc.) by defining the [`locale`](../api/calendar#locale) value and translation object.

Locale keywords |Text
-----|-----
today | Name of the button to choose Today date.

* Before changing the culture other than `English`, ensure that locale text for the concerned culture is loaded through `load` method of
[L10n](../api/base/l10n#load) class.

```ts

//Load the L10n from ej2-base
import { L10n } from '@syncfusion/ej2-base';

//load the locale object to set the localized placeholder value
L10n.load({
    'de': {
        'calendar': { today: 'heute'}
    }
});
```

* Set the culture by using the [`locale`](../api/calendar#locale) property. The code example initializes the Calendar component in the `German` culture.

```ts
import { Calendar } from '@syncfusion/ej2-calendars';
//import the loadCldr from ej2-base
import { loadCldr, L10n } from '@syncfusion/ej2-base';

declare var require: any;

loadCldr(
    require('cldr-data/supplemental/numberingSystems.json'),
    require('cldr-data/main/de/ca-gregorian.json'),
    require('cldr-data/main/de/numbers.json'));
    require('cldr-data/main/de/timeZoneNames.json'));

L10n.load({
    'de': {
        'calendar': { today: 'heute' }
    }
});

let calendarObject: Calendar = new Calendar({
    //sets the locale.
    locale: 'de'
});
calendarObject.appendTo('#element');
```

The following example displays the Calendar in `German` culture.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/calendar/internationalization-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/calendar/internationalization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/calendar/internationalization-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/calendar/internationalization-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/calendar/internationalization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/calendar/internationalization-cs1" %}
{% endif %}

## Right-to-left

The Calendar supports right-to-left functionality for languages like Arabic,  Hebrew, etc. to display text in the right-to-left direction. Use
[`enableRtl`](../api/calendar#enablertl) property to set the RTL direction.

The following code example initializes the Calendar component in `Arabic` culture.

```ts
import { Calendar } from '@syncfusion/ej2-calendars';
//import the loadCldr from ej2-base
import { loadCldr, L10n } from '@syncfusion/ej2-base';

declare var require: any;

loadCldr(
    require('cldr-data/supplemental/numberingSystems.json'),
    require('cldr-data/main/ar/ca-gregorian.json'),
    require('cldr-data/main/ar/numbers.json'));
    require('cldr-data/main/ar/timeZoneNames.json'));

L10n.load({
    'ar': {
        'calendar': {
            today: 'اليوم'
        }
    }

});

let calendarObject: Calendar = new Calendar({
    //sets the locale.
    locale: 'ar'
});
calendarObject.appendTo('#element');
```

The following example displays the Calendar in `Arabic`
culture in the right-to-left direction.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/calendar/rtl-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/calendar/rtl-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/calendar/rtl-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/calendar/rtl-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/calendar/rtl-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/calendar/rtl-cs1" %}
{% endif %}