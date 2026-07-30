import { Schedule, Day, Week, WorkWeek, Month } from '@syncfusion/ej2-schedule';
import { L10n, loadCldr } from '@syncfusion/ej2-base';
import { scheduleData } from './datasource.ts';
import frNumberData from '@syncfusion/ej2-cldr-data/main/fr-CH/numbers.json';
import frtimeZoneData from '@syncfusion/ej2-cldr-data/main/fr-CH/timeZoneNames.json';
import frGregorian from '@syncfusion/ej2-cldr-data/main/fr-CH/ca-gregorian.json';
import frNumberingSystem from '@syncfusion/ej2-cldr-data/supplemental/numberingSystems.json';
import * as localeTexts from './locale.json';

Schedule.Inject(Day, Week, WorkWeek, Month);
loadCldr(frNumberData, frtimeZoneData, frGregorian, frNumberingSystem);
L10n.load(localeTexts);

let scheduleObj: Schedule = new Schedule({
  height: '550px',
  locale: 'fr-CH',
  selectedDate: new Date(2018, 1, 15),
  views: ['Day', 'Week', 'WorkWeek', 'Month'],
  eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');