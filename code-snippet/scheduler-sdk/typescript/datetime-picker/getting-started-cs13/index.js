   var datetimepicker = new ej.calendars.DateTimePicker({
        placeholder: 'Choose a date',
        value: new Date(),
    // sets the format.
    format: 'yyyy-MM-dd hh:mm',
    // sets the input format.
    inputFormats: ['dd/MM/yyyy hh:mm a', 'yyyyMMdd HH:mm']
    });
    datetimepicker.appendTo('#element');

