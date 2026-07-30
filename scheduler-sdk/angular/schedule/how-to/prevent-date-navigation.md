---
layout: post
title: Prevent date navigation in Angular Schedule component | Syncfusion
description: Learn here all about Prevent date navigation in Syncfusion Angular Schedule component of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Prevent date navigation in Angular Schedule component

We can prevent navigation while clicking on the date header by simply removing `e-navigate` class from header cells which can be achieved in the [`renderCell`](https://ej2.syncfusion.com/angular/documentation/api/schedule/#rendercell) event as shown in the below demo.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/default-cs50/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/default-cs50/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/scheduler-sdk/angular/schedule/default-cs50" %}