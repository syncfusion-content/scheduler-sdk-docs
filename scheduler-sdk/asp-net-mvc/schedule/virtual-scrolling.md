---
layout: post
title: Virtual Scrolling in ASP.NET MVC Scheduler | Syncfusion
description: Learn how to enable virtual scrolling in the Syncfusion ASP.NET MVC Scheduler timeline and agenda views to load resources and events on demand.
platform: scheduler-sdk
control: Scheduler
documentation: ug
---


# Virtual Scrolling in ASP.NET MVC Scheduler

To achieve better performance in the Scheduler when loading a large number of resources and events, virtual scrolling support has been added to load a large set of resources and events instantly as you scroll. You can dynamically load a large number of resources and events in the Scheduler by setting `true` on the [`AllowVirtualScrolling`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.ScheduleView.html#Syncfusion_EJ2_Schedule_ScheduleView_AllowVirtualScrolling) property within the view-specific settings. Virtual loading of events is also possible in the Agenda view by setting the [`AllowVirtualScrolling`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.ScheduleView.html#Syncfusion_EJ2_Schedule_ScheduleView_AllowVirtualScrolling) property to `true` within the Agenda view-specific settings.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/virtual-scroll/vScroll/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/virtual-scroll/vScroll/data.cs %}
{% endhighlight %}
{% endtabs %}

N> The virtual loading of resources and events is currently not supported in the `MonthAgenda`, `Year`, and `TimelineYear` (Horizontal Orientation) views. By default, the Scheduler renders only the visible appointments. You can increase or decrease the preloaded appointment buffer using the [`OverScanCount`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.ScheduleView.html#Syncfusion_EJ2_Schedule_ScheduleView_OverScanCount) property to ensure smooth scrolling.

## Enabling lazy loading for appointments

The lazy loading feature provides a convenient way to efficiently load resource appointments into the Scheduler using an on-demand approach. With this feature, you can seamlessly load a large volume of appointment data into the Scheduler without experiencing any performance degradation.

By default, the Scheduler fetches all relevant appointments from the server within the current date range. However, enabling this feature triggers query requests to the server for appointment retrieval whenever new resources are rendered due to scroll actions. These queries contain the resource IDs of the currently displayed resources along with the current date range, which can be passed as a comma-separated string. In the server controller, these resource IDs are parsed to filter the necessary appointments to render in the Scheduler.

When this feature is enabled, the Scheduler is capable of fetching events from remote services only for the current viewport, optimizing data retrieval. The remaining appointment data is fetched from the server on-demand, based on the resources rendered in the current viewport as you scroll through the Scheduler content.

To enable this feature, set the [`EnableLazyLoading`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.ScheduleView.html#Syncfusion_EJ2_Schedule_ScheduleView_EnableLazyLoading) property to `true` within the view-specific settings.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/virtual-scroll/lazy-load/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Data.cs" %}
{% include code-snippet/scheduler-sdk/asp-net-mvc/schedule/virtual-scroll/lazy-load/data.cs %}
{% endhighlight %}
{% endtabs %}

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
* The property will be effective when a large number of resources and appointments are bound to the Scheduler.
* This property is applicable only when [resource grouping](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Schedule.ScheduleGroup.html#Syncfusion_EJ2_Schedule_ScheduleGroup_Resources) is enabled in the Scheduler.

N> You can refer to our [ASP.NET MVC Scheduler](https://www.syncfusion.com/scheduler-sdk/aspnet-mvc-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [ASP.NET MVC Scheduler](https://ej2.syncfusion.com/aspnetmvc/schedule/overview#/fluent2) example to know how to present and manipulate data.
