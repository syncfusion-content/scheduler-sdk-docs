<template>
  <div id='app'>
    <ejs-schedule height='550px' width='100%' :selectedDate='selectedDate' :eventSettings='eventSettings'>
      <e-views>
        <e-view option='Week' startHour='07:00' endHour='15:00'></e-view>
        <e-view option='WorkWeek' startHour='10:00' endHour='18:00'></e-view>
        <e-view option='Month' showWeekend=false></e-view>
      </e-views>
    </ejs-schedule>
  </div>
</template>
<script>
import { scheduleData } from './datasource.js';
import { extend } from '@syncfusion/ej2-base';
import { ScheduleComponent, ViewsDirective, ViewDirective, WorkWeek, Month, Week } from '@syncfusion/ej2-vue-schedule';

export default {
  name: "App",
  components: {
    'ejs-schedule': ScheduleComponent,
    'e-view': ViewDirective,
    'e-views': ViewsDirective
  },
  data() {
    return {
      eventSettings: { dataSource: extend([], scheduleData, null, true) },
      selectedDate: new Date(2018, 1, 15)
    }
  },
  provide: {
    schedule: [WorkWeek, Month, Week]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/schedule/index.css";
</style>
