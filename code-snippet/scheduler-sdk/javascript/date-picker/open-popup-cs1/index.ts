


import { DatePicker } from '@syncfusion/ej2-calendars';
// creates datepicker component
let datepickerObject: DatePicker = new DatePicker({
    focus: function () {
        // To open the popup upon input click
        datepickerObject.show();
    },
    // sets the palceholder property.
    placeholder: 'Enter date'
});
datepickerObject.appendTo('#element');


