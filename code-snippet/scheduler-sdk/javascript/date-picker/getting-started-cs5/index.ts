

import { DatePicker } from '@syncfusion/ej2-calendars';
//creates a datepicker with decade view and navigate up to year view.
let datepickerObj: DatePicker = new DatePicker({
    //sets the start
    start:'Decade',
    //sets the depth
    depth:'Year',
    // sets the placeholder
    placeholder:'Enter date',
});
datepickerObj.appendTo('#element');


