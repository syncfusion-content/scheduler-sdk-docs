


import { TimePicker } from '@syncfusion/ej2-calendars';
//Load the L10n from ej2-base
import { loadCldr, L10n } from '@syncfusion/ej2-base';
//load the CLDR data files.
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import { enableRipple } from '@syncfusion/ej2-base';

//enable ripple style
enableRipple(true);

loadCldr(numberingSystems, gregorian, numbers);

L10n.load({
    'de': {
        'timepicker': { placeholder: 'Wählen Sie Zeit' }
    }
});

// creates the timepicker with German culture.
let timeObject: TimePicker = new TimePicker({
    locale:'de',
    value: new Date()
});
timeObject.appendTo('#element');



