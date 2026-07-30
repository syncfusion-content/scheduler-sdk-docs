

import { DatePicker } from '@syncfusion/ej2-calendars';
 //creates a datepicker with year view.
let datepickerObj: DatePicker = new DatePicker({
    // sets the placeholder
    placeholder:'Enter date',
    //sets the start
    start:'Decade'
});
datepickerObj.appendTo('#element');


