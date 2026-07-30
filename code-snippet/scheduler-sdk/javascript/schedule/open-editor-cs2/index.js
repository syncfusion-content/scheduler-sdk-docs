var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    workHours: {
        highlight: true,
        start: '09:00',
        end: '11:00'
    },
    views: ['Day', 'Week', 'WorkWeek', 'Month'],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

var button = document.querySelector('#btn1');
button.onclick = function () {
    var dates = [new Date(2018, 1, 15), new Date(2018, 1, 17)];
    scheduleObj.setWorkHours(dates, '11:00', '20:00');
};