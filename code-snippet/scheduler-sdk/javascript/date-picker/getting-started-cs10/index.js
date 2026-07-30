   var month = new Date().getMonth();
   var fullYear = new Date().getFullYear();
   
   var datepicker = new ej.calendars.DatePicker({
        placeholder: 'Choose a date',
            // Sets the min.
    min: new Date(fullYear, month , 9),
    //Sets the max.
    max: new Date(fullYear, month, 15),
    // Sets the value.
    value: new Date(fullYear, month , 11)
    });
    datepicker.appendTo('#element');

