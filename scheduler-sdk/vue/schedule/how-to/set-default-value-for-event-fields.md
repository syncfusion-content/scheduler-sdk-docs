---
layout: post
title: Set Default Value for Event Fields in Vue Scheduler | Syncfusion
description: Learn how to set default values for new event fields in the Syncfusion Vue Scheduler editor window to pre-fill data on new appointments.
control: Scheduler
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Set Default Value for Event Fields in Vue Scheduler

You can customize the default field names, such as Title and Location, and set a default value for the Subject field by using the `default` property. This value is applied when an appointment is created with an empty subject.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/how-to-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/how-to-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/how-to-cs2" %}