   var datepicker = new ej.calendars.DatePicker({
        placeholder: 'Choose a date',
        value: new Date(),
    // sets the format.
    format: 'yyyy-MM-dd',
    inputFormats: ['dd/MM/yyyy', 'yyyyMMdd']
    });
    datepicker.appendTo('#element');

