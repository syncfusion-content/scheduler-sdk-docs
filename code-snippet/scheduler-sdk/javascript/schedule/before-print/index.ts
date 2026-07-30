import { Schedule, Day, Week, WorkWeek, Month, Agenda, Print, BeforePrintEventArgs, ScheduleModel, ActionEventArgs, ToolbarActionArgs } from '@syncfusion/ej2-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { ItemModel } from '@syncfusion/ej2-navigations';
Schedule.Inject(Day, Week, WorkWeek, Month, Agenda, Print);
const { department, userRole } = getCurrentUserInfo();
const dataManager: DataManager = new DataManager({
    url: 'https://api.acmecorp.com/scheduleevents',
    adaptor: new WebApiAdaptor(),
    crossDomain: true
});
const scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(),
    eventSettings: { dataSource: dataManager },
    views: ['Day', 'Week', 'WorkWeek', 'Month'],
    actionBegin: (args: ActionEventArgs & ToolbarActionArgs) => {
        if (args.requestType === 'toolbarItemRendering') {
            let printItem: ItemModel = {
                align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-print',
                text: 'Print', cssClass: 'e-schedule-print', click: onPrintIconClick
            };
            args.items.push(printItem);
        }
    },
    beforePrint: (args: BeforePrintEventArgs) => {
        const headerElement = document.createElement('div');
        headerElement.innerHTML = `
            <h1>${department} Department Schedule</h1>
            <p>Printed by: ${userRole}</p>
            <p>Date: ${new Date().toLocaleString()}</p>
        `;
        headerElement.style.backgroundColor = getDepartmentColor(department);
        headerElement.style.color = 'white';
        headerElement.style.padding = '10px';
        args.printElement.insertBefore(headerElement, args.printElement.firstChild);
        const highPriorityEvents = args.printElement.querySelectorAll('.e-appointment.high-priority');
        highPriorityEvents.forEach(event => {
            (event as HTMLElement).style.border = '2px solid red';
        });
        const events = scheduleObj.getEvents();
        const summaryElement = document.createElement('div');
        summaryElement.innerHTML = `
            <p>Total Events: ${events.length}</p>
            <p>High Priority Events: ${events.filter(e => e.priority === 'high').length}</p>
        `;
        args.printElement.appendChild(summaryElement);
        if (userRole === 'Manager') {
            const managerNote = document.createElement('div');
            managerNote.textContent = 'Confidential - For managerial use only';
            managerNote.style.color = 'red';
            args.printElement.appendChild(managerNote);
        }
    }
});
scheduleObj.appendTo('#Schedule');
function onPrintIconClick(): void {
    scheduleObj.print();
}
function getDepartmentColor(dept: string): string {
    const colors: Record<string, string> = {
        'Sales': '#4CAF50',
        'Marketing': '#2196F3',
        'Engineering': '#FF9800',
        'HR': '#9C27B0' 
    };
    return colors[dept] || '#607D8B';
}
function getCurrentUserInfo() {
    return { department: 'Sales', userRole: 'Manager' };
}