---
layout: post
title: Display multiple colors in a single event in Vue Schedule | Syncfusion
description: Learn how to display multiple colors within a single event in the Syncfusion Vue Schedule component of Syncfusion Essential JS 2.
control: Display multiple colors in the event 
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Display Multiple Colors in Single Event in Vue Schedule Component

In the Vue Schedule component, multiple colors can be displayed within a single event by using the [`eventTemplate`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#eventtemplate) option available in the views model. This customization is achieved by defining an additional field, such as `SubCount`, in the event data. The `SubCount` field contains background color and height values, and the event is visually divided into segments based on these values.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/multiple-color-event/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/multiple-color-event/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/multiple-color-event" %}
