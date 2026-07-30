


import { DateRangePicker } from '@syncfusion/ej2-calendars';
// creates a daterangepicker with format property
let daterangeObject: DateRangePicker = new DateRangePicker({
    format:"yyyy-MM-dd",
    separator: "to",
    placeholder:"Select Range"

});
daterangeObject.appendTo('#element');



