import { Injectable } from '@angular/core';
import { Event } from './event';

@Injectable({
    providedIn: 'root'
})

export class HolidayService {

    private events: Event[];
    private nextId: number;

    constructor() { }

    public getEvents(): Event[] {
        return;
    }

    public add(name: string): void {

    }

    public remove(id: number): void {

    }

}
