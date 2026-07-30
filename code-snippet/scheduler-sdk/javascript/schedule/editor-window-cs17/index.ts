import { Schedule, Day, Week, WorkWeek, Month } from '@syncfusion/ej2-schedule';
import { createElement } from '@syncfusion/ej2-base';

Schedule.Inject(Day, Week, WorkWeek, Month);

let scheduleObj: Schedule = new Schedule({
  width: '100%',
  height: '550px',
  selectedDate: new Date(2023, 2, 5),
  currentView: 'Month',
  views: ['Day', 'Week', 'WorkWeek', 'Month'],
  eventSettings: {
    dataSource: [{
      Id: 1,
      Subject: 'Review Meeting',
      StartTime: new Date(2023, 2, 5, 20, 0, 0),
      EndTime: new Date(2023, 2, 5, 21, 0, 0)
    }]
  }
});
scheduleObj.appendTo('#Schedule');

let closeButton = createElement("Button", { id: 'closeQuickInfo' });
document.getElementById('button').appendChild(closeButton);
closeButton.textContent = "Close Quick Info Popup";
closeButton.onclick = (): void => {
  scheduleObj.closeQuickInfoPopup();
};