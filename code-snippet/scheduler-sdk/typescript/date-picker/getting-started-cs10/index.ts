


var month = new Date().getMonth();
var fullYear = new Date().getFullYear();
// initialize DatePicker component
var datepicker = new ej.calendars.DatePicker({
    // Sets the min.
    min: new Date(fullYear, month , 9),
    //Sets the max.
    max: new Date(fullYear, month, 15),
    // Sets the value.
    value: new Date(fullYear, month , 11)
});
// Render initialized calendar.
datepicker.appendTo('#element')


