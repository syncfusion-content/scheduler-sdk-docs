---
layout: post
title: Virtual Scrolling in JavaScript Scheduler | Syncfusion
description: Learn how to enable virtual scrolling in the Syncfusion JavaScript Scheduler timeline and agenda views to load resources and events on demand.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Virtual Scrolling in JavaScript Scheduler

To improve performance when loading many resources and events, the Scheduler supports virtual scrolling, which loads resources and events on demand as the user scrolls and reduces initial render time and memory usage. Enable virtual scrolling by setting [`allowVirtualScrolling`](../api/schedule/viewsModel#allowvirtualscrolling) to `true` in the view settings. The Agenda view also supports virtual loading of events via the same property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/virtual-scrolling-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/virtual-scrolling-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/virtual-scrolling-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/virtual-scrolling-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/virtual-scrolling-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/virtual-scrolling-cs1" %}
{% endif %}

**Note:** Virtual loading of resources and events is not supported in the `MonthAgenda`, `Year`, and `TimelineYear` (horizontal orientation) views.

## Enabling lazy loading for appointments

Lazy loading lets the Scheduler request appointment data on demand for the currently visible resources, improving responsiveness for large datasets.

By default, the Scheduler requests all appointments for the configured date range. When lazy loading is enabled, the Scheduler queries the server whenever new resources come into view due to scrolling. These requests typically include the resource IDs currently visible (often as a comma-separated string) and the current date range. On the server, parse the resource IDs to return only the appointments required for the visible resources.

Enable lazy loading by setting [`enableLazyLoading`](../api/schedule/viewsModel#enablelazyloading) to `true` in the view settings.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/lazy-loading-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/lazy-loading-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/lazy-loading-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/lazy-loading-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/lazy-loading-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/lazy-loading-cs1" %}
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
- This feature is most effective when a large number of resources and appointments are bound to the Scheduler.
- Lazy loading applies only when [resource grouping](https://ej2.syncfusion.com/documentation/api/schedule/group#resources) is enabled on the Scheduler.

> Refer to the [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour for an overview, and see the [Scheduler demo](https://ej2.syncfusion.com/demos/#/material/schedule/overview.html) for interactive examples.

## See Also

* [Virtual scrolling in Agenda view](./views#agenda-view)