   var datepicker = new ej.calendars.DatePicker({
        placeholder: 'Choose a date',
         // sets the value
        value: new Date()
    });

    var options = {
    rules: {
        'datevalue': { required: true }
    },
    customPlacement: function (inputElement, errorElement) {
        //to place the error message in custom position.
        inputElement.parentElement.parentElement.appendChild(errorElement);
    }
};

    var formObject = new ej.inputs.FormValidator('#form-element', options);
    datepicker.appendTo('#element');

