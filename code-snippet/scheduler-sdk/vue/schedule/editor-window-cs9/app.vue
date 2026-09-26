<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :width='width' :views='views'
        :quickInfoOnSelectionEnd='quickInfoOnSelectionEnd'></ejs-schedule>
    </div>
  </div>
</template>
<script>
import { ScheduleComponent, Day, Week, Month, TimelineViews, Agenda } from '@syncfusion/ej2-vue-schedule';

export default {
  name: "App",
  components: {
    "ejs-schedule": ScheduleComponent
  },
  data() {
    return {
      height: '550px',
      width: '100%',
      views: ['TimelineDay', 'Day', 'Week', 'Month', 'Agenda'],
      quickInfoOnSelectionEnd: true,
    }
  },
  provide: {
    schedule: [TimelineViews, Day, Week, Month, Agenda]
  }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/schedule/index.css";
</style>
