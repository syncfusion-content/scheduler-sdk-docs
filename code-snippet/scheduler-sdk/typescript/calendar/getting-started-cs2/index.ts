

import { Calendar, ChangedEventArgs } from '@syncfusion/ej2-calendars';
//creates a calendar with year view.
let calendarObject: Calendar = new Calendar({
    //sets the start view.
    start: "Year",
    //sets the value.
    value: new Date()
});
calendarObject.appendTo('#element');


