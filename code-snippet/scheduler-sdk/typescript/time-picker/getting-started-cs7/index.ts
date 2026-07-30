


import { TimePicker } from '@syncfusion/ej2-calendars';
import { enableRipple } from '@syncfusion/ej2-base';

//enable ripple style
enableRipple(true);

// creates the simple timepicker component
let timeObject: TimePicker = new TimePicker({
    value: new Date(),
    // sets the format property to display the time value in 24 hours format.
    format: 'HH:mm',
    // specify the interval value.
    step: 60,
});
timeObject.appendTo('#element');



