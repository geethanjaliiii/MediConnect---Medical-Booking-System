import { OnlineBooking } from "./bookings/OnlineBooking";
import { Doctor } from "./entities/Doctor";
import { Patient } from "./entities/Patient";
import { BookingService } from "./services/BookingService";
import { Address } from "./value-objects/Address";
import { Specialization } from "./value-objects/Specialization";

//initialize doctors and patients
const doctor =new Doctor(1,'Dr> Geethanjali S','geetha@gmail.com',new Specialization('Cardiology'));
const patient=new Patient(2,'Jonath','jona@gmail.com',['High Blood Pressure']);
const patient2=new Patient(3,'Amal','amal@gmail.com',['Migrane'])
const doctor2=new Doctor(4,'Aleena','Aleena@gmail.com',new Specialization('General Medicine'))
const bookingService=new BookingService()

const address=new Address('New York',"NY")
const inPersonBooking =bookingService.createInPersonBooking(patient,doctor,new Date(),address)
console.log(inPersonBooking.schedule());
const onlineBooking =new OnlineBooking(patient2,doctor2,new Date(),'link:abcsdfghj')
// console.log(onlineBooking.schedule());
