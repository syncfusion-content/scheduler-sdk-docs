import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize, Inject } from '@syncfusion/ej2-react-schedule';

const eventData = [
    {
        Id: 1,
        Subject: 'Dentist Checkup',
        StartTime: new Date(2025, 0, 22, 8, 0),
        EndTime: new Date(2025, 0, 22, 8, 30),
        bufferBefore: 15,  // 15 min prep time
        bufferAfter: 10,   // 10 min wrap-up
    },
    {
        Id: 2,
        Subject: 'Team Meeting',
        StartTime: new Date(2025, 0, 22, 10, 0),
        EndTime: new Date(2025, 0, 22, 11, 30),
        bufferBefore: 30,  // 30 min prep for meeting room setup
        bufferAfter: 20,   // 20 min to return to desk
    },
    {
        Id: 3,
        Subject: 'Lunch Break',
        StartTime: new Date(2025, 0, 22, 12, 0),
        EndTime: new Date(2025, 0, 22, 13, 0),
        bufferBefore: 0,   // No prep needed
        bufferAfter: 0,    // No wrap-up needed
    },
    {
        Id: 4,
        Subject: 'Project Review',
        StartTime: new Date(2025, 0, 22, 14, 0),
        EndTime: new Date(2025, 0, 22, 15, 0),
        bufferBefore: 20,
        bufferAfter: 15,
    },
];

function App() {
    return (
        <ScheduleComponent
            width='100%'
            height='550px'
            currentView='Week'
            selectedDate={new Date(2025, 0, 22)}
            timeScale={{ enable: true, interval: 60, slotCount: 2 }}
            eventSettings={{
                dataSource: eventData,
                enableBuffer: true,
                fields: {
                    bufferBefore: { name: 'bufferBefore' },
                    bufferAfter: { name: 'bufferAfter' },
                },
            }}
        >
            <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]} />
        </ScheduleComponent>
    );
}

export default App;
