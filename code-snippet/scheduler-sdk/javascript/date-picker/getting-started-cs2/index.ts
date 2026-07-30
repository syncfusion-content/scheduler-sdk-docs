

import { DatePicker } from '@syncfusion/ej2-calendars';
// creates a DatePicker component with custom format.
let datepickerObject: DatePicker = new DatePicker({
    value: new Date(),
    // sets the format.
    format: 'yyyy-MM-dd'
});
datepickerObject.appendTo('#element');


