   ej.base.enableRipple(true);
   
    var timepicker = new ej.calendars.TimePicker({
        placeholder: 'Select a time',
         strictMode: true,
    min: new Date('7/18/2017 10:00 AM'),
    max: new Date('7/18/2017 4:00 PM'),
    value: new Date('7/18/2017 3:00 PM'),
    });    
    timepicker.appendTo('#element');


