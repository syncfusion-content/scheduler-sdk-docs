---
layout: post
title: How to set default value for event fields in Angular Scheduler | Syncfusion
description: Learn how to set default values for event editor fields in the Syncfusion Angular Scheduler, including Subject, Location, and other custom fields.
platform: ej2-angular
control: Scheduler
documentation: ug
domainurl: ##DomainURL##
---

# How to set default value for event fields in Angular Scheduler

Event window default fields name like Title, Location, etc.. can be customized and default value can be set to Subject field using `default` property which will be added if an appointment is created with empty subject.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs51/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs51/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs51" %}
