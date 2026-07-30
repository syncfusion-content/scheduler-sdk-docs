   ej.base.enableRipple(true);
   
   var calendar = new ej.calendars.Calendar({
       navigated: onNavigate 
    });

    function onNavigate(args) {
    var date;
    if (args.event.currentTarget.classList.contains('e-next')) {
        //Increments the month while clicking the next icon.
        date = new Date(args.date.setMonth(args.date.getMonth() + 1));
    }
    if ((args.event.currentTarget).classList.contains('e-prev')) {
        //Decrements the month while clicking the previous icon.
        date = new Date(args.date.setMonth(args.date.getMonth() - 1));
    }
    if (args.view == 'month') {
        calendarObject.navigateTo('month', date);
    }
}

    calendar.appendTo('#element');


