   ej.base.enableRipple(true);
    var today = new Date();
    var currentYear = today.getFullYear();
    var currentMonth = today.getMonth();
    var currentDay = today.getDate();
    var datetimepicker = new ej.calendars.DateTimePicker({
        minTime: new Date(currentYear, currentMonth, 7, 10),
        maxTime: new Date(currentYear, currentMonth, 27, 20, 30),
        value: new Date(currentYear, currentMonth, 14, 8, 30),
        placeholder: 'Choose a datetime'
    });
    datetimepicker.appendTo('#element');


