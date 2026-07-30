

import { DateTimePicker } from '@syncfusion/ej2-calendars';
//Load the L10n, loadCldr from ej2-base
import { loadCldr, L10n } from '@syncfusion/ej2-base';
//load the CLDR data files.
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as detimeZoneNames from './timeZoneNames.json';
import { enableRipple } from '@syncfusion/ej2-base';

loadCldr(numberingSystems, gregorian, numbers, detimeZoneNames);
L10n.load({
    'de': {
        'datetimepicker': {
            placeholder:'Wählen Sie ein Datum und eine Uhrzeit aus',
            today:'heute'
        }
    }
});

// creates the simple DateTimePicker component with de culture
let datetimeObject: DateTimePicker = new DateTimePicker({
    // sets the locale property.
    locale: 'de',
    value: new Date("12/11/2017 1:00 AM"),
});
datetimeObject.appendTo('#element');


