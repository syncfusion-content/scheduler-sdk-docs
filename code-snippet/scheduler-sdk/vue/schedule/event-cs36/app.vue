<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule ref='scheduleObj' :height='height' :width='width' :selectedDate='selectedDate'
        :currentView='currentView' :views='views' :eventSettings='eventSettings'>
      </ejs-schedule>
    </div>
  </div>
</template>

<script>
import { ScheduleComponent, TimelineViews, TimelineMonth } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';

export default {
  name: "App",
  components: {
    "ejs-schedule": ScheduleComponent
  },
  data() {
    return {
      height: '550px',
      width: '100%',
      views: ['TimelineDay', 'TimelineMonth'],
      currentView: 'TimelineMonth',
      eventSettings: {
        dataSource: scheduleData,
        enableMaxHeight: true,
        enableIndicator: false
      },
      selectedDate: new Date(2018, 1, 15),
    }
  },
  provide: {
    schedule: [TimelineViews, TimelineMonth]
  }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/schedule/index.css";
</style>
