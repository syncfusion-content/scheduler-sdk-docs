var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    views: ['Week'],
    currentView: 'Week',
    selectedDate: new Date(2019, 0, 10),
    eventSettings: {
        dataSource: [
            {
                Id: 1,
                Subject: 'Daily Meeting',
                Location: 'Conference Room',
                StartTime: new Date(2019, 0, 7, 9, 0),
                EndTime: new Date(2019, 0, 7, 10, 0),
                CategoryColor: '#1aaa55',
                RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=5'
            }
        ]
    },
    actionBegin: function (args) {
        if (args.requestType === 'toolbarItemRendering') {
            var exportItem = {
                align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-excel-export',
                text: 'Excel Export', cssClass: 'e-excel-export', click: onExportClick
            };
            args.items.push(exportItem);
        }
    }
});
scheduleObj.appendTo('#Schedule');

function onExportClick() {
    var exportValues = { includeOccurrences: true };
    scheduleObj.exportToExcel(exportValues);
}