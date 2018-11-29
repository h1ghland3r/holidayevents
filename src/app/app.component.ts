import { Component } from '@angular/core';
import { Event } from './shared/event';
import { HolidayService } from './shared/holiday.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'holidayevents-app';

    constructor(private holidayService: HolidayService) { }
}
