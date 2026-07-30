---
layout: post
title: Set clear button in Angular Calendar component | Syncfusion
description: Learn here all about Set clear button in calendar in Syncfusion Angular Calendar component of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Set clear button in calendar 
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Set clear button in calendar in Angular Calendar component

The following steps illustrate how to configure `clear` button in Calendar UI.

1. On [`created`](https://ej2.syncfusion.com/angular/documentation/api/calendar#created) event of Calendar add the required elements to have clear button. Here we have used div with Essential<sup style="font-size:70%">&reg;</sup> JS 2 Button component.

2. Use the `e-footer` class to the div tag to act as the footer.

3. Use button to clear the selected date from the calendar.

4. Bind the required event handler to the button tag to clear the value.

Below is the code example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/scheduler-sdk/angular/calendar/how-to-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/scheduler-sdk/angular/calendar/how-to-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/scheduler-sdk/angular/calendar/how-to-cs1" %}
