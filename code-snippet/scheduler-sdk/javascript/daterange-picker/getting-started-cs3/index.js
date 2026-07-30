    let today = new Date();
    var currentYear = today.getFullYear();
    var currentMonth = today.getMonth();
    var currentDay = today.getDate();

      var daterangepicker = new ej.calendars.DateRangePicker({
        placeholder: 'Select a range',
          presets: [
            { label: 'Today', start: new Date(), end: new Date() },
            { label: 'This Month', start: new Date(new Date().setDate(1)), end: new Date() },
            { label: 'Last Month', start: new Date(new Date(new Date().setMonth(new Date().getMonth() - 1)).setDate(1)), end: new Date() },
            { label: 'Last Year', start: new Date(new Date().getFullYear() - 1, 0, 1), end: new Date() },

        ]
    });
    daterangepicker.appendTo('#element');

