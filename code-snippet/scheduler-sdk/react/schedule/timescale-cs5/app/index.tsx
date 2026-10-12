import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, ViewsDirective, ViewDirective,
  Day, Week, WorkWeek, TimelineViews, Inject, EventSettingsModel, CurrentTimeIndicatorSettingsModel, TimelineDay, TimelineWorkWeek
} from '@syncfusion/ej2-react-schedule';

const currentDate: Date = new Date();

const indicatorData = [
  {
    Id: 1,
    Subject: 'Travel Preparation',
    StartTime: new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      8,
      30
    ),
    EndTime: new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      9,
      30
    ),
  },
  {
    Id: 2,
    Subject: 'Customer Meeting',
    StartTime: new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      10,
      0
    ),
    EndTime: new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      12,
      30
    ),
  },
  {
    Id: 3,
    Subject: 'Lab Review',
    StartTime: new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      14,
      0
    ),
    EndTime: new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      15,
      0
    ),
  },
];

const eventSettings: EventSettingsModel = { dataSource: indicatorData };
const currentTimeIndicatorSettings: CurrentTimeIndicatorSettingsModel = {
  showTime: true,
  showPreviousDates: true,
  onTop: true
};

const App = () => {
  const scheduleRef = React.useRef<ScheduleComponent>(null);

  React.useEffect(() => {
    const masterToggle = document.getElementById('master-toggle') as HTMLInputElement;
    const showTimeToggle = document.getElementById('show-time-toggle') as HTMLInputElement;
    const showPreviousDatesToggle = document.getElementById('show-previous-dates-toggle') as HTMLInputElement;
    const onTopToggle = document.getElementById('on-top-toggle') as HTMLInputElement;

    const applyChanges = () => {
      if (scheduleRef.current) {
        if (!masterToggle.checked) {
          scheduleRef.current.showTimeIndicator = false;
          return;
        }
        scheduleRef.current.showTimeIndicator = true;
        scheduleRef.current.currentTimeIndicatorSettings = {
          showTime: showTimeToggle.checked,
          showPreviousDates: showPreviousDatesToggle.checked,
          onTop: onTopToggle.checked
        };
      }
    };

    if (masterToggle && showTimeToggle && showPreviousDatesToggle && onTopToggle) {
      masterToggle.addEventListener('change', applyChanges);
      showTimeToggle.addEventListener('change', applyChanges);
      showPreviousDatesToggle.addEventListener('change', applyChanges);
      onTopToggle.addEventListener('change', applyChanges);

      return () => {
        masterToggle.removeEventListener('change', applyChanges);
        showTimeToggle.removeEventListener('change', applyChanges);
        showPreviousDatesToggle.removeEventListener('change', applyChanges);
        onTopToggle.removeEventListener('change', applyChanges);
      };
    }
  }, []);

  return (
    <div>
      <div style={{ marginBottom: '30px' }}>
        <ScheduleComponent 
          ref={scheduleRef}
          width='100%' 
          height='450px' 
          currentView='TimelineWeek'
          selectedDate={currentDate} 
          eventSettings={eventSettings} 
          showTimeIndicator={true}
          currentTimeIndicatorSettings={currentTimeIndicatorSettings}
          timeScale={{ enable: true, interval: 60, slotCount: 4 }}
        >
          <ViewsDirective>
            <ViewDirective option='Day' />
            <ViewDirective option='Week' />
            <ViewDirective option='WorkWeek' />
            <ViewDirective option='TimelineDay' />
            <ViewDirective option='TimelineWeek' />
            <ViewDirective option='TimelineWorkWeek' />
          </ViewsDirective>
          <Inject services={[Day, Week, WorkWeek, TimelineDay, TimelineViews, TimelineWorkWeek]} />
        </ScheduleComponent>
      </div>

      <div style={{ marginTop: '12px', marginBottom: '20px', display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
        <label style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
          <input type='checkbox' id='master-toggle' defaultChecked={true} />
          showTimeIndicator
        </label>
        <label style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
          <input type='checkbox' id='show-time-toggle' defaultChecked={true} />
          showTime
        </label>
        <label style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
          <input type='checkbox' id='show-previous-dates-toggle' defaultChecked={true} />
          showPreviousDates
        </label>
        <label style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
          <input type='checkbox' id='on-top-toggle' defaultChecked={true} />
          onTop
        </label>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
