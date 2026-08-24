---
layout: post
title: Localization in ASP.NET MVC Scheduler | Syncfusion
description: Learn how to localize the Syncfusion ASP.NET MVC Scheduler to adapt to different languages, cultures, time formats, and RTL mode.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---


# Globalization and Localization in ASP.NET MVC Scheduler

The Scheduler integrates different date-time formats and cultures, which allows it to function globally, thus meeting the diverse needs of different regions.

You can adapt the Scheduler to various languages by parsing and formatting the date or number ([`Internationalization`](https://ej2.syncfusion.com/aspnetmvc/documentation/common/internationalization)), and by adding culture-specific customization and translation to the text ([`Localization`](https://ej2.syncfusion.com/aspnetmvc/documentation/common/localization)).

## Globalization

The Internationalization library provides support for formatting and parsing the number, date, and time by using the official [`Unicode CLDR`](https://cldr.unicode.org/) JSON data and also provides the `loadCldr` method to load the culture-specific CLDR JSON data.

By default, the Scheduler is set to follow the English culture (`en-US`). If you want to use a culture other than English, follow the steps below.

Install the `CLDR-Data` package by using the following command (it installs the CLDR JSON data). For more information about CLDR-Data, refer to this [link](https://cldr.unicode.org/index/cldr-spec/cldr-json-bindings).

```
npm install cldr-data --save
```

Once the package is installed, you can find the culture-specific JSON data under the location `node_modules/cldr-data`.

Once the `CLDR-Data` package is installed, create a folder named `cldr-data` inside the `Scripts` folder. Then create the folder structure shown below inside the `Scripts` folder.

* `Scripts/cldr-data/supplemental`
* `Scripts/cldr-data/main`

The files listed below are required to setup a specific culture for the Scheduler.

* numberingSystems.json
* ca-gregorian.json
* numbers.json
* timeZoneNames.json
* ca-islamic.json

The file `numberingSystems.json` is available in the location `node_modules/cldr-data/supplemental` and is common for all cultures. Move this file to the location `Scripts/cldr-data/supplemental`.

The other required files mentioned above are available in the location `node_modules/cldr-data/main/culture_code`. In this location, every culture has its files inside a folder named with its language culture code. For example, if you are loading the German culture, the German culture files can be found inside the location `node_modules/cldr-data/main/de`. Now create a folder named `de` inside the location `Scripts/cldr-data/main` and move the files inside it.

Now use the `loadCultureFiles` method to load the culture-specific CLDR JSON data.

```sh
    loadCultureFiles('de');
    function loadCultureFiles(name) {
        var files = ['ca-gregorian.json', 'numbers.json', 'timeZoneNames.json'];
        var loader = ej.base.loadCldr;
        var loadCulture = function (prop) {
            var val, ajax;
            ajax = new ej.base.Ajax(location.origin + '/../Scripts/cldr-data/main/' + name + '/' + files[prop], 'GET', false);
            ajax.onSuccess = function (value) {
                val = value;
            };
            ajax.send();
            loader(JSON.parse(val));
        };
        for (var prop = 0; prop < files.length; prop++) {
            loadCulture(prop);
        }
    }
```

Set the culture to Scheduler by using the `Locale` property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/localization/internationalization/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/localization/internationalization/data.cs %}
{% endhighlight %}
{% endtabs %}



## Localizing the static Scheduler text

The [`Localization`](https://ej2.syncfusion.com/aspnetmvc/documentation/common/localization) library allows you to display all the static text, date content, and time mode of the Scheduler in the localized language. To achieve this, set the `Locale` property of the Scheduler, and define the translation text for the static words of the Scheduler through the `load` method of the `L10n` class.

For example, the following code example lets you define the Hungarian translations for all the static words used in the Scheduler.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/localization/localization/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/localization/localization/data.cs %}
{% endhighlight %}
{% endtabs %}



## Setting date format

The Scheduler can be used with all valid date formats and by default follows the universal date format `MM/dd/yyyy`. If the [`DateFormat`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_DateFormat) property is not specified, the Scheduler uses the locale assigned to it. Since the default locale applied to the Scheduler is `en-US`, the Scheduler follows the `MM/dd/yyyy` pattern.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/localization/dateformat/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/localization/dateformat/data.cs %}
{% endhighlight %}
{% endtabs %}



## Setting the time format

The time format defines how the time value is represented in different string formats in the Scheduler. By default, the time mode of the Scheduler can be either 12-hour or 24-hour format, based entirely on the `locale` set to the Scheduler. Since the default `locale` value of the Scheduler is `en-US`, the time mode will be set to 12-hour format automatically. You can also customize the format by using the [`timeFormat`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_TimeFormat) property. To know more about the time format standards, refer to the [Date and Time Format](https://ej2.syncfusion.com/aspnetmvc/documentation/common/internationalization#custom-formats) section.

The following example demonstrates the Scheduler component in 24-hour format.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/localization/timeformat/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/localization/timeformat/data.cs %}
{% endhighlight %}
{% endtabs %}



N> The [`timeFormat`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_TimeFormat) property only accepts valid time formats.

## Displaying Scheduler in RTL mode

The Scheduler layout and its behavior can be changed according to the common RTL (Right-to-Left) conventions by setting [`EnableRtl`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.Schedule.html#Syncfusion_EJ2_Schedule_Schedule_EnableRtl) to `true`. By doing so, the Scheduler will display its usual layout from right to left. Its default value is `false`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/localization/rtl/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/localization/rtl/data.cs %}
{% endhighlight %}
{% endtabs %}



N> You can refer to our [ASP.NET MVC Scheduler](https://www.syncfusion.com/scheduler-sdk/aspnet-mvc-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [ASP.NET MVC Scheduler](https://ej2.syncfusion.com/aspnetmvc/schedule/overview#/fluent2) example to know how to present and manipulate data.

## See Also

* [How to change first day of the week in the Scheduler](https://help.syncfusion.com/scheduler-sdk/asp-net-mvc/schedule/working-days#setting-start-day-of-the-week)