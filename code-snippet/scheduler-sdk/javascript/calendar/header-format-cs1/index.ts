


import { Calendar } from '@syncfusion/ej2-calendars';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

let calendarObject: Calendar = new Calendar({
    dayHeaderFormat: "Short"
});
calendarObject.appendTo('#element');

let formatLabel: DropDownList = new DropDownList({
        // set the height of the popup element
        popupHeight: '200px',
        // bind the change event
            change: (args: any) => {
                 calendarObject.dayHeaderFormat = args.value;
            }
 });
 formatLabel.appendTo('#select');


