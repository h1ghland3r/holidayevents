export class Event {
    id: number;
    name: string;
    date: string;
    location: string;
    note: string;

    constructor(id: number, name: string, date: string, location: string, note: string) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.location = location;
        this.note = note;
    }
}
