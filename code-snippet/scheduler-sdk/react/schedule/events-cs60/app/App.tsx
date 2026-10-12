import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, TimelineViews, DragAndDrop, Resize, Inject } from '@syncfusion/ej2-react-schedule';

const currentYear = new Date().getFullYear();
const eventData = [
    {
        Id: 1,
        Subject: 'Therapy Session - John Smith',
        StartTime: new Date(currentYear, 0, 22, 9, 0),
        EndTime: new Date(currentYear, 0, 22, 10, 30),
        bufferBefore: 30,  // 10 min to review session notes
        bufferAfter: 25,   // 15 min to document observations
        eventType: 'development',
        Location: 'Counseling Room 2',
    },
    {
        Id: 2,
        Subject: 'Board Strategy Meeting',
        StartTime: new Date(currentYear, 0, 22, 11, 0),
        EndTime: new Date(currentYear, 0, 22, 12, 0),
        bufferBefore: 30,  // 30 min to prepare briefing materials
        bufferAfter: 20,   // 20 min for executive follow-up
        eventType: 'executive',
        Location: 'Boardroom',
    },
    {
        Id: 3,
        Subject: 'Personal Break',
        StartTime: new Date(currentYear, 0, 22, 12, 30),
        EndTime: new Date(currentYear, 0, 22, 13, 30),
        bufferBefore: 0,
        bufferAfter: 0,
        eventType: 'personal',
        Location: 'Office',
    },
    {
        Id: 4,
        Subject: 'Legal Consultation - Patent Filing',
        StartTime: new Date(currentYear, 0, 22, 14, 0),
        EndTime: new Date(currentYear, 0, 22, 15, 0),
        bufferBefore: 45,  // 45 min to gather all technical documents
        bufferAfter: 30,   // 30 min to review legal advice
        eventType: 'client',
        Location: 'Law Firm - Suite 500',
    },
];

function bufferTemplate(args: any) {
    const label = args.bufferType === 'before' ? 'Setup' : 'Wrap-up';
    const minutes = args.bufferType === 'before'
        ? args.data.bufferBefore : args.data.bufferAfter;

    return (
        <div
            className="buffer-template"
            style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "11px",
                color: "#fff",
                opacity: 1,
                textAlign: "center",
            }}
        >
            <div>
                {label}
                <br />
                {minutes} min
            </div>
        </div>
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
            <Inject services={[Day, Week, WorkWeek, TimelineViews, DragAndDrop, Resize]} />
        </ScheduleComponent>
    );
}

export default App;
