      var daterangepicker = new ej.calendars.DateRangePicker({
        placeholder: 'Select a range',
        renderDayCell: onRenderCell,
    });
    daterangepicker.appendTo('#element');

    function onRenderCell(args) {
    if (args.date.getDay() == 0 || args.date.getDay() == 6) {
        //sets isDisabled to true to disable the date.
        args.isDisabled = true;
    }

}

