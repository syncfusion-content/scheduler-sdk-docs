

import { Calendar } from '@syncfusion/ej2-calendars';

/*Initialize the calender component*/
let calendar: Calendar = new Calendar({
    isMultiSelection: true,
    values: [new Date('1/1/2020'), new Date('1/15/2020'), new Date('1/3/2020'), new Date('1/25/2020')]
});
calendar.appendTo('#element');



