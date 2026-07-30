      var datetimepicker = new ej.calendars.DateTimePicker({
        placeholder: 'Select a date and time'
    });
    datetimepicker.appendTo('#element');
    document.onkeyup = function (e) {
    if (e.altKey && e.keyCode === 84 /* t */) {
        // press alt+t to focus the component.
        datetimepicker.element.focus();
    }
};


