


import { Calendar, RenderDayCellEventArgs } from '@syncfusion/ej2-calendars';
//Creates a calendar with weekends highlighted.
let calendarObject: Calendar = new Calendar({
    renderDayCell: highlightDate,
    value: new Date()
});
calendarObject.appendTo('#element');

function highlightDate(args: RenderDayCellEventArgs): void {
    if (args.date.getDay() === 0 || args.date.getDay() === 6) {
        // To highlight the week end of every month
       args.element.classList.add('e-highlightweekend');
    }
}



