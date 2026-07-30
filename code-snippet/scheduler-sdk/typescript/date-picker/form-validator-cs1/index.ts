


import { DatePicker } from '@syncfusion/ej2-calendars';
import { FormValidator, FormValidatorModel } from '@syncfusion/ej2-inputs';
// creates datepicker with readonly.
let datepickerObject: DatePicker = new DatePicker({
    // sets the palceholder property.
    placeholder: 'Enter date',
    // sets the value
    value: new Date()
});
datepickerObject.appendTo('#element');

let options: FormValidatorModel = {
    rules: {
        'datevalue': { required: true }
    },
    customPlacement: function (inputElement, errorElement) {
        //to place the error message in custom position.
        (<HTMLElement>inputElement).parentElement.parentElement.appendChild(errorElement);
    }
}
let formObject: FormValidator = new FormValidator('#form-element', options);


