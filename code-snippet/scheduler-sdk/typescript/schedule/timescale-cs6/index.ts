import { Schedule, Day, Week, WorkWeek, TimelineDay, TimelineWeek, TimelineWorkWeek } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource';

Schedule.Inject(Day, Week, WorkWeek, TimelineDay, TimelineWeek, TimelineWorkWeek);

const scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    views: ['Day', 'Week', 'WorkWeek', 'TimelineDay', 'TimelineWeek', 'TimelineWorkWeek'],
    selectedDate: new Date(),
    eventSettings: { dataSource: scheduleData },
    showTimeIndicator: true,
    timeScale: { enable: true, interval: 60, slotCount: 4 },
    currentTimeIndicatorSettings: {
        showTime: true,
        showPreviousDates: true,
        onTop: true
    }
});
scheduleObj.appendTo('#Schedule');

// Handle toggle controls
const masterToggle = document.getElementById('master-toggle') as HTMLInputElement;
const showTimeToggle = document.getElementById('show-time-toggle') as HTMLInputElement;
const showPreviousDatesToggle = document.getElementById('show-previous-dates-toggle') as HTMLInputElement;
const onTopToggle = document.getElementById('on-top-toggle') as HTMLInputElement;

const applyChanges = (): void => {
    if (!masterToggle.checked) {
        scheduleObj.showTimeIndicator = false;
        return;
    }
    scheduleObj.showTimeIndicator = true;
    scheduleObj.currentTimeIndicatorSettings = {
        showTime: showTimeToggle.checked,
        showPreviousDates: showPreviousDatesToggle.checked,
        onTop: onTopToggle.checked
    };
};

if (masterToggle && showTimeToggle && showPreviousDatesToggle && onTopToggle) {
    masterToggle.addEventListener('change', applyChanges);
    showTimeToggle.addEventListener('change', applyChanges);
    showPreviousDatesToggle.addEventListener('change', applyChanges);
    onTopToggle.addEventListener('change', applyChanges);
}
