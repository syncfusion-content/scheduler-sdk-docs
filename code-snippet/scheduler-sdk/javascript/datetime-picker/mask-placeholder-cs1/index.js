var datetimepickerObject = new ej.calendars.DateTimePicker({
    enableMask: true
});
datetimepickerObject.appendTo('#mask');

var datetimePlaceholder = new ej.calendars.DateTimePicker({
     enableMask: true,
    maskPlaceholder: {day: 'd', month: 'M', year: 'y', hour: 'h', minute: 'm', second: 's'}
});
datetimePlaceholder.appendTo('#placeholder');

