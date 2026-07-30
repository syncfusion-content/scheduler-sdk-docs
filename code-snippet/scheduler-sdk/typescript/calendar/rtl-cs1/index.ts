

//imports the loadCldr from ej2-base
import { loadCldr, L10n } from '@syncfusion/ej2-base';
import { Calendar } from '@syncfusion/ej2-calendars';
//loads the CLDR data files.
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';

loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);

L10n.load({
    'ar': {
        'calendar': { today: 'اليوم'}
    }
});

//creates the calendar with Arabic culture.
let calendarObject: Calendar = new Calendar({
    //sets the locale
    locale: 'ar',
    //sets the enableRtl
    enableRtl: true
});
calendarObject.appendTo('#element');


