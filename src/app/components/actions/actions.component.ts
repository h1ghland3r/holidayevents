import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../shared/event';
import { HolidayService } from '../../shared/holiday.service';

@Component({
    selector: 'app-actions',
    templateUrl: './actions.component.html',
    styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

    constructor(private holidayService: HolidayService) { }

    @Input()
    private event: Event;

    ngOnInit() {
    }

    private remove(): void {
        this.holidayService.remove(this.event.id);
    }

}
