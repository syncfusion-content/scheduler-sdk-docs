var data = [
    {
        Id: 1,
        Subject: 'Explosion of Betelgeuse Star',
        StartTime: new Date(2025, 2, 16, 9, 30),
        EndTime: new Date(2025, 2, 16, 11, 0),
        Location: 'Chennai',
        OwnerId: 1
    }, {
        Id: 2,
        Subject: 'Thule Air Crash Report',
        StartTime: new Date(2025, 2, 12, 12, 0),
        EndTime: new Date(2025, 2, 12, 14, 0),
        Location: 'Mumbai',
        OwnerId: 2
    }, {
        Id: 3,
        Subject: 'Blue Moon Eclipse',
        StartTime: new Date(2025, 2, 13, 9, 30),
        EndTime: new Date(2025, 2, 13, 11, 0),
        Location: 'Mumbai',
        OwnerId: 3
    }, {
        Id: 4,
        Subject: 'Meteor Showers in 2025',
        StartTime: new Date(2025, 2, 14, 13, 0),
        EndTime: new Date(2025, 2, 14, 14, 30),
        Location: 'Bangalore',
        OwnerId: 1
    }, {
        Id: 5,
        Subject: 'Milky Way as Melting pot',
        StartTime: new Date(2025, 2, 15, 12, 0),
        EndTime: new Date(2025, 2, 15, 14, 0),
        Location: 'Chennai',
        OwnerId: 2
    }
];

var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
        height: '550px',
        selectedDate: new Date(),
        actionBegin: function (args) {
            if (args.requestType === 'toolbarItemRendering') {
                var exportItem = {
                    align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-excel-export',
                    text: 'CSV-Export', cssClass: 'e-excel-export', click: onExportClick
                };
                args.items.push(exportItem);
            }
        },
        excelExport: function (args) {
            var worksheet = args.worksheets[0];
            worksheet.rows.unshift({
                index: 1,
                cells: [
                    {
                        index: 1,
                        value: 'Sales Report',
                        style: {
                            bold: true,
                            fontSize: 18,
                            hAlign: 'Center',
                            fill: { color: '#1E90FF' },
                            color: '#FFFFFF',
                        },
                        colSpan: worksheet.columns.length,
                    },
                ],
            });
            worksheet.rows.unshift({
                index: 2,
                cells: [
                    {
                        index: 1,
                        value: 'Generated on: ' + new Date().toLocaleDateString(),
                        style: {
                            italic: true,
                            fontSize: 12,
                            hAlign: 'Left',
                            fill: { color: '#D3D3D3' },
                        },
                        colSpan: worksheet.columns.length,
                    },
                ],
            });
            worksheet.rows.forEach(function (row, idx) {
                row.index = idx + 1;
            });
            worksheet.rows.push({
                index: worksheet.rows.length + 1,
                cells: [
                    {
                        index: 1,
                        value: 'End of Report',
                        style: {
                            bold: true,
                            fontSize: 14,
                            hAlign: 'Center',
                            fill: { color: '#FFD700' },
                        },
                        colSpan: worksheet.columns.length,
                    },
                ],
            });
        },
        eventSettings: { dataSource: data },
        views: ['Day', 'Week', 'WorkWeek', 'Month']
});
scheduleObj.appendTo('#Schedule');

function onExportClick() {
    var exportFields = [
        { name: 'Id', text: 'Id' },
        { name: 'Subject', text: 'Summary' },
        { name: 'StartTime', text: 'Start Date' },
        { name: 'EndTime', text: 'End Date' },
        { name: 'Location', text: 'Place' }
    ];
    var exportValues = { fieldsInfo: exportFields };
    scheduleObj.exportToExcel(exportValues);
}