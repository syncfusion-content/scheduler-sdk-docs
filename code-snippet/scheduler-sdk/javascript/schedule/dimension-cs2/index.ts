import { Schedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);

let scheduleObj: Schedule = new Schedule({
    width: '650px', height: '550px',
    selectedDate: new Date(2018, 1, 15)
});
scheduleObj.appendTo('#Schedule');