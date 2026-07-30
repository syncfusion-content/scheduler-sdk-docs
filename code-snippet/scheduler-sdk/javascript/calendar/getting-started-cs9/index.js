   ej.base.enableRipple(true);

   var month = new Date().getMonth();
   var fullYear = new Date().getFullYear();
   
   var calendar = new ej.calendars.Calendar({
           // Sets the min.
    min: new Date(fullYear, month , 9),
    //Sets the max.
    max: new Date(fullYear, month, 15),
    // Sets the value.
    value: new Date(fullYear, month , 11)
    });
    calendar.appendTo('#element');


