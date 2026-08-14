import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, EventSettingsModel } from '@syncfusion/ej2-react-schedule';

function App() {
    let data: Object[] = [{
        Id: 1,
        Subject: 'Explosion of Betelgeuse Star',
        StartTime: new Date(2026, 1, 11, 9, 30),
        EndTime: new Date(2026, 1, 11, 11, 0)
    }, {
        Id: 2,
        Subject: 'Thule Air Crash Report',
        StartTime: new Date(2026, 1, 12, 12, 0),
        EndTime: new Date(2026, 1, 12, 14, 0)
    }, {
        Id: 3,
        Subject: 'Blue Moon Eclipse',
        StartTime: new Date(2026, 1, 13, 9, 30),
        EndTime: new Date(2026, 1, 13, 11, 0)
    }, {
        Id: 4,
        Subject: 'Meteor Showers in 2026',
        StartTime: new Date(2026, 1, 14, 13, 0),
        EndTime: new Date(2026, 1, 14, 14, 30)
    }];
    const eventSettings: EventSettingsModel = { dataSource: data };

    return (
      <ScheduleComponent height='550px' selectedDate={new Date(2026, 1, 14)} eventSettings={eventSettings}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    );

};

export default App;