


import { loadCldr, L10n } from '@syncfusion/ej2-base';
import { DatePicker } from '@syncfusion/ej2-calendars';
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';

loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);

L10n.load({
    'he': {
        'datepicker': {
            placeholder: 'הזן תאריך',
            today:'היום'
        }
    }
});

// creates the simple DatePicker component
let datepickerObject: DatePicker = new DatePicker({
    //sets the locale
    locale: 'he',
    //sets the enableRtl
    enableRtl: true,
    //sets the value
    value: new Date()
});
datepickerObject.appendTo('#element');


