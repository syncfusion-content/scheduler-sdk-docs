var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2024, 1, 15),
    eventSettings: {
        dataSource: scheduleData
    },
    allowClipboard: true,
    showQuickInfo: false
});
scheduleObj.appendTo('#Schedule');