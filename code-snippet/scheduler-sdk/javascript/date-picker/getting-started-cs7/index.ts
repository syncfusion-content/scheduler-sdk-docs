


import { DatePicker, PreventableEventArgs } from '@syncfusion/ej2-calendars';
// creates datepicker with readonly.
let datepickerObject: DatePicker = new DatePicker({
    close: function (args: PreventableEventArgs) {
        // prevent the popup close
        args.preventDefault();
    },
    // sets the palceholder property.
    placeholder: 'Enter date'
});
datepickerObject.appendTo('#element');
// open the datepicker popup
datepickerObject.show();



