   var datepicker = new ej.calendars.DatePicker({
        placeholder: 'Choose a date',
              // sets the value
        value: new Date('27/10/2017'),
                //sets the min
         min: new Date('5/5/2017'),
                //sets the max
         max: new Date('5/25/2017'),
                // sets the format
        format: 'dd/MM/yyyy',
    });
    datepicker.appendTo('#element');

