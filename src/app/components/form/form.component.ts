import { Component, OnInit } from '@angular/core';
import { HolidayService } from '../../shared/holiday.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    private name: string;
    private date: string;
    private location: string;
    private note: string;

    constructor(private holidayService: HolidayService) {
        this.name = '';
        this.date = '';
        this.location = '';
        this.note = '';
    }

    ngOnInit() {
    }

    private save(): void {
        this.holidayService.add(this.name);
        this.holidayService.add(this.date);
        this.holidayService.add(this.location);
        this.holidayService.add(this.note);

        // then clear the values after submit
        this.name = '';
        this.date = '';
        this.location = '';
        this.note = '';
    }
}
