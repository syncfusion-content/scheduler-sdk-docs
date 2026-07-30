


import { DateRangePicker } from '@syncfusion/ej2-calendars';
// creates a  DateRangePicker component
let daterangeObject: DateRangePicker = new DateRangePicker({
    // sets the placeholder
    placeholder: 'Select a range'
    });
daterangeObject.appendTo('#element');

document.onkeyup = function (e) {
    if (e.altKey && e.keyCode === 84 /* t */) {
        // press alt+t to focus the component.
        daterangeObject.element.focus();
    }
};



