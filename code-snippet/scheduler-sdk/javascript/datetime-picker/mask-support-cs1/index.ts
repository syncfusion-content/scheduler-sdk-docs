


import { DateTimePicker, MaskedDateTime } from '@syncfusion/ej2-calendars';
DateTimePicker.Inject(MaskedDateTime);

let datetimepickerObject: DateTimePicker = new DateTimePicker({
    enableMask: true
});
datetimepickerObject.appendTo('#mask');

let datetimepickerFormat: DateTimePicker = new DateTimePicker({
    enableMask: true,
    format: "M/d/yyyy hh:mm a",
});
datetimepickerFormat.appendTo('#format');


