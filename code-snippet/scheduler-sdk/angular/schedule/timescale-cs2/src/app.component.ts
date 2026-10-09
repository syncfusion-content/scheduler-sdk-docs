import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DayService, WeekService, WorkWeekService, TimelineViewsService, TimelineDayService, TimelineWeekService, TimelineWorkWeekService } from '@syncfusion/ej2-angular-schedule'



import { Component, AfterViewInit } from '@angular/core';
import { EventSettingsModel, TimeScaleModel, CurrentTimeIndicatorSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
imports: [
        
        ScheduleModule,
        ButtonModule
    ],

providers: [DayService, 
                WeekService, 
                WorkWeekService, 
                TimelineViewsService,
                TimelineDayService,
                TimelineWeekService,
                TimelineWorkWeekService],
standalone: true,
  selector: 'app-root',
  // specifies the template string for the Schedule component
  template: `<div>
    <ejs-schedule width='100%' height='450px' [selectedDate]="selectedDate" [eventSettings]="eventSettings"  [showTimeIndicator]="true" [timeScale]="timeScale" [currentTimeIndicatorSettings]="currentTimeIndicatorSettings" [views]="['Day', 'Week', 'WorkWeek', 'TimelineDay', 'TimelineWeek', 'TimelineWorkWeek']" > </ejs-schedule>
    <div style="margin-top: 12px; margin-bottom: 20px; display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
        <label style="display: inline-flex; align-items: center; gap: 6px; font-weight: 600;">
            <input type="checkbox" id="master-toggle" checked />
            showTimeIndicator
        </label>
        <label style="display: inline-flex; align-items: center; gap: 6px; font-weight: 600;">
            <input type="checkbox" id="show-time-toggle" checked />
            showTime
        </label>
        <label style="display: inline-flex; align-items: center; gap: 6px; font-weight: 600;">
            <input type="checkbox" id="show-previous-dates-toggle" checked />
            showPreviousDates
        </label>
        <label style="display: inline-flex; align-items: center; gap: 6px; font-weight: 600;">
            <input type="checkbox" id="on-top-toggle" checked />
            onTop
        </label>
    </div>
</div>`
})
export class AppComponent implements AfterViewInit {
    public selectedDate: Date = new Date();
    public timeScale: TimeScaleModel = { enable: true, interval: 60, slotCount: 4 };
    public eventSettings: EventSettingsModel = { dataSource: scheduleData };
    public currentTimeIndicatorSettings: CurrentTimeIndicatorSettingsModel = {
        showTime: true,
        showPreviousDates: true,
        onTop: true
    };

    ngAfterViewInit(): void {
        this.attachToggleListeners();
    }

    attachToggleListeners(): void {
        const masterToggle = document.getElementById('master-toggle') as HTMLInputElement;
        const showTimeToggle = document.getElementById('show-time-toggle') as HTMLInputElement;
        const showPreviousDatesToggle = document.getElementById('show-previous-dates-toggle') as HTMLInputElement;
        const onTopToggle = document.getElementById('on-top-toggle') as HTMLInputElement;

        const applyChanges = (): void => {
            const scheduleElement = document.querySelector('ejs-schedule') as any;
            if (scheduleElement && scheduleElement.ej2_instances && scheduleElement.ej2_instances[0]) {
                const schedule = scheduleElement.ej2_instances[0];
                if (!masterToggle.checked) {
                    schedule.showTimeIndicator = false;
                    return;
                }
                schedule.showTimeIndicator = true;
                schedule.currentTimeIndicatorSettings = {
                    showTime: showTimeToggle.checked,
                    showPreviousDates: showPreviousDatesToggle.checked,
                    onTop: onTopToggle.checked
                };
            }
        };

        if (masterToggle && showTimeToggle && showPreviousDatesToggle && onTopToggle) {
            masterToggle.addEventListener('change', applyChanges);
            showTimeToggle.addEventListener('change', applyChanges);
            showPreviousDatesToggle.addEventListener('change', applyChanges);
            onTopToggle.addEventListener('change', applyChanges);
        }
    }
}
