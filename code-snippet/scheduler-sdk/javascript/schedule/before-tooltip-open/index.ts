import {
    Schedule, ScheduleModel, Day, Week, WorkWeek, Month, Year, Agenda,TooltipOpenEventArgs, MonthAgenda, View, Resize, DragAndDrop, TimelineViews, TimelineMonth, TimelineYear
} from '@syncfusion/ej2-schedule';

Schedule.Inject(Day, Week, WorkWeek, Month, Year, Agenda, MonthAgenda, TimelineViews, TimelineMonth, TimelineYear, Resize, DragAndDrop);

import { defaultData } from './datasource';

const scheduleOptions: ScheduleModel = {
    width: '100%',
    height: '550px',
    selectedDate: new Date(2025, 1, 15),
    currentView: 'Week',
    tooltipOpen: function (args: TooltipOpenEventArgs) {
        let record = args.data;
        if (record.Subject === 'Vacation') {
            args.cancel = true;
        }
    },
    views: ['Day', 'Week', 'WorkWeek', 'Month', 'Year', 'Agenda', 'MonthAgenda', 'TimelineDay', 'TimelineWeek', 'TimelineWorkWeek', 'TimelineMonth', 'TimelineYear'],
    eventSettings: {
        dataSource: defaultData,
        enableTooltip: true,
        fields: {
            subject: { title: 'Name', name: 'Subject' },
            location: { title: 'Country Name', name: 'Location' },
            description: { title: 'Summary', name: 'Description' },
            startTime: { title: 'From', name: 'StartTime' },
            endTime: { title: 'To', name: 'EndTime' },
            startTimezone: { title: 'Origin', name: 'StartTimezone' },
            endTimezone: { title: 'Destination', name: 'EndTimezone' }
        }
    }
};

const scheduleObj: Schedule = new Schedule(scheduleOptions, document.getElementById('Schedule'));