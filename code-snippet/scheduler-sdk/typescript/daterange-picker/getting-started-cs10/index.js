    var  today = new Date();
    var currentYear = today.getFullYear();
    var currentMonth = today.getMonth();
    var currentDay = today.getDate();

      var daterangepicker = new ej.calendars.DateRangePicker({
    //sets the minimum number of days
    minDays: 4,
    //sets the maximum number of days
    maxDays: 7,
    placeholder:"Select a Range"
    });
    daterangepicker.appendTo('#element');

