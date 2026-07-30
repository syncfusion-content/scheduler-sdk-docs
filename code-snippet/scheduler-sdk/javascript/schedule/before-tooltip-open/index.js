var defaultData = [
    {
        Id: 1,
        Subject: 'Conference',
        StartTime: new Date(2025, 1, 7, 10, 0),
        EndTime: new Date(2025, 1, 7, 11, 0),
        IsAllDay: false
        }, {
        Id: 2,
        Subject: 'Meeting - 1',
        StartTime: new Date(2025, 1, 15, 10, 0),
        EndTime: new Date(2025, 1, 16, 12, 30),
        IsAllDay: false
        },{
        Id: 3,
        Subject: 'Paris',
        StartTime: new Date(2025, 1, 13, 12, 0),
        EndTime: new Date(2025, 1, 13, 12, 30),
        IsAllDay: false
        },{
        Id: 4,
        Subject: 'Vacation',
        StartTime: new Date(2025, 1, 12, 10, 0),
        EndTime: new Date(2025, 1, 12, 10, 30),
        IsAllDay: false
        }
];

var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2025, 1, 15),
    currentView: 'Week',
    tooltipOpen: function (args) {
        var record = args.data;
        if (record.Subject === 'Vacation') {
            args.cancel = true;
        }
    },
    views: ['Day', 'Week', 'WorkWeek', 'Month', 'Year', 'Agenda', 'MonthAgenda', 'TimelineDay', 'TimelineWeek', 'TimelineWorkWeek', 'TimelineMonth', 'TimelineYear'],
    eventSettings: {
        dataSource: defaultData,
        enableTooltip: true,
        fields: {
            subject: { title: 'Name', name: 'Subject' },
            location: { title: 'Country Name', name: 'Location' },
            description: { title: 'Summary', name: 'Description' },
            startTime: { title: 'From', name: 'StartTime' },
            endTime: { title: 'To', name: 'EndTime' },
            startTimezone: { title: 'Origin', name: 'StartTimezone' },
            endTimezone: { title: 'Destination', name: 'EndTimezone' }
        }
    }
});
scheduleObj.appendTo('#Schedule');