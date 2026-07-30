


import { DateRangePicker } from '@syncfusion/ej2-calendars';
let today: Date = new Date();
let currentYear: number = today.getFullYear();
let currentMonth: number = today.getMonth();
let currentDay: number = today.getDate();
// creates a daterangepicker with min max property
let daterangeObject: DateRangePicker = new DateRangePicker({
    //sets the min.
    min: new Date(currentYear, currentMonth, 15),
    //sets the max.
    max: new Date(currentYear, currentMonth+1, 15),
    placeholder:"Select a Range"

});
daterangeObject.appendTo('#element');



