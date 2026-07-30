

import { Calendar } from '@syncfusion/ej2-calendars';
//import the loadCldr from ej2-base
import { loadCldr, L10n } from '@syncfusion/ej2-base';
//load the CLDR JSON data files.
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';

loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);

L10n.load({
    'de': {
        'calendar': {
            today: 'heute'
        }
    }

});

//creates a calendar with German culture.
let calendarObject: Calendar = new Calendar({ locale: 'de' });
calendarObject.appendTo('#element');


