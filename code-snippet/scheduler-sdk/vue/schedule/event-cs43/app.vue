<template>
  <div id='app'>
    <div id='container'>
      <div style="margin-bottom: 15px;">
        <ejs-button @click="increaseBuffer" style="margin-right: 10px;">Increase Buffer</ejs-button>
        <ejs-button @click="decreaseBuffer" style="margin-right: 10px;">Decrease Buffer</ejs-button>
        <ejs-button @click="resetBuffer">Reset Buffer</ejs-button>
      </div>
      <ejs-schedule ref="scheduleObj" height='550px' currentView='TimelineWeek' :selectedDate='selectedDate'
        :timeScale='timeScale' :eventSettings='eventSettings'></ejs-schedule>
    </div>
  </div>
</template>
<script>
import { ScheduleComponent, Day, Week, WorkWeek, TimelineViews, DragAndDrop, Resize } from '@syncfusion/ej2-vue-schedule';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';

const currentYear = new Date().getFullYear();
const eventData = [
    {
        Id: 1,
        Subject: 'Client Kickoff - Acme Corp',
        StartTime: new Date(currentYear, 0, 22, 9, 0),
        EndTime: new Date(currentYear, 0, 22, 10, 0),
        bufferBefore: 30,  // 30 min to set up conference room and test AV
        bufferAfter: 45,   // 45 min to send follow-up materials
        Location: 'Boardroom A',
        Description: 'Project kickoff meeting with Acme Corp leadership team'
    },
    {
        Id: 2,
        Subject: 'Sales Training Workshop',
        StartTime: new Date(currentYear, 0, 22, 11, 0),
        EndTime: new Date(currentYear, 0, 22, 13, 0),
        bufferBefore: 45,  // 45 min for room setup and materials distribution
        bufferAfter: 30,   // 30 min for Q&A and feedback collection
        Location: 'Training Room',
        Description: 'Quarterly sales techniques and product knowledge training'
    },
    {
        Id: 3,
        Subject: 'Product Demo - TechStart Inc',
        StartTime: new Date(currentYear, 0, 22, 14, 0),
        EndTime: new Date(currentYear, 0, 22, 15, 0),
        bufferBefore: 20,  // 20 min to test demo environment
        bufferAfter: 40,   // 40 min to gather requirements
        Location: 'Conference Room B',
        Description: 'Live demo of enterprise SaaS platform for TechStart Inc'
    }
];

export default {
  name: "App",
  components: {
    "ejs-schedule": ScheduleComponent,
    "ejs-button": ButtonComponent
  },
  data() {
    return {
      selectedDate: new Date(currentYear, 0, 22),
      timeScale: { enable: true, interval: 60, slotCount: 4 },
      eventSettings: {
        dataSource: eventData,
        enableBuffer: true,
        fields: {
          bufferBefore: { name: 'bufferBefore' },
          bufferAfter: { name: 'bufferAfter' }
        }
      }
    }
  },
  methods: {
    increaseBuffer() {
      const schedule = this.$refs.scheduleObj.ej2Instances;
      if (schedule.eventsData.length > 0) {
        const event = schedule.eventsData[0];
        event.bufferBefore = (event.bufferBefore || 0) + 10;
        event.bufferAfter = (event.bufferAfter || 0) + 10;
        schedule.saveEvent(event);
      }
    },
    decreaseBuffer() {
      const schedule = this.$refs.scheduleObj.ej2Instances;
      if (schedule.eventsData.length > 0) {
        const event = schedule.eventsData[0];
        event.bufferBefore = Math.max(0, (event.bufferBefore || 0) - 10);
        event.bufferAfter = Math.max(0, (event.bufferAfter || 0) - 10);
        schedule.saveEvent(event);
      }
    },
    resetBuffer() {
      const schedule = this.$refs.scheduleObj.ej2Instances;
      if (schedule.eventsData.length > 0) {
        const event = schedule.eventsData[0];
        event.bufferBefore = 30;
        event.bufferAfter = 15;
        schedule.saveEvent(event);
      }
    }
  },
  provide: {
    schedule: [Day, Week, WorkWeek, TimelineViews, DragAndDrop, Resize]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/schedule/index.css";
</style>
