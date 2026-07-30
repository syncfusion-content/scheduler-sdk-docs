


import { DateTimePicker } from '@syncfusion/ej2-calendars';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

// creates datetimepicker component
let datetimepickerObject: DateTimePicker = new DateTimePicker({
    dayHeaderFormat: "Short"
});
datetimepickerObject.appendTo('#element');

let formatLabel: DropDownList = new DropDownList({
        // set the height of the popup element
        popupHeight: '200px',
        // bind the change event
            change: (args: any) => {
                 datetimepickerObject.dayHeaderFormat = args.value;
            }
 });
 formatLabel.appendTo('#select');


