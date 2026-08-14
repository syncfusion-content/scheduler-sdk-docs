import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

function CustomAdaptor() {
    ODataV4Adaptor.call(this);
}

CustomAdaptor.prototype = Object.create(ODataV4Adaptor.prototype);
CustomAdaptor.prototype.constructor = CustomAdaptor;

CustomAdaptor.prototype.processResponse = function () {
    let i = 0;
    let original = ODataV4Adaptor.prototype.processResponse.apply(this, arguments);
    original.forEach((item) => (item['EventID'] = ++i));
    return original;
};

function App() {
    const [dataManager, setDataManager] = React.useState(null);

    React.useEffect(() => {
        const fetchData = async () => {
            const manager = new DataManager({
                url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/',
                adaptor: new CustomAdaptor(),
            });
            await manager.ready;
            setDataManager(manager);
        };

        fetchData();
    }, []);

    const fieldsData = {
        id: 'Id',
        subject: { name: 'ShipName' },
        location: { name: 'ShipCountry' },
        description: { name: 'ShipAddress' },
        startTime: { name: 'OrderDate' },
        endTime: { name: 'RequiredDate' },
        recurrenceRule: { name: 'ShipRegion' }
    }
      const eventSettings = { dataSource: dataManager, fields: fieldsData };
      return (
          <ScheduleComponent
              height='550px'
              selectedDate={new Date(1996, 6, 9)}      
              readonly={true}
              eventSettings={eventSettings}>
              <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
          </ScheduleComponent>
      );
}

export default App;