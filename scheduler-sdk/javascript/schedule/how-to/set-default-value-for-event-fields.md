---
layout: post
title: Set Default Value for Events in JavaScript Scheduler | Syncfusion
description: Learn how to set default values for event fields in the Syncfusion JavaScript Scheduler editor window to pre-fill data on new appointments.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Set Default Value for Event Fields in JavaScript Scheduler

The Scheduler lets you assign default values to event fields (for example, Subject or Location) so new appointments are pre-filled when created.

For example, use the `default` property on a field configuration to supply a Subject value that is applied when the user creates an appointment without entering a subject.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/how-to-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/how-to-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/how-to-cs2" %}