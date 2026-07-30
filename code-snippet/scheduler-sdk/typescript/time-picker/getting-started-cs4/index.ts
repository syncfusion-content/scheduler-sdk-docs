


import { TimePicker } from '@syncfusion/ej2-calendars';
import { enableRipple } from '@syncfusion/ej2-base';

//enable ripple style
enableRipple(true);

//creates a timepicker with min and max property
let timeObject: TimePicker = new TimePicker({
    //sets the min value
    min: new Date('3/8/2017 9:00 AM'),
    //sets the max value
    max: new Date('3/8/2017 11:30 AM'),
    //sets the value
    value: new Date('3/8/2017 11:00 AM')
});
timeObject.appendTo('#element');



