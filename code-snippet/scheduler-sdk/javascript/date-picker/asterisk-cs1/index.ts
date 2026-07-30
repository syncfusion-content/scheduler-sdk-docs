

import { DatePicker } from '@syncfusion/ej2-calendars';

let month: number = new Date().getMonth();
let fullYear: number = new Date().getFullYear();
// creates a datepicker with min max property
let datepickerObject: DatePicker = new DatePicker({
    // Sets the min.
    min: new Date(fullYear, month , 9),
    //Sets the max.
    max: new Date(fullYear, month, 15),
    // Sets the value.
    value: new Date(fullYear, month , 11)

    floatLabelType: 'Auto'

    placeholder:"Select Date"
});
datepickerObject.appendTo('#element');


