


import { DatePicker, MaskedDateTime } from '@syncfusion/ej2-calendars';
DatePicker.Inject(MaskedDateTime);

let datepickerObject: DatePicker = new DatePicker({
    enableMask: true
});
datepickerObject.appendTo('#mask');

let datepickerPlaceholder: DatePicker = new DatePicker({
    enableMask: true,
    maskPlaceholder: {day: 'd', month: 'M', year: 'y'}
});
datepickerPlaceholder.appendTo('#placeholder');


