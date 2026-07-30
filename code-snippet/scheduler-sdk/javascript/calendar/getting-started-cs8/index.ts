

import { Calendar, NavigatedEventArgs } from '@syncfusion/ej2-calendars';
//Creates a calendar component.
let calendarObject: Calendar = new Calendar({ navigated: onNavigate });
calendarObject.appendTo('#element');
//Skips a month while cliking previous and next icons in month view.
function onNavigate(args: NavigatedEventArgs) {
    let date: Date;
    if ((<HTMLElement>args.event.currentTarget).classList.contains('e-next')) {
        //Increments the month while clicking the next icon.
        date = new Date(args.date.setMonth(args.date.getMonth() + 1));
    }
    if ((<HTMLElement>args.event.currentTarget).classList.contains('e-prev')) {
        //Decrements the month while clicking the previous icon.
        date = new Date(args.date.setMonth(args.date.getMonth() - 1));
    }
    if (args.view == 'month') {+
        calendarObject.navigateTo('month', date);
    }
}


