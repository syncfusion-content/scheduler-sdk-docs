

import { TimePicker } from '@syncfusion/ej2-calendars';
import { enableRipple } from '@syncfusion/ej2-base';

//enable ripple style
enableRipple(true);

// creates the simple timepicker component
let timeObject: TimePicker = new TimePicker({
    placeholder: 'Select a Time'
});
timeObject.appendTo('#element');


