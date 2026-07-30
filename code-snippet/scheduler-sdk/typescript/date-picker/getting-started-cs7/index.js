   var datepicker = new ej.calendars.DatePicker({
        placeholder: 'Choose a date',
          close: function (args) {
        // prevent the popup close
        args.preventDefault();
    },
    });
    datepicker.appendTo('#element');
    // open the datepicker popup
datepicker.show();

