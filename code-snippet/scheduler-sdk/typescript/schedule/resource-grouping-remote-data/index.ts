import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { Schedule, Week, Month, Agenda, TimelineViews, TimelineMonth } from '@syncfusion/ej2-schedule';
import { resourceData } from './datasource.ts';

let resource: DataManager = new DataManager({
    url: 'Home/GetResourceData',
    adaptor: new UrlAdaptor,
    crossDomain: true
});

Schedule.Inject(Week, Month, TimelineViews, TimelineMonth, Agenda);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    currentView: 'Week',
    views: ['Week', 'Month', 'TimelineWeek', 'TimelineMonth', 'Agenda'],
    selectedDate: new Date(2018, 3, 1),
    group: {
        resources: ['Owners']
    },
    resources: [{
        field: 'OwnerId', title: 'Owner',
        name: 'Owners', allowMultiple: true,
        dataSource: resource,
        textField: 'OwnerText', idField: 'Id', colorField: 'OwnerColor'
    }],
    eventSettings: { dataSource: resourceData }
});
scheduleObj.appendTo('#Schedule');