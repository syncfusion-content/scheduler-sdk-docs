   ej.base.enableRipple(true);
   
    var timepicker = new ej.calendars.TimePicker({
        placeholder: 'Select a time',
            // set the min value
    min: new Date("05/07/2017 7:00 AM"),
    // set the value
    value: new Date("05/07/2017 1:00 PM"),
    //set the max value
    max: new Date("05/27/2017 4:00 PM")
    });    
    timepicker.appendTo('#element');


