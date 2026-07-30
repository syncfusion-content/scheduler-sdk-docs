import './es5-datasource.js';
import './locale.js';
import './ca-gregorian.js';
import './numberingSystems.js';
import './numbers.js';
import './timeZoneNames.js';

ej.base.L10n.load(window.locale);

ej.base.loadCldr(
    window.gregorian,
    window.numbersData,
    window.timeZoneNames,
    window.numberingSystems
);

ej.base.setCulture('fr-CH');

new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    views: ['Day', 'Week', 'WorkWeek', 'Month'],
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: window.scheduleData },
}).appendTo('#Schedule');
