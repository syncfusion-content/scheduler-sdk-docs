import { DatePicker } from '@syncfusion/ej2-calendars';

// creates a datepicker with min max property
let datepickerObject: DatePicker = new DatePicker({
    placeholder: "Select Date",
    value: new Date(),
    width: "250px",
    serverTimezoneOffset: 5.5 // Example: UTC+5:30 for IST
});
datepickerObject.appendTo('#element');



