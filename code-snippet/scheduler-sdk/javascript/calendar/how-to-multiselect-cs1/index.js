 /*Initialize the calender component*/
    var calendar = new ej.calendars.Calendar({
        isMultiSelection: true,
        change: onChange
    });
    calendar.appendTo('#calendar');
   /*selected current week dates when click the button*/
document.getElementById('workweek').addEventListener('click', function () {
    if (calendar.element.classList.contains('week')) {
        calendar.element.classList.remove('week');
    }
    calendar.element.classList.add('workweek');
});
/*selected current week dates when click the button*/
document.getElementById('week').addEventListener('click', function () {
    if (calendar.element.classList.contains('workweek')) {
        calendar.element.classList.remove('workweek');
    }
    calendar.element.classList.add('week');
});
function onChange(args) {
	  var startOfWeek = moment(calendar.value).startOf('week');
        var endOfWeek = moment(calendar.value).endOf('week');
    if (calendar.element.classList.contains('workweek')) {
        getWeekArray(startOfWeek.day(1), endOfWeek.day(5));
    }
    else if (calendar.element.classList.contains("week")) {
        getWeekArray(startOfWeek, endOfWeek);
    }
}
function getWeekArray(startOfWeek, endOfWeek) {
    var days = [];
    var day = startOfWeek;
    while (day <= endOfWeek) {
        days.push(day.toDate());
        day = day.clone().add(1, 'd');
    }
    calendar.values = days;
}


