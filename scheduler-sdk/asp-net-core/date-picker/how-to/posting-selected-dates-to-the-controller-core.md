---
layout: post
title: Posting Selected Dates in Syncfusion ASP.NET Core Datepicker Control
description: Learn here all about Posting Selected Dates to the Controller Core in Syncfusion ASP.NET Core Datepicker component of syncfusion and more.
platform: scheduler-sdk
control: Posting Selected Dates To The Controller Core
documentation: ug
---


# Posting the selected dates to the controller

Post back is the action of posting the data back to the submitting page. In the following example, value for the DatePicker from the `change` event is sent through `Ajax` post to the controller.

When a parameter has `[FromBody]`, Web API uses the Content-Type header to select a formatter. In this example, the content type is "application/json" and the request body is a JSON object. In the action method, you can pass a model as the parameter. The `POST` method determines how data is sent from the client via the form to the server.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-core/date-picker/how-to/postback-selected-dates/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Postback-selected-dates.cs" %}
{% endhighlight %}
{% endtabs %}
