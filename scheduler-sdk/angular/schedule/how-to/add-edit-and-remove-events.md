---
layout: post
title: Add edit and remove events in Angular Schedule component | Syncfusion
description: Learn here all about Add edit and remove events in Syncfusion Angular Schedule component of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Add edit and remove events in Angular Schedule component

CRUD actions can be manually performed on appointments using the [`addEvent`](https://ej2.syncfusion.com/angular/documentation/api/schedule#addevent), [`saveEvent`](https://ej2.syncfusion.com/angular/documentation/api/schedule#saveevent), and [`deleteEvent`](https://ej2.syncfusion.com/angular/documentation/api/schedule#deleteevent) methods in the [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler), as shown below.

## Normal events

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/default-cs44/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/default-cs44/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/scheduler-sdk/angular/schedule/default-cs44" %}

## Recurring events

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/default-cs45/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/default-cs45/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/scheduler-sdk/angular/schedule/default-cs45" %}
```