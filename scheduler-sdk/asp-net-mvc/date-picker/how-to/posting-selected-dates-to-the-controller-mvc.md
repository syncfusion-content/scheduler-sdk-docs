---
layout: post
title: Posting Selected Dates To The Controller Mvc in ASP.NET MVC Datepicker Component
description: Learn here all about Posting Selected Dates To The Controller Mvc in Syncfusion ASP.NET MVC Datepicker component of syncfusion and more.
platform: scheduler-sdk
control: Posting Selected Dates To The Controller Mvc
publishingplatform: scheduler-sdk
documentation: ug
---


# Posting the selected dates to the controller

Post back is the action of posting the data back to the submitting page. In the following example, value for the DatePicker from the `change` event is sent through `Ajax` post to the controller.

In this example, the content type is "application/json" and the request body is a JSON object. In the action method, you can pass a model as the parameter. The `POST` method determines how data is sent from the client via the form, to the server.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/date-picker/how-to/postback-selected-dates/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Postback-selected-dates-mvc.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/date-picker/how-to/postback-selected-dates/postback-selected-dates-mvc.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/date-picker/how-to/postback-selected-dates/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Postback-selected-dates-mvc.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/date-picker/how-to/postback-selected-dates/postback-selected-dates-mvc.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

