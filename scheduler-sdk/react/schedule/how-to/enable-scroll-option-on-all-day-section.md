---
layout: post
title: Enable Scroll in All-Day Section of React Schedule | Syncfusion
description: Learn here all about Enable scroll option on all day section in Syncfusion React Schedule component of Syncfusion Essential JS 2 and more.
control: Scheduler 
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Enable scroll option all day section in React Schedule component

When you have many appointments in the all-day row, they can be difficult to view properly. You can enable an individual scroller for the all-day row by setting the [`enableAllDayScroll`](https://ej2.syncfusion.com/react/documentation/api/schedule#enablealldayscroll) property to `true`.

When set to `true`, the all-day row displays a scroller when it expands beyond its maximum height. The default value is `false`.

> **Note:** This property is not applicable when the Scheduler height is set to `auto`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/scheduler-sdk/react/schedule/local-data-cs15/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/scheduler-sdk/react/schedule/local-data-cs15/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/react/schedule/local-data-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/react/schedule/local-data-cs15" %}