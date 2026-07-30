  var month = new Date().getMonth();
  var fullYear = new Date().getFullYear();

      var datetimepicker = new ej.calendars.DateTimePicker({
        // Sets the min.
    min: new Date(fullYear, month , 22, 12),
    //Sets the max.
    max: new Date(fullYear, month, 25, 17),
    });
    datetimepicker.appendTo('#element');

