


import { loadCldr, L10n } from '@syncfusion/ej2-base';
import { TimePicker } from '@syncfusion/ej2-calendars';
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import { enableRipple } from '@syncfusion/ej2-base';

//enable ripple style
enableRipple(true);

loadCldr(numberingSystems, gregorian, numbers);

//set the placeholder value
L10n.load({
    'ar': {
        'timepicker': { placeholder: 'حدد الوقت' }
    }
});
// creates the timepicker with Arabic culture.
let timeObject: TimePicker = new TimePicker({
    //sets the locale
    locale: 'ar',
    value: new Date(),
    //sets the enableRtl
    enableRtl: true
});
timeObject.appendTo('#element');



