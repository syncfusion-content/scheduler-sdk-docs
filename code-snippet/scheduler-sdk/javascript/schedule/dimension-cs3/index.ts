import { Schedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);

let scheduleObj: Schedule = new Schedule({
    width: '100%', height: '100%',
    selectedDate: new Date(2018, 1, 15)
});
scheduleObj.appendTo('#Schedule');