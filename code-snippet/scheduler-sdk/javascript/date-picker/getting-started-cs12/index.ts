

import { DatePicker } from '@syncfusion/ej2-calendars';
// creates a datepicker with strictMode property
let datepickerObject: DatePicker = new DatePicker({
    // sets the value
    value: new Date('5/28/2017'),
    //sets the min
    min: new Date('5/5/2017'),
    //sets the max
    max: new Date('5/25/2017'),
    // sets the format
    format: 'dd/MM/yyyy',
    // sets the placeholder
    placeholder: 'Enter date'
});
datepickerObject.appendTo('#element');


