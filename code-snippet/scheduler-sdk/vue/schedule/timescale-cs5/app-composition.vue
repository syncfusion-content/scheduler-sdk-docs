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
          <input type="checkbox" id="master-toggle" v-model="masterToggle" @change="applyChanges" />
          showTimeIndicator
        </label>
        <label style="display: inline-flex; align-items: center; gap: 6px; font-weight: 600;">
          <input type="checkbox" id="show-time-toggle" v-model="showTimeToggle" @change="applyChanges" />
          showTime
        </label>
        <label style="display: inline-flex; align-items: center; gap: 6px; font-weight: 600;">
          <input type="checkbox" id="show-previous-dates-toggle" v-model="showPreviousDatesToggle" @change="applyChanges" />
          showPreviousDates
        </label>
        <label style="display: inline-flex; align-items: center; gap: 6px; font-weight: 600;">
          <input type="checkbox" id="on-top-toggle" v-model="onTopToggle" @change="applyChanges" />
          onTop
        </label>
      </div>
    </div>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, Day, Week, WorkWeek, TimelineViews } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';
import { extend } from '@syncfusion/ej2-base';

const height = '450px';
const eventSettings = { dataSource: extend([], scheduleData, null, true) };
const selectedData = new Date();
const showTimeIndicator = ref(true);
const timeScale = {
  enable: true,
  interval: 60,
  slotCount: 4
};

const currentTimeIndicatorSettings = ref({
  showTime: true,
  showPreviousDates: true,
  onTop: true
});

const masterToggle = ref(true);
const showTimeToggle = ref(true);
const showPreviousDatesToggle = ref(true);
const onTopToggle = ref(true);

const applyChanges = () => {
  if (!masterToggle.value) {
    showTimeIndicator.value = false;
    return;
  }
  showTimeIndicator.value = true;
  currentTimeIndicatorSettings.value = {
    showTime: showTimeToggle.value,
    showPreviousDates: showPreviousDatesToggle.value,
    onTop: onTopToggle.value
  };
};

provide('schedule', [Day, Week, WorkWeek, TimelineViews]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/schedule/index.css";
</style>
