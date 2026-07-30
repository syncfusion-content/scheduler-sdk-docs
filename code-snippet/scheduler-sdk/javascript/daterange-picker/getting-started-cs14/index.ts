

import { DatePicker } from '@syncfusion/ej2-calendars';
// creates a DatePicker component with custom format.
let datepickerObject: DatePicker = new DateRangePicker({
    placeholder: "Select a range",
    startDate: new Date(new Date().setDate(1)),
    endDate: new Date(new Date().setDate(20)),
    // sets the format.
    format: 'yyyy-MM-dd'
});
datepickerObject.appendTo('#element');


