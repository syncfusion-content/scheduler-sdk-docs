import { Component } from '@angular/core';
import { ScheduleModule, DayService, WeekService, WorkWeekService, TimelineViewsService } from '@syncfusion/ej2-angular-schedule';
import { EventSettingsModel, TimeScaleModel, CurrentTimeIndicatorSettingsModel } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource';

@Component({
    imports: [
        ScheduleModule
    ],
    providers: [DayService, WeekService, WorkWeekService, TimelineViewsService],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    public selectedDate: Date = new Date();
    public timeScale: TimeScaleModel = { enable: true, interval: 60, slotCount: 4 };
    public eventSettings: EventSettingsModel = { dataSource: scheduleData };
    public currentTimeIndicatorSettings: CurrentTimeIndicatorSettingsModel = {
        showTime: true,
        showPreviousDates: true,
        onTop: true
    };

    public showTimeChange(showTime: boolean): void {
        this.currentTimeIndicatorSettings = { ...this.currentTimeIndicatorSettings, showTime: showTime };
    }

    public showPreviousDatesChange(showPreviousDates: boolean): void {
        this.currentTimeIndicatorSettings = { ...this.currentTimeIndicatorSettings, showPreviousDates: showPreviousDates };
    }

    public onTopChange(onTop: boolean): void {
        this.currentTimeIndicatorSettings = { ...this.currentTimeIndicatorSettings, onTop: onTop };
    }
}