import { Doctor } from "../entities/Doctor";
import { Patient } from "../entities/Patient";
import { Booking } from "./Booking";

export class OnlineBooking extends Booking{
    private meetingLink:string;

    constructor(patient:Patient, doctor:Doctor,date:Date,meetingLink:string){
        super(patient,doctor,date);
        this.meetingLink=meetingLink
    }
    schedule(): string {
        return `${super.schedule()} join with: ${this.meetingLink}}`
    }
}