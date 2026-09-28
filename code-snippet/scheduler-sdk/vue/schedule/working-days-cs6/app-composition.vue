<template>
    <div>
        <div id='app'>
            <div id='container'>
                <ejs-schedule height='550px' width='100%' :selectedDate='selectedDate' :eventSettings='eventSettings'
                    :workDays='workDays' :showWeekend='showWeekend'>
                    <e-views>
                        <e-view option='Day'></e-view>
                        <e-view option='Week'></e-view>
                        <e-view option='TimelineMonth'></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { scheduleData } from './datasource.js';
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, Day, Week, TimelineMonth } from '@syncfusion/ej2-vue-schedule';

const selectedDate = new Date(2018, 1, 15);
const showWeekend = false;
const workDays = [1, 3, 4, 5];
const eventSettings = { dataSource: scheduleData };

provide('schedule', [Day, Week, TimelineMonth]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/schedule/index.css";
</style>
