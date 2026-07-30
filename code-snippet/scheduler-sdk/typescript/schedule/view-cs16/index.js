var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    rowAutoHeight: true,
    selectedDate: new Date(2018, 1, 15),
    views: [{ option: 'TimelineYear', displayName: 'Horizontal Timeline Year', isSelected: true },
            { option: 'TimelineYear', displayName: 'Vertical Timeline Year', orientation: 'Vertical' }],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');