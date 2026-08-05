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

Event window default fields name like Title, Location, etc.. can be customized and default value can be set to Subject field using `default` property which will be added if an appointment is created with empty subject.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/default-cs51/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/default-cs51/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/scheduler-sdk/angular/schedule/default-cs51" %}
