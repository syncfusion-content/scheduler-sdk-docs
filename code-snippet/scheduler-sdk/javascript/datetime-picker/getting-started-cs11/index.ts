

import { DateTimePicker } from '@syncfusion/ej2-calendars';

let month: number = new Date().getMonth();
let fullYear: number = new Date().getFullYear();
// creates a datetimepicker with minimum and maximum date time
let datetimepicker: DateTimePicker = new DateTimePicker({
// Sets the min.
    min: new Date(fullYear, month , 22, 12),
    //Sets the max.
    max: new Date(fullYear, month, 25, 17),
});
datetimepicker.appendTo('#element');


