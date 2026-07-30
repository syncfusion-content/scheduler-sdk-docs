var timepickerObject = new ej.calendars.TimePicker({
    enableMask: true
});
timepickerObject.appendTo('#mask');

var timepickerPlaceholder = new ej.calendars.TimePicker({
    enableMask: true,
    maskPlaceholder: {hour: 'h', minute: 'm', second: 's'}
});
timepickerPlaceholder.appendTo('#placeholder');

