---
layout: post
title: Set Default Value for Events in TypeScript Scheduler | Syncfusion
description: Learn how to set default values for event fields in the Syncfusion TypeScript Scheduler editor window to pre-fill data on new appointments.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Set Default Value for Event Fields in TypeScript Scheduler

The Scheduler control allows customization of default field names (such as **Title**, **Location**, etc.) in the event window. You can also assign default values to these fields so they are automatically applied when creating new appointments.

For example, a default value can be set for the **Subject** field using the `default` property. This ensures that when an appointment is created without a subject, the predefined default value is automatically applied.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/how-to-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/how-to-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/how-to-cs2" %}
