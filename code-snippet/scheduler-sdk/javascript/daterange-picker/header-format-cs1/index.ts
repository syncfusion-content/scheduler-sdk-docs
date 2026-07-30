


import { DateRangePicker } from '@syncfusion/ej2-calendars';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

// creates daterangepicker component
let daterangepickerObject: DateRangePicker = new DateRangePicker({
    dayHeaderFormat: "Short",
    cssClass: "format-wide"
});
daterangepickerObject.appendTo('#element');

let formatLabel: DropDownList = new DropDownList({
        // set the height of the popup element
        popupHeight: '200px',
        // bind the change event
            change: (args: any) => {
                 daterangepickerObject.dayHeaderFormat = args.value;
            }
 });
 formatLabel.appendTo('#select');


