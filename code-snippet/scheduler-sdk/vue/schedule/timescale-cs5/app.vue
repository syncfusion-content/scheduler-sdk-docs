<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :selectedDate='selectedData' :eventSettings='eventSettings'
        :showTimeIndicator='showTimeIndicator' :timeScale='timeScale' :currentTimeIndicatorSettings='currentTimeIndicatorSettings'>
        <e-views>
          <e-view option='Day'></e-view>
          <e-view option='Week'></e-view>
          <e-view option='WorkWeek'></e-view>
          <e-view option='TimelineDay'></e-view>
          <e-view option='TimelineWeek'></e-view>
          <e-view option='TimelineWorkWeek'></e-view>
        </e-views>
      </ejs-schedule>
      <div style="margin-top: 12px; margin-bottom: 20px; display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
        <label style="display: inline-flex; align-items: center; gap: 6px; font-weight: 600;">
          <input type="checkbox" id="master-toggle" v-model="masterToggle" />
          showTimeIndicator
        </label>
        <label style="display: inline-flex; align-items: center; gap: 6px; font-weight: 600;">
          <input type="checkbox" id="show-time-toggle" v-model="showTimeToggle" />
          showTime
        </label>
        <label style="display: inline-flex; align-items: center; gap: 6px; font-weight: 600;">
          <input type="checkbox" id="show-previous-dates-toggle" v-model="showPreviousDatesToggle" />
          showPreviousDates
        </label>
        <label style="display: inline-flex; align-items: center; gap: 6px; font-weight: 600;">
          <input type="checkbox" id="on-top-toggle" v-model="onTopToggle" />
          onTop
        </label>
      </div>
    </div>
  </div>
</template>
<script>
import { ScheduleComponent, ViewDirective, ViewsDirective, Day, Week, WorkWeek, TimelineViews } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';
import { extend } from '@syncfusion/ej2-base';

export default {
  name: "App",
  components: {
    "ejs-schedule": ScheduleComponent,
    "e-views": ViewsDirective,
    "e-view": ViewDirective
  },
  data() {
    return {
      height: '450px',
      eventSettings: { dataSource: extend([], scheduleData, null, true) },
      selectedData: new Date(),
      showTimeIndicator: true,
      timeScale: {
        enable: true,
        interval: 60,
        slotCount: 4
      },
      currentTimeIndicatorSettings: {
        showTime: true,
        showPreviousDates: true,
        onTop: true
      },
      masterToggle: true,
      showTimeToggle: true,
      showPreviousDatesToggle: true,
      onTopToggle: true
    }
  },
  watch: {
    masterToggle(newVal) {
      this.applyChanges();
    },
    showTimeToggle(newVal) {
      this.applyChanges();
    },
    showPreviousDatesToggle(newVal) {
      this.applyChanges();
    },
    onTopToggle(newVal) {
      this.applyChanges();
    }
  },
  methods: {
    applyChanges() {
      if (!this.masterToggle) {
        this.showTimeIndicator = false;
        return;
      }
      this.showTimeIndicator = true;
      this.currentTimeIndicatorSettings = {
        showTime: this.showTimeToggle,
        showPreviousDates: this.showPreviousDatesToggle,
        onTop: this.onTopToggle
      };
    }
  },
  provide() {
    return {
      schedule: [Day, Week, WorkWeek, TimelineViews]
    }
  }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/schedule/index.css";
</style>
