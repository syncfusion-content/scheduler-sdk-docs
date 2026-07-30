

import { Calendar, ChangedEventArgs } from '@syncfusion/ej2-calendars';

let month: number = new Date().getMonth();
let fullYear: number = new Date().getFullYear();
// Creates a calendar with min max property.
let calendarObject: Calendar = new Calendar({
    // Sets the min.
    min: new Date(fullYear, month , 9),
    //Sets the max.
    max: new Date(fullYear, month, 15),
    // Sets the value.
    value: new Date(fullYear, month , 11)
});
calendarObject.appendTo('#element');


