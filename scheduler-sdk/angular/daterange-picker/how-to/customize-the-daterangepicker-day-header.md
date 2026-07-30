---
layout: post
title: Customize the daterangepicker day header in Angular Daterangepicker component | Syncfusion
description: Learn here all about Customize the daterangepicker day header in Syncfusion Angular Daterangepicker component of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Customize the daterangepicker day header 
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Customize the daterangepicker day header in Angular Daterangepicker component

You can change the format of the day that to be displayed in header using [`dayHeaderFormat`](https://ej2.syncfusion.com/angular/documentation/api/daterangepicker#dayheaderformat) property. By default, the format is `Short`.

You can find the possible formats on below.

| **Name** | **Description** |
|------|---------------------|
| `Short` | Sets the short format of day name (like Su ) in day header. |
| `Narrow` | Sets the single character of day name (like S ) in day header. |
| `Abbreviated` | Sets the min format of day name (like Sun ) in day header. |
| `Wide` | Sets the long format of day name (like Sunday ) in day header. |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/daterange-picker/header-format-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/daterange-picker/header-format-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/scheduler-sdk/angular/daterange-picker/header-format-cs1" %}
