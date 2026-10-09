var scheduleObj = new ej.schedule.Schedule({
    height: '450px',
    selectedDate: new Date(),
    views: ['Day', 'Week', 'WorkWeek', 'TimelineDay', 'TimelineWeek', 'TimelineWorkWeek'],
    showTimeIndicator: true,
    timeScale: {
        enable: true,
        interval: 60,
        slotCount: 4
    },
    currentTimeIndicatorSettings: {
        showTime: true,
        showPreviousDates: true,
        onTop: true
    },
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

// Handle toggle controls
var masterToggle = document.getElementById('master-toggle');
var showTimeToggle = document.getElementById('show-time-toggle');
var showPreviousDatesToggle = document.getElementById('show-previous-dates-toggle');
var onTopToggle = document.getElementById('on-top-toggle');

function applyChanges() {
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
}

if (masterToggle && showTimeToggle && showPreviousDatesToggle && onTopToggle) {
    masterToggle.addEventListener('change', applyChanges);
    showTimeToggle.addEventListener('change', applyChanges);
    showPreviousDatesToggle.addEventListener('change', applyChanges);
    onTopToggle.addEventListener('change', applyChanges);
}
