

import { DateTimePicker } from '@syncfusion/ej2-calendars';
// creates a DatePicker component with custom format.
let datetimepickerObject: DateTimePicker = new DateTimePicker({
    value: new Date(),
    // sets the format.
    format: 'yyyy-MM-dd hh:mm'
});
datetimepickerObject.appendTo('#element');


