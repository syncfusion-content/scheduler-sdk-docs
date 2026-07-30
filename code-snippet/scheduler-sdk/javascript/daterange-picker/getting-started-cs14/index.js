   var datepicker = new ej.calendars.DateRangePicker({
    placeholder: "Select a range",
    startDate: new Date(new Date().setDate(1)),
    endDate: new Date(new Date().setDate(20)),
    // sets the format.
    format: 'yyyy-MM-dd'
    });
    datepicker.appendTo('#element');

