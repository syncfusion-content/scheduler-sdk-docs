---
layout: post
title: Virtual Scrolling in Vue Scheduler | Syncfusion
description: Learn how to enable virtual scrolling in the Syncfusion Vue Scheduler timeline and agenda views to load resources and events on demand.
control: Scheduler
platform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Virtual Scrolling in Vue Scheduler

To improve performance when loading a large number of resources and events, the Scheduler supports virtual scrolling. It loads resources and events on demand as you scroll. You can enable virtual loading of a large set of resources and events in the Scheduler by setting the [`allowVirtualScrolling`](https://ej2.syncfusion.com/vue/documentation/api/schedule/viewsModel#allowvirtualscrolling) property to `true` in the view-specific settings. Virtual loading of events is also available in the Agenda view by setting the same property to `true` in the agenda view-specific settings.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/virtual-scrolling-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/virtual-scrolling-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/virtual-scrolling-cs2" %}

> For now, the virtual loading of resources and events is not supported in `MonthAgenda`, `Year` and `TimelineYear` (Horizontal Orientation) views.

## Enabling lazy loading for appointments

**Lazy loading** complements virtual scrolling by fetching appointment data from the server on demand instead of loading all events upfront.

### How lazy loading works

When lazy loading is enabled:

- Events are fetched only for the visible resources and current date range.
- As the user scrolls, the Scheduler issues additional server requests.
- Each request includes:
  - The resource IDs currently in view
  - The active date range
- The server returns only the events relevant to those resources and dates.

This reduces network usage and improves initial load times.

---

## Enabling lazy loading

To enable lazy loading, set the [`enableLazyLoading`](https://ej2.syncfusion.com/vue/documentation/api/schedule/viewsModel#enablelazyloading) property to `true` in the view configuration.
{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/lazy-loading-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/scheduler-sdk/vue/schedule/lazy-loading-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/vue/schedule/lazy-loading-cs1" %}

Here's the server-side controller code that retrieves appointment data based on the resource IDs provided as query parameters:

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

**Note:**
* This property is effective when a large number of resources and appointments are bound to the Scheduler.
* This property is applicable only when [resource grouping](https://ej2.syncfusion.com/vue/documentation/api/schedule/group#resources) is enabled in the Scheduler.

## See Also

* [Virtual scrolling in Agenda view](./views#agenda-view)

> For a complete overview of resource scheduling features, visit the [Vue Scheduler](https://www.syncfusion.com/scheduler-sdk/vue-scheduler) feature tour page. Explore live examples at [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/tailwind3/schedule/overview.html) to learn how to present and manipulate data.
