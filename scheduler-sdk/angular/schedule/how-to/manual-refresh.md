---
layout: post
title: Manually Refresh Layout in Angular Scheduler | Syncfusion
description: Learn how to manually refresh specific templates and the overall layout in the Syncfusion Angular Scheduler without re-rendering the entire component.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Programmatically Refresh Layout in Angular Scheduler

## Refresh Template

In the [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler), you can refresh specific template elements without re-rendering the entire component by using the [`refreshTemplates`](https://ej2.syncfusion.com/angular/documentation/api/schedule#refreshtemplates) public method. Use this method to refresh one or more specific templates, or all templates at once. The following template names are accepted as arguments.

* `eventTemplate`
* `dateHeaderTemplate`
* `resourceHeaderTemplate`
* `quickInfoTemplates`
* `editorTemplate`
* `tooltipTemplate`
* `headerTooltipTemplate`

The example below shows how to use `refreshTemplates` to refresh multiple templates. It uses scheduler templates such as [`cellTemplate`](https://ej2.syncfusion.com/angular/documentation/api/schedule#celltemplate), [`dateHeaderTemplate`](https://ej2.syncfusion.com/angular/documentation/api/schedule#dateheadertemplate), [`eventTemplate`](https://ej2.syncfusion.com/angular/documentation/api/schedule#eventtemplate), and [`resourceHeaderTemplate`](https://ej2.syncfusion.com/angular/documentation/api/schedule#resourceheadertemplate).

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/scheduler-sdk/angular/schedule/refresh-templates-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/refresh-templates-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/refresh-templates-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/scheduler-sdk/angular/schedule/refresh-templates-cs1" %}

## Refresh Layout

In Scheduler, you can refresh the layout manually without re-rendering DOM elements by using the [`refreshLayout`](https://ej2.syncfusion.com/angular/documentation/api/schedule#refreshlayout) public method. The example below shows how to use `refreshLayout`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/default-cs47/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/schedule/default-cs47/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/scheduler-sdk/angular/schedule/default-cs47" %}
