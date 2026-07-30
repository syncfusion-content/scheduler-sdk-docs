

import { DateTimePicker } from '@syncfusion/ej2-calendars';
// creates a DatePicker component with custom format.
let datetimepickerObject: DateTimePicker = new DateTimePicker({
    value: new Date(),
    // sets the format.
    format: 'yyyy-MM-dd hh:mm',
    // sets the input format.
    inputFormats: ['dd/MM/yyyy hh:mm a', 'yyyyMMdd HH:mm']
});
datetimepickerObject.appendTo('#element');


