   ej.base.enableRipple(true);
   
   var calendar = new ej.calendars.Calendar({
      renderDayCell: customDates,
    value: new Date('03/10/2017')
    });

    function customDates(args) {
    //Defines the custom HTML element to be added.
   var span = document.createElement('span');
    //Uses "e-icons" class name to load Essential JS 2 built-in icons.
    span.setAttribute('class', 'e-icons highlight-day');
    if (+args.date.getDate() === 7 && +args.date.getMonth() == 3) {
        //Appends the span element to day cell.
        args.element.appendChild(span);
        //Sets the custom tooltip to the special dates.
        args.element.setAttribute('title', 'World health day!');
        //Uses "special" class name to highlight special dates that you can refer in "styles.css".
        args.element.className = 'special';
    }
    if (+args.date.getDate() === 21 && +args.date.getMonth() == 2) {
        args.element.appendChild(span);
        args.element.className = 'special';
        //Sets the custom tooltip to the special dates.
        args.element.setAttribute('title', 'World forest day');
    }
}
    calendar.appendTo('#element');


