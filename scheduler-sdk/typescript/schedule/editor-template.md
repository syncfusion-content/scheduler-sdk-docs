---
layout: post
title: Editor Template in TypeScript Scheduler | Syncfusion
description: Learn how to customize the editor window and quick popup in the Syncfusion TypeScript Scheduler to match your data and design needs.
platform: scheduler-sdk
control: Scheduler
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Editor Template in TypeScript Scheduler

Scheduler provides popups and dialogs for event creation and editing. The editor window contains event fields for streamlined appointment creation and editing, and its layout and validation can be customized.

## Event editor

The editor window opens on the Scheduler when a cell or event is double-clicked. Double-clicking a cell opens the detailed editor window in "Add new" mode, while double-clicking an event opens it in "Edit" mode.

On mobile devices, the detailed editor window opens in edit mode by clicking the edit icon on the popup that appears when single-tapping an event. It can also be opened in add mode by single-tapping a cell, which displays a `+` indication. Clicking this indication again opens the editor window.

> The editor window can be prevented from opening by rendering Scheduler in [`readonly`](../api/schedule#readonly) mode or by using code customization within the [`popupOpen`](../api/schedule#popupopen) event.

### Change the editor window header title and footer button text

The header title and footer button text of the editor window can be changed by modifying the appropriate localized word collection used in the Scheduler.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs1" %}

### Change the label text of default editor fields

To change the default labels such as Subject, Location, and other field names in the editor window, use the [`title`](../api/schedule/fieldOptionsModel#title) property available within the field option of [`eventSettings`](../api/schedule#eventsettings).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs2/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs2/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs2" %}

### Field validation

Required fields in the editor window can be validated on the client side before submission by adding validation rules to each field using the [`validation`](../api/schedule/fieldOptionsModel#validation) property available within the field option of [`eventSettings`](../api/schedule#eventsettings). Appointment fields accept both `string` and `object` values; use object values to specify validation rules.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs3/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs3/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs3" %}

> Applicable validation rules can be referred from [form validation](https://ej2.syncfusion.com/documentation/form-validator/validation-rules) documentation.

### Add additional fields to the default editor

Additional fields can be added to the default event editor by using the [`popupOpen`](../api/schedule#popupopen) event, which fires before the editor opens. Add any extra form element with the common class name `e-field` so Scheduler can process the additional data with the default event object. In the following example, an additional field `Event Type` has been added to the default editor and its value is processed accordingly.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs4/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs4/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs4" %}

### Customize the default time duration in editor window

In the default event editor window, start and end time duration are processed based on the [`interval`](../api/schedule/timeScaleModel#interval) value set within the [`timeScale`](../api/schedule#timescale) property. By default, the [`interval`](../api/schedule/timeScaleModel#interval) value is set to `30`, and therefore the start/end time duration within the event editor will be in 30-minute intervals. This duration value can be changed by modifying the `duration` option within the [`popupOpen`](../api/schedule#popupopen) event as shown in the following code example.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs5/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs5/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs5" %}

### How to prevent the display of editor and quick popups

The display of editor and quick popup windows can be prevented by passing the value `true` to the [`cancel`](../api/schedule/popupOpenEventArgs#cancel) option within the [`popupOpen`](../api/schedule#popupopen) event.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs6/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs6/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs6" %}

To prevent only specific popups on Scheduler, check the condition based on the popup type. The types of popups that can be checked within the [`popupOpen`](../api/schedule#popupopen) event are as follows.

| Type | Description |
|------|-------------|
| Editor | For Detailed editor window.|
| QuickInfo | For Quick popup which opens on cell click.|
| EditEventInfo |For Quick popup which opens on event click.|
| ViewEventInfo | For Quick popup which opens on responsive mode.|
| EventContainer | For more event indicator popup.|
| RecurrenceAlert | For edit recurrence event alert popup.|
| DeleteAlert | For delete confirmation popup.|
| ValidationAlert | For validation alert popup.|
| RecurrenceValidationAlert | For recurrence validation alert popup.|

### Customize timezone collection in the editor window

By default, the timezone collections in the editor window are loaded with built-in timezone data. The timezone collections can be customized using the [`timezoneDataSource`](../api/schedule#timezonedatasource) property with the collection of `TimezoneFields` data.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs7" %}

### Close the editor window manually

The editor window can be closed using the [`closeEditor`](../api/schedule#closeeditor) method.  

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs15/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs15/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs15" %}


## Customize event editor using template

The event editor window can be customized using the [`editorTemplate`](../api/schedule#editortemplate) option. The custom window design is built with the required fields using the script template and its type should be of **text/x-template**.

Each field defined within the template should contain the **e-field** class, to allow the processing of those field values internally. The ID of this customized script template section is assigned to the [`editorTemplate`](../api/schedule#editortemplate) option, so that these customized fields will be replaced onto the default editor window.

>Note: The **e-field** class is only applicable for **DropDownList**, **DateTimePicker**, **MultiSelect**, **DatePicker**, **CheckBox**, and **TextBox** components. Field values for these components are processed internally.

When using Syncfusion<sup style="font-size:70%">&reg;</sup> sub-components within the editor template, custom form elements must be initialized as Syncfusion<sup style="font-size:70%">&reg;</sup> controls such as **DropDownList** and **DateTimePicker** inside the [`popupOpen`](../api/schedule#popupopen) event. This step can be skipped when using standard HTML form elements.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/editor-cs1" %}

### Customize header and footer using template

The editor window's header and footer can be enhanced with custom designs using the [`editorHeaderTemplate`](../api/schedule#editorheadertemplate) and [`editorFooterTemplate`](../api/schedule#editorfootertemplate) options. To achieve this, create a script template that includes the necessary fields. Ensure that the template type is set to **text/x-template**.

In this example, the editor's header is customized according to the appointment's subject field using 
[`editorHeaderTemplate`](../api/schedule#editorheadertemplate). The [`editorFooterTemplate`](../api/schedule#editorfootertemplate) is used to handle the functionality of validating specific fields before proceeding with the save action or canceling if validation requirements are not met.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-header-footer-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-header-footer-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/editor-header-footer-cs1" %}

### Add resource options within editor template

The resource field can be added within the editor template with a multiselect control to allow multiple resource selection.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-field-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-field-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/resource-field-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/resource-field-cs1" %}

### Add recurrence options within editor template

The following code example shows how to add recurrence options within the editor template by importing `RecurrenceEditor`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-recurrence-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-recurrence-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-recurrence-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/editor-recurrence-cs1" %}

### Apply validations on editor template fields

In the following code example, validation has been added to the `EventType` field by using the `popupOpen` event. This field is set as `required`, and the validation message is displayed using the `FormValidator` class.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-cs2/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-cs2/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/editor-cs2" %}

### How to save the customized event editor using template

If the **e-field** class is not added to template fields, their values must be handled externally using the [`popupClose`](../api/schedule#popupclose) event.

Note: Data is available only for the `save` and `delete` actions. It is not available for the `close` and `cancel` actions.

The following code example shows how to save the customized event editor using a template with the [`popupClose`](../api/schedule#popupclose) event.


{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-cs3/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-cs3/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/editor-cs3" %}

To prevent only specific popup closures on Scheduler, check the condition based on the popup type. The types of popups that can be checked within the [`popupClose`](../api/schedule#popupclose) event are as follows.

| Type | Description |
|------|-------------|
| Editor | For Detailed editor window.|
| QuickInfo | For Quick popup which opens on cell click.|
| EditEventInfo |For Quick popup which opens on event click.|
| ViewEventInfo | For Quick popup which opens on responsive mode.|
| EventContainer | For more event indicator popup.|
| RecurrenceAlert | For edit recurrence event alert popup.|
| DeleteAlert | For delete confirmation popup.|
| ValidationAlert | For validation alert popup.|
| RecurrenceValidationAlert | For recurrence validation alert popup.|

## Quick popups

Quick info popups are displayed when a cell or appointment is single-clicked on desktop mode. Single-clicking a cell allows providing a subject and saving it quickly. Single-clicking an event displays a popup with an overview of the event information, along with options to edit or delete the event.

By default, these popups appear for Scheduler cells and appointments. To disable them, set [`showQuickInfo`](../api/schedule#showquickinfo) to `false`.

> The quick popup that opens on single-click cell actions is not available on mobile devices.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs8/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs8/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs8" %}

### Open quick popup on multiple cell selection

The quick popup can be displayed immediately after multiple cells are selected in Scheduler by setting [`quickInfoOnSelectionEnd`](../api/schedule#quickinfoonselectionend) to `true`. By default, it is `false`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/quick-info-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/quick-info-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/quick-info-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/quick-info-cs1" %}

### How to change the watermark text of quick popup subject

By default, `Add Title` text is displayed on the subject field of the quick popup. To change the default watermark text, modify the value of the appropriate localized word collection used in the Scheduler.

```ts
L10n.load({
    'en-US': {
        'schedule': {
          'addTitle' : 'New Title'
        }
    }
});
```

### Customize quick popups

The built-in quick popup window that opens on cell or appointment click can be customized using the [`quickInfoTemplates`](../api/schedule#quickinfotemplates) property. It supports three template sub-options:

* header - customizes the header portion of the quick popup.
* content - customizes the content portion of the quick popup.
* footer - customizes the footer portion of the quick popup.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/quick-info-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/quick-info-cs2/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/quick-info-cs2/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/quick-info-cs2" %}

> The quick popup in adaptive mode can also be customized using [`quickInfoTemplates`](../api/schedule#quickinfotemplates) with the `e-device` class.

### Open the quick info popup manually

The quick info popup in Scheduler can be opened using the [openQuickInfoPopup](../api/schedule#openquickinfopopup) public method. To open the cell quick info popup, pass the cell data as an argument to the method. To open the event quick info popup, pass the event data object as an argument to the method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs16" %}

### Close the quick info popup manually

The quick info popup in Scheduler can be closed using the [`closeQuickInfoPopup`](../api/schedule#closequickinfopopup) public method. The following code example demonstrates how to close the quick info popup manually.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs17/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs17/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs17" %}

## More events indicator and popup

When the number of appointments exceeds the default cell height in month view and all timeline views, a `+ more` indicator appears at the bottom of that cell. Clicking it opens a popup listing the additional appointments for that day.

> To disable the popup that displays hidden appointments when the indicator is clicked, use code customization within the [`popupOpen`](../api/schedule#popupopen) event.

The same indicator appears on the all-day row in calendar views such as day, week, and work week when the number of appointments exceeds three. Clicking the indicator does not open a popup; instead, it expands or collapses the remaining appointments in the all-day row.

The following code example shows how to disable the display of such popups when clicking on the more text indicator.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs9/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs9/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs9" %}

### Customize the popup that opens on more indicator

The following code example shows how to customize the default more indicator popup by displaying the number of events rendered that day in the header.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs10/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs10/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs10" %}

### Prevent the display of popup when clicking on the more text indicator

The display of the popup window can be prevented by passing the value `true` to the `cancel` option within the [`MoreEventsClick`](../api/schedule#moreeventsclick) event.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs13/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs13/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs13" %}

### Navigate to Day view when clicking on more text indicator

The following code example shows how to customize the [`moreEventsClick`](../api/schedule#moreeventsclick) event to navigate to the Day view when clicking on the more text indicator.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs14/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs14/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://helpstaging.syncfusion.com/code-snippet/scheduler-sdk/typescript/schedule/editor-window-cs14" %}

> Refer to our [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/tailwind3/schedule/overview.html) to learn how to present and manipulate data.