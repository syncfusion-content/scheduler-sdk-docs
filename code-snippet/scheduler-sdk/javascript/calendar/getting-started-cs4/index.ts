


import { Calendar, RenderDayCellEventArgs } from '@syncfusion/ej2-calendars';
//Creates a calendar with weekends disabled.
let calendarObject: Calendar = new Calendar({
    renderDayCell: disabledDate,
    value: new Date()
});
calendarObject.appendTo('#element');

function disabledDate(args: RenderDayCellEventArgs): void {
    if (args.date.getDay() === 0 || args.date.getDay() === 6) {
        //Set 'true' to disable the weekends.
        args.isDisabled = true;
    }
}



