---
layout: post
title: Row Auto Height in Angular Scheduler | Syncfusion
description: Learn how to auto-adjust row height in the Syncfusion Angular Scheduler timeline and month views to display all overlapping appointments.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Row Auto Height in Angular Scheduler

By default, the height of the Scheduler rows in Timeline views is static. Therefore, when the same time ranges hold multiple overlapping appointments, a `+n more` text indicator is displayed. With this feature enabled, you can now view all overlapping appointments in a specific time range by auto-adjusting the row height according to the number of appointments, instead of displaying the `+n more` text indicators.

To enable auto row height adjustments on Scheduler Timeline views and the Month view, set the [`rowAutoHeight`](https://ej2.syncfusion.com/angular/documentation/api/schedule#rowautoheight) property to `true` (default is `false`).

> This auto row height adjustment applies only to Timeline views and the calendar Month view.

Now, let us see how it works on those applicable views with examples.

![Row Auto Height](images/schedule-row-auto-height.png)

## Calendar month view

By default, the rows of the calendar Month view can hold only a limited number of appointments based on its row height, and the rest of the overlapping appointments are indicated with a `+n more` text indicator. The following example shows how the month view row auto-adjusts based on the number of appointments when this [`rowAutoHeight`](https://ej2.syncfusion.com/angular/documentation/api/schedule#rowautoheight) feature is enabled.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/default-cs59/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/default-cs59/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/scheduler-sdk/angular/schedule/default-cs59" %}

## Timeline views

When the [`rowAutoHeight`](https://ej2.syncfusion.com/angular/documentation/api/schedule#rowautoheight) feature is enabled in Timeline views, the row height auto-adjusts based on the number of overlapping events in the same time range, as demonstrated in the following example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/default-cs60/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/default-cs60/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/scheduler-sdk/angular/schedule/default-cs60" %}

![Timeline Month View](images/schedule-timeline-month.png)

## Timeline views with multiple resources

The following example shows how the auto row adjustment feature works on Timeline views with multiple resources.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/default-cs61/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/default-cs61/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/scheduler-sdk/angular/schedule/default-cs61" %}

![Timeline views with multiple resources](images/schedule-timeline-resource.png)

## Appointments occupying entire cell

By default, when [`rowAutoHeight`](https://ej2.syncfusion.com/angular/documentation/api/schedule#rowautoheight) is enabled, there may be space at the bottom of the cell when an appointment is rendered. To avoid this space, set [`ignoreWhitespace`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings#ignorewhitespace) to `true` within [`eventSettings`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings). The default value is `false`. In the following code example, the whitespace below the appointments has been ignored.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/ignore-whitespace-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/ignore-whitespace-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/scheduler-sdk/angular/schedule/ignore-whitespace-cs1" %}

![Ignoring Whitespace](images/schedule-ignore-whitespace.png)

**Note**: The [`ignoreWhitespace`](https://ej2.syncfusion.com/angular/documentation/api/schedule/eventSettings#ignorewhitespace) property applies only when the [`rowAutoHeight`](https://ej2.syncfusion.com/angular/documentation/api/schedule#rowautoheight) feature is enabled in the Scheduler.

> You can refer to our [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler) feature tour page for its feature representations. You can also explore our [Angular Scheduler example](https://ej2.syncfusion.com/angular/demos/#/material/schedule/overview) to see how to present and manipulate data.
