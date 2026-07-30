


import { DateTimePicker, MaskedDateTime } from '@syncfusion/ej2-calendars';
DateTimePicker.Inject(MaskedDateTime);

let datetimepickerObject: DateTimePicker = new DateTimePicker({
    enableMask: true
});
datetimepickerObject.appendTo('#mask');

let datetimePlaceholder: DateTimePicker = new DateTimePicker({
     enableMask: true,
    maskPlaceholder: {day: 'd', month: 'M', year: 'y', hour: 'h', minute: 'm', second: 's'}
});
datetimePlaceholder.appendTo('#placeholder');


