import { Schedule, Week, ExcelExport, ExportOptions, ActionEventArgs, ToolbarActionArgs } from '@syncfusion/ej2-schedule';
import { ItemModel } from '@syncfusion/ej2-navigations';

Schedule.Inject(Week, ExcelExport);

let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2019, 0, 10),
    views: ['Week'],
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
    actionBegin: (args: ActionEventArgs & ToolbarActionArgs) => {
        if (args.requestType === 'toolbarItemRendering') {
            let exportItem: ItemModel = {
                align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-excel-export',
                text: 'Excel Export', cssClass: 'e-excel-export', click: onExportClick
            };
            args.items.push(exportItem);
        }
    }
});
scheduleObj.appendTo('#Schedule');

function onExportClick(): void {
    let exportValues: ExportOptions = { includeOccurrences: true };
    scheduleObj.exportToExcel(exportValues);
}