

import { DateRangePicker } from '@syncfusion/ej2-calendars';
//Load the L10n, loadCldr from ej2-base
import { loadCldr, L10n } from '@syncfusion/ej2-base';
//load the CLDR data files.
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as detimeZoneNames from './timeZoneNames.json';

loadCldr(numberingSystems, gregorian, numbers, detimeZoneNames);
L10n.load({
    'de': {
        'daterangepicker': {
         placeholder:'Wählen Sie einen Bereich aus',
         startLabel: 'Wählen Sie Startdatum',
         endLabel: 'Wählen Sie Enddatum',
         applyText: 'Sich bewerben',
         cancelText: 'Stornieren',
         selectedDays: 'Ausgewählte Tage',
         days: 'Tage',
         customRange: 'benutzerdefinierten Bereich'
        }
    }
});

// creates the simple DateRangePicker component with de culture
let daterangeObject: DateRangePicker = new DateRangePicker({
    // sets the locale property.
    locale: 'de',
    value: new Date(),
});
daterangeObject.appendTo('#element');


