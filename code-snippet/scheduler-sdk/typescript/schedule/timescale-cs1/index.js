window.majorSlotTemplate = function (date) {
    var instance = new ej.base.Internationalization();
    return instance.formatDate(date, { skeleton: "hm" });
};

var scheduleObj = new ej.schedule.Schedule({
    width: "100%",
    height: "550px",
    selectedDate: new Date(2018, 1, 15),
    startHour: "08:45",
    views: ["Day", "Week", "WorkWeek"],
    timeScale: {
        majorSlotTemplate: "#majorSlotTemplate"
    },
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');