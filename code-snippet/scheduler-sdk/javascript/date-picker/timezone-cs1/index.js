var ej = require('@syncfusion/ej2-calendars');

var datepicker = new ej.DatePicker({
    value: new Date(),
    placeholder: "Select Date",
    width: "250px",
    serverTimezoneOffset: 5.5 // Example: UTC+5:30 for ISTyyy
});

// Append the DatePicker to the DOM element with ID 'datepicker'
datepicker.appendTo('#element');
