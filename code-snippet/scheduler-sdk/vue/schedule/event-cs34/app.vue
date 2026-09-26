<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule ref='scheduleObj' :height='height' :width='width' :selectedDate='selectedDate' :views='views'
        :currentView='currentView' :eventSettings='eventSettings' :actionBegin='onActionBegin'></ejs-schedule>
    </div>
  </div>
</template>
<script>
import { isNullOrUndefined } from '@syncfusion/ej2-vue-base';
import { ScheduleComponent, Day, TimelineViews, WorkWeek, Month } from '@syncfusion/ej2-vue-schedule';
import { readonlyData } from './datasource.js';

export default {
  name: "App",
  components: {
    "ejs-schedule": ScheduleComponent
  },
  data() {
    return {
      height: '550px',
      width: '100%',
      views: ['Day', 'TimelineWeek', 'WorkWeek', 'Month'],
      currentView: 'TimelineWeek',
      eventSettings: {
        dataSource: readonlyData
      },
      selectedDate: new Date(2018, 1, 15),
    }
  },
  methods: {
    onActionBegin: function (args) {
      if ((args.requestType === 'eventCreate' || args.requestType === 'eventChange') &&
        (args.data.length > 0 || !isNullOrUndefined(args.data))) {
        let eventData = args.data;
        let scheduleObj = this.$refs.scheduleObj.ej2Instances;
        let eventField = scheduleObj.eventFields;
        let startDate = (args.data.length > 0) ? eventData[0][eventField.startTime] : eventData[eventField.startTime];
        let endDate = (args.data.length > 0) ? eventData[0][eventField.endTime] : eventData[eventField.endTime];
        args.cancel = !scheduleObj.isSlotAvailable(startDate, endDate);
      }
    }
  },
  provide: {
    schedule: [Day, TimelineViews, WorkWeek, Month]
  }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/schedule/index.css";
</style>
