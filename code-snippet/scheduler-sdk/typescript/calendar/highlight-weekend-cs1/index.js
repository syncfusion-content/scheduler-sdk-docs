   ej.base.enableRipple(true);
   
   var calendar = new ej.calendars.Calendar({
         renderDayCell: highlightDate,
         value: new Date()
    });
    function highlightDate(args) {
    if (args.date.getDay() === 0 || args.date.getDay() === 6) {
       //set 'true' to disable the weekends
       args.element.classList.add('e-highlightweekend');
    }
}
    calendar.appendTo('#element');


