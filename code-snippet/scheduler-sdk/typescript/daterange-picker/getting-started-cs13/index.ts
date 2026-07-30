

import { DateRangePicker } from '@syncfusion/ej2-calendars';
// creates a daterangepicker with start and end date
let daterangepicker: DateRangePicker = new DateRangePicker({
//sets the start date in the range
startDate: new Date("11/9/2017"),
//sets the end date in the range
endDate: new Date("11/21/2017")
});
daterangepicker.appendTo('#element');


