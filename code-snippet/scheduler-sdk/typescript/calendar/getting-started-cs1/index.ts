

import { Calendar } from '@syncfusion/ej2-calendars';
// creates a Calendar component.
let calendarObj: Calendar = new Calendar();
calendarObj.appendTo('#element');

document.onkeyup = function (e) {
    if (e.altKey && e.keyCode === 84) {
        // press alt+t to focus the control.
        (<HTMLElement>calendarObj.element.querySelectorAll('.e-content table')[0]).focus();
    }
};


