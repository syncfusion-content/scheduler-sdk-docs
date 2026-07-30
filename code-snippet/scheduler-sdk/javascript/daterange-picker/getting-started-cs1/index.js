      var daterangepicker = new ej.calendars.DateRangePicker({
        placeholder: 'Select a range'
    });
    daterangepicker.appendTo('#element');
    document.onkeyup = function (e) {
    if (e.altKey && e.keyCode === 84 /* t */) {
        // press alt+t to focus the component.
        daterangepicker.element.focus();
    }
};

