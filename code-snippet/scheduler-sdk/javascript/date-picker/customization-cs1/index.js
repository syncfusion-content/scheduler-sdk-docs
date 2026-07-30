   var datepicker = new ej.calendars.DatePicker({
        placeholder: 'Choose a date',
           // Bind the renderDayCell event to customize the each day cell.
    renderDayCell: onRenderCell,
    // sets the placeholder
    placeholder: 'Enter date',
    cssClass: 'e-custom-style'    
    });

 
function onRenderCell(args) {
    if (args.date.getDay() == 0 || args.date.getDay() == 6) {
        //sets isDisabled to true to disable the date.
        args.isDisabled = true;
        //To know about the disabled date customization, you can refer in "styles.css".
    }

}

    datepicker.appendTo('#element');

