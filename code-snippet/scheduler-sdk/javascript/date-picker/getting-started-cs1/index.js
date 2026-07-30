   var datepicker = new ej.calendars.DatePicker({
        placeholder: 'Choose a date'      
    });

    document.onkeyup = function (e) {
    if (e.altKey && e.keyCode === 84 /* t */) {
        // press alt+t to focus the component.
        datepicker.element.focus();
    }
};

    datepicker.appendTo('#element');

