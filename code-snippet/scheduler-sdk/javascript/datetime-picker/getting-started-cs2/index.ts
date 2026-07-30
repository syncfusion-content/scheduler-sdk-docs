

import { DateTimePicker, RenderDayCellEventArgs, ItemEventArgs } from '@syncfusion/ej2-calendars';
// creates datetimepicker with placeholder.
let datetimeObject: DateTimePicker = new DateTimePicker({
    // Bind the renderDayCell event to customize the each day cell.
    renderDayCell: onRenderCell,
    // sets the placeholder
    placeholder: 'Select a date and time'
});
datetimeObject.appendTo('#element');

function onRenderCell(args: RenderDayCellEventArgs): void {
    if (args.date.getDay() == 0 || args.date.getDay() == 6) {
         //sets isDisabled to true to disable the date.
        args.isDisabled = true;
    }

}


