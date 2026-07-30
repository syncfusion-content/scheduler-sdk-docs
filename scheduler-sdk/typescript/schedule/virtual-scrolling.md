---
layout: post
title: Virtual scrolling in TypeScript Schedule control | Syncfusion
description: Discover virtual scrolling in Syncfusion TypeScript Scheduler (Essential JS 2), covering lazy loading, server integration, and view limitations.
platform: scheduler-sdk
control: Virtual scrolling 
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Virtual scrolling in TypeScript Scheduler control

To improve performance when loading many resources and events, the Scheduler supports virtual scrolling. Virtual scrolling loads resources and events on demand as the user scrolls, reducing initial render time and memory usage. Enable virtual scrolling by setting `true` on the [`allowVirtualScrolling`](../api/schedule/viewsModel#allowvirtualscrolling) property within the view-specific settings. Virtual loading of events is also supported in the Agenda view by enabling [`allowVirtualScrolling`](../api/schedule/viewsModel#allowvirtualscrolling) in the agenda view settings.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/virtual-scrolling-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/virtual-scrolling-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/virtual-scrolling-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/virtual-scrolling-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/virtual-scrolling-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/virtual-scrolling-cs1" %}
{% endif %}

**Note:** Virtual loading of resources and events is not supported in the `MonthAgenda`, `Year`, and `TimelineYear` (horizontal orientation) views.

## Enabling lazy loading for appointments

Lazy loading allows the Scheduler to fetch appointment data on demand for the currently visible resources, improving responsiveness for large datasets.

By default, the Scheduler requests all appointments for the current date range. When lazy loading is enabled, the Scheduler issues queries to the server whenever new resources are rendered due to scrolling. These queries include the resource IDs currently in view (usually passed as a comma-separated string) and the current date range. On the server, parse the resource IDs to filter and return only the appointments needed for the visible resources.

With lazy loading enabled, the Scheduler fetches events from remote services only for the current viewport, and remaining data is retrieved from the server on demand as the user scrolls through the Scheduler content.

Enable lazy loading by setting `true` for the [`enableLazyLoading`](../api/schedule/viewsModel#enablelazyloading) property within the view-specific settings.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/lazy-loading-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/lazy-loading-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/lazy-loading-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/lazy-loading-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/lazy-loading-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/lazy-loading-cs1" %}
{% endif %}

Here's a sample server-side controller that retrieves appointment data based on resource IDs provided as query parameters:

```c#
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.OData.Query;

namespace LazyLoadingServices.Controllers
{
    public class VirtualEventDataController : Controller
    {
        private readonly EventsContext dbContext;

        [HttpGet]
        [EnableQuery]
        [Route("api/VirtualEventData")]
        public IActionResult GetData([FromQuery] Params param)
        {
            IQueryable<EventData> query = dbContext.Events;
            // Filter the appointment data based on the ResourceId query params.
            if (!string.IsNullOrEmpty(param.ResourceId))
            {
                string[] resourceId = param.ResourceId.Split(',');
                query = query.Where(data => resourceId.Contains(data.ResourceId.ToString()));
            }
            return Ok(query.ToList());
        }
    }
    public class Params
    {
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string ResourceId { get; set; }
    }
}
```

**Notes:** 
* This feature is most effective when a large number of resources and appointments are bound to the Scheduler.
* Lazy loading applies only when [resource grouping](https://ej2.syncfusion.com/documentation/api/schedule/group#resources) is enabled on the Scheduler.

> Refer to the [JavaScript Scheduler feature tour](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) for an overview of capabilities, and see the [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/material/schedule/overview.html) to learn how to present and manipulate data.

## See Also

* [Virtual scrolling in Agenda view](./views#agenda-view)