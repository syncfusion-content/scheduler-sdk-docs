---
layout: post
title: How to set default values for events in React Scheduler | Syncfusion
description: Learn how to set a default value for the React Scheduler event editor Subject field using the fieldOptions default property.
control: Scheduler
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to set default values for events in React Scheduler

Event window default fields name like Title, Location, etc.. can be customized and default value can be set to Subject field using [`default`](https://ej2.syncfusion.com/react/documentation/api/schedule/fieldOptions#default) property which will be added if an appointment is created with empty subject.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs17/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs17/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs17" %}