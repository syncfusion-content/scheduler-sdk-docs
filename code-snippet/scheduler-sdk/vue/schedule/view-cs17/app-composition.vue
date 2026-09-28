<template>
    <div id='app'>
        <div id='container'>
            <ejs-schedule height='550px' width='100%' :selectedDate='selectedDate' :eventSettings='eventSettings'
                :currentView='currentView'>
                <e-views>
                    <e-view option='Day' :interval='3' displayName='3 Days'></e-view>
                    <e-view option='Week' :interval='2' displayName='2 Weeks'></e-view>
                </e-views>
            </ejs-schedule>
        </div>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, Day, Week } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';

const selectedDate = new Date(2018, 1, 15);
const eventSettings = { dataSource: scheduleData };
const currentView = 'Day';

provide('schedule', [Day, Week]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/schedule/index.css";
</style>
