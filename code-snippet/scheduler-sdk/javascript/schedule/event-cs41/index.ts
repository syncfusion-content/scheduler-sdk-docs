import { Schedule, Day, Week, TimelineViews, Month, Agenda, Resize, DragAndDrop, ActionEventArgs, PopupOpenEventArgs } from '@syncfusion/ej2-schedule';

let eventsData: Record<string, any>[] = [
    { Id: 1, Subject: 'Board Meeting', StartTime: new Date(2025, 1, 26, 9, 30), EndTime: new Date(2025, 1, 26, 11, 0) },
    { Id: 2, Subject: 'Annual Conference', StartTime: new Date(2025, 2, 2, 10, 0), EndTime: new Date(2025, 2, 2, 11, 0) },
    { Id: 3, Subject: 'Tech Symposium', StartTime: new Date(2025, 2, 2, 10, 30), EndTime: new Date(2025, 2, 2, 11, 30) },
    { Id: 4, Subject: 'Project Workshop', StartTime: new Date(2025, 2, 10, 9, 0), EndTime: new Date(2025, 2, 10, 11, 0) },
    { Id: 5, Subject: 'Client Presentation', StartTime: new Date(2025, 2, 5, 9, 0), EndTime: new Date(2025, 2, 5, 10, 30) },
    { Id: 6, Subject: 'Business Meetup', StartTime: new Date(2025, 2, 15, 11, 0), EndTime: new Date(2025, 2, 15, 13, 0) },
    { Id: 7, Subject: 'Project Review', StartTime: new Date(2025, 2, 13, 10, 0), EndTime: new Date(2025, 2, 13, 13, 0) }
];
Schedule.Inject(Day, Week, TimelineViews, Month, Agenda, Resize, DragAndDrop);

let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2025, 2, 6),
    views: ['Day', 'Week', 'TimelineWeek', 'Month', 'Agenda'],
    allowOverlap: false,
    eventSettings: {
        dataSource: eventsData
    },
    actionBegin: (args: ActionEventArgs) => {
        if ((args.requestType === 'eventCreate') || (args.requestType === 'eventChange')) {
            const result: Promise<boolean> = checkOverlap(args);
            args.promise = result;
        }
    },

});
scheduleObj.appendTo('#Schedule');

function checkOverlap(args: ActionEventArgs): Promise<boolean> {
    return new Promise((resolve) => {
        let eventsToCheck: Record<string, any>[] = Array.isArray(args.data) ? args.data : [args.data];
        const overlappingEvents = eventsData.filter(event =>
            eventsToCheck.some(newEvent =>
                new Date(event.StartTime) < newEvent.EndTime &&
                new Date(event.EndTime) > newEvent.StartTime &&
                event.Id !== newEvent.Id
            )
        );
        let result = overlappingEvents.length === 0;
        if (!result) {
            const args: PopupOpenEventArgs = {  
                type: 'OverlapAlert',
                data: eventsToCheck,
                overlapEvents: overlappingEvents,
                element: null,
                cancel: false
            };
            scheduleObj.openOverlapAlert(args);
        }
        resolve(result);
    });
}
const overlapEvent: Record<string, any> = { 
    Id: 8, 
    Subject: 'OverlapEvent', 
    StartTime: new Date(2025, 2, 13, 10, 0), 
    EndTime: new Date(2025, 2, 13, 11, 0) 
};

const nonOverlapEvent: Record<string, any> = { 
    Id: 9, 
    Subject: 'Non-OverlapEvent', 
    StartTime: new Date(2025, 2, 12, 10, 0), 
    EndTime: new Date(2025, 2, 12, 11, 0) 
};

const overlapButton: HTMLElement | null = document.getElementById('AddOverlapEvent');
if (overlapButton) {
    overlapButton.addEventListener('click', () => {
        scheduleObj.addEvent(overlapEvent);
    });
}

const nonOverlapButton: HTMLElement | null = document.getElementById('AddNonOverlapEvent');
if (nonOverlapButton) {
    nonOverlapButton.addEventListener('click', () => {
        scheduleObj.addEvent(nonOverlapEvent);
    });
}

