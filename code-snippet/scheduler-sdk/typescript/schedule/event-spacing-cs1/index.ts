import { Schedule, Week, TimelineViews } from '@syncfusion/ej2-schedule';
import { spacingData, ownerData } from './datasource.ts';

Schedule.Inject(Week, TimelineViews);

const scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(),
    currentView: 'Week',
    views: ['Week', 'TimelineWeek'],
    rowAutoHeight: true,
    group: { resources: ['Owners'] },
    resources: [{
        field: 'OwnerId',
        title: 'Owner',
        name: 'Owners',
        dataSource: ownerData,
        textField: 'Text',
        idField: 'Id',
        colorField: 'Color'
    }],
    eventSettings: { dataSource: spacingData },
    eventSpacing: {
        gap: 4,
        leadingSpace: 10,
        trailingSpace: 20
    }
});

scheduleObj.appendTo('#Schedule');
