

    import { TimePicker } from '@syncfusion/ej2-calendars';
    import { enableRipple } from '@syncfusion/ej2-base';

    //enable ripple style
    enableRipple(true);

    // creates timepicker
    let timeObject: TimePicker = new TimePicker({
        placeholder:'Select Time',
        // define the custom class
        cssClass: 'e-custom-style'
    });
    timeObject.appendTo('#element');



