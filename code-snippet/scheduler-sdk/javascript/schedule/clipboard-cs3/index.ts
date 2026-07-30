import {
    Schedule, Day, Week, WorkWeek, Month, Agenda, BeforePasteEventArgs
} from '@syncfusion/ej2-schedule';
import { Grid } from '@syncfusion/ej2-grids';

import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);

interface ScheduleData {
    Id: string;
    Subject: string;
    StartTime: string;
    EndTime: string;
    Location: string;
    Description: string
}

let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2024, 1, 15),
    eventSettings: { dataSource: scheduleData },
    allowClipboard: true,
    showQuickInfo: false,
    beforePaste: (args: BeforePasteEventArgs) => {
        if (typeof args.data === 'string') {
            const dataArray: string[] = (args.data as string).split('\t');
            const result: ScheduleData = {
                Id: dataArray[0],
                Subject: dataArray[1],
                StartTime: new Date(dataArray[4]).toISOString(),
                EndTime: new Date(new Date(dataArray[4]).getTime() + 60 * 60 * 1000).toISOString(),
                Location: dataArray[2],
                Description: dataArray[3]
            };
            args.data = [result];
        }
    }
});
scheduleObj.appendTo('#Schedule');

const gridData: Object[] = [
    {
        OrderID: 10248, CustomerID: 'VINET', Role: 'Admin', EmployeeID: 5,
        ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye',
        ShipRegion: 'CJ', Mask: '1111', ShipPostalCode: '51100', ShipCountry: 'France', Freight: 32.38, Verified: !0,
        OrderDate: new Date('2024-01-01')
    },
    {
        OrderID: 10249, CustomerID: 'TOMSP', Role: 'Employee', EmployeeID: 6,
        ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
        ShipRegion: 'CJ', Mask: '2222', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1,
        OrderDate: new Date('2024-01-02')
    },
    {
        OrderID: 10250, CustomerID: 'HANAR', Role: 'Admin', EmployeeID: 4,
        ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
        ShipRegion: 'RJ', Mask: '3333', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 65.83, Verified: !0,
        OrderDate: new Date('2024-01-03')
    },
    {
        OrderID: 10251, CustomerID: 'VICTE', Role: 'Manager', EmployeeID: 3,
        ShipName: 'Victuailles en stock', ShipCity: 'Lyon', ShipAddress: '2, rue du Commerce',
        ShipRegion: 'CJ', Mask: '4444', ShipPostalCode: '69004', ShipCountry: 'France', Freight: 41.34, Verified: !0,
        OrderDate: new Date('2024-01-04')
    },
    {
        OrderID: 10252, CustomerID: 'SUPRD', Role: 'Manager', EmployeeID: 2,
        ShipName: 'Suprêmes délices', ShipCity: 'Charleroi', ShipAddress: 'Boulevard Tirou, 255',
        ShipRegion: 'CJ', Mask: '5555', ShipPostalCode: 'B-6000', ShipCountry: 'Belgium', Freight: 51.3, Verified: !0,
        OrderDate: new Date('2024-01-05')
    },
    {
        OrderID: 10253, CustomerID: 'HANAR', Role: 'Admin', EmployeeID: 7,
        ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
        ShipRegion: 'RJ', Mask: '6666', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 58.17, Verified: !0,
        OrderDate: new Date('2024-01-06')
    },
    {
        OrderID: 10254, CustomerID: 'CHOPS', Role: 'Employee', EmployeeID: 5,
        ShipName: 'Chop-suey Chinese', ShipCity: 'Bern', ShipAddress: 'Hauptstr. 31',
        ShipRegion: 'CJ', Mask: '7777', ShipPostalCode: '3012', ShipCountry: 'Switzerland', Freight: 22.98, Verified: !1,
        OrderDate: new Date('2024-01-07')
    }
];

const gridObj: Grid = new Grid({
    dataSource: gridData,
    allowSelection: true,
    height: 400,
    cssClass: 'drag-grid',
    width: '40%',
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 130 },
        { field: 'OrderDate', headerText: 'Order Date', type: 'date', format: 'yMd', width: 100 }
    ],
});
gridObj.appendTo('#Grid');