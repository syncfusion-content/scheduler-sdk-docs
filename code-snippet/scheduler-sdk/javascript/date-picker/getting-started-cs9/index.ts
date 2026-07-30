


import { DatePicker } from '@syncfusion/ej2-calendars';
// creates datepicker with readonly.
let datepickerObject: DatePicker = new DatePicker({
    // sets the readonly.
    readonly:true,
    // sets the value.
    value:new Date(),
    // sets the palceholder property.
    placeholder:'Enter date'
});
datepickerObject.appendTo('#element');



