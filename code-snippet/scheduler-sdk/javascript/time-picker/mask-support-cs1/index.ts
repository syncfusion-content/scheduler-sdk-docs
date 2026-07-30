


import { TimePicker, MaskedDateTime } from '@syncfusion/ej2-calendars';
TimePicker.Inject(MaskedDateTime);

let timepickerObject: TimePicker = new TimePicker({
    enableMask: true
});
timepickerObject.appendTo('#mask');

let timepickerFormat: TimePicker = new TimePicker({
    enableMask: true,
    format: "h:mm a",
});
timepickerFormat.appendTo('#format');


