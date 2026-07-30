

import { Calendar, ChangedEventArgs } from '@syncfusion/ej2-calendars';
//Creates a Calendar with min and max properties.
let today: Date = new Date();
let currentYear: number = today.getFullYear();
let currentMonth: number = today.getMonth();
let currentDay: number = today.getDate();
let calendarObject: Calendar = new Calendar({
    //sets the min date
    min: new Date(currentYear, currentMonth, 7),
    //sets the max date
    max: new Date(currentYear, currentMonth, 27),
    //sets the value
    value: new Date(new Date().setDate(14))
});
calendarObject.appendTo('#element');


