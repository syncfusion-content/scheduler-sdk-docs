import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, ViewsDirective, ViewDirective, Inject,
  Day, Week, WorkWeek, TimelineViews
} from '@syncfusion/ej2-react-schedule';

const currentDate: Date = new Date();

const scheduleData: Object[] = [
  {
    Id: 1,
    Subject: 'Travel Preparation',
    StartTime: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 8, 30),
    EndTime: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 9, 30)
  },
  {
    Id: 2,
    Subject: 'Customer Meeting',
    StartTime: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 10, 0),
    EndTime: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 12, 30)
  },
  {
    Id: 3,
    Subject: 'Lab Review',
    StartTime: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 14, 0),
    EndTime: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 15, 0)
  }
];

const App = () => {
  const [showTime, setShowTime] = React.useState<boolean>(true);
  const [showPreviousDates, setShowPreviousDates] = React.useState<boolean>(true);
  const [onTop, setOnTop] = React.useState<boolean>(true);

  return (
    <div>
      <div style={{ marginBottom: '20px', display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
        <label style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
          <input type='checkbox' checked={showTime} onChange={(e) => setShowTime(e.target.checked)} />
          showTime
        </label>
        <label style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
          <input type='checkbox' checked={showPreviousDates} onChange={(e) => setShowPreviousDates(e.target.checked)} />
          showPreviousDates
        </label>
        <label style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
          <input type='checkbox' checked={onTop} onChange={(e) => setOnTop(e.target.checked)} />
          onTop
        </label>
      </div>

      <ScheduleComponent
        width='100%'
        height='550px'
        selectedDate={currentDate}
        currentView='Week'
        showTimeIndicator={true}
        eventSettings={{ dataSource: scheduleData }}
        currentTimeIndicatorSettings={{ showTime: showTime, showPreviousDates: showPreviousDates, onTop: onTop }}
      >
        <ViewsDirective>
          <ViewDirective option='Day' />
          <ViewDirective option='Week' />
          <ViewDirective option='WorkWeek' />
          <ViewDirective option='TimelineDay' />
          <ViewDirective option='TimelineWeek' />
          <ViewDirective option='TimelineWorkWeek' />
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, TimelineViews]} />
      </ScheduleComponent>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('schedule')!);
root.render(<App />);