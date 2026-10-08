import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, TimelineViews, DragAndDrop, Resize, Inject } from '@syncfusion/ej2-react-schedule';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

const currentYear = new Date().getFullYear();
const eventData = [
    {
        Id: 1,
        Subject: 'Client Kickoff - Acme Corp',
        StartTime: new Date(currentYear, 0, 22, 9, 0),
        EndTime: new Date(currentYear, 0, 22, 10, 0),
        bufferBefore: 30,  // 30 min to set up conference room and test AV
        bufferAfter: 45,   // 15 min to send follow-up materials
        Location: 'Boardroom A',
        Description: 'Project kickoff meeting with Acme Corp leadership team',
    },
    {
        Id: 2,
        Subject: 'Sales Training Workshop',
        StartTime: new Date(currentYear, 0, 22, 11, 0),
        EndTime: new Date(currentYear, 0, 22, 13, 0),
        bufferBefore: 45,  // 45 min for room setup and materials distribution
        bufferAfter: 30,   // 30 min for Q&A and feedback collection
        Location: 'Training Room',
        Description: 'Quarterly sales techniques and product knowledge training',
    },
    {
        Id: 3,
        Subject: 'Product Demo - TechStart Inc',
        StartTime: new Date(currentYear, 0, 22, 14, 0),
        EndTime: new Date(currentYear, 0, 22, 15, 0),
        bufferBefore: 20,  // 20 min to test demo environment
        bufferAfter: 40,   // 10 min to gather requirements
        Location: 'Conference Room B',
        Description: 'Live demo of enterprise SaaS platform for TechStart Inc',
    },
];

function App() {
    const scheduleRef = React.useRef(null);

    const increaseBuffer = (): void => {
        if (scheduleRef.current && scheduleRef.current.eventsData.length > 0) {
            const event = scheduleRef.current.eventsData[0];
            event.bufferBefore = (event.bufferBefore || 0) + 10;
            event.bufferAfter = (event.bufferAfter || 0) + 10;
            scheduleRef.current.saveEvent(event);
        }
    };

    const decreaseBuffer = (): void => {
        if (scheduleRef.current && scheduleRef.current.eventsData.length > 0) {
            const event = scheduleRef.current.eventsData[0];
            event.bufferBefore = Math.max(0, (event.bufferBefore || 0) - 10);
            event.bufferAfter = Math.max(0, (event.bufferAfter || 0) - 10);
            scheduleRef.current.saveEvent(event);
        }
    };

    const resetBuffer = (): void => {
        if (scheduleRef.current && scheduleRef.current.eventsData.length > 0) {
            const event = scheduleRef.current.eventsData[0];
            event.bufferBefore = 30;
            event.bufferAfter = 15;
            scheduleRef.current.saveEvent(event);
        }
    };

    return (
        <div>
            <div style={{ marginBottom: '15px' }}>
                <ButtonComponent onClick={increaseBuffer} style={{ marginRight: '10px' }}>
                    Increase Buffer
                </ButtonComponent>
                <ButtonComponent onClick={decreaseBuffer} style={{ marginRight: '10px' }}>
                    Decrease Buffer
                </ButtonComponent>
                <ButtonComponent onClick={resetBuffer}>
                    Reset Buffer
                </ButtonComponent>
            </div>
            <ScheduleComponent
                ref={scheduleRef}
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
                }}
            >
                <Inject services={[Day, Week, WorkWeek, TimelineViews, DragAndDrop, Resize]} />
            </ScheduleComponent>
        </div>
    );
}

export default App;
