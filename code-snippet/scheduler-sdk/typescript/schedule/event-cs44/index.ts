import { Schedule, Day, Week, WorkWeek, TimelineViews, DragAndDrop, Resize, EventRenderedArgs } from '@syncfusion/ej2-schedule';

const currentYear: number = new Date().getFullYear();
const eventData: Record<string, any>[] = [
    {
        Id: 1,
        Subject: 'Therapy Session - John Smith',
        StartTime: new Date(currentYear, 0, 22, 9, 0),
        EndTime: new Date(currentYear, 0, 22, 10, 30),
        bufferBefore: 30,  // 30 min to review session notes
        bufferAfter: 25,   // 25 min to document observations
        eventType: 'development',
        Location: 'Counseling Room 2'
    },
    {
        Id: 2,
        Subject: 'Board Strategy Meeting',
        StartTime: new Date(currentYear, 0, 22, 11, 0),
        EndTime: new Date(currentYear, 0, 22, 12, 0),
        bufferBefore: 30,  // 30 min to prepare briefing materials
        bufferAfter: 20,   // 20 min for executive follow-up
        eventType: 'executive',
        Location: 'Boardroom'
    },
    {
        Id: 3,
        Subject: 'Personal Break',
        StartTime: new Date(currentYear, 0, 22, 12, 30),
        EndTime: new Date(currentYear, 0, 22, 13, 30),
        bufferBefore: 0,
        bufferAfter: 0,
        eventType: 'personal',
        Location: 'Office'
    },
    {
        Id: 4,
        Subject: 'Legal Consultation - Patent Filing',
        StartTime: new Date(currentYear, 0, 22, 14, 0),
        EndTime: new Date(currentYear, 0, 22, 15, 0),
        bufferBefore: 45,  // 45 min to gather all technical documents
        bufferAfter: 30,   // 30 min to review legal advice
        eventType: 'client',
        Location: 'Law Firm - Suite 500'
    }
];

Schedule.Inject(Day, Week, WorkWeek, TimelineViews, DragAndDrop, Resize);

let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    currentView: 'TimelineWeek',
    selectedDate: new Date(currentYear, 0, 22),
    timeScale: { enable: true, interval: 60, slotCount: 4 },
    eventSettings: {
        dataSource: eventData,
        enableBuffer: true,
        fields: {
            bufferBefore: { name: 'bufferBefore' },
            bufferAfter: { name: 'bufferAfter' }
        },
        bufferTemplate: '<div style="height:100%;display:flex;align-items:center;justify-content:center;font-size:11px;color:#fff;text-align:center;">' +
        '<div>${bufferType === "before" ? "Setup" : "Wrap-up"}<br/>${bufferType === "before" ? data.bufferBefore : data.bufferAfter} min</div></div>'
    },
    eventRendered: (args: EventRenderedArgs): void => {
        if (args.data.eventType === 'executive') {
            args.element.style.backgroundColor = '#ff6b6b';
            args.element.style.borderColor = '#ff6b6b';
        } else if (args.data.eventType === 'client') {
            args.element.style.backgroundColor = '#4e7de7';
            args.element.style.borderColor = '#4e7de7';
        } else if (args.data.eventType === 'development') {
            args.element.style.backgroundColor = '#ffa500';
            args.element.style.borderColor = '#ffa500';
        }
    }
});
scheduleObj.appendTo('#Schedule');
