


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
    'ar': {
        'datetimepicker': {
            placeholder: 'حدد التاريخ والوقت',
            today: 'اليوم'
        }
    }
});

// creates the simple DateTimePicker component
let datetimeobject: DateTimePicker = new DateTimePicker({
    //sets the locale
    locale: 'ar',
    //sets the enableRtl
    enableRtl: true,
});
datetimeobject.appendTo('#element');


