


var month = new Date().getMonth();
var fullYear = new Date().getFullYear();

var DatetimeObj = new ej.calendars.DateTimePicker(
// Sets the min.
    min: new Date(fullYear, month , 22, 12),
    //Sets the max.
    max: new Date(fullYear, month, 25, 17),
});
DatetimeObj.appendTo('#element');


