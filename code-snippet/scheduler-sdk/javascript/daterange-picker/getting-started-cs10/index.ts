


import { DateRangePicker } from '@syncfusion/ej2-calendars';
let today: Date = new Date();
let currentYear: number = today.getFullYear();
let currentMonth: number = today.getMonth();
let currentDay: number = today.getDate();
// creates a daterangepicker with min max property
let daterangeObject: DateRangePicker = new DateRangePicker({
    //sets the minimum number of days
    minDays: 4,
    //sets the maximum number of days
    maxDays: 7,
    placeholder:"Select a Range"
});
daterangeObject.appendTo('#element');



