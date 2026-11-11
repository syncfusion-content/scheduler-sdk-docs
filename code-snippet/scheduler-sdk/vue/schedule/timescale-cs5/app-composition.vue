<template>
  <div id='app'>
    <div id='container'>
      <div style="margin-bottom: 20px; display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
        <label style="display: inline-flex; align-items: center; gap: 6px; font-weight: 600;">
          <input type="checkbox" v-model="showTime" />
          showTime
        </label>
        <label style="display: inline-flex; align-items: center; gap: 6px; font-weight: 600;">
          <input type="checkbox" v-model="showPreviousDates" />
          showPreviousDates
        </label>
        <label style="display: inline-flex; align-items: center; gap: 6px; font-weight: 600;">
          <input type="checkbox" v-model="onTop" />
          onTop
        </label>
      </div>
      <ejs-schedule :height='height' :selectedDate='selectedDate' :eventSettings='eventSettings'
        :showTimeIndicator='true' :timeScale='timeScale' :currentTimeIndicatorSettings='currentTimeIndicator'>
        <e-views>
          <e-view option='Day'></e-view>
          <e-view option='Week'></e-view>
          <e-view option='WorkWeek'></e-view>
          <e-view option='TimelineDay'></e-view>
          <e-view option='TimelineWeek'></e-view>
          <e-view option='TimelineWorkWeek'></e-view>
        </e-views>
      </ejs-schedule>
    </div>
  </div>
</template>
<script setup>
import { provide, ref, computed } from "vue";
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, Day, Week, WorkWeek, TimelineViews } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';
import { extend } from '@syncfusion/ej2-base';

const height = '450px';
const eventSettings = { dataSource: extend([], scheduleData, null, true) };
const selectedDate = new Date();
const timeScale = {
  enable: true,
  interval: 60,
  slotCount: 4
};

const showTime = ref(true);
const showPreviousDates = ref(true);
const onTop = ref(true);

const currentTimeIndicator = computed(() => ({
  showTime: showTime.value,
  showPreviousDates: showPreviousDates.value,
  onTop: onTop.value
}));

provide('schedule', [Day, Week, WorkWeek, TimelineViews]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/schedule/index.css";
</style>