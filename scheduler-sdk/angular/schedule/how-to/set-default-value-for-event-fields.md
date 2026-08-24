---
layout: post
title: Set Default Value for Event Fields in Angular Scheduler | Syncfusion
description: Learn how to set default values for event fields in the Syncfusion Angular Scheduler editor window to pre-fill data on new appointments.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Set Default Value for Event Fields in Angular Scheduler

You can set default values for editor fields such as `Subject`, `Location`, and other event fields. Use the `default` property to populate the `Subject` field when a new appointment is created with an empty subject.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/default-cs51/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/default-cs51/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://helpstaging.syncfusion.com/samples/scheduler-sdk/angular/schedule/default-cs51" %}
