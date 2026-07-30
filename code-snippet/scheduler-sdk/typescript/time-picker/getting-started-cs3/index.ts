


import { TimePicker } from '@syncfusion/ej2-calendars';
import { enableRipple } from '@syncfusion/ej2-base';

//enable ripple style
enableRipple(true);


let timeObject: TimePicker = new TimePicker({
    strictMode: false,
    min: new Date('7/18/2017 10:00 AM'),
    max: new Date('7/18/2017 4:00 PM'),
    value: new Date('7/18/2017 8:00 PM'),

});
timeObject.appendTo('#element');



