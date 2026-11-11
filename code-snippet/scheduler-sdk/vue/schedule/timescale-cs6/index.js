import Vue from 'vue';
import { SchedulePlugin, Day, Week, WorkWeek, TimelineViews } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';
import { extend } from '@syncfusion/ej2-base';

Vue.use(SchedulePlugin);

new Vue({
    el: '#app',
    template: `
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
`,
    data() {
        return {
            height: '450px',
            eventSettings: { dataSource: extend([], scheduleData, null, true) },
            selectedDate: new Date(),
            timeScale: {
                enable: true,
                interval: 60,
                slotCount: 4
            },
            showTime: true,
            showPreviousDates: true,
            onTop: true
        }
    },
    computed: {
        currentTimeIndicator: function () {
            return {
                showTime: this.showTime,
                showPreviousDates: this.showPreviousDates,
                onTop: this.onTop
            };
        }
    },
    provide() {
        return {
            schedule: [Day, Week, WorkWeek, TimelineViews]
        }
    }
});