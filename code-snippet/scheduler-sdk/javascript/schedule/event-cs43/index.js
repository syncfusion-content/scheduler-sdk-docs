var currentYear = new Date().getFullYear();
var eventData = [
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

ej.schedule.Schedule.Inject(ej.schedule.Day, ej.schedule.Week, ej.schedule.WorkWeek, ej.schedule.TimelineViews, ej.schedule.DragAndDrop, ej.schedule.Resize);

var scheduleObj = new ej.schedule.Schedule({
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

function increaseBuffer() {
    if (scheduleObj.eventsData.length > 0) {
        var event = scheduleObj.eventsData[0];
        event.bufferBefore = (event.bufferBefore || 0) + 10;
        event.bufferAfter = (event.bufferAfter || 0) + 10;
        scheduleObj.saveEvent(event);
    }
}

function decreaseBuffer() {
    if (scheduleObj.eventsData.length > 0) {
        var event = scheduleObj.eventsData[0];
        event.bufferBefore = Math.max(0, (event.bufferBefore || 0) - 10);
        event.bufferAfter = Math.max(0, (event.bufferAfter || 0) - 10);
        scheduleObj.saveEvent(event);
    }
}

function resetBuffer() {
    if (scheduleObj.eventsData.length > 0) {
        var event = scheduleObj.eventsData[0];
        event.bufferBefore = 30;
        event.bufferAfter = 15;
        scheduleObj.saveEvent(event);
    }
}

new ej.buttons.Button().appendTo('#increaseBuffer');
new ej.buttons.Button().appendTo('#decreaseBuffer');
new ej.buttons.Button().appendTo('#resetBuffer');
document.getElementById('increaseBuffer').addEventListener('click', increaseBuffer);
document.getElementById('decreaseBuffer').addEventListener('click', decreaseBuffer);
document.getElementById('resetBuffer').addEventListener('click', resetBuffer);
