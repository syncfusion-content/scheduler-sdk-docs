


import { DateRangePicker } from '@syncfusion/ej2-calendars';
let today: Date = new Date();
let currentYear: number = today.getFullYear();
let currentMonth: number = today.getMonth();
let currentDay: number = today.getDate();
// creates a daterangepicker with predefined ranges (label, start date, end date)
let daterangeObject: DateRangePicker = new DateRangePicker({
    placeholder: 'Select a range',
        presets: [
            { label: 'Today', start: new Date(), end: new Date() },
            { label: 'This Month', start: new Date(new Date().setDate(1)), end: new Date() },
            { label: 'Last Month', start: new Date(new Date(new Date().setMonth(new Date().getMonth() - 1)).setDate(1)), end: new Date() },
            { label: 'Last Year', start: new Date(new Date().getFullYear() - 1, 0, 1), end: new Date() },

        ]

});
daterangeObject.appendTo('#element');



