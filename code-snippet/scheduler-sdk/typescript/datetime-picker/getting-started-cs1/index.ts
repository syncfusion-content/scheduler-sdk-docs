


import { DateTimePicker } from '@syncfusion/ej2-calendars';
// creates a  DateTimePicker component
let datetimepickerObject: DateTimePicker = new DateTimePicker({
    // sets the placeholder
    placeholder: 'Select a date and time'
});
datetimepickerObject.appendTo('#element');

document.onkeyup = function (e) {
    if (e.altKey && e.keyCode === 84 /* t */) {
        // press alt+t to focus the component.
        datetimepickerObject.element.focus();
    }
};



