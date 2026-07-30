

import { DatePicker } from '@syncfusion/ej2-calendars';
//Load the L10n, loadCldr from ej2-base
import { loadCldr, L10n } from '@syncfusion/ej2-base';
//load the CLDR data files.
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';

loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);
L10n.load({
    'de': {
        'datepicker': {
            placeholder: 'Wählen Sie ein Datum aus',
            today:'heute'
        }
    }
});

// creates the simple DatePicker component
let datepickerObject: DatePicker = new DatePicker({
    // sets the locale property.
    locale: 'de',
    value: new Date()
});
datepickerObject.appendTo('#element');


