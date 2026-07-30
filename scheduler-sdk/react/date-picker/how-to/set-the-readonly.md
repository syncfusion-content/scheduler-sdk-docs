---
layout: post
title: Set DatePicker as read-only in React Datepicker component | Syncfusion
description: Learn here all about Set DatePicker as read-only in Syncfusion React Datepicker component of Syncfusion Essential JS 2 and more.
control: Set DatePicker as read-only 
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Set DatePicker as read-only in React Datepicker component

The DatePicker can be set to read-only mode using the [`readOnly`](https://ej2.syncfusion.com/react/documentation/api/datepicker/#readonly) property. When enabled, users can view and select dates from the calendar popup, but cannot directly edit the input field. This is useful for scenarios where date selection should be guided through the calendar interface only.

The following example demonstrates how to configure a read-only DatePicker component:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/scheduler-sdk/react/date-picker/default-cs18/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/scheduler-sdk/react/date-picker/default-cs18/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/react/date-picker/default-cs18" %}