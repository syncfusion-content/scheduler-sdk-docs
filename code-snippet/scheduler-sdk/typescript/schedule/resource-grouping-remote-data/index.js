var resource = new ej.data.DataManager({
    url: 'Home/GetResourceData',
    adaptor: new ej.data.UrlAdaptor,
    crossDomain: true
});

var scheduleObj = new ej.schedule.Schedule({
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