   ej.base.enableRipple(true);
   
    var timepicker = new ej.calendars.TimePicker({
        placeholder: 'Select a time'
    });    
    timepicker.appendTo('#element');

    document.onkeyup = function (e) {
    if (e.altKey && e.keyCode === 84 /* t */) {
        // press alt+t to focus the control by calling public method.
        timepicker.focusIn();
    }
};


