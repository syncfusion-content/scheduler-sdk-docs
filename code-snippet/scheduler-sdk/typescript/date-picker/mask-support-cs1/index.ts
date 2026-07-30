


import { DatePicker, MaskedDateTime } from '@syncfusion/ej2-calendars';
DatePicker.Inject(MaskedDateTime);

let datepickerObject: DatePicker = new DatePicker({
    enableMask: true
});
datepickerObject.appendTo('#mask');

let datepickerFormat: DatePicker = new DatePicker({
    enableMask: true,
    format: "M/d/yyyy",
});
datepickerFormat.appendTo('#format');


