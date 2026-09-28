<template>
    <div>
        <div id='app'>
            <div id='container'>
                <ejs-schedule ref='scheduleObj' height='550px' width='100%' :selectedDate='selectedDate'
                    :eventSettings='eventSettings' :created='onCreated'>
                    <e-views>
                        <e-view option='Day'></e-view>
                        <e-view option='Week'></e-view>
                        <e-view option='TimelineWorkWeek'></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { scheduleData } from './datasource.js';
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, Day, Week, TimelineViews } from '@syncfusion/ej2-vue-schedule';
import { Internationalization } from '@syncfusion/ej2-base';

const scheduleObj = ref(null);
const selectedDate = new Date(2018, 1, 15);
const eventSettings = { dataSource: scheduleData };

provide('schedule', [Day, Week, TimelineViews]);

const onCreated = function () {
    let intl = new Internationalization();
    scheduleObj.value.scrollTo(intl.formatDate(new Date(), { skeleton: 'Hm' }));
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/schedule/index.css";
</style>
