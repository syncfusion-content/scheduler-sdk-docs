var datetimepicker = new ej.calendars.DateTimePicker({
    placeholder: 'Select a date and time',
     value : new Date(),
     width: "250px",
     serverTimezoneOffset: 5.5 // Example: UTC+5:30 for IST
    });
datetimepicker.appendTo('#element');