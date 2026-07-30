


import { DatePicker } from '@syncfusion/ej2-calendars';
let today: Date = new Date();
let currentYear: number = today.getFullYear();
let currentMonth: number = today.getMonth();
let currentDay: number = today.getDate();
// creates a datepicker with min max property
let datepickerObject: DatePicker = new DatePicker({
    //sets the min.
    min: new Date(currentYear, currentMonth, 7),
    //sets the max.
    max: new Date(currentYear, currentMonth, 27),
    //sets the value.
    value: new Date(new Date().setDate(14))
});
datepickerObject.appendTo('#element');



