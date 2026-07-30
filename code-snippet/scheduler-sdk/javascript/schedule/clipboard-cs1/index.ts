import {
    Schedule, Day, Week, WorkWeek, Month, Agenda, CellClickEventArgs
} from '@syncfusion/ej2-schedule';

import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);

let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2024, 1, 15),
    eventSettings: { dataSource: scheduleData },
    allowClipboard: true,
    showQuickInfo: false
});
scheduleObj.appendTo('#Schedule');