import { Schedule, Week, Month, ExcelExport, ExportOptions, ExcelExportEventArgs, ToolbarActionArgs, ActionEventArgs, ExportFieldInfo } from '@syncfusion/ej2-schedule';
import { ItemModel } from '@syncfusion/ej2-navigations';

Schedule.Inject(Week, ExcelExport, Month);

const data: object[] = [
    {
        Id: 1,
        Subject: 'Explosion of Betelgeuse Star',
        StartTime: new Date(2025, 0, 8, 9, 30),
        EndTime: new Date(2025, 0, 8, 11, 0),
        Location: 'Chennai',
        OwnerId: 1
    }, {
        Id: 2,
        Subject: 'Thule Air Crash Report',
        StartTime: new Date(2025, 0, 10, 12, 0),
        EndTime: new Date(2025, 0, 10, 14, 0),
        Location: 'Mumbai',
        OwnerId: 2
    }, {
        Id: 3,
        Subject: 'Blue Moon Eclipse',
        StartTime: new Date(2025, 0, 13, 9, 30),
        EndTime: new Date(2025, 0, 13, 11, 0),
        Location: 'Mumbai',
        OwnerId: 3
    }
];

let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(),
    actionBegin: (args: ActionEventArgs & ToolbarActionArgs) => {
        if (args.requestType === 'toolbarItemRendering') {
            let exportItem: ItemModel = {
                align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-excel-export',
                text: 'CSV-Export', cssClass: 'e-excel-export', click: onExportClick
            };
            args.items.push(exportItem);
        }
    },
    excelExport: function (args: ExcelExportEventArgs) {
        const worksheet = args.worksheets[0];

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

        worksheet.rows.forEach((row: any, idx: number) => {
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

function onExportClick(): void {
    const exportFields: ExportFieldInfo[] = [
        { name: 'Id', text: 'Id' },
        { name: 'Subject', text: 'Summary' },
        { name: 'StartTime', text: 'Start Date' },
        { name: 'EndTime', text: 'End Date' },
        { name: 'Location', text: 'Place' }
    ];
    const exportValues: ExportOptions = { fieldsInfo: exportFields };
    scheduleObj.exportToExcel(exportValues);
}