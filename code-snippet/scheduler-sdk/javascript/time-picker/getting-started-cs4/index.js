   ej.base.enableRipple(true);
   
    var timepicker = new ej.calendars.TimePicker({
        placeholder: 'Select a time',
          //sets the min value
    min: new Date('3/8/2017 9:00 AM'),
    //sets the max value
    max: new Date('3/8/2017 11:30 AM'),
    //sets the value
    value: new Date('3/8/2017 11:00 AM')
    });    
    timepicker.appendTo('#element');


