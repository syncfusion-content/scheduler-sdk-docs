var datepickerObject = new ej.calendars.DatePicker({
    enableMask: true
});
datepickerObject.appendTo('#mask');

var datepickerPlaceholder = new ej.calendars.DatePicker({
    enableMask: true,
    maskPlaceholder: {day: 'd', month: 'M', year: 'y'}
});
datepickerPlaceholder.appendTo('#placeholder');

