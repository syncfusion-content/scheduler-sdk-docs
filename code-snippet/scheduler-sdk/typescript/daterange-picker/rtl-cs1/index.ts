


import { loadCldr, L10n } from '@syncfusion/ej2-base';
import { DateRangePicker } from '@syncfusion/ej2-calendars';
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as hetimeZoneNames from './timeZoneNames.json';

loadCldr(numberingSystems, gregorian, numbers, hetimeZoneNames);

L10n.load({
    'he': {
        'daterangepicker': {
            placeholder: 'בחר טווח'
            startLabel: 'תווית התחלה',
            endLabel: 'ח',
            applyText: 'להחיל טקסט',
            cancelText: 'בטל טקסט',
            selectedDays: 'ימים נבחרים',
            days: 'أימים',
            customRange: 'טווח מותאם אישית'
        }
    }
});

// creates the simple DateRangePicker component
let daterangeobject: DateRangePicker = new DateRangePicker({
    //sets the locale
    locale: 'he',
    //sets the enableRtl
    enableRtl: true,
});
daterangeobject.appendTo('#element');


