import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DateTimePickerModule } from '@syncfusion/ej2-ng-calendars';
import { AppComponent } from './app.component';


/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        DateTimePickerModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }