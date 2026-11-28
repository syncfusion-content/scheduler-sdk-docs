import { Schedule, Week, TimelineViews, Summary } from '@syncfusion/ej2-schedule';
import { summaryData } from './datasource.ts';

Schedule.Inject(Week, TimelineViews, Summary);

const scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(),
    currentView: 'Week',
    eventSettings: { dataSource: summaryData },
    views: [
        { option: 'Week', summaryRow: { enable: true }, summaryColumn: { enable: true, cellUnit: 'Slot' } },
        { option: 'TimelineWeek', summaryRow: { enable: true, cellUnit: 'Date' }, summaryColumn: { enable: true } }
    ],
    summaryRow: {
        enable: true,
        template: '<div class="summary-cell">Date summary</div>',
        labelTemplate: '<div class="summary-label">Summary row</div>',
        totalTemplate: '<div class="summary-total">Overall total</div>'
    },
    summaryColumn: {
        enable: true,
        cellUnit: 'Slot',
        template: '<div class="summary-cell">Time summary</div>',
        labelTemplate: '<div class="summary-label">Summary column</div>'
    }
});

scheduleObj.appendTo('#Schedule');
