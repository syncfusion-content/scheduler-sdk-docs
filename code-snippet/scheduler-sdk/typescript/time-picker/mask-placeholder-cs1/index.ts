


import { TimePicker, MaskedDateTime } from '@syncfusion/ej2-calendars';
TimePicker.Inject(MaskedDateTime);

let timepickerObject: TimePicker = new TimePicker({
    enableMask: true
});
timepickerObject.appendTo('#mask');

let timepickerPlaceholder: TimePicker = new TimePicker({
    enableMask: true,
    maskPlaceholder: {hour: 'h', minute: 'm', second: 's'}
});
timepickerPlaceholder.appendTo('#placeholder');


