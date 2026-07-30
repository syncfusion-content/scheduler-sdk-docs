

import { DateTimePicker } from '@syncfusion/ej2-calendars';
// creates a dateTimepicker with strictMode property
let datetimepickerObject: DateTimePicker = new DateTimePicker({
    // sets the strictMode
    strictMode: true,
    // sets the value
    value: new Date('5/28/2019 2:00 AM'),
    //sets the min
    min: new Date('5/5/2019 2:00 AM'),
    //sets the max
    max: new Date('5/25/2019 2:00 AM')
});
datetimepickerObject.appendTo('#element');


