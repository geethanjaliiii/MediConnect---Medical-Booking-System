import { Doctor } from "../entities/Doctor";
import { Patient } from "../entities/Patient";
import { Address } from "../value-objects/Address";
import { Booking } from "./Booking";

export class InPersonBooking extends Booking{
    private address:Address;
    constructor(patient:Patient,doctor:Doctor,date:Date,address:Address){
       super(patient,doctor,date)
        this.address=address
    }
    schedule(): string {
        return `${super.schedule()} at address : ${this.address.getAddress()}`
    }
}