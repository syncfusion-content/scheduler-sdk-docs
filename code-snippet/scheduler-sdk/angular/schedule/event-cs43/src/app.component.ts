import { ScheduleModule, EventSettingsModel, ScheduleComponent, DayService, WeekService, WorkWeekService, TimelineViewsService, DragAndDropService, ResizeService } from '@syncfusion/ej2-angular-schedule';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { Component, ViewChild } from '@angular/core';

@Component({
    imports: [ScheduleModule, ButtonModule],
    standalone: true,
    selector: 'app-root',
    providers: [DayService, WeekService, WorkWeekService, TimelineViewsService, DragAndDropService, ResizeService],
    template: `
    <div style="margin-bottom: 15px;">
      <button ejs-button id="increaseBuffer" (click)="increaseBuffer()">Increase Buffer</button>
      <button ejs-button id="decreaseBuffer" (click)="decreaseBuffer()" style="margin-left: 10px;">Decrease Buffer</button>
      <button ejs-button id="resetBuffer" (click)="resetBuffer()" style="margin-left: 10px;">Reset Buffer</button>
    </div>
    <ejs-schedule #scheduleObj width='100%' height='550px' currentView='TimelineWeek' [selectedDate]="selectedDate"
      [timeScale]="timeScale" [eventSettings]="eventSettings"></ejs-schedule>`
})
export class AppComponent {
    @ViewChild('scheduleObj') public scheduleObj!: ScheduleComponent;

    public currentYear: number = new Date().getFullYear();
    public selectedDate: Date = new Date(this.currentYear, 0, 22);
    public timeScale: Object = { enable: true, interval: 60, slotCount: 4 };
    public eventData: Record<string, any>[] = [
        {
            Id: 1,
            Subject: 'Client Kickoff - Acme Corp',
            StartTime: new Date(this.currentYear, 0, 22, 9, 0),
            EndTime: new Date(this.currentYear, 0, 22, 10, 0),
            bufferBefore: 30,  // 30 min to set up conference room and test AV
            bufferAfter: 45,   // 45 min to send follow-up materials
            Location: 'Boardroom A',
            Description: 'Project kickoff meeting with Acme Corp leadership team'
        },
        {
            Id: 2,
            Subject: 'Sales Training Workshop',
            StartTime: new Date(this.currentYear, 0, 22, 11, 0),
            EndTime: new Date(this.currentYear, 0, 22, 13, 0),
            bufferBefore: 45,  // 45 min for room setup and materials distribution
            bufferAfter: 30,   // 30 min for Q&A and feedback collection
            Location: 'Training Room',
            Description: 'Quarterly sales techniques and product knowledge training'
        },
        {
            Id: 3,
            Subject: 'Product Demo - TechStart Inc',
            StartTime: new Date(this.currentYear, 0, 22, 14, 0),
            EndTime: new Date(this.currentYear, 0, 22, 15, 0),
            bufferBefore: 20,  // 20 min to test demo environment
            bufferAfter: 40,   // 40 min to gather requirements
            Location: 'Conference Room B',
            Description: 'Live demo of enterprise SaaS platform for TechStart Inc'
        }
    ];
    public eventSettings: EventSettingsModel = {
        dataSource: this.eventData,
        enableBuffer: true,
        fields: {
            bufferBefore: { name: 'bufferBefore' },
            bufferAfter: { name: 'bufferAfter' }
        }
    };

    public increaseBuffer(): void {
        if (this.scheduleObj.eventsData.length > 0) {
            const event: Record<string, any> = this.scheduleObj.eventsData[0];
            event['bufferBefore'] = (event['bufferBefore'] || 0) + 10;
            event['bufferAfter'] = (event['bufferAfter'] || 0) + 10;
            this.scheduleObj.saveEvent(event);
        }
    }

    public decreaseBuffer(): void {
        if (this.scheduleObj.eventsData.length > 0) {
            const event: Record<string, any> = this.scheduleObj.eventsData[0];
            event['bufferBefore'] = Math.max(0, (event['bufferBefore'] || 0) - 10);
            event['bufferAfter'] = Math.max(0, (event['bufferAfter'] || 0) - 10);
            this.scheduleObj.saveEvent(event);
        }
    }

    public resetBuffer(): void {
        if (this.scheduleObj.eventsData.length > 0) {
            const event: Record<string, any> = this.scheduleObj.eventsData[0];
            event['bufferBefore'] = 30;
            event['bufferAfter'] = 15;
            this.scheduleObj.saveEvent(event);
        }
    }
}
