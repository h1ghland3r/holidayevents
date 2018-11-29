import { Injectable } from '@angular/core';
import { Event } from './event';

@Injectable({
    providedIn: 'root'
})

export class HolidayService {

    private events: Event[];
    private nextId: number;

    constructor() {
        let events = this.getEvents();

        if (events.length == 0) {
            this.nextId = 0;
        } else {
            let lastId = events[events.length -1].id;
            this.nextId = lastId + 1;
        }
    }

    public setLocalStorage(events: Event[]): void {
        localStorage.setItem('events', JSON.stringify({ events: events }));
    }

    public getEvents(): Event[] {
        let myLocalStorage = JSON.parse(localStorage.getItem('events'));

        if (myLocalStorage == null) {
            return [];
        } else {
            return myLocalStorage.events;
        }
    }

    public save(name: string, date: string, location: string, note: string): void {
        let event = new Event(this.nextId, name, date, location, note);
        let events = this.getEvents();

        events.push(event);
        this.setLocalStorage(events);
        this.nextId++;
    }

    public remove(id: number): void {
    }

}
