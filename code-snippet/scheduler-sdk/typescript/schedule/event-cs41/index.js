var eventsData = [
    { Id: 1, Subject: 'Board Meeting', StartTime: new Date(2025, 1, 26, 9, 30), EndTime: new Date(2025, 1, 26, 11, 0) },
    { Id: 2, Subject: 'Annual Conference', StartTime: new Date(2025, 2, 2, 10, 0), EndTime: new Date(2025, 2, 2, 11, 0) },
    { Id: 3, Subject: 'Tech Symposium', StartTime: new Date(2025, 2, 2, 10, 30), EndTime: new Date(2025, 2, 2, 11, 30) },
    { Id: 4, Subject: 'Project Workshop', StartTime: new Date(2025, 2, 10, 9, 0), EndTime: new Date(2025, 2, 10, 11, 0) },
    { Id: 5, Subject: 'Client Presentation', StartTime: new Date(2025, 2, 5, 9, 0), EndTime: new Date(2025, 2, 5, 10, 30) },
    { Id: 6, Subject: 'Business Meetup', StartTime: new Date(2025, 2, 15, 11, 0), EndTime: new Date(2025, 2, 15, 13, 0) },
    { Id: 7, Subject: 'Project Review', StartTime: new Date(2025, 2, 13, 10, 0), EndTime: new Date(2025, 2, 13, 13, 0) }
];

var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(2025, 2, 6),
    views: ['Day', 'Week', 'TimelineWeek', 'Month', 'Agenda'],
    allowOverlap: false,
    eventSettings: { dataSource: eventsData },
    actionBegin: function(args) {
        if ((args.requestType === 'eventCreate') || (args.requestType === 'eventChange')) {
            var result = checkOverlap(args);
            args.promise = result;
        }
    }
});
scheduleObj.appendTo('#Schedule');

function checkOverlap(args) {
    return new Promise(function(resolve) {
        var eventsToCheck = Array.isArray(args.data) ? args.data : [args.data];
        var overlappingEvents = eventsData.filter(function(event) {
            return eventsToCheck.some(function(newEvent) {
                return new Date(event.StartTime) < newEvent.EndTime &&
                    new Date(event.EndTime) > newEvent.StartTime &&
                    event.Id !== newEvent.Id;
            });
        });
        
        var result = overlappingEvents.length === 0;
        
        if (!result) {
            var popupArgs = {
                type: 'OverlapAlert',
                data: eventsToCheck,
                overlapEvents: overlappingEvents,
                element: null,
                cancel: false
            };
            scheduleObj.openOverlapAlert(popupArgs);
        }
        
        resolve(result);
    });
}

var overlapEvent= { 
    Id: 8, 
    Subject: 'OverlapEvent', 
    StartTime: new Date(2025, 2, 13, 10, 0), 
    EndTime: new Date(2025, 2, 13, 11, 0) 
};

var nonOverlapEvent = { 
    Id: 9, 
    Subject: 'Non-OverlapEvent', 
    StartTime: new Date(2025, 2, 12, 10, 0), 
    EndTime: new Date(2025, 2, 12, 11, 0) 
};

var overlapButton = document.getElementById('AddOverlapEvent');
if (overlapButton) {
    overlapButton.addEventListener('click', function () {
        scheduleObj.addEvent(overlapEvent);
    });
}

var nonOverlapButton = document.getElementById('AddNonOverlapEvent');
if (nonOverlapButton) {
    nonOverlapButton.addEventListener('click', function () {
        scheduleObj.addEvent(nonOverlapEvent);
    });
}