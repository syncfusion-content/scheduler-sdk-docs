import { Schedule, Week, TimelineViews, Summary, RenderSummaryCellEventArgs } from '@syncfusion/ej2-schedule';
import { summaryData } from './datasource.ts';

Schedule.Inject(Week, TimelineViews, Summary);

const scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(),
    currentView: 'Week',
    eventSettings: { dataSource: summaryData },
    summaryRow: { enable: true },
    summaryColumn: { enable: true, cellUnit: 'Slot' },
    views: [
        { option: 'Week', summaryRow: { enable: true } },
        { option: 'TimelineWeek', summaryRow: { enable: true, cellUnit: 'Date' } }
    ],
    renderSummaryCell: (args: RenderSummaryCellEventArgs) => {
        if (args.renderType === 'SummaryRowLabel' || args.renderType === 'SummaryColumnLabel') {
            return;
        }
        const count: number = args.eventData ? args.eventData.length : 0;
        args.text = args.mode === 'Initial' ? 'Loading' : `${count} events`;
    }
});

scheduleObj.appendTo('#Schedule');
