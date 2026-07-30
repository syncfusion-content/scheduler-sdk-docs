   ej.base.enableRipple(true);
   
   var calendar = new ej.calendars.Calendar({
         renderDayCell: disabledDate,
         value: new Date()
    });
    function disabledDate(args) {
    if (args.date.getDay() === 0 || args.date.getDay() === 6) {
        //Set 'true' to disable the weekends.
        args.isDisabled = true;
    }
}
    calendar.appendTo('#element');


