var data = [
    { Id: 1, Subject: "Board Meeting", StartTime: new Date(2026, 5, 15, 9, 30, 0), EndTime: new Date(2026, 5, 15, 11, 0, 0) },
    { Id: 2, Subject: "Annual Conference", StartTime: new Date(2026, 5, 15, 10, 0, 0), EndTime: new Date(2026, 5, 15, 11, 0, 0) },
    { Id: 3, Subject: "Tech Symposium", StartTime: new Date(2026, 5, 15, 10, 30, 0), EndTime: new Date(2026, 5, 15, 11, 30, 0) },
    { Id: 4, Subject: "Client Meeting", StartTime: new Date(2026, 5, 15, 12, 0, 0), EndTime: new Date(2026, 5, 15, 14, 0, 0) },
    { Id: 5, Subject: "Project Review", StartTime: new Date(2026, 5, 15, 13, 0, 0), EndTime: new Date(2026, 5, 15, 15, 0, 0) }
];
var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(2026, 5, 15),
    currentView: 'Week',
    eventSettings: {
        dataSource: data
    },
    views: [
        { option: 'Month', maxEventsPerRow: 3 },
    ]
});
scheduleObj.appendTo('#Schedule');