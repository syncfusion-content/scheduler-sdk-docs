


import { Calendar, RenderDayCellEventArgs } from '@syncfusion/ej2-calendars';

//Creates a Calendar with World Health Day and World Forest Day highlighted.
let calendarObject: Calendar = new Calendar({
    renderDayCell: customDates,
    value: new Date('03/10/2017')
});
calendarObject.appendTo('#element');

function customDates(args: RenderDayCellEventArgs): void {
    let span: HTMLElement;
    //Defines the custom HTML element to be added.
    span = document.createElement('span');
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



