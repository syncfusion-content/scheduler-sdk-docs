   ej.base.enableRipple(true);
   
    var timepicker = new ej.calendars.TimePicker({
        placeholder: 'Select a time',
        value :new Date()
    });    
    timepicker.appendTo('#element');

    
var options = {
    rules: {
        //must specify the name attribute value in rules section
        'timevalue': { required: true }
    },
    customPlacement: (inputElement, errorElement) => {
        //to place the error message in custom position
        //inputElement - target element where the error text will be appended
        //errorElement - error text which will be displayed.
        inputElement.parentElement.parentElement.appendChild(errorElement);
    }
};
var formObject = new ej.inputs.FormValidator('#form-element', options);


