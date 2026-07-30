

import { Calendar } from '@syncfusion/ej2-calendars';
import moment from "moment";

/*Initialize the calender component*/
let calendar: Calendar = new Calendar({
    isMultiSelection: true,
    change: onChange
});
calendar.appendTo('#calendar');

/*selected current week dates when click the button*/
document.getElementById('workweek').addEventListener('click', function () {
    if (calendar.element.classList.contains('week')) {
        calendar.element.classList.remove('week')
    }
    calendar.element.classList.add('workweek');
});

/*selected current week dates when click the button*/
document.getElementById('week').addEventListener('click', function () {
    if (calendar.element.classList.contains('workweek')) {
         calendar.element.classList.remove('workweek')
    }
    calendar.element.classList.add('week');
});

function onChange(args: ChangedEventArgs) {
    let startOfWeek: any = moment(calendar.value).startOf('week');
    let endOfWeek: any = moment(calendar.value).endOf('week');
    if (calendar.element.classList.contains('workweek')) {
        getWeekArray(startOfWeek.day(1) , endOfWeek.day(5)) ;
    } else if (calendar.element.classList.contains("week")) {
        getWeekArray(startOfWeek, endOfWeek);
    }
}

function getWeekArray(startOfWeek: any, endOfWeek: any): void {
    let days: Date[] = [];
    let day: any = startOfWeek;
    while (day <= endOfWeek) {
        days.push(day.toDate());
        day = day.clone().add(1, 'd');
    }
    calendar.values = days;
}


