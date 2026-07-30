


import { TimePicker } from '@syncfusion/ej2-calendars';
import { enableRipple } from '@syncfusion/ej2-base';

//enable ripple style
enableRipple(true);

let month: number = new Date().getMonth();
let fullYear: number = new Date().getFullYear();
let date: number = new Date().getDate();

// creates timepicker with min max property
let timeObject: TimePicker = new TimePicker({
    // Sets the min.
    min: new Date(fullYear, month , date,7),
    //Sets the max.
    max: new Date(fullYear, month, date, 16),
    // Sets the value.
    value: new Date(fullYear, month , date, 13)
});
timeObject.appendTo('#element');



