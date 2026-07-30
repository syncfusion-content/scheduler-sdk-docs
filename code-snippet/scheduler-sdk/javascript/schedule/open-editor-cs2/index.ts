import { Schedule, Day, Week, WorkWeek, Month } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek, Month);

let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    workHours: {
        highlight: true,
        start: '09:00',
        end: '11:00'
    },
    views: ['Day', 'Week', 'WorkWeek', 'Month'],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

let button = document.querySelector('#btn1') as HTMLElement;
button.onclick = function () {
    var dates = [new Date(2018, 1, 15), new Date(2018, 1, 17)];
    scheduleObj.setWorkHours(dates, '11:00', '20:00');
};