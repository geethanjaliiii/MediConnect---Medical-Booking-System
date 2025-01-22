import { InPersonBooking } from "../bookings/InPersonBooking";
import { OnlineBooking } from "../bookings/OnlineBooking";
import { Doctor } from "../entities/Doctor";
import { Patient } from "../entities/Patient";
import { Address } from "../value-objects/Address";

export class BookingService{
    createInPersonBooking(patient:Patient,doctor:Doctor,date:Date,address:Address){
        return new InPersonBooking(patient,doctor,date,address)
    }
    createIOnlineBooking(patient:Patient,doctor:Doctor,date:Date,meetingLink:string){
        return new OnlineBooking(patient,doctor,date,meetingLink)
    }
}