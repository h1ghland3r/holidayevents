export class Event {
    id: number;
    name: string;
    date: string;
    office: string;
    note: string;

    constructor(id: number, name: string, date: string, office: string, note: string) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.office = office;
        this.note = note;
    }
}
