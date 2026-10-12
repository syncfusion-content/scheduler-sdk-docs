import { Schedule, Day, Week, WorkWeek, TimelineViews, DragAndDrop, Resize } from '@syncfusion/ej2-schedule';
import { Button } from '@syncfusion/ej2-buttons';

const currentYear: number = new Date().getFullYear();
const eventData: Record<string, any>[] = [
    {
        Id: 1,
        Subject: 'Client Kickoff - Acme Corp',
        StartTime: new Date(currentYear, 0, 22, 9, 0),
        EndTime: new Date(currentYear, 0, 22, 10, 0),
        bufferBefore: 30,  // 30 min to set up conference room and test AV
        bufferAfter: 45,   // 45 min to send follow-up materials
        Location: 'Boardroom A',
        Description: 'Project kickoff meeting with Acme Corp leadership team'
    },
    {
        Id: 2,
        Subject: 'Sales Training Workshop',
        StartTime: new Date(currentYear, 0, 22, 11, 0),
        EndTime: new Date(currentYear, 0, 22, 13, 0),
        bufferBefore: 45,  // 45 min for room setup and materials distribution
        bufferAfter: 30,   // 30 min for Q&A and feedback collection
        Location: 'Training Room',
        Description: 'Quarterly sales techniques and product knowledge training'
    },
    {
        Id: 3,
        Subject: 'Product Demo - TechStart Inc',
        StartTime: new Date(currentYear, 0, 22, 14, 0),
        EndTime: new Date(currentYear, 0, 22, 15, 0),
        bufferBefore: 20,  // 20 min to test demo environment
        bufferAfter: 40,   // 40 min to gather requirements
        Location: 'Conference Room B',
        Description: 'Live demo of enterprise SaaS platform for TechStart Inc'
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
        }
    }
});
scheduleObj.appendTo('#Schedule');

function increaseBuffer(): void {
    if (scheduleObj.eventsData.length > 0) {
        const event: Record<string, any> = scheduleObj.eventsData[0];
        event.bufferBefore = (event.bufferBefore || 0) + 10;
        event.bufferAfter = (event.bufferAfter || 0) + 10;
        scheduleObj.saveEvent(event);
    }
}

function decreaseBuffer(): void {
    if (scheduleObj.eventsData.length > 0) {
        const event: Record<string, any> = scheduleObj.eventsData[0];
        event.bufferBefore = Math.max(0, (event.bufferBefore || 0) - 10);
        event.bufferAfter = Math.max(0, (event.bufferAfter || 0) - 10);
        scheduleObj.saveEvent(event);
    }
}

function resetBuffer(): void {
    if (scheduleObj.eventsData.length > 0) {
        const event: Record<string, any> = scheduleObj.eventsData[0];
        event.bufferBefore = 30;
        event.bufferAfter = 15;
        scheduleObj.saveEvent(event);
    }
}

new Button().appendTo('#increaseBuffer');
new Button().appendTo('#decreaseBuffer');
new Button().appendTo('#resetBuffer');
document.getElementById('increaseBuffer')!.addEventListener('click', increaseBuffer);
document.getElementById('decreaseBuffer')!.addEventListener('click', decreaseBuffer);
document.getElementById('resetBuffer')!.addEventListener('click', resetBuffer);
