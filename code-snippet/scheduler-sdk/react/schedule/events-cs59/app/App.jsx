import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, TimelineViews, TimelineMonth, DragAndDrop, Resize, Inject } from '@syncfusion/ej2-react-schedule';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

const eventData = [
    {
        Id: 1,
        Subject: 'Conference',
        StartTime: new Date(currentYear, 0, 22, 9, 0),
        EndTime: new Date(currentYear, 0, 22, 10, 0),
        bufferBefore: 30,
        bufferAfter: 15,
    },
    {
        Id: 2,
        Subject: 'Workshop',
        StartTime: new Date(currentYear, 0, 22, 11, 0),
        EndTime: new Date(currentYear, 0, 22, 13, 0),
        bufferBefore: 45,
        bufferAfter: 30,
    },
    {
        Id: 3,
        Subject: 'Presentation',
        StartTime: new Date(currentYear, 0, 22, 14, 0),
        EndTime: new Date(currentYear, 0, 22, 15, 0),
        bufferBefore: 20,
        bufferAfter: 10,
    },
];

function App() {
    const scheduleRef = React.useRef(null);

    const increaseBuffer = () => {
        if (scheduleRef.current && scheduleRef.current.eventsData.length > 0) {
            const event = scheduleRef.current.eventsData[0];
            event.bufferBefore = (event.bufferBefore || 0) + 10;
            event.bufferAfter = (event.bufferAfter || 0) + 10;
            scheduleRef.current.saveEvent(event);
        }
    };

    const decreaseBuffer = () => {
        if (scheduleRef.current && scheduleRef.current.eventsData.length > 0) {
            const event = scheduleRef.current.eventsData[0];
            event.bufferBefore = Math.max(0, (event.bufferBefore || 0) - 10);
            event.bufferAfter = Math.max(0, (event.bufferAfter || 0) - 10);
            scheduleRef.current.saveEvent(event);
        }
    };

    const resetBuffer = () => {
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
                <Inject services={[Day, Week, WorkWeek, Month, Agenda, TimelineViews, TimelineMonth, DragAndDrop, Resize]} />
            </ScheduleComponent>
        </div>
    );
}

export default App;
