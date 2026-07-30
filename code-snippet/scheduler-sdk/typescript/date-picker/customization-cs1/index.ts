

import { DatePicker, RenderDayCellEventArgs } from '@syncfusion/ej2-calendars';
// creates datepicker with placeholder.
let datepickerObject: DatePicker = new DatePicker({
    // Bind the renderDayCell event to customize the each day cell.
    renderDayCell: onRenderCell,
    // sets the placeholder
    placeholder: 'Enter date',
    cssClass: 'e-custom-style'
});
datepickerObject.appendTo('#element');

function onRenderCell(args: RenderDayCellEventArgs): void {
    if (args.date.getDay() == 0 || args.date.getDay() == 6) {
        //sets isDisabled to true to disable the date.
        args.isDisabled = true;
        //To know about the disabled date customization, you can refer in "styles.css".
    }

}


