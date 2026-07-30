

import { Calendar, ChangedEventArgs } from '@syncfusion/ej2-calendars';
//creates a calendar with decade view and navigates up to year view.
let calendarObject: Calendar = new Calendar({
    //sets the start view.
    start: "Decade",
    //sets the depth view.
    depth: "Year"
});
calendarObject.appendTo('#element');


