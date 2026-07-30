   ej.base.enableRipple(true);
   
    //Creates a DatePicker with min and max properties.
    var today = new Date();
    var currentYear = today.getFullYear();
    var currentMonth = today.getMonth();
    var currentDay = today.getDate();

   var datepicker = new ej.calendars.DatePicker({    
    //sets the min date
    min: new Date(currentYear, currentMonth, 7),
    //sets the max date
    max: new Date(currentYear, currentMonth, 27),
    //sets the value
    value: new Date(new Date().setDate(14))
    });
    datepicker.appendTo('#element');


