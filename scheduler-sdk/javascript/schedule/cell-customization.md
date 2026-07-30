---
layout: post
title: Cell customization in JavaScript Scheduler control | Syncfusion
description: Learn here all about Cell customization in Syncfusion JavaScript Scheduler control of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Cell customization 
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Cell customization in JavaScript Scheduler control

The cells of the Scheduler can be easily customized to modify their appearance, add custom content, or apply conditional styling. This can be achieved using the [`cellTemplate`](https://ej2.syncfusion.com/documentation/api/schedule#celltemplate) property or the [`renderCell`](https://ej2.syncfusion.com/documentation/api/schedule#rendercell) event. Cell customization allows you to highlight specific dates, display additional information, or create a unique visual experience for your scheduling application.

## Customizing cells in all the views

The appearance of cells can be customized across all Scheduler views using either template options or the [`renderCell`](https://ej2.syncfusion.com/documentation/api/schedule#rendercell) event. Both approaches provide flexibility to modify cell content and styling based on specific requirements.

### Using template

The [`cellTemplate`](https://ej2.syncfusion.com/documentation/api/schedule#celltemplate) property accepts a template string and allows you to customize the cell background with specific images, icons, or formatted text based on the given date values. This approach is ideal when you need to apply consistent styling or content across multiple cells.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs4/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs4/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs4/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs4/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs4" %}
{% endif %}

### Customizing cells using renderCell event

The [`renderCell`](https://ej2.syncfusion.com/documentation/api/schedule#rendercell) event provides an alternative approach for [`cellTemplate`](https://ej2.syncfusion.com/documentation/api/schedule#celltemplate). This event is triggered during the rendering of each cell, allowing you to apply dynamic customizations based on runtime conditions. Use this event when you need more control over individual cells or when customization logic depends on complex business rules.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs5/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs5/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs5/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs5/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs5" %}
{% endif %}

The [`renderCell`](https://ej2.syncfusion.com/documentation/api/schedule#rendercell) event allows you to customize different types of cells such as work cells, month cells, all-day cells, header cells, resource header cells by checking the [`elementType`](https://ej2.syncfusion.com/documentation/api/schedule/renderCellEventArgs#elementtype) property within the event arguments. The following table describes the available element types:

| Element type | Description |
|-------|---------|
| dateHeader | Triggered when rendering header cells that display dates.|
| monthDay | Triggered when rendering header cells in the month view.|
| resourceHeader | Triggered when rendering resource header cells.|
| alldayCells | Triggered when rendering all-day cells in day, week, and work week views.|
| emptyCells | Triggered when rendering empty cells in the header bar.|
| resourceGroupCells | Triggered when rendering work cells for parent resource.|
| workCells | Triggered when rendering work cells.|
| monthCells | Triggered when rendering date cells in the month view.|
| majorSlot | Triggered when rendering major time slot cells.|
| minorSlot | Triggered when rendering minor time slot cells.|
| weekNumberCell | Triggered when rendering cells that display week numbers.|

## Setting cell dimensions in all views

The height and width of Scheduler cells can be adjusted using the [`cssClass`](https://ej2.syncfusion.com/documentation/api/schedule#cssclass) property along with custom CSS. This approach allows you to increase or reduce cell sizes to accommodate different content requirements or improve visual hierarchy. The custom CSS classes override the default styles applied to cells.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs2/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs2/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs2/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs2/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs2" %}
{% endif %}

## Checking cell availability for appointments

The [`isSlotAvailable`](https://ej2.syncfusion.com/documentation/api/schedule#isslotavailable) method verifies whether a specific time range is available for creating new appointments or is already occupied by existing events. This method is useful for implementing custom validation logic or preventing double-booking scenarios. In the following example, the method prevents adding new appointments to time slots that already contain events.

>Note: The [`isSlotAvailable`](https://ej2.syncfusion.com/documentation/api/schedule#isslotavailable) method verifies appointments within the current view's date range only. It does not evaluate availability for recurrence occurrences that fall outside the visible date range.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs3/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs3/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs3/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs3/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs3" %}
{% endif %}

## Customizing cell header in month view

The month header of each date cell in the month view can be customized using the [`cellHeaderTemplate`](https://ej2.syncfusion.com/documentation/api/schedule#cellheadertemplate) property. This property accepts either a template string or an HTMLElement, allowing you to display custom content such as formatted dates, icons, or additional information. The corresponding date can be accessed with the template.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs6" %}
{% endif %}

## Customizing the minimum and maximum date values

The [`minDate`](https://ej2.syncfusion.com/documentation/api/schedule#mindate) and [`maxDate`](https://ej2.syncfusion.com/documentation/api/schedule#maxdate) properties define the allowable date range for the Scheduler. Dates that fall outside this range will be disabled, preventing navigation beyond the specified boundaries.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs7/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs7/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs7/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs7/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/cell-dimension-cs7" %}
{% endif %}

>By default, the [`minDate`](https://ej2.syncfusion.com/documentation/api/schedule#mindate) property is set to new Date(1900, 0, 1) and the [`maxDate`](https://ej2.syncfusion.com/documentation/api/schedule#maxdate) property is set to new Date(2099, 11, 31). Custom values can be assigned to these properties to restrict the date range according to application requirements.

## Customizing the weekend cells background color

You can customize the background color of weekend cells by utilizing the [`renderCell`](https://ej2.syncfusion.com/documentation/api/schedule#rendercell) event and checking the [`elementType`](https://ej2.syncfusion.com/documentation/api/schedule/renderCellEventArgs#elementtype) option within the event.

```ts

renderCell: function (args) {
    if (args.elementType == "workCells") {
        // To change the color of weekend columns in week view
        if (args.date) {
            if (args.date.getDay() === 6) {
                (args.element).style.background = '#ffdea2';
            }
            if (args.date.getDay() === 0) {
                (args.element).style.background = '#ffdea2';
            }
        }
    }
}

```

And, the background color for weekend cells in the Month view, apply custom CSS through the through the [`cssClass`](https://ej2.syncfusion.com/documentation/api/schedule#cssclass) property, which overrides the default CSS applied on cells.

```css

.schedule-cell-customization.e-schedule .e-month-view .e-work-cells:not(.e-work-days) {
    background-color: #f08080;
}

```

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/weekend-cell-color/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/weekend-cell-color/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/weekend-cell-color" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/weekend-cell-color/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/javascript/schedule/weekend-cell-color/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/scheduler-sdk/javascript/schedule/weekend-cell-color" %}
{% endif %}

## How to disable multiple cell and row selection in Schedule

By default, the [`allowMultiCellSelection`](https://ej2.syncfusion.com/documentation/api/schedule#allowmulticellselection) and [`allowMultiRowSelection`](https://ej2.syncfusion.com/documentation/api/schedule#allowmultirowselection) properties of the Schedule are set to `true`. So, the Schedule allows to select multiple cells and rows.If multiple cell and row selection needs to be disabled, this feature can be turned off by setting these properties to `false`.

> You can refer to our [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/material/schedule/overview.html) to knows how to present and manipulate data.
