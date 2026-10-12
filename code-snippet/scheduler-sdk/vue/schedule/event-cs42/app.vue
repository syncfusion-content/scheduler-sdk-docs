<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule height='550px' currentView='Week' :selectedDate='selectedDate'
        :timeScale='timeScale' :eventSettings='eventSettings'></ejs-schedule>
    </div>
  </div>
</template>
<script>
import { ScheduleComponent, Day, Week, WorkWeek, DragAndDrop, Resize } from '@syncfusion/ej2-vue-schedule';

const currentYear = new Date().getFullYear();
const eventData = [
    {
        Id: 1,
        Subject: 'Patient Consultation - Sarah Johnson',
        StartTime: new Date(currentYear, 0, 21, 10, 0),
        EndTime: new Date(currentYear, 0, 21, 11, 30),
        bufferBefore: 30,  // 30 min to review patient history
        bufferAfter: 45,   // 45 min to update medical records
        Location: 'Exam Room 3',
        Description: 'Follow-up consultation for hypertension management'
    },
    {
        Id: 2,
        Subject: 'Surgical Procedure - Knee Arthroscopy',
        StartTime: new Date(currentYear, 0, 22, 10, 30),
        EndTime: new Date(currentYear, 0, 22, 12, 0),
        bufferBefore: 45,  // 45 min OR setup and anesthesia prep
        bufferAfter: 30,   // 30 min recovery and post-op notes
        Location: 'Operating Room 2',
        Description: 'Outpatient knee arthroscopy for Mr. Robert Chen'
    },
    {
        Id: 3,
        Subject: 'Lunch & Rounds',
        StartTime: new Date(currentYear, 0, 22, 12, 30),
        EndTime: new Date(currentYear, 0, 22, 13, 30),
        bufferBefore: 0,   // Direct transition
        bufferAfter: 0,    // Direct transition
        Location: 'Hospital Cafeteria',
        Description: 'Working lunch with department heads'
    },
    {
        Id: 4,
        Subject: 'Patient Consultation - Michael Davis',
        StartTime: new Date(currentYear, 0, 22, 14, 30),
        EndTime: new Date(currentYear, 0, 22, 15, 15),
        bufferBefore: 25,  // 25 min to prep exam room
        bufferAfter: 20,   // 20 min to complete documentation
        Location: 'Exam Room 1',
        Description: 'New patient intake and physical examination'
    },
    {
        Id: 5,
        Subject: 'Telehealth Consultation - Emma Wilson',
        StartTime: new Date(currentYear, 0, 19, 11, 0),
        EndTime: new Date(currentYear, 0, 19, 16, 30),
        bufferBefore: 35,   // 35 min to test video connection and prepare
        bufferAfter: 20,   // 20 min to send e-prescription and notes
        Location: 'Virtual - Zoom',
        Description: 'Virtual follow-up for diabetes management'
    }
];

export default {
  name: "App",
  components: {
    "ejs-schedule": ScheduleComponent
  },
  data() {
    return {
      selectedDate: new Date(currentYear, 0, 22),
      timeScale: { enable: true, interval: 60, slotCount: 2 },
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
  provide: {
    schedule: [Day, Week, WorkWeek, DragAndDrop, Resize]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/schedule/index.css";
</style>
