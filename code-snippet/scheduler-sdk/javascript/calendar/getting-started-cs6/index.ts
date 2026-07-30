

import { Calendar } from '@syncfusion/ej2-calendars';
//creates  a calendar with Tuesday as the first day of the week.
let calendarObject: Calendar = new Calendar({
    //sets the first day of the week.
    firstDayOfWeek: 2
});
calendarObject.appendTo('#element');


