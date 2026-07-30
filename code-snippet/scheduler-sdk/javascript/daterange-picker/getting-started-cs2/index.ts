

import { DateRangePicker, RenderDayCellEventArgs } from '@syncfusion/ej2-calendars';
// creates daterangepicker with placeholder.
let daterangeObject: DateRangePicker = new DateRangePicker({
    // Bind the renderDayCell event to customize the each day cell.
    renderDayCell: onRenderCell,
    // sets the placeholder
    placeholder: 'Select a range'
});
daterangeObject.appendTo('#element');

function onRenderCell(args: RenderDayCellEventArgs): void {
    if (args.date.getDay() == 0 || args.date.getDay() == 6) {
        //sets isDisabled to true to disable the date.
        args.isDisabled = true;
    }

}


