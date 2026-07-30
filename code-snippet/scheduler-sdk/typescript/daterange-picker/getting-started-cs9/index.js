    var  today = new Date();
    var currentYear = today.getFullYear();
    var currentMonth = today.getMonth();
    var currentDay = today.getDate();

      var daterangepicker = new ej.calendars.DateRangePicker({
            //sets the min.
    min: new Date(currentYear, currentMonth, 15),
    //sets the max.
    max: new Date(currentYear, currentMonth+1, 15),
    placeholder:"Select a Range"
    });
    daterangepicker.appendTo('#element');

