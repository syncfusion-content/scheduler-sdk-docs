


import { TimePicker } from '@syncfusion/ej2-calendars';
import { enableRipple } from '@syncfusion/ej2-base';

//enable ripple style
enableRipple(true);

// creates the simple timepicker component
let timeObject: TimePicker = new TimePicker({
    placeholder:'Select Time'
});
timeObject.appendTo('#element');

document.onkeyup = function (e) {
    if (e.altKey && e.keyCode === 84 /* t */) {
        // press alt+t to focus the component by calling public method.
        timeObject.focusIn();
    }
};



