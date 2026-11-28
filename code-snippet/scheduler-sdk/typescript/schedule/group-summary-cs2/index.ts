import { Schedule, TimelineViews, Summary, RenderSummaryCellEventArgs } from '@syncfusion/ej2-schedule';
import { groupSummaryData, buildings, rooms } from './datasource.ts';

Schedule.Inject(TimelineViews, Summary);

const scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '600px',
    selectedDate: new Date(2026, 10, 28),
    currentView: 'TimelineWeek',
    views: ['TimelineWeek'],
    resources: [
        {
            field: 'BuildingId',
            title: 'Building',
            name: 'Buildings',
            dataSource: buildings,
            textField: 'text',
            idField: 'id'
        },
        {
            field: 'RoomId',
            title: 'Room',
            name: 'Rooms',
            dataSource: rooms,
            textField: 'text',
            idField: 'id',
            groupIDField: 'buildingId'
        }
    ],
    group: { resources: ['Buildings', 'Rooms'] },
    eventSettings: { dataSource: groupSummaryData },
    groupSummary: {
        enable: true,
        resources: ['Buildings'],
        cellUnit: 'Date',
        template: '<strong class="group-summary-template">Group bookings</strong>'
    },
    summaryRow: { enable: true, cellUnit: 'Date' },
    summaryColumn: { enable: true },
    renderSummaryCell: (args: RenderSummaryCellEventArgs) => {
        if (args.renderType === 'SummaryRow' ||
            args.renderType === 'SummaryColumn' ||
            args.renderType === 'SummaryTotal') {
            const count: number = args.eventData ? args.eventData.length : 0;
            args.text = `${count} events`;
        }
    }
});

scheduleObj.appendTo('#Schedule');
