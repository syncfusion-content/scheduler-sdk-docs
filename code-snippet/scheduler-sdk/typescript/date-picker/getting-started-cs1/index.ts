


import { DatePicker } from '@syncfusion/ej2-calendars';
// creates a  DatePicker component
let datepickerObject: DatePicker = new DatePicker({
    // sets the placeholder
    placeholder: 'Enter date'
    });
datepickerObject.appendTo('#element');

document.onkeyup = function (e) {
    if (e.altKey && e.keyCode === 84 /* t */) {
        // press alt+t to focus the component.
        datepickerObject.element.focus();
    }
};



