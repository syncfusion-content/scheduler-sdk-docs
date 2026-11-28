import { Schedule, Day, Week, WorkWeek, Month } from '@syncfusion/ej2-schedule';
import { spacingData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek, Month);

const scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(),
    currentView: 'Week',
    views: ['Day', 'Week', 'WorkWeek', 'Month'],
    eventSettings: { dataSource: spacingData },
    eventSpacing: {
        gap: 4,
        leadingSpace: 10,
        trailingSpace: 20
    }
});

scheduleObj.appendTo('#Schedule');
