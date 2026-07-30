


import { DateTimePicker } from '@syncfusion/ej2-calendars';
let today: Date = new Date();
let currentYear: number = today.getFullYear();
let currentMonth: number = today.getMonth();
let currentDay: number = today.getDate();
let currentHour: number = today.getHours();
let currentMinute: number = today.getMinutes();
let currentSecond: number = today.getSeconds();
// creates a datetimepicker with min max property
let datetimepickerObject: DateTimePicker = new DateTimePicker({
    //sets the min.
    min: new Date(currentYear, currentMonth, 7, 0, 0, 0),
    //sets the max.
    max: new Date(currentYear, currentMonth, 27,currentHour,currentMinute,currentSecond),
    //sets the value.
    value: new Date(new Date().setDate(14))
});
datetimepickerObject.appendTo('#element');



