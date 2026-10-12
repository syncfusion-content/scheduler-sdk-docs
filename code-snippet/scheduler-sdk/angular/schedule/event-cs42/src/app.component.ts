import { ScheduleModule, EventSettingsModel, DayService, WeekService, WorkWeekService, DragAndDropService, ResizeService } from '@syncfusion/ej2-angular-schedule';
import { Component } from '@angular/core';

@Component({
    imports: [ScheduleModule],
    standalone: true,
    selector: 'app-root',
    providers: [DayService, WeekService, WorkWeekService, DragAndDropService, ResizeService],
    template: `<ejs-schedule width='100%' height='550px' currentView='Week' [selectedDate]="selectedDate" [timeScale]="timeScale" [eventSettings]="eventSettings"></ejs-schedule>`
})
export class AppComponent {
    public currentYear: number = new Date().getFullYear();
    public selectedDate: Date = new Date(this.currentYear, 0, 22);
    public eventData: Record<string, any>[] = [
        {
            Id: 1,
            Subject: 'Patient Consultation - Sarah Johnson',
            StartTime: new Date(this.currentYear, 0, 21, 10, 0),
            EndTime: new Date(this.currentYear, 0, 21, 11, 30),
            bufferBefore: 30,  // 30 min to review patient history
            bufferAfter: 45,   // 45 min to update medical records
            Location: 'Exam Room 3',
            Description: 'Follow-up consultation for hypertension management'
        },
        {
            Id: 2,
            Subject: 'Surgical Procedure - Knee Arthroscopy',
            StartTime: new Date(this.currentYear, 0, 22, 10, 30),
            EndTime: new Date(this.currentYear, 0, 22, 12, 0),
            bufferBefore: 45,  // 45 min OR setup and anesthesia prep
            bufferAfter: 30,   // 30 min recovery and post-op notes
            Location: 'Operating Room 2',
            Description: 'Outpatient knee arthroscopy for Mr. Robert Chen'
        },
        {
            Id: 3,
            Subject: 'Lunch & Rounds',
            StartTime: new Date(this.currentYear, 0, 22, 12, 30),
            EndTime: new Date(this.currentYear, 0, 22, 13, 30),
            bufferBefore: 0,   // Direct transition
            bufferAfter: 0,    // Direct transition
            Location: 'Hospital Cafeteria',
            Description: 'Working lunch with department heads'
        },
        {
            Id: 4,
            Subject: 'Patient Consultation - Michael Davis',
            StartTime: new Date(this.currentYear, 0, 22, 14, 30),
            EndTime: new Date(this.currentYear, 0, 22, 15, 15),
            bufferBefore: 25,  // 25 min to prep exam room
            bufferAfter: 20,   // 20 min to complete documentation
            Location: 'Exam Room 1',
            Description: 'New patient intake and physical examination'
        },
        {
            Id: 5,
            Subject: 'Telehealth Consultation - Emma Wilson',
            StartTime: new Date(this.currentYear, 0, 19, 11, 0),
            EndTime: new Date(this.currentYear, 0, 19, 16, 30),
            bufferBefore: 35,   // 35 min to test video connection and prepare
            bufferAfter: 20,   // 20 min to send e-prescription and notes
            Location: 'Virtual - Zoom',
            Description: 'Virtual follow-up for diabetes management'
        }
    ];
    public timeScale: Object = { enable: true, interval: 60, slotCount: 2 };
    public eventSettings: EventSettingsModel = {
        dataSource: this.eventData,
        enableBuffer: true,
        fields: {
            bufferBefore: { name: 'bufferBefore' },
            bufferAfter: { name: 'bufferAfter' }
        }
    };

}
