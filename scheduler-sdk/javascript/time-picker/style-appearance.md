---
layout: post
title: Style appearance in JavaScript Timepicker control | Syncfusion
description: Learn here all about Style appearance in Syncfusion JavaScript Timepicker control of Syncfusion Essential JS 2 and more.
platform: scheduler-sdk
control: Style appearance 
publishingplatform: scheduler-sdk
documentation: ug
domainurl: https://help.syncfusion.com/scheduler-sdk
---

# Style appearance in JavaScript Timepicker control

The following content provides the exact CSS structure that can be used to modify the control's appearance based on the user preference.

## Customizing the appearance of TimePicker wrapper element

Use the following CSS to customize the appearance of wrapper element.

```
/* To specify height and font size */
.e-input-group input.e-input, .e-input-group.e-control-wrapper input.e-input, .e-input-group textarea.e-input, .e-input-group.e-control-wrapper textarea.e-input {
        font-size: 20px;
        height: 40px;
}
```

## Customizing the TimePicker icon element

Use the following CSS to customize the TimePicker icon element

```
/* To specify background color and font size */
.e-time-wrapper .e-time-icon.e-icons, *.e-control-wrapper.e-time-wrapper .e-time-icon.e-icons {
        font-size: 20px;
        background-color: beige;
}
```

## Customizing the TimePicker popup

Use the following CSS to customize the TimePicker popup

```
/* To specify height */
.e-timepicker.e-popup {
        height: 100px;
}
```

## Customizing the TimePicker popup content

Use the following CSS to customize the TimePicker popup content

```
/* To specify height */
.e-timepicker.e-popup .e-list-parent.e-ul li.e-list-item {
        background-color: beige;
        font-size: 20px;
}
```

## Full screen mode support in mobiles and tablets

The TimePicker component's full-screen mode feature enables users to view the component popup element in full-screen mode on mobile devices with improved visibility and a better user experience. It is important to mention that this feature is exclusively available for mobile and tablet devices in both landscape and portrait orientations. To activate the full screen mode within the TimePicker component, simply set the [fullScreenMode](../api/timepicker#fullScreenMode) API value to `true`. This action will extend the popup element to occupy the entire screen on mobile devices.

```typescript
import { TimePicker } from '@syncfusion/ej2-calendars';
// creates a timepicker with fullScreenMode property
let timeObject: TimePicker = new TimePicker({
    // Enable Full Screen Mode
    fullScreenMode: true,
});
timeObject.appendTo('#element');
```

![TimePickerFullScreen](../images/TimePickerFullScreen.gif)