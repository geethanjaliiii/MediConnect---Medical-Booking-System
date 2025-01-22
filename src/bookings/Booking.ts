import { Doctor } from "../entities/Doctor";
import { Patient } from "../entities/Patient";
import { IBooking } from "./IBooking";

export class Booking implements IBooking{
    protected patient:Patient;
    protected doctor:Doctor;
    protected date:Date;
    constructor(patient:Patient,doctor:Doctor,date:Date){
       this.patient=patient;
       this.doctor=doctor;
       this.date=date; 
    }
    schedule(): string {
        return `Booking schedulede on ${this.date.toDateString()} for patient: ${this.patient.getDetails()} 
        with Doctor:${this.doctor.getDetails()}, `
    }
}