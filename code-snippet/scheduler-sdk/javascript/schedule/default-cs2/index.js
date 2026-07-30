var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: scheduleData },
    actionBegin: function (args) {
        var weekEnds = [0, 6];
        if (args.requestType == 'eventCreate' && weekEnds.indexOf((args.data[0].StartTime).getDay()) >= 0) {
            args.cancel = true;
        }
    }
});
scheduleObj.appendTo('#Schedule');