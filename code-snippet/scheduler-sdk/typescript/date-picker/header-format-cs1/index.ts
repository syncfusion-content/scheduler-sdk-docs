


import { DatePicker } from '@syncfusion/ej2-calendars';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

// creates datepicker component
let datepickerObject: DatePicker = new DatePicker({
    dayHeaderFormat: "Short"
});
datepickerObject.appendTo('#element');

let formatLabel: DropDownList = new DropDownList({
        // set the height of the popup element
        popupHeight: '200px',
        // bind the change event
            change: (args: any) => {
                 datepickerObject.dayHeaderFormat = args.value;
            }
 });
 formatLabel.appendTo('#select');


