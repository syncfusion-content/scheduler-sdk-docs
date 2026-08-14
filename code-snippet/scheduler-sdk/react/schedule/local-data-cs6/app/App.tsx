import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import { DataManager } from '@syncfusion/ej2-data';

function App() {
  const scheduleRef = React.useRef<ScheduleComponent>(null);
  const dataManager = React.useRef<DataManager>(new DataManager({
    url: 'http://some.com/invalidUrl'
  }));
  const eventSettings: EventSettingsModel = { dataSource: dataManager.current };

  const onActionFailure = (): void => {
    const span = document.createElement('span');
    scheduleRef.current.element.parentNode.insertBefore(span, scheduleRef.current.element);
    if (span.style) {
      span.style.color = '#FF0000';
    }
    span.innerHTML = 'Server exception: 404 Not found';
  };

  return (
    <ScheduleComponent height='550px' ref={scheduleRef} selectedDate={new Date(2026, 5, 11)} actionFailure={onActionFailure} eventSettings={eventSettings} >
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  );
};

export default App;