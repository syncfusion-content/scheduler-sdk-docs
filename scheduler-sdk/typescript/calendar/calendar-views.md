---
layout: post
title: Calendar views in TypeScript Calendar control | Syncfusion
description: Learn here all about Calendar views in Syncfusion TypeScript Calendar control of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Calendar views 
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Calendar views in TypeScript Calendar control

The Calendar has the following predefined views that provide a flexible way to navigate back and forth when selecting dates.

| **View** | **Description** |
| --- | --- |
| month (default) | Displays the days in a month. |
| year | Displays the months in a year. |
| decade | Displays the years in a decade. |

When view is defined to the [`start`](../api/calendar/#start) property of the Calendar, it allows you to set the initial view on rendering.
 
The following example demonstrates how to set the `year` as the start view of the Calendar.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/calendar/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/calendar/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/calendar/getting-started-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/calendar/getting-started-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/calendar/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/calendar/getting-started-cs2" %}
{% endif %}

## View restriction

Calendar view navigation can be restricted by defining the  [`start`](../api/calendar/#start) and [`depth`](../api/calendar/#depth) property that allows you to select the date from that view.

By defining the start and depth property with the different view, drill-down and drill-up views navigation can be limited to the user. Calendar views will be drill-down up to the view which is set in `depth` property and drill-up up to the view which is set in `start` property.

The following example displays the Calendar in `decade` view, and allows you to select a date in `month` view.

> Depth view should always be smaller than the start view. If the views are the same, then the Calendar view remains unchanged.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/calendar/getting-started-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/calendar/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/calendar/getting-started-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/calendar/getting-started-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/calendar/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/calendar/getting-started-cs3" %}
{% endif %}