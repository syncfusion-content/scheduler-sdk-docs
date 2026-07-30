/*Initialize the calender component*/
    var calendar = new ej.calendars.Calendar({
        isMultiSelection: true,
        values: [new Date('1/1/2020'), new Date('1/15/2020'), new Date('1/3/2020'), new Date('1/25/2020')]
    });
    calendar.appendTo('#element');

