import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, TimelineViews, TimelineMonth, DragAndDrop, Resize, Inject } from '@syncfusion/ej2-react-schedule';

const currentYear = new Date().getFullYear();
const eventData = [
    {
        Id: 1,
        Subject: 'Development Sprint Planning',
        StartTime: new Date(currentYear, 0, 22, 9, 0),
        EndTime: new Date(currentYear, 0, 22, 10, 30),
        bufferBefore: 15,
        bufferAfter: 10,
        eventType: 'development',
    },
    {
        Id: 2,
        Subject: 'Executive Sync',
        StartTime: new Date(currentYear, 0, 22, 11, 0),
        EndTime: new Date(currentYear, 0, 22, 12, 0),
        bufferBefore: 30,
        bufferAfter: 15,
        eventType: 'executive',
    },
    {
        Id: 3,
        Subject: 'Lunch Break',
        StartTime: new Date(currentYear, 0, 22, 12, 30),
        EndTime: new Date(currentYear, 0, 22, 13, 30),
        bufferBefore: 0,
        bufferAfter: 0,
        eventType: 'personal',
    },
    {
        Id: 4,
        Subject: 'Client Presentation',
        StartTime: new Date(currentYear, 0, 22, 14, 0),
        EndTime: new Date(currentYear, 0, 22, 15, 0),
        bufferBefore: 45,
        bufferAfter: 30,
        eventType: 'client',
    },
];

function bufferTemplate(args: any) {
    let bgColor = '#90ee90';  // Default green
    let label = 'Transition';

    if (args.data.eventType === 'executive') {
        bgColor = args.bufferType === 'before' ? '#ff6b6b' : '#ffb3b3';
        label = args.bufferType === 'before' ? 'Prepare' : 'Debrief';
    } else if (args.data.eventType === 'client') {
        bgColor = args.bufferType === 'before' ? '#4e7de7' : '#a8c5ff';
        label = args.bufferType === 'before' ? 'Setup' : 'Wrap-up';
    } else if (args.data.eventType === 'development') {
        bgColor = args.bufferType === 'before' ? '#ffa500' : '#ffd699';
        label = args.bufferType === 'before' ? 'Review' : 'Action Items';
    }

    const minutes = args.bufferType === 'before' ? args.data.bufferBefore : args.data.bufferAfter;

    return (
        '<div class="buffer-template" style="height:100%;display:flex;align-items:center;justify-content:center;' +
        'font-size:10px;color:#000;opacity:0.9;text-align:center;background-color:' + bgColor + ';' +
        'border:1px solid rgba(0,0,0,0.2);font-weight:500;">' +
        label + '<br/>' + minutes + 'min</div>'
    );
}

function App() {
    return (
        <ScheduleComponent
            width='100%'
            height='550px'
            currentView='TimelineWeek'
            selectedDate={new Date(currentYear, 0, 22)}
            timeScale={{ enable: true, interval: 60, slotCount: 4 }}
            eventSettings={{
                dataSource: eventData,
                enableBuffer: true,
                fields: {
                    bufferBefore: { name: 'bufferBefore' },
                    bufferAfter: { name: 'bufferAfter' },
                },
                bufferTemplate: bufferTemplate,
            }}
            eventRendered={(args: any) => {
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
            }}
        >
            <Inject services={[Day, Week, WorkWeek, Month, Agenda, TimelineViews, TimelineMonth, DragAndDrop, Resize]} />
        </ScheduleComponent>
    );
}

export default App;
