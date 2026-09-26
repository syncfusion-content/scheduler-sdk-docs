<template>
    <div>
        <div id='app'>
            <div id='container'>
                <ejs-schedule height='550px' width='100%' :selectedDate='selectedDate' :eventSettings='eventSettings'
                    :firstDayOfWeek='firstDayOfWeek'>
                    <e-views>
                        <e-view option='Week'></e-view>
                        <e-view option='Month'></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { scheduleData } from './datasource.js';
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, Week, Month } from '@syncfusion/ej2-vue-schedule';

const selectedDate = new Date(2018, 1, 15);
const firstDayOfWeek = 3;
const eventSettings = { dataSource: scheduleData };

provide('schedule', [Week, Month]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/schedule/index.css";
</style>
